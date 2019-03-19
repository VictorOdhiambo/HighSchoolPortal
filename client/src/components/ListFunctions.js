import axios from 'axios';
import 'node-fetch';

//TODO: Register users
export const registerUser = newUser => {
    return axios.post("api/register", {
        username: newUser.username,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        form: newUser.form,
        password: newUser.password
    })
        .then(res => console.log("User registered!...!"))
        .catch(err => console.log('Sign up error: ' + err))
}
//TODO: Login user
export const loginUser = user => {
    return axios.post("api/login", {
        username: user.username,
        password: user.password
    }).then(res => {
        localStorage.setItem("usertoken", res.data)
        return res.data
        // console.log(res.data)
    })
        .catch(err => console.log('Login Error: ' + err))
}
export const getRequest = () => {
    return axios.get("api/student")
        .then(res => res.json())
        .then(data => {
            console.log(data) // Prints result from `res.json()` in getRequest
        })
        .catch(error => console.error('Get Request Error: ', error))
}

export const getProfile = () => {
    return axios.get("api/profile")
        .then(res => res.json)
        .then(data => console.log(data))
        .catch(err => console.log('Profile err: ' + err))
}

export const postRequest = (student) => {
    return fetch("/api/add", {
        credentials: 'same-origin', // 'include', default: 'omit'
        method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
        body: JSON.stringify(student), // Coordinate the body type with 'Content-Type'
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    })
        .then(res => res.json())
        .catch(err => console.log('Post Request Error:', err));
}

//TODO: handle file uploads and downloads
export const uploadAssignment = (document) => {
    return axios.post('api/uploadassignment', {
        form: document.form,
        subject: document.subject,
        file: document.file
    })
        .then(res => res.data)
        .catch(err => console.log('Error submitting the document ' + err))
}

//TODO: fee statement
export const updateFeeStatement = (StudentDetails) => {
    return axios.post('api/feeStatement', {
        regNo: StudentDetails.regNo,
        receiptNo: StudentDetails.receiptNo,
        amount: StudentDetails.amount
    })
        .then(res => res.data)
        .catch(err => console.log('Failed to update Fee mini-statement'))
}

//TODO: Getfee balance
export const getFeeBalance = (StudentReg) => {
    return axios('api/feeBalance', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        params: StudentReg
    }).then(amount => {
        return amount
    }).catch(err => {return err})
}

//TODO: Update fee balance
export const updateFeeBalance = (StudentData) => {
    return axios.put('api/updatefeebalance', StudentData)
    .then(data => {return data})
    .catch(err => {return err})
}

//TODO: Fetch MiniStatement
export const getMiniStatement = (StudentReg) => {
    return axios('api/getStatement', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        params: StudentReg
    }).then(statement => {
        return statement
    }).catch(err => console.log(err))
}

//TODO: Retrieve assignments
export const getAssignment = (assignment) => {
    return axios('api/retrieveassignments',{
        method: 'GET',
        headers: {'content-type' : 'application/json'},
        params: assignment
    })
    .then(result => {
        return result
    })
    .catch(err => {
        console.log(err)
    })
}

//TODO: Submit assignment
export const submitAssignment = (assignment) => {
    return axios.post('api/submitassignment', {
        form: assignment.form,
        subject: assignment.subject,
        file: assignment.file
    })
    .then(res => {return res.data})
    .catch(err => console.log(err))
}

//TODO: Fetch submitted assignment
export const getSubmittedAssignment = (conditions) => {
    return axios('api/fetchsubmittedassignment',{
        method: 'GET',
        headers: {'content-type': 'application/json'},
        params: conditions
    })
    .then(assignments => {return assignments})
    .catch(err => console.log(err))
}