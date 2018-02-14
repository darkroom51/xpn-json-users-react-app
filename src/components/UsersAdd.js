import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Panel, Alert, ControlLabel, FormControl} from 'react-bootstrap';

import {connect} from 'react-redux'
import {fetchUsers} from "../state/users";


class UsersAdd extends Component {
    state = {
        msg: '',

        name: null,
        username: null,
        email: null,
        phone: null,
        website: null
    }


    componentWillMount() {
    }

    addHandler = (id) => {
        const userObj = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            website: this.state.website
        }
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(() => this.setState({msg: 'User has been added successfully'}))
    }

    handleNameChange = (e) => this.setState({name: e.target.value})
    handleUsernameChange = (e) => this.setState({username: e.target.value})
    handleEmailChange = (e) => this.setState({email: e.target.value})
    handlePhoneChange = (e) => this.setState({phone: e.target.value})
    handleWebsiteChange = (e) => this.setState({website: e.target.value})


    render() {
        return (
            <Panel>
                <Panel.Heading>Add new user</Panel.Heading>
                <Panel.Body>
                    {this.state.msg ?
                        <Alert>{this.state.msg}</Alert>
                        :
                        null
                    }
                    <div>
                        <ControlLabel>Id</ControlLabel>
                        <FormControl type="text" value={"will be generated automatically"} disabled={true} readOnly={true} />
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" onChange={this.handleNameChange} />
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" onChange={this.handleUsernameChange} />
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="text" onChange={this.handleEmailChange} />
                        <ControlLabel>Phone</ControlLabel>
                        <FormControl type="text" onChange={this.handlePhoneChange} />
                        <ControlLabel>Website</ControlLabel>
                        <FormControl type="text" onChange={this.handleWebsiteChange} />
                    </div>
                </Panel.Body>
                <Panel.Footer>
                    <Link to={`/`}>
                        <Button>Back to users list</Button>
                    </Link>
                    <Button bsStyle="primary" onClick={() => this.addHandler()}>Add User</Button>
                </Panel.Footer>
            </Panel>

        )
    }
}

const mapStateToProps = state => ({
    usersData: state.users.usersData
})

const mapDispatchToProps = dispatch => ({
    getUsersData: () => dispatch(fetchUsers())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersAdd)