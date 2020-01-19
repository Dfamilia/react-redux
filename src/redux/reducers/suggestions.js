//guardara un arreglo de sugestiones, por eso es []
const defaultState = [
    {
        id:1,
        text: "hola"
    }
];

function reducer(state = defaultState, {type, payload}){
    switch(type){
        
        case 'findSuggestions':
            return [
                {
                    id: 1,
                    text: 'findSuggestions',
                }
            ]

        default:
            return state;
    }
}

export default reducer;