import React, {useContext, useState} from 'react';
import './FormAddPeople.css'
import { NavLink, useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SetCliente } from '../services/fetchClientes';
import {ClienteContext} from '../context/ClienteContext';

const FormAddPeople = () => {

const {setSuccess} = useContext(ClienteContext);
const [error, setError] = useState('');
let history = useHistory();
console.log(history)

  const formik = useFormik({
    initialValues: {
      name: '',
      ci: '',
      age: '',
      phone: '',
      secc: '',
      district: '',
      operator: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(35, 'Must be 50 characters or less')
        .required('Requerido'),
      ci: Yup.number().required('Requerido')
    }),

    onSubmit: values => {
      SetCliente(values).then(data => {
        if(data.success){
          setSuccess(true);
          history.push('/');
        }
        
        
        if(data.error){
          setError(data.error);
        }
      });
    },
  });

  return (

    <div className='container'>
      <div className='content-formAddPeople-button'>
      <NavLink className='formAddPeople-button' to="/">
        <svg className='svg-formAddPeople' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        <span className='card__span'>Cancelar</span>
      </NavLink>
      </div>

      
      { error !== '' && (<div className="alert alert-danger" role="alert"></div>)}
      
      <form className="row g-3 form" onSubmit={formik.handleSubmit}>
      <div className="col-md-12">
        <label className='form-label' htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder='Nombre'
            className='form-control'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <span className='error-message'>{formik.errors.name}</span>
          ) : null}
        </div>

        <div className="col-md-7">
          <label className='form-label' htmlFor="ci">CI</label>
          <input
            id="ci"
            name="ci"
            type="number"
            placeholder='CI'
            className='form-control'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ci}
          />
          {formik.touched.ci && formik.errors.ci ? (
            <span className='error-message'>{formik.errors.ci}</span>
          ) : null}
        </div>

        <div className="col-md-5">
          <label className='form-label' htmlFor="age">Edad</label>
          <input
            id="age"
            name="age"
            type="number"
            placeholder='Edad'
            className='form-control'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <span className='error-message'>{formik.errors.age}</span>
          ) : null}
        </div>

        <div className="col-md-7">
          <label className='form-label' htmlFor="phone">Telefono</label>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder='Telefono'
            className='form-control'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <span className='error-message'>{formik.errors.phone}</span>
          ) : null}
        </div>

        <div className="col-md-5">
          <label className='form-label' htmlFor="secc">Secc</label>
          <input
            id="secc"
            name="secc"
            type="text"
            placeholder='Secc'
            className='form-control'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.secc}
          />
          {formik.touched.secc && formik.errors.secc ? (
            <span className='error-message'>{formik.errors.secc}</span>
          ) : null}
        </div>

        <div className="col-md-12">
        <label className='form-label' htmlFor="district">Barrio</label>
          <input
            id="district"
            name="district"
            type="text"
            placeholder='Barrio'
            className='form-control'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.district}
          />
          {formik.touched.district && formik.errors.district ? (
            <span className='error-message'>{formik.errors.district}</span>
          ) : null}
        </div>

        <div className="col-md-12">
        <label className='form-label' htmlFor="operator">Operador</label>
          <input
            id="operator"
            name="operator"
            type="text"
            placeholder='Operador'
            className='form-control'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.operator}
          />
          {formik.touched.operator && formik.errors.operator ? (
            <span className='error-message'>{formik.errors.operator}</span>
          ) : null}
        </div>
       
        <div className="col-md-12 text-center">
        <button disabled={formik.isSubmitting} className='btn btn-primary button-submit' type="submit">Registrar</button>
        </div>
     
      </form>
    </div>
  
  
  );
};

export default FormAddPeople;