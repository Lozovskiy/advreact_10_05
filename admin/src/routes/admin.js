import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddPersonForm from '../components/admin/addPersonForm'
import { addPerson } from '../ducks/admin'

class AdminPage extends Component {
    static propTypes = {

    }

    onPersonSubmit = (data) => this.props.addPerson(data)

    render() {

        return (
            <div>
                <h1>Admin Page</h1>
                <AddPersonForm onSubmit={this.onPersonSubmit}/>
            </div>
        )
    }
}

export default connect(null, {addPerson})(AdminPage)

