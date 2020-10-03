import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar  from '@material-ui/core/Toolbar'
import IconButton  from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { IconContext } from 'react-icons'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { Link as LinkRouter } from 'react-router-dom'
import Typography   from '@material-ui/core/Typography'


const AppFrame = ({ children }) => {
    const iconContextSize = useMemo( () => ({size:'2em'}), [])
    return (
        <Grid container
            justify="center">
            <AppBar position="static" color="transparent">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link component={LinkRouter}
                            to="/main"
                            color="initial"
                            aria-label="menu">
                            <IconContext.Provider value={iconContextSize}>
                                <BsFillGrid3X3GapFill></BsFillGrid3X3GapFill>
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant="h6" color="initial">
                        Aplicación de Tarjetas
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item
                xs={12}
                sm={11}
                md={10}
                lg={8}>
                    {children}
                </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node,
}

export default AppFrame
