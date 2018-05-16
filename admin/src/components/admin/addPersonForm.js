import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'
import ErrorField from '../common/error-field'

class AddPersonForm extends Component {
    render() {

        return (
            <form onSubmit={this.props.handleSubmit}>
                <h2>Add Person</h2>
                <div>
                    <Field
                        name="firstName"
                        component={ErrorField}
                        label="firstName"
                    />
                </div>
                <div>
                    <Field
                        name="lastName"
                        component={ErrorField}
                        label="lastName"
                    />
                </div>
                <div>
                    <Field
                        name="email"
                        component={ErrorField}
                        label="email"
                    />
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'addPerson'
})(AddPersonForm)

