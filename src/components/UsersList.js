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
                <div>
                    {this.props.usersData ?
                        this.props.usersData.name.first
                        :
                        'Nie załadowano imienia!'
                    }

                    {this.props.usersData ?
                        this.props.usersData.name.last
                        :
                        'Nie załadowano nazwiska!'
                    }
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
)(UsersList)