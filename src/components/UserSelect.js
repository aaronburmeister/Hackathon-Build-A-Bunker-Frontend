import React, { Component } from 'react';

class UserSelect extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    addUserOptions = () => this.state.users.map(user => {
        return <option value={user.username}>{user.username}</option>
    })

    render() {
        return(
            <form>
                <select name="user" id="user-select">
                    {this.addUserOptions()}
                </select>
            </form>
        )
    }
}

export default UserSelect