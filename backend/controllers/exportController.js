const User = require("../models/userModel");
const Company = require("../models/companyModel");
const ErrorHandler = require("../utils/errorhandler");
let mongoose = require('mongoose');
const Export = require('../services/ExportService');
let zip = require('express-zip');
const catchAsyncErrors = require("../middleware/catchAsyncErrors"); 

exports.resumes = catchAsyncErrors(async (req, res, next) => {
    // ToDo: Check if work without it
    const company = await Company.findById(req.params.company_id);
    if(!company) {
        return next(new ErrorHandler('Incorrect Company ID. Please try again.', 404));
    }
    const appliedList = await Company.aggregate([
        {
            $match : {
                _id : new mongoose.Types.ObjectId(req.params.company_id)
            }
        },
        {
            $lookup: {
                from : "users",
                localField: "candidates.college_id",
                foreignField : "college_id",
                as : "registered_candidates"
            }
        },
        {
            $project : {
                "company_name" : true,
                "registered_candidates.resume_url" :true,
                "registered_candidates.name" : true,
                "registered_candidates.college_id" : true,
            }
        }
    ]);
    res.zip(Export.resumes(appliedList[0].registered_candidates), 'resume-zip-files.zip', err => { err && console.log(err) });
})

