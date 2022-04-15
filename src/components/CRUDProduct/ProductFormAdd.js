import React from 'react';
import { useForm } from '../../hooks/useForm';
import uuid from 'react-uuid';
import { FileUp } from '../../helpers/FileUp';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../../Redux/actions/actionProduct';
import { Link } from 'react-router-dom';

const ProductFormAdd = () => {
  const [values, handleInputChange, reset] = useForm({
    nombre: '',
    descripcion: '',
    categorias: '',
    precio: '',
    foto1: '',
    foto2: '',
    foto3: '',
    id: uuid(),
  });

  const dispatch = useDispatch();
  const { nombre, descripcion, categorias, precio, foto1, foto2, foto3 } =
    values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(addProductAsync(values));
    reset();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    FileUp(file)
      .then((resp) => {
        values.foto1 = resp;
        console.log(resp);
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    console.log(file);

    FileUp(file)
      .then((resp) => {
        values.foto2 = resp;
        console.log(resp);
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  const handleFileChange3 = (e) => {
    const file = e.target.files[0];
    console.log(file);

    FileUp(file)
      .then((resp) => {
        values.foto3 = resp;
        console.log(resp);
      })
      .catch((error) => {
        console.warn(error);
      });
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
      <input
        type='file'
        name='foto2'
        className='borderEnvio rounded-sm my-2'
        placeholder='Añadir foto'
        value={foto2}
        onChange={handleFileChange2}
      />
      <input
        type='file'
        name='foto3'
        className='borderEnvio rounded-sm my-2'
        placeholder='Añadir foto'
        value={foto3}
        onChange={handleFileChange3}
      />
      <button
        type='submit'
        className='bg-amber-500 my-2 py-1 rounded-sm text-sm'
      >
        Agregar
      </button>
      <Link
        to='/listProductos'
        type='submit'
        className='bg-green-500 my-2 py-1 rounded-sm text-sm text-center'
      >
        Consultar Productos
      </Link>
    </form>
  );
};

export default ProductFormAdd;
