import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import {getSubmittedAssignment} from '../ListFunctions'
import ListData from './SubmittedListData'


class _ViewSubmittedAssignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            show: false,
            assignments: []
        }
    }

    listRow = () => {
        return this.state.assignments.map((object, i) => {
            return <ListData obj={object} key={i} />
        })
    }

    //TODO: Fetch submitted assignments
    fetchSubmittedAssignments = () => {
        const studentData = {
            form: this.selectClass.value,
            subject: this.selectSubject.value
        }

        getSubmittedAssignment(studentData)
        .then(assignment => {
            console.log(assignment.data)
            this.setState({
                assignments: assignment.data
            })
        })
        .catch(err => console.log(err))

        console.log(this.selectSubject.value)
    }
    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group" style={{ margin: '5px' }}>
                        <select className="form-control" ref={select => this.selectClass = select} name="selectClass">
                            <option>---select class---</option>
                            <option value="formOne">Form One</option>
                            <option value="formTwo">Form Two</option>
                            <option value="formThree">Form Three</option>
                            <option value="formFour">Form Four</option>
                        </select>
                    </div>
                    <div className="form-group" style={{ margin: '5px' }} >
                        <select className="form-control" ref={select => this.selectSubject = select} name="subjectSubject">
                            <option>---select subject---</option>
                            <option value="english">English</option>
                            <option value="mathematics">Mathematics</option>
                            <option value="kiswahili">Kiswahili</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="biology">Biology</option>
                            <option value="physics">Physics</option>
                            <option value="bst">Business Studies</option>
                            <option value="history">History</option>
                        </select>
                    </div>
                    <div className="form-group" >
                        <Button style={{ float: 'right', margin: '10px' }} variant="outline-primary" onClick={this.fetchSubmittedAssignments}>
                            Show
                    </Button>
                    </div>
                </form>
                <hr />

                <p><strong>Submitted Assignments: </strong></p>
                    {/* Display fetched assignments */}
                <div >
                    <ul style={{
                        listStyleType: 'none',
                        padding: '15px',
                        position: 'relative',
                        margin: 'auto'
                    }}>
                        {this.listRow()}
                    </ul>
                </div>
                <hr />
                <div>

                </div>
            </div>
        );
    }
}
export default _ViewSubmittedAssignment;