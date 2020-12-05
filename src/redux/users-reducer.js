import { getAPI } from '../api/api';

const TOGGLE_FOLLOW = 'toggleFollow';
const SET_USERS = 'setUsers';
const SET_CURRENT_PAGE = 'setCurrentPage';
const TOGGLE_LOADER = 'toggleLoader';

let initState = {
    users: [],
    totalCount: 10,
    pageSize: 5,
    pageNum: 1,
    isFetching: false,
};

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users, totalCount) => ({
    type: SET_USERS,
    users,
    totalCount,
});
export const setCurrentPage = (pageNum) => ({
    type: SET_CURRENT_PAGE,
    pageNum,
});
export const toggleLoader = (isFetching) => ({
    type: TOGGLE_LOADER,
    isFetching,
});

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
                users: action.users,
                totalCount: action.totalCount,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                pageNum: action.pageNum,
            };
        case TOGGLE_LOADER:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default:
            return state;
    }
};

/*export const getUsers = (pageNum, pageSize) => async (dispatch) => {
    dispatch(toggleLoader(true));
    let data = await getAPI.getUsers(pageNum, pageSize);
    dispatch(setUsers(data.items, data.totalCount / 100));
    dispatch(toggleLoader(false));
};*/

export const getUsers = (pageNum, pageSize) => async (dispatch) => {
    dispatch(toggleLoader(true));
    dispatch(setCurrentPage(pageNum));
    let data = await getAPI.getUsers(pageNum, pageSize);
    dispatch(setUsers(data.items, data.totalCount / 100));
    dispatch(toggleLoader(false));
};
