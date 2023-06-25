import React, { useState } from 'react';
import { ErrorMessage } from 'formik';

export default function Input({
  multiline = false,
  label,
  id,
  field,
  name,
  placeholder,
  type,
  rows,
}) {
  const [value, setValue] = useState('');
  const [hasFocus, setHasFocus] = useState(false);
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputFocus = () => {
    setHasFocus(true);
  };

  const handleInputBlur = () => {
    setHasFocus(false);
  };

  return (
    <>
      <div
        className={`form-group col-xs-12 floating-label-form-group controls ${
          value ? 'floating-label-form-group-with-value' : ''
        } ${hasFocus ? 'floating-label-form-group-with-focus' : ''}`}
      >
        <label htmlFor={id}>{label}</label>
        {multiline ? (
          <textarea
            rows={rows}
            className='form-control'
            name={name}
            id={id}
            placeholder={placeholder}
            onInput={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...field}
          />
        ) : (
          <input
            type={type}
            className='form-control'
            name={name}
            id={id}
            placeholder={placeholder}
            onInput={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...field}
          />
        )}
        <div className='help-block text-danger'>
          <ul role='alert'>
            <ErrorMessage name={field.name} component='li' />
          </ul>
        </div>
      </div>
    </>
  );
}
