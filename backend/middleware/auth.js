const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { ConnectionStates } = require("mongoose");

exports.isAuthenticatedUser = catchAsyncErrors(async(req, res, next) => {
    const {token} = req.cookies;
    if(!token) {
        return next(new ErrorHandler("Please Login to access this resource", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
});

// This will check if user is admin or student coordinator
exports.ensureOfficialPlacementTeam = (req, res, next) => {
    if(!(req.user.permission === 'admin' || req.user.permission === 'spc')) {
        return next(new ErrorHandler('Insufficient Permission. Only Official Placement Team is allowed.', 403));
    }
    next();
};

// This will check if user is admin
exports.ensureAdmin = (req, res, next) => {
    if(!(req.user.permission === 'admin')) {
        return next(new ErrorHandler('Insufficient Permission. Only T&P Cell is allowed.', 403));
    }
    next();
};

// This will check if user is a student
exports.ensureStudent = (req, res, next) => {
    if(!(req.user.permission === 'student' || req.user.permission === 'spc')) {
        return next(new ErrorHandler('Insufficient Permission. Only student is allowed.', 403));
    }
    next();
};

// This will check if user is a student and that too with complete profile (To apply in a company)
exports.ensureStudentWithResume = (req, res, next) => {
    if(!(req.user.permission === 'student' || req.user.permission === 'spc')) {
        return next(new ErrorHandler('Insufficient Permission. Only student is allowed.', 403));
    } else {
        if(req.user.resume_url) {
            next();
        } else {
            return next(new ErrorHandler('Please upload your resume to continue.', 403));
        }
    }
}

exports.authorizePermissions = (...permissions) => {
    return (req, res, next) => {
        if(!permissions.includes(req.user.permission)) {
            next();
        }
        return next(new ErrorHandler(`Permission ${req.user.permission} is not allowed to access this resource.`, 403));
    };
};
