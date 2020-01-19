import items from '../../data/items';

//guardara un arreglo de resultados, por eso es []
const defaultState = [];

function reducer(state = defaultState, {type, payload}){
    switch(type){

        case 'findResults':{
            const regex = new RegExp(`^${payload}`,'i');
            
            return items.filter(item => regex.test(item.title))
        }

        default:
            return state;
    }
}

export default reducer;