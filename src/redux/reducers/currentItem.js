import items from '../../data/items';

//guardara un objeto, por eso es {}
const defaultState = {};

function reducer(state = defaultState, {type, payload}){
    switch(type){
        case 'findCurrentItem': {
            // encuentra el elemento basado en id
            return items.find(item=> item.id === payload);
        }

        default:
            return state;
    }
}

export default reducer;