import React, { Component } from 'react';
import './styles.css';
import Autocomplete from '../autocomplete';

// componentes importados de material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';


class Page extends Component {
    render() {

        const {
            text,
            suggestions,
            onChangeText,
            onChangeSelection,
        } = this.props;

        return (
            // barra de la app
            <AppBar position='static'>
                <Toolbar className='appbar'>
                    {/* Titulo de la barra */}
                    <Typography variant='h6' color='inherit'>
                        Animexion
                    </Typography>

                    {/* componente que sera una end-point */}
                    <Autocomplete
                        text={text}
                        suggestions={suggestions}
                        onChangeText={onChangeText}
                        onChangeSelection={onChangeSelection}

                    />

                    {/* icono de cuenta */}
                    <AccountCircle />
                
                </Toolbar>
            </AppBar>
        );
    }
}

export default Page;