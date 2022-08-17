import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import propTypes from 'prop-types';
import { Button } from 'components/common/ButtonStyled';
import {
  ContactFormStyled,
  ContactLabel,
  ContactField,
} from './ContactFormStyled';

const initialValues = {
  name: '',
    number: '',
}
const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required('Name is required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export default function ContactForm () {
  

  const handleSubmit = (values, { resetForm }) => {
      const { name, number } = values;
    this.props.onSubmit(name, number);
    resetForm();
  };

 
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <ContactFormStyled>
          <ContactLabel htmlFor="name">
            Name
            <ContactField type="text" name="name" />
            <ErrorMessage name="name" />
          </ContactLabel>

          <ContactLabel htmlFor="number">
            Number
            <ContactField type="tel" name="number" />
            <ErrorMessage name="number" />
          </ContactLabel>
          <Button type="submit">Add contact</Button>
        </ContactFormStyled>
      </Formik>
    );
  }




ContactForm.propTypes = {
  initialValues: propTypes.object,
  onSubmit: propTypes.func,
};
