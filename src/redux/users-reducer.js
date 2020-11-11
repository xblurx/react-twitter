const TOGGLE_FOLLOW = 'toggleFollow';
const SET_USERS = 'setUsers';

let initState = {
    users: [],
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, following: !user.following };
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.usersArray,
            };
        default:
            return state;
    }
};
