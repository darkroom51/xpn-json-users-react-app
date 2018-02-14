import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Button, Panel, Alert} from 'react-bootstrap'

import {connect} from 'react-redux'
import {fetchUsers} from "../state/users";


class UsersDetails extends Component {
    state = {
        uid: this.props.match.params.uid,
        msg: ''
    }


    componentWillMount() {
        this.props.getUsersData()
    }

    deleteHandler = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
            {method: 'DELETE'})
            .then(response => response.json())
            .then(json => console.log(json))
            .then(() => this.setState({msg: 'User has been deleted successfully'}))
    }


    render() {
        return (
            <Panel>
                <Panel.Heading>User details</Panel.Heading>
                <Panel.Body>
                    {this.state.msg ?
                        <Alert>{this.state.msg}</Alert>
                        :
                        null
                    }
                    {
                        this.props.usersData
                        &&
                        this.props.usersData
                            .filter(el => +this.state.uid === el.id)
                            .map(el => (
                                <div key={el.id}>
                                    <h2>{el.name}</h2>
                                    <div>
                                        <p>id: {el.id}</p>
                                        <p>username: {el.username}</p>
                                        <p>email: {el.email}</p>
                                        <p>phone: {el.phone}</p>
                                        <p>website: {el.website}</p>
                                        <p>company: {el.company.name}</p>
                                    </div>
                                </div>
                            ))
                    }
                </Panel.Body>
                <Panel.Footer>
                    <Link to={`/`}>
                        <Button>Back to users list</Button>
                    </Link>
                    <Link to={`/users-update/${this.state.uid}`}>
                        <Button bsStyle="primary">Edit User</Button>
                    </Link>
                    <Button bsStyle="danger" onClick={() => this.deleteHandler(this.state.uid)}>Delete User</Button>
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
)(UsersDetails)