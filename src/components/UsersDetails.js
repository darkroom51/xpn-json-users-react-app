import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {fetchUsers} from "../state/users";

class UsersDetails extends Component {
    state = {
        uid : this.props.match.params.uid
    }

    componentWillMount() {
        this.props.getUsersData()
    }

    render() {
        return (
            <div>
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
                <div>
                    <Link to={`/`}>
                        <button>Back to users list</button>
                    </Link>
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
)(UsersDetails)