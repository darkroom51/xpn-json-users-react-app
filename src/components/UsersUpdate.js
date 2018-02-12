import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {fetchUsers} from "../state/users";


class UsersUpdate extends Component {
    state = {
        uid: this.props.match.params.uid,
        msg: ''
    }


    componentWillMount() {
        this.props.getUsersData();

        this.props.usersData
        &&
        this.props.usersData
            .filter(el => +this.state.uid === el.id)
            .map(el => (
                this.setState({
                    id: el.id,
                    name: el.name,
                    username: el.username,
                    email: el.email,
                    phone: el.phone,
                    website: el.website
                })
            ))
    }

    updateHandler = (id) => {
        const userObj = {
            id: this.state.name,
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            website: this.state.website
        }
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(userObj),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(() => this.setState({msg: 'User has been updated successfully'}))
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
                    <p>id: <input type="text" value={this.state.id} disabled={true} readOnly={true}/></p>
                    <p>name: <input type="text" onChange={this.handleNameChange} value={this.state.name}/></p>
                    <p>username: <input type="text" onChange={this.handleUsernameChange} value={this.state.username}/></p>
                    <p>email: <input type="text" onChange={this.handleEmailChange} value={this.state.email}/></p>
                    <p>phone: <input type="text" onChange={this.handlePhoneChange} value={this.state.phone}/></p>
                    <p>website: <input type="text" onChange={this.handleWebsiteChange} value={this.state.website}/></p>
                </div>

                <div>
                    <button onClick={() => this.updateHandler(this.state.uid)}>Update User</button>
                </div>
                <div>
                    <Link to={`/users-details/${this.state.uid}`}>
                        <button>Back to user details</button>
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
)(UsersUpdate)