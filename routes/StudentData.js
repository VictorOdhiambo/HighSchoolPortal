const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let model = require('../models/StudentModel');


process.env.SECRET_KEY = "secret"

router.use(cors());

//TODO: Register student/staff
router.post('/register', (req, res) => {
    const userData = req.body
    model.User.findOne({
        username: req.body.username
    }).then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                req.body.password = hash
                model.User.create(userData)
                    .then(user => {
                        res.json({success: 'User account created successfully.'})
                        console.log({ status: user.username + " registered!" })
                    })
                    .catch(err => res.send('Error: ' + err))
            })
        } else {
            console.log('user exists')
        }
    })
})

//TODO: Login student/staff
router.post('/login', (req, res) => {
    model.User.findOne({
        username: req.body.username
    }).then(user => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, same) => {
                if (same) {
                    var payload = {
                        _id: user._id,
                        form: user.form,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                    }

                    const token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 3000
                    })
                    res.send(token)
                } else {
                    res.send(err)
                }
            })
        }
    }).catch(err => res.send('Error accessing the db: ' + err))
})
//TODO: Get the user data 
router.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

    model.User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send('User does not exist')
            }
        })
        .catch(err => res.send('Error: ' + err))
})
//TODO: Get all students
router.get('/student', (req, res) => {
    model.Student.find({},
        function (err, students) {
            if (err) {
                res.send(err);
            } else {
                res.json(students);
            }
        });
})

//TODO: Add a student
router.post('/add', (req, res) => {
    var newStudent = req.body;
    model.Student.create(newStudent, function (err, student) {
        if (err) {
            console.log('POST ERROR: ', err)
        } else {
            res.json({sucess: 'Student added successfully.'})
        }
    })
    console.log('Data fetched..', req.body)
})

//TODO: Upload assignment
router.post('/uploadassignment', (req, res) => {
    const document = req.body;
    model.Document.create(document)
        .then(res => console.log('Successfully saved the document'))
        .catch(err => console.log('Error saving the document: ' + err))
})

//TODO: Fee Statement
router.post('/feeStatement', (req, res) => {
    const studentData = req.body;
    model.MiniStatement.create(studentData)
        .then(user => res.send(user))
        .catch(err => res.send(err))
})

//TODO: Get Fee balance
router.get('/feeBalance', (req, res) => {
    const studentData = req.query;
    model.Student.findOne({adm_no: studentData.regNo}, (err, data) => {
        if(!err)
        res.json(data)
    })
});

//TODO: Update fee balance
router.put('/updatefeebalance', (req, res) => {
    const  studentData = req.body;
    const data = {};
    data.fee_status = studentData.fee_status;

    model.Student.updateOne({adm_no: studentData.adm_no}, data, (err, data) => {
        if(!err)
        res.json(data)
    })
})

//TODO: Get statement
router.get('/getStatement', (req, res) => {
    const reg = req.query;
    model.MiniStatement.find({ regNo: reg.regNo }, (err, statement) => {
        if (!err) {
            res.json(statement)
        } else {
            console.log(err)
        }
    })
})

//TODO: Fetch student Mini-Statement
router.post('/getMiniStatement', (req, res) => {
    const studentReg = req.body.regNo;
    model.MiniStatement.find({ regNo: studentReg })
        .then(statement => {
            if (statement) {
                const payload = {
                    date: statement.date,
                    regNo: statement.regNo,
                    receiptNo: statement.receiptNo,
                    amount: statement.amount
                }
                const token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 3000
                })
                res.send(token)
            }
        })
})

//TODO: Retrieve assignments
router.get('/retrieveassignments', (req, res) => {
    const conditions = req.query;

    model.Document.find({form: conditions.form, subject: conditions.subject}, (err, result) => {
        if(!err)
        res.json(result)
    })
})

//TODO: Submit assignment
router.post('/submitassignment', (req, res) => {
    const assignment = req.body;

    model.SubmitAssignment.create(assignment)
    .then(success => res.json(success))
    .catch(err => console.log(err))
})

//TODO: fetch submitted assignment
router.get('/fetchsubmittedassignment', (req, res) => {
    const conditions = req.query;

    model.SubmitAssignment.find({form: conditions.form, subject: conditions.subject}, (err, assignment) => {
        if(!err)
        res.json(assignment)
        else
        console.log(err)
    })
})
module.exports = router;