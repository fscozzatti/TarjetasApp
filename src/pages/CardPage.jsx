import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CardEdit from './../components/CardEdit'




const CardPage = ({ todos , onHandleSubmit }) => {
    const { cardid } = useParams()
    const newid = todos.length + 1
    let todo = { cardid:newid, title: '', responsible:'', descriton:'', priority:'alta'}
    if( Number(cardid) !== 0){
        todo = todos.find( i => i.cardid === Number(cardid)) 
    }


    return (
        <AppFrame>
            <CardEdit cardid={todo.cardid}
                title={todo.title}
                responsible={todo.responsible}
                descriton={todo.descriton}
                priority={todo.priority}
                onHandleSubmit={onHandleSubmit}
                ></CardEdit>
        </AppFrame>
    )
}

CardPage.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            cardid: PropTypes.number,
            title: PropTypes.string.isRequired,
            responsible: PropTypes.string.isRequired,
            descriton: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
        })
    ).isRequired,
    onHandleSubmit: PropTypes.func.isRequired,
}


export default CardPage
