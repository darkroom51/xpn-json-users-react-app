import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, ListGroup, ListGroupItem, Panel} from 'react-bootstrap'

import {connect} from 'react-redux'
import {fetchUsers} from "../state/users";


class UsersList extends Component {
    state = {}


    componentDidMount() {
        this.props.getUsersData()
    }


    render() {
        return (
            <Panel>
                <Panel.Heading>All users</Panel.Heading>
                <Panel.Body>
                    <ListGroup>
                        {
                            this.props.usersData
                            &&
                            this.props.usersData.map((el) => (
                                //<Link to={`/users-details/${el.id}`}  style={{textDecoration: 'none'}}>
                                    <ListGroupItem href={"#"} key={el.id} onClick={() => {this.props.history.push(`/users-details/${el.id}`)}}>
                                        id: {el.id} &middot; {el.name}
                                    </ListGroupItem>
                                //</Link>
                            ))
                        }
                    </ListGroup>
                </Panel.Body>
                <Panel.Footer>
                    <Link to={`/users-add/`}>
                        <Button bsStyle="primary">Add new user</Button>
                    </Link>
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
)(UsersList)