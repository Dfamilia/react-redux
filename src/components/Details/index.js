import React, { Component } from 'react';
import Page from './page'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import findCurrentItem from '../../redux/actions/findCurrentItem';

class Details extends Component {

    //se ejecuta cada vez que la pagina o componente es ejecutado
    //se agrego tomando en cuenta que el usuario puede actualizar la pagina y se perderia el acceso
    componentDidMount() {
        // match es un objeto de witRouter
        // params es un objeto de match
        // itemId es el nombre de la ruta que definiste en el nodo Root para Details, puede variar segun el nombre que le pongas
        // itemId es un string
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
    }

    render() {
        const { currentItem }= this.props;

        return (
            <Page 
                currentItem={currentItem}
                goTo={(path)=>{
                    this.props.history.push(path);
                }}
            />
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        currentItem: state.currentItem
    };
};

const mapDispatchToProps={
    findCurrentItem,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details)
    );