import React from 'react';
import { useForm } from '../../hooks/useForm';
import uuid from 'react-uuid';

const ProductFormAdd = () => {
  const [values, handleInputChange, reset] = useForm({
    nombre: '',
    descripcion: '',
    categorias: '',
    precio: '',
    foto1: '',
    id: uuid(),
  });

  const { nombre, descripcion, categorias, precio, foto1 } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    reset();
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    values.foto1 = e.target.files[0].name;
  };

  return (
    <form className='flex flex-col ' onSubmit={handleSubmit}>
      <label htmlFor='' className='font-bold text-sm'>
        Nombre Producto
      </label>
      <input
        type='text'
        name='nombre'
        className='borderEnvio rounded-sm'
        placeholder='ingrese producto'
        value={nombre}
        onChange={handleInputChange}
      />
      <label htmlFor='' className='font-bold text-sm'>
        Descripcion
      </label>
      <textarea
        className='borderEnvio rounded-sm'
        placeholder='ingrese descripcion'
        name='descripcion'
        value={descripcion}
        onChange={handleInputChange}
      />
      <select
        className='borderEnvio rounded-sm my-2'
        name='categorias'
        value={categorias}
        onChange={handleInputChange}
      >
        <option disabled value=''>
          Seleccione una categoria
        </option>
        <option>Tecnologia</option>
        <option>VideoJuegos</option>
        <option>Ropa</option>
      </select>
      <input
        type='number'
        name='precio'
        className='borderEnvio rounded-sm'
        placeholder='Ingrese Precio'
        value={precio}
        onChange={handleInputChange}
      />
      <input
        type='file'
        name='foto1'
        className='borderEnvio rounded-sm my-2'
        placeholder='Añadir foto'
        value={foto1}
        onChange={handleFileChange}
      />
      <button
        type='submit'
        className='bg-amber-500 my-2 py-1 rounded-sm text-sm'
      >
        Agregar
      </button>
    </form>
  );
};

export default ProductFormAdd;
