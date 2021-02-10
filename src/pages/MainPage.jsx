import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert'
import CardList from './../components/CardList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'


const MainPage = ({ todos, onHandleDelete, error, onSetError, onSetQ }) => {
    const history = useHistory()

    const onClickHandler = useCallback((id) => {
        history.push(`/id/${id}`)
    }, [history])

    return (
        <AppFrame>
            {
                error && <Alert onClose={() => onSetError(null)} severity="error">{error}</Alert>
            }
            <Paper elevation={3}>
                <CardList todos={todos}
                    onClickCard={onClickHandler} 
                    onHandleDelete={onHandleDelete}
                    onSetQ={onSetQ}/>
            </Paper>
        </AppFrame>
    )
}

MainPage.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            responsible: PropTypes.string.isRequired,
            descriton: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
        })
    ).isRequired,
    onSetQ: PropTypes.func.isRequired,
}

export default MainPage

