import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { registerAsync } from '../Redux/actions/actionResgiter';

const SignupSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, 'Muy Corto')
    .max(20, 'Excede el maximo')
    .required('Este Campo Es obligatorio'),
  email: Yup.string()
    .email('correo@correo.com')
    .min(5, 'Muy Corto')
    .max(50, 'Excede el maximo')
    .required('Este Campo Es obligatorio'),
  password: Yup.string()
    .min(5, 'password deberia se de minimo 5 caracteres')
    .max(20)
    .required('El password es obligatorio')
    .oneOf([Yup.ref('password2')], 'Las contraseñas no coinciden'),
  password2: Yup.string()
    .min(5)
    .max(20)
    .required('El password es obligatorio')
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
});

const FormCrearCuenta = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ email, password, nombre }) => {
    dispatch(registerAsync(email, password, nombre));
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Cuenta Creada Correctamente',
    });
  };
  return (
    <Formik
      initialValues={{
        nombre: '',
        email: '',
        password: '',
        password2: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm({
          nombre: '',
          email: '',
          password: '',
          password2: '',
        });
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex flex-col'>
          <label htmlFor='' className='font-bold text-sm mb-1'>
            Nombre
          </label>
          <Field
            name='nombre'
            placeholder='Ingresa tu nombre'
            type='text'
            className='borderEnvio rounded-sm px-2'
          />
          {errors.nombre && touched.nombre ? (
            <div className='text-red-500 text-xs italic'>{errors.nombre}</div>
          ) : null}
          <label htmlFor='' className='font-bold text-sm mb-1'>
            Correo electrónico
          </label>
          <Field
            name='email'
            placeholder='Ingresa tu correo'
            type='email'
            className='borderEnvio rounded-sm px-2'
          />
          {errors.email && touched.email ? (
            <div className='text-red-500 text-xs italic'>{errors.email}</div>
          ) : null}
          <label htmlFor='' className='font-bold text-sm mb-1'>
            Contraseña
          </label>
          <Field
            name='password'
            placeholder='Minimo 5 caracteres'
            type='password'
            className='borderEnvio rounded-sm px-2'
          />
          {errors.password && touched.password ? (
            <div className='text-red-500 text-xs italic'>{errors.password}</div>
          ) : null}
          <label htmlFor='' className='font-bold text-sm mb-1'>
            Vuelve a ingresar Contraseña
          </label>
          <Field
            name='password2'
            placeholder='Ingresa tu contraseña'
            type='password'
            className='borderEnvio rounded-sm px-2'
          />
          {errors.password2 && touched.password2 ? (
            <div className='text-red-500 text-xs italic'>
              {errors.password2}
            </div>
          ) : null}
          <button
            type='submit'
            className='btnOrange my-2 py-1 rounded-sm text-sm'
          >
            Crear Cuenta
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormCrearCuenta;
