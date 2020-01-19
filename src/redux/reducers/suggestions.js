import items from '../../data/items';

//guardara un arreglo de sugestiones
const defaultState = [];

function reducer(state = defaultState, {type, payload}){
    switch(type){
        
        case 'findSuggestions':{
            //buscara sugerencias dependiendo del texto colocado en el imput
            //se crea una expresion regular para filtrar los items 
            const redex = new RegExp(`^${payload}`,'i')

            return items.filter(item => redex.test(item.title));
        }

        default:
            return state;
    }
}

export default reducer;