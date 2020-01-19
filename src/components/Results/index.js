import React, { Component } from 'react';
import Page from './page'
//conecta a redux con el componente a travez de react-redux/connect
import { connect } from 'react-redux';

// 1- creo mi componente
class Results extends Component {
    render() {
        console.log(this.props.suggestions)
        return (
            <div>
                <Page />
            </div>
        )
    }
}

// 2- obtengo el estado actualizado desde el reducer
//state = store.getState()
const mapStateToProps = (state) =>{
    //la propiedad que retornes podra ser utilizada por tu componente en forma de props
    return {
        suggestions: state.suggestions
    }

}

// 3- conecto el componente con el estado actualizado para sincronizarlos
//-------------------------------------------------------------------------

// // A- paso a paso
// //convierto mi estado en props
// const wrapper = connect(mapStateToProps);

// //conecto el componente con el nuevo props
// const component = wrapper(Results);

// //exporto el componente actualizado
// export default component;

// B- forma rapida
export default connect(mapStateToProps)(Results);
