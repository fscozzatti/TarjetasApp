import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CardEdit from './../components/CardEdit'




const CardPage = ({ todos , onHandleSubmit, onSetQ}) => {
    const { id } = useParams()
    var newid = 0
    todos.forEach( todo => { if(todo.id > newid ) {newid = todo.id}})
    newid += 1 
    let todo = { id:newid, title: '', responsible:'', descriton:'', priority:'alta'}
    if( Number(id) !== 0){
        todo = todos.find( i => i.id === Number(id)) 
    }

    return (
        <AppFrame>
            <CardEdit id={todo.id}
                title={todo.title}
                responsible={todo.responsible}
                descriton={todo.descriton}
                priority={todo.priority}
                onHandleSubmit={onHandleSubmit}
                onSetQ={onSetQ}
                ></CardEdit>
        </AppFrame>
    )
}

CardPage.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string.isRequired,
            responsible: PropTypes.string.isRequired,
            descriton: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
        })
    ).isRequired,
    onHandleSubmit: PropTypes.func.isRequired,
    onSetQ: PropTypes.func.isRequired,
}


export default CardPage
