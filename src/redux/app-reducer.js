import { getAuth } from './auth-reducer';

const INIT = 'init';

let initState = {
    initialized: false,
};

export const appReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT:
            return {
                ...state,
                initialized: action.initialized,
            };
        default:
            return state;
    }
};

const init = (initialized) => ({
    type: INIT,
    initialized,
});

export const initApp = () => (dispatch) => {
    let promises = [];
    promises.push(dispatch(getAuth()));
    Promise.all(promises).then(() => dispatch(init(true)));
};
