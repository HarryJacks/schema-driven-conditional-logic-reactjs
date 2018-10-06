import React from 'react';
import { Field } from 'redux-form';
import { Select } from '../components/Select';

export const generateFieldsFromSchema = (schema, values) => {

  return schema && schema.fields && schema.fields.map((item, index) => {

    return <div>
      <Field item={item} index={index} name={item.name} component={Select} values={values} />
    </div>

  }

  )
}