import { combineReducers } from 'redux';
import {loginReducer} from './reducers/loginReducer';
import {signupReducer} from './reducers/signupReducer';
const appReducer = combineReducers({
    loginReducer,
    signupReducer
});

let rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;