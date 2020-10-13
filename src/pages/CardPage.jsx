import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CardEdit from './../components/CardEdit'




const CardPage = ({ todos , onHandleSubmit }) => {
    const { cardid } = useParams()

    const { title, responsible, descriton, priority } = todos.find( i => i.cardid === Number(cardid))



    return (
        <AppFrame>
            <CardEdit cardid={Number(cardid)}
                title={title}
                responsible={responsible}
                descriton={descriton}
                priority={priority}
                onHandleSubmit={onHandleSubmit}
                ></CardEdit>
        </AppFrame>
    )
}

CardPage.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            cardid: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            responsible: PropTypes.string.isRequired,
            descriton: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
        })
    ).isRequired,
    onHandleSubmit: PropTypes.func.isRequired,
}


export default CardPage
