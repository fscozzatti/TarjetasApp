import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'


const CardEdit = ({ cardid, title, responsible, descriton, priority, onHandleSubmit}) => {
    const [ titulo, setTitulo ] = useState(title)
    const [ prioridad, setPrioridad ] = useState(priority)
    const [ descripcion, setDescripcion ] = useState(descriton)
    const [ responsable, setResponsable ] = useState(responsible)
    const history = useHistory()

    function handleSubmit(event) {
      event.preventDefault();
      onHandleSubmit(cardid, titulo, responsable, descripcion, prioridad)
      history.push("/main")
    }
  
    function handleChange(event) {
      const value = event.target.value;
      switch (event.target.name) {
        case "title":
          setTitulo(value)
          break
        case "priority":
          setPrioridad(value)
          break    
        case "descriton":
          setDescripcion(value)
          break
        case "responsible":
          setResponsable(value)
          break
        default:
          break
      }
    }
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Editar Tarjeta
          </a>
        </nav>
        <div className="containerCard">
          <Grid  container           
                  direction="row"
                  justify="center"
                  alignItems="center">
            <div className="col-md-6">
              <div className="card mt-6">
                <div className="card-header" >
                  <h3 className="card-title">Nro. de Tarjeta: {cardid}</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      Título    
                      <input
                        type='text'
                        name='title'
                        onChange={handleChange} 
                        value={titulo}
                        required
                        />
                    </div>                     
                    <div className="form-group">
                      Prioridad    
                      <select
                        name='priority'
                        onChange={handleChange} 
                        value={prioridad}
                        required
                        >
                          <option>baja</option>
                          <option>media</option>
                          <option>alta</option>
                      </select>
                    </div>
                    <div className="form-group">
                      Descripción
                      <input
                        type='text'
                        name='descriton'
                        value={descripcion}
                        onChange={handleChange}
                        required 
                        />
                    </div>
                    <div className="form-group">
                      Responsable
                      <input
                        type='text'
                        name='responsible'
                        value={responsable}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="card-footer" > 
                      <Grid  container           
                      direction="row"
                      justify="center"
                      alignItems="center">
                          <Grid item>
                              <button type="submit" className="btn btn-success" >
                                  Confirmar
                              </button>
                          </Grid>
                      </Grid>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Grid>
        </div>  
      </div>
    )
}
CardEdit.propTypes = {
    cardid: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
    descriton: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    onHandleSubmit: PropTypes.func.isRequired,
}

export default CardEdit
