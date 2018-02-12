import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {fetchUsers} from "../state/users";

class UsersList extends Component {
    state = {}

    componentWillMount() {
        this.props.getUsersData()
    }

    render() {
        return (
            <div>
                {
                    this.props.usersData
                    &&
                    this.props.usersData.map((el) => (
                        <Link to={`/users-details/${el.id}`}  key={el.id}>
                            <div style={{margin: '10px', padding: '10px'}}>
                                {el.name} [id: {el.id}]
                            </div>
                        </Link>
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