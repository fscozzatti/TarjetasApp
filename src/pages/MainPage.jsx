import React from 'react'
import { useHistory } from 'react-router-dom'
//import CityList from './../componets/CityList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'
//import { getCities } from './../services/serviceCities'

const MainPage = () => {

   //const history = useHistory()

    /*const onClickHandler = React.useCallback((city, countryCode) => {
        history.push(`/city/${countryCode}/${city}`)
    }, [history])*/

    //const cities = getCities()

    return (
        <AppFrame>
            <Paper elevation={3}>
            </Paper>
        </AppFrame>
    )
}


export default MainPage
/*
                <CityList
                    cities={cities}
                    onClickCity={onClickHandler}>
                </CityList>
                */

