import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

const CardEdit = ({ cardid, title, responsible, descriton, priority }) => {
    return (
        <div className="col-md-6">
        <div className="card mt-6">
          <div className="card-header" >
            <h3 className="card-title">Nro. de Tarjeta: {cardid}</h3>
            <span className="badge badge-pill badge-info ml-3">
                {priority}
            </span>
          </div>
          <div className="card-body">
            <h5 className="card-subtitle">{title}</h5>
            <p>{descriton}</p>
            <p><mark>{responsible}</mark></p>
          </div>
          <div className="card-footer" > 
            <Grid  container           
            direction="row"
            justify="center"
            alignItems="center">
                <Grid item>
                    <button className="btn btn-success" >
                        Confirmar
                    </button>
                </Grid>
            </Grid>
          </div>
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
}

export default CardEdit
