const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//TODO: Get the adm and update
const admNumber = new Schema({
    adm_number: {
        type: Number
    }
},{collection: 'admission_number'})

//Add student to database
const studentModel = new Schema({
    adm_no: String,
    name: String,
    form: String,
    fee_status: String
},
    { collection: 'students' }
);

//Register and Login user
const user = new Schema({
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    form: {
        type: String
    },
    password: {
        type: String
    }
},
    { collection: 'auth' }

);

//Upload documents to database
const document = new Schema({
    form: {
        type: String
    },
    subject: {
        type: String
    },
    file: {
        type: String
    }
},{collection: 'assignments'});


//Submit assignment 
const assignment = new Schema({
    form: {
        type: String
    },
    subject: {
        type: String
    },
    file: {
        type: String
    }
},{collection: 'submitted_assignments'});

//Fee status and Mini-statement
const miniStatement = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    regNo: {
        type: String
    },
    receiptNo: {
        type: String
    },
    amount: {
        type: String
    }
}, {
    collection: 'fee_ministatement'
})

//Fee status check and update
const feeStatus = new Schema({
    regNo: {
        type: String
    },
    amount: {
        type: String
    }
},{collection: 'fee_status'})

const adm = mongoose.model('AdmissionNumber', admNumber);

const checkFee = mongoose.model('FeeStatus', feeStatus);

const Statement = mongoose.model('Mini-statement', miniStatement);

const Assignment = mongoose.model('Document', document);

const Student = mongoose.model('Student', studentModel);

const User = mongoose.model('User', user);

const SubmitAssignment = mongoose.model('SubmitAssignment', assignment)

module.exports = {
    Student: Student,
    User: User,
    Document: Assignment,
    MiniStatement: Statement,
    FeeStatus: checkFee,
    AdmissionNumber: adm,
    SubmitAssignment: SubmitAssignment
};
