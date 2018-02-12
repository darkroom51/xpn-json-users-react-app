import React, {Component} from 'react';
import {Link} from 'react-router-dom'

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
            <div>

                <h2>Update User</h2>
                <div>
                    <p>id: <span style={{fontStyle: 'italic'}}>will be generated automatically</span></p>
                    <p>name: <input type="text" onChange={this.handleNameChange}/></p>
                    <p>username: <input type="text" onChange={this.handleUsernameChange}/></p>
                    <p>email: <input type="text" onChange={this.handleEmailChange}/></p>
                    <p>phone: <input type="text" onChange={this.handlePhoneChange}/></p>
                    <p>website: <input type="text" onChange={this.handleWebsiteChange}/></p>
                </div>

                <div>
                    <button onClick={() => this.addHandler()}>Add User</button>
                </div>
                <div>
                    <Link to={`/`}>
                        <button>Back to users list</button>
                    </Link>
                </div>
                <div>
                    <h3>{this.state.msg}</h3>
                </div>
            </div>

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