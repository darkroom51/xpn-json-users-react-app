import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {fetchUsers} from "../state/users";

class UsersAdd extends Component {
    state = {}

    componentWillMount() {
        this.props.getUsersData()
    }



    render() {
        return (
            <div>
                UsersAdd
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