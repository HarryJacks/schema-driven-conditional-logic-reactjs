import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { generateFieldsFromSchema } from '../utils/generateFields';

const mapStateToProps = state => {
  let newState = {};

  // set Form Values to props
  if (state.form.MyForm) {
    if (state.form.MyForm.values) {
      newState.Values = {};
      Object.keys(state.form.MyForm.values).forEach(function (key) {
        newState.Values[key] = state.form.MyForm.values[key] // Field values
      });
    }
  }
  return newState;
}

class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      schema: {
        fields: [
          {
            "name": "field1",
            "label": "First name or Last name",
            "options": ["First name", "Last name"],
            "dependantOn": null
          },
          {
            "name": "field2",
            "label": "First Name",
            "options": ["1", "2"],
            "dependantOn": "field1",
            "triggerValue": "First name"
          },
          {
            "name": "field3",
            "label": "Last name",
            "options": ["1", "2"],
            "dependantOn": "field1",
            "triggerValue": "Last name"
          },
          {
            "name": "field4",
            "label": "Dependant on First Name being 1",
            "options": ["1", "2"],
            "dependantOn": "field2",
            "triggerValue": "1"
          },
          {
            "name": "field5",
            "label": "Dependant on Last name being 2",
            "options": ["1", "2"],
            "dependantOn": "field3",
            "triggerValue": "2"
          }
        ]
      }
    }
  }

  render() {
    return <div>

      <form name="MyForm" className="app-form">

        { this.state.schema ? generateFieldsFromSchema(this.state.schema, this.props.Values) : "no schema" }

      </form>

    </div>

  }
}

MyForm = reduxForm({
  form: 'MyForm',
  touchOnBlur: false
})(MyForm);

export default connect(mapStateToProps)(MyForm);