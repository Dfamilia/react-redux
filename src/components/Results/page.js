import React, { Component, Fragment } from 'react';
import './styles.css';
import AppBar from '../appBar';

//es buena practica quitar conflictos entre los estilos de las paginas o componentes
//a travez de @material-ui tenemos: OPCIONAL
import CssBaseLine from '@material-ui/core/CssBaseline';

class Page extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseLine />
                
                <AppBar />
            </Fragment>
        )
    }
}

export default Page;