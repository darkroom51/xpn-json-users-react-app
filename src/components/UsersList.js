import React, {Component} from 'react';

import {connect} from 'react-redux'
import {fetchUsers} from "../state/users";

class UsersList extends Component {
    state={}

    componentWillMount() {
        this.props.getUsersData()
    }

    render() {
        return (
            <div>
                {
                    this.props.usersData
                    &&
                    this.props.usersData.map((el)=>(
                        <div key={el.id}>
                            {el.id}. {el.name} [nick: {el.username}]
                        </div>
                    ))
                }
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
)(UsersList)