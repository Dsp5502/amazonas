import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { updateProductAsync } from '../../Redux/actions/actionProduct';

const FormEditarProducto = ({ editar, setModalEditar }) => {
  console.log(editar);
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    nombre: editar.nombre,
    precio: editar.precio,
    descripcion: editar.descripcion,
    categorias: editar.categorias,
    foto1: editar.foto1,
    foto2: editar.foto2,
    foto3: editar.foto3,
    id: editar.id,
  });

  const { nombre, precio, descripcion, categorias, foto1, foto2, foto3, id } =
    values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAsync(values));
    console.log(values);
    setModalEditar(false);
  };

  return (
    <form className='flex flex-col w-full px-10   ' onSubmit={handleSubmit}>
      <label htmlFor='' className='font-bold text-sm'>
        ID
      </label>
      <input
        type='text'
        name='id'
        className='borderEnvio rounded-sm'
        disabled
        value={id}
        onChange={handleInputChange}
      />

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
        type='text'
        name='foto1'
        className='borderEnvio rounded-sm my-2'
        placeholder='Añadir foto'
        value={foto1}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='foto2'
        className='borderEnvio rounded-sm my-2'
        placeholder='Añadir foto'
        value={foto2}
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='foto3'
        className='borderEnvio rounded-sm my-2'
        placeholder='Añadir foto'
        value={foto3}
        onChange={handleInputChange}
      />
      <button
        type='submit'
        className='bg-amber-500 my-5 py-1 rounded-sm text-sm'
      >
        Editar
      </button>
    </form>
  );
};

export default FormEditarProducto;
