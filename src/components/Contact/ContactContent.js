import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import Input from '@/components/Base/Input';
import {
  initialValuesFormContact,
  validationSchemaFormContact,
} from '@/services/Contact';
import { SEND_EMAIL_FAILED, SEND_EMAIL_SUCCESS } from '@/constants/constants';

export default function ContactContent() {
  const [statusSubmit, setStatusSubmit] = useState(true);
  const [messageAfterSubmit, setMessageAfterSubmit] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    setStatusSubmit(true);

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    let firstName = values.name;

    if (firstName.indexOf(' ') >= 0) {
      firstName = values.name.split(' ').slice(0, -1).join(' ');
    }

    if (response.ok) {
      setMessageAfterSubmit(SEND_EMAIL_SUCCESS);
    } else {
      setStatusSubmit(false);
      setMessageAfterSubmit(SEND_EMAIL_FAILED.replace('@firstName', firstName));
    }

    resetForm();
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
          <p>
            Want to get in touch with me? Fill out the form below to send me a
            message and I will try to get back to you within 24 hours!
          </p>
          <Formik
            initialValues={initialValuesFormContact}
            onSubmit={handleSubmit}
            validationSchema={validationSchemaFormContact}
          >
            <Form name='sentMessage' id='contactForm'>
              <div className='row control-group'>
                <Field
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Name'
                  label='Name'
                  component={Input}
                />
              </div>
              <div className='row control-group'>
                <Field
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Email Address'
                  label='Email Address'
                  component={Input}
                />
              </div>
              <div className='row control-group'>
                <Field
                  type='tel'
                  id='phone'
                  name='phoneNumber'
                  placeholder='Phone Number'
                  label='Phone Number'
                  component={Input}
                />
              </div>
              <div className='row control-group'>
                <Field
                  multiline
                  rows={5}
                  id='message'
                  name='message'
                  placeholder='Message'
                  label='Message'
                  component={Input}
                />
              </div>
              <br />
              <div id='success'>
                {messageAfterSubmit && statusSubmit && (
                  <div className='alert alert-success'>
                    <button
                      type='button'
                      className='close'
                      data-dismiss='alert'
                      aria-hidden='true'
                    >
                      &times;
                    </button>
                    <strong>{messageAfterSubmit}</strong>
                  </div>
                )}
                {messageAfterSubmit && !statusSubmit && (
                  <div className='alert alert-danger'>
                    <button
                      type='button'
                      className='close'
                      data-dismiss='alert'
                      aria-hidden='true'
                    >
                      &times;
                    </button>
                    <strong>{messageAfterSubmit}</strong>
                  </div>
                )}
              </div>
              <div className='row'>
                <div className='form-group col-xs-12'>
                  <button type='submit' className='btn btn-default'>
                    Send
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
