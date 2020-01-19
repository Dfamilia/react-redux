import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';

//combino los reducers y retorna un solo reducer combinado, para tener un estado un objeto reducer con 3 propiedades
const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
});

//establecemos nuestro reducer para que redux/store pueda utilizarlo
const store = createStore(reducer);

//exportamos el store para que nuestra api pueda utilizarlo y estar sincronizada con redux
export default store;