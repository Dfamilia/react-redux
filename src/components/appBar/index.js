import React, { Component } from 'react';
import Page from './page';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import findSuggestion from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';

class AppBar extends Component {
    //se crea constructor para definir el estado del componente
    constructor(props){
        super(props);

        this.state ={
            text: ''
        }

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }
    
    // es una funcion que se llama cada vez que el texto cambia
    onChangeText(text){
        this.setState({ text });

        //metodo creado con mapDispatchToProps
        // busca ocurrencias de suggerencias en redux
        this.props.findSuggestion(text);
    }

    // es una funcion que se llama cuando el usuario presiona enter, o clikea una de las suggestions
    // este tranfiere el titulo desde la caja de sugerencias al cuadro de texto y realiza la busqueda
    // de articulos.
    onChangeSelection(text){

        this.setState({ text });

        //metodo creado con mapDispatchToProps
        // busca ocurrencias de articulos en redux
        this.props.findResults(text);
        // al momento de buscar los resultados desde details, no se mostraran los resultados por que seguira en la pagina details,
        // por eso tenemos que redirigir la pagina a results para mostrarlos
        this.props.history.push('/results');
    }

    render() {
        
        const { text }= this.state;
        //estado creado con mapStateToProps
        const { suggestions } = this.props;

        return (
            <Page 
            text={text}
            suggestions={suggestions}
            onChangeText={this.onChangeText}
            onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

//es una funcion que recibe un estado que regresa un objeto y las propiedades de estos objetos se hacen disponibles a los componentes 
//a travez de props, solo regresa el estado desde redux
const mapStateToProps = (state)=>{
    return {
        suggestions: state.suggestions
    };
}

//permite que especifiques una funcion o un objeto y esta regresara funciones creadoras de acciones (actions/)
//es una funcion que recibe un dispatch, regresa una funcion disponible para el componente

//FORMA COMPLEJA
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         findSuggestion: (text) => dispatch(findSuggestion(text))
//     };
// }

//FORMA RECOMENDADA
const mapDispatchToProps={
    findSuggestion,
    findResults,
}

export default withRouter (
    connect(mapStateToProps, mapDispatchToProps)(AppBar)
);

//video 4 implementado funcionalidad al proyecto y mostrando los resultados de la busqueda en la pantalla