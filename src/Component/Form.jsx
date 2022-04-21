import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'

const Form = ({agregarTodo}) => {

    const initialState = {
        nombre: "",
        descripcion: "",
        estado: "pendiente",
        prioridad: false
    }

    const [todo, setTodo] = useState(initialState)

    const {nombre, descripcion, estado, prioridad} = todo


    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!nombre.trim()){
            e.target[0].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombrer en blanco',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return
        }

        if(!descripcion.trim()){
            e.target[1].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje la descripcion en blanco',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return
        }

        Swal.fire({
            title: 'Exito!',
            text: 'Tarea agragada!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

          agregarTodo({
              nombre: nombre,
              descripcion: descripcion,
              estado: estado === "pendiente" ? false : true,
              prioridad: prioridad,
              id: uuidv4(),
          })

          setTodo(initialState)

    }

    const handleChange = (e) =>{

        const {name, value, checked, type} = e.target

        setTodo((old) => ({
            ...old, 
            [name]: type === "checkbox" ? checked : value
        }))


    }




  return (
    <>
        <h3>Agregar TODO</h3>

        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className='form-control mb-2'
                name='nombre'
                placeholder='Introduce todo nombre'
                value={nombre}
                onChange={handleChange}
             />

             <textarea 
                className='form-control mb-2'
                name='descripcion'
                placeholder='Ingrese ;a descripcion'
                value={descripcion}
                onChange={handleChange}
             />

            <select 
                name="estado" 
                className='form-control mb-2'
                value={estado}
                onChange={handleChange}
                >

                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <div className="form-check">
                <input 
                    className="form-check-input" 
                    name='prioridad' 
                    type="checkbox" 
                    checked={prioridad} 
                    onChange={handleChange}
                    />
                <label className="form-check-label" htmlFor='flexCheckDefault'>

                </label>
            </div>

            <button className='btn btn-primary' type='submit'>Agregar</button>
        </form>
    </>
  )
}

export default Form