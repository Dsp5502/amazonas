import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('correo@correo.com')
    .min(5, 'Muy Corto')
    .max(50, 'Excede el maximo')
    .required('Este Campo Es obligatorio'),
  password: Yup.string()
    .min(5, 'Muy Corto')
    .max(50, 'Excede el maximo')
    .required('Este Campo Es obligatorio'),
});

export const FormLoginAdmin = ({ setIsAdminLog }) => {
  const navigate = useNavigate();

  const handleSubmit = ({ email, password }) => {
    console.log(email, password);
    if (email === 'dsp5502@gmail.com' && password === '12345678') {
      console.log('admin');
      setIsAdminLog(true);
      navigate('/addProduct');
    } else {
      setIsAdminLog(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex flex-col '>
          <label htmlFor='' className='font-bold text-sm'>
            Correo electrónico
          </label>
          <Field
            name='email'
            placeholder='Ingresa tu correo'
            type='email'
            className='borderEnvio rounded-sm'
          />
          {errors.email && touched.email ? (
            <div className='text-red-500 text-xs italic'>{errors.email}</div>
          ) : null}
          <label htmlFor='' className='font-bold text-sm'>
            Contraseña
          </label>
          <Field
            name='password'
            placeholder='Ingresa tu contraseña'
            type='password'
            className='borderEnvio rounded-sm'
          />
          {errors.password && touched.password ? (
            <div className='text-red-500 text-xs italic'>{errors.password}</div>
          ) : null}
          <button
            type='submit'
            className='bg-amber-500 my-2 py-1 rounded-sm text-sm'
          >
            Continue
          </button>
        </Form>
      )}
    </Formik>
  );
};
