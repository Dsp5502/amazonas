import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { emptyCartSync } from '../../Redux/actions/actionCart';
import { addPedidos } from '../../Redux/actions/actionPedidos';

const SignupSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .min(9, 'Muy Corto')
    .max(15, 'Excede el maximo')
    .required('Este Campo Es obligatorio'),
  nombres: Yup.string().required('Este Campo Es obligatorio'),
  fechaVencimiento: Yup.date()
    .min(new Date(), 'Fecha de vencimiento incorrecta')
    .required('Este Campo Es obligatorio'),
  cvc: Yup.string()
    .min(3, 'Muy Corto')
    .max(3, 'Excede el maximo')
    .required('Este Campo Es obligatorio'),
  domicilio: Yup.string().required('Este Campo Es obligatorio'),
});

const DatosPago = ({ cart, suma }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    Swal.fire({
      title: 'Confirmar Compra?',
      text: `Tu vas a pagar $${suma.toFixed(2)}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Comprar!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Compra exitosa!',
          'Tus Productos van en Camino Gracias!!!',
          'success'
        );
        dispatch(addPedidos({ values, cart }));
        dispatch(emptyCartSync());
        navigate('/');
      }
    });
  };

  return (
    <Formik
      initialValues={{
        cardNumber: '',
        fechaVencimiento: '',
        cvc: '',
        domicilio: '',
        nombres: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit({
          ...values,
          idPedido: uuid(),
          fechaPedido: new Date(),
        });
        resetForm({
          cardNumber: '',
          fechaVencimiento: '',
          cvc: '',
          domicilio: '',
          nombres: '',
        });
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex flex-col my-5 mx-auto w-9/12'>
          <label htmlFor='' className='font-bold text-lg  text-white'>
            Numero Tarjeta
          </label>
          <Field
            name='cardNumber'
            placeholder='Ingresa numero Tarjeta'
            className='borderEnvio rounded-sm px-2'
          />
          {errors.cardNumber && touched.cardNumber ? (
            <div className='text-red-500 text-xs italic'>
              {errors.cardNumber}
            </div>
          ) : null}
          <label htmlFor='' className='font-bold text-lg  text-white'>
            Nombre Titular
          </label>
          <Field
            name='nombres'
            placeholder='Ingresa Nombre como aparece en la tarjeta'
            type='text'
            className='borderEnvio rounded-sm px-2'
          />
          {errors.nombres && touched.nombres ? (
            <div className='text-red-500 text-xs italic'>{errors.nombres}</div>
          ) : null}
          <div className='flex w-full mt-3   '>
            <div className='w-1/2 mr-2 '>
              <label htmlFor='' className='font-bold text-lg  text-white'>
                Fecha de Vencimiento
              </label>
              <Field
                type='date'
                name='fechaVencimiento'
                placeholder='Ingresa fecha de Vencimiento'
                className='borderEnvio rounded-sm w-full text-center'
              />
              {errors.fechaVencimiento && touched.fechaVencimiento ? (
                <div className='text-red-500 text-xs italic'>
                  {errors.fechaVencimiento}
                </div>
              ) : null}
            </div>
            <div className='w-1/2 mx-2 items-center justify-center  mb-2 '>
              <label htmlFor='' className='font-bold text-lg  text-white '>
                CVC
              </label>
              <Field
                name='cvc'
                placeholder='Ingresa CVC'
                type='text'
                className='borderEnvio rounded-sm  w-full  px-3'
              />
              {errors.cvc && touched.cvc ? (
                <div className='text-red-500 text-xs italic'>{errors.cvc}</div>
              ) : null}
            </div>
          </div>
          <hr />
          <label className='font-bold text-lg  text-white '>Domicilio</label>
          <Field
            name='domicilio'
            placeholder='Ingresa Dirección'
            type='text'
            className='borderEnvio rounded-sm px-3'
          />
          {errors.domicilio && touched.domicilio ? (
            <div className='text-red-500 text-xs italic'>
              {errors.domicilio}
            </div>
          ) : null}

          <button
            type='submit'
            className='btnOrange my-2 py-1 rounded-sm text-sm'
          >
            Pagar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default DatosPago;
