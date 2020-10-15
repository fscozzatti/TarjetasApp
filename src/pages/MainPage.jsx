import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import CardList from './../components/CardList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'
//import { getCities } from './../services/serviceCities'


const MainPage = ({ todos, onHandleDelete }) => {

   const history = useHistory()

    const onClickHandler = useCallback((cardid) => {
        history.push(`/cardid/${cardid}`)
    }, [history])


    return (
        <AppFrame>
            <Paper elevation={3}>
                <CardList todos={todos}
                    onClickCard={onClickHandler} 
                    onHandleDelete={onHandleDelete}/>
            </Paper>
        </AppFrame>
    )
}

MainPage.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            cardid: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            responsible: PropTypes.string.isRequired,
            descriton: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default MainPage

