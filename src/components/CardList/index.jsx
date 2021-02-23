import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'



const CardList = ({ todos, onClickCard, onHandleDelete, onSetQ }) => {
    const todos2 = todos.map((todo, i) => {
        return (
          <div className="col-md-4" key={todo.id}>
            <div className="card mt-4">
              <div className="card-header" onClick={() => onClickCard(todo.id)}>
                <h3 className="card-title">Nro. de Tarjeta: {todo.id}</h3>
                <span className="badge badge-pill badge-info ml-2">
                  {todo.priority}
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-subtitle">{todo.title}</h5>
                <p>{todo.descriton}</p>
                <p><mark>{todo.responsible}</mark></p>
              </div>
              <div className="card-footer" > 
                <Grid  container           
                direction="row"
                justify="center"
                alignItems="center">
                    <Grid item>
                        <button className="btn btn-danger" onClick={() => {onHandleDelete(todo.id)
                        onSetQ("")}}>
                            Eliminar
                        </button>
                    </Grid>
                </Grid>
              </div>
            </div>
          </div>
        )
      })
    return (
        <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <div href="" className="text-white">
              Tarjetas
              <span className="badge badge-pill badge-light ml-2">
                {todos2.length}
              </span>
            </div>
            <div href=""> 
              <input type="text" placeholder="Buscar tarea por Responsable" onChange={(e) => onSetQ(e.target.value)} className="inputLargo"></input>
            </div>
            <button type="button" className="btn-primary" onClick={() => onClickCard(0)}>Insertar Tarjeta</button>
          </nav>
          <div className="container">
            <div className="col-md-12">
              <div className="row">
              { todos2 }
              </div>
            </div>
          </div>
        </div>
      )
}

CardList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            responsible: PropTypes.string.isRequired,
            descriton: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCard: PropTypes.func.isRequired,
    onSetQ: PropTypes.func.isRequired,
}

export default CardList
