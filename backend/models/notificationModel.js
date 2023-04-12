var mongoose = require('mongoose');

var notificationSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    sender : {
        type : String,
        required : true
    },
    receiver : {
        type : String,
        required : true
    },
    read : {
        seen : {
            type : Boolean,
            required : true,
            default : false
        },
        seen_at : {
            type : Date
        }
    },
    reference_company_id : {
        type : String,
        required : true
    },
    timestamp : {
        type : Date,
        required : true,
        default : new Date()
    }
});

module.exports = mongoose.model('Notification',notificationSchema);
