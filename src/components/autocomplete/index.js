import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './styles.css';

class Autocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text,
        } = this.props;

        const {
            isOpen,
        } = this.state;

        return (
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon />
                </div>

                {/* cuadro de texto para la busqueda */}
                <InputBase
                    placeholder="Search…"
                    value={text}
                    style={{ width: '100%' }}

                    // evento onChange
                    onChange={(event) => {
                        // obtiene el nuevo valor de la caja de texto cada que cambia
                        const newText = event.target.value;

                        // envia el nuevo texto a la funcion onChangeText
                        onChangeText(newText);

                        // validacion de apertura o cierre del cuadro de sugerencias tomando en cuenta el cambio de textos en el cuadro de busqueda
                        if (!isOpen && newText) {
                            this.setState({ isOpen: true });
                        } else if (isOpen && !newText) {
                            this.setState({ isOpen: false });
                        }
                    }}

                    // validacion de cierre del cuadro de sugerencias tomando en cuenta desenfoque del cuadro de sugerencias
                    onBlur={() => {
                        setTimeout(() => this.setState({ isOpen: false }), 100);
                    }}

                    // validacion de apertura del cuadro de sugerencias tomando en cuenta el enfoque cuando existe texto en el cuadro de busqueda
                    onFocus={() => {
                        if (text) {
                            this.setState({ isOpen: true });
                        }
                    }}

                    // busqueda de resultados al presionar Enter en el cuadro de busqueda
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' && text) {
                            onChangeSelection(text);
                        }
                    }}
                />
                {/* Paper despliega la lista de suggerencias */}
                {/* onClick envia el titulo a la funcion  onChangeSelection y cierra el cuadro de suggerencias */}
                {isOpen &&
                <Paper className="container-results" square>
                    {suggestions.map(suggestion =>
                    <MenuItem
                        key={suggestion.id}
                        component="div"
                        onClick={() => {
                            onChangeSelection(suggestion.title);
                            this.setState({ isOpen: false });
                        }}
                    >
                        {/* es el value que se presenta al usuario */}
                        {suggestion.title}

                    </MenuItem>)}
                </Paper>}
            </div>
        );
    }
}

export default Autocomplete;
