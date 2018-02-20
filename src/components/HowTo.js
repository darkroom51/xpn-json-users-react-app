import React, {Component} from 'react';
import {Modal, Label} from 'react-bootstrap'


class HowTo extends Component {
    render(){
        return(
            <Modal show={this.props.showModal} onHide={this.props.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Quick HOW-TO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>This is React+Redux JSON placeholder mock-up app.</p>
                    <p>To view all CRUD actions you need to open DevTool.</p>
                    <p>
                        For each REST query you should see following response in DevTools console:
                    </p>
                    <ul>
                        <li>GET: fetching 'users' from DB to <Label>All users</Label> view; no info in console</li>
                        <li>POST: add new user in <Label>Add new user</Label> view and correct response should be object with id: 11</li>
                        <li>PATCH: update chosen user in <Label>Update user</Label> view and correct response should be object with id corresponding to record you're updating</li>
                        <li>DELETE: delete chosen user in <Label>User details</Label> view and correct response should be an empty object</li>
                    </ul>
                </Modal.Body>
            </Modal>
        )
    }
}

export default HowTo;