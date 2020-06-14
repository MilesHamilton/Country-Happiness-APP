import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Form() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const url = await axios('https://enigmatic-temple-08680.herokuapp.com/');
    //  console.log(url);
    setData(url.data);
  }, []);

  const updateCountryData = (country) => {
    const url = `https://enigmatic-temple-08680.herokuapp.com/${country}`;
    axios.update(url);
  };

  const validation = Yup.object().shape({
    country: Yup.string()
      .min(1, 'Must Have A Character')
      .required('Must Enter A Country'),

    score: Yup.number()
      .min(1, 'Must Have A Number')
      .required('Must Enter A Number'),
  });

  return (
    <Formik
      initialValues={{ country: '', score: '' }}
      validation={validation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   resetForm();
        //   setSubmitting = false;
        // }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          {JSON.stringify(values)}
          <div className='input-row'>
            <label htmlFor='country'> Edit Country</label>
            <input
              type='text'
              name='country'
              id='country'
              placeholder='Enter Country'
              onChange={handleChange}
              onBLur={handleBlur}
              value={values.country}
              className={touched.country && errors.country ? 'has-error' : null}
            />
          </div>

          <div className='input-row'>
            <label htmlFor='score'> Edit Score</label>
            <input
              type='number'
              name='score'
              id='score'
              placeholder='Enter Score'
              onChange={handleChange}
              onBLur={handleBlur}
              value={values.score}
              className={touched.score && errors.score ? 'has-error' : null}
            />
          </div>

          <div className='input-row'>
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
