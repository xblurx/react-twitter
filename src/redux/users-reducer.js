const TOGGLE_FOLLOW = 'toggleFollow';
const SET_USERS = 'setUsers';
const SET_CURRENT_PAGE = 'setCurrentPage';
const TOGGLE_LOADER = 'toggleLoader';

let initState = {
    // users: [
    //     {
    //         id: 1,
    //         following: true,
    //         avatarUrl:
    //             'https://highxtar.com/wp-content/uploads/2020/07/highxtar-apple-new-emojis-4.png',
    //         fullName: 'Natalie',
    //         status: "I'm a pos!",
    //         location: {
    //             city: 'Nizhny Novgorod',
    //             country: 'Russia',
    //         },
    //     },
    //     {
    //         id: 2,
    //         following: false,
    //         avatarUrl:
    //             'https://highxtar.com/wp-content/uploads/2020/07/highxtar-apple-new-emojis-4.png',
    //         fullName: 'Ron',
    //         status: 'Ginger',
    //         location: {
    //             city: 'The Burrow',
    //             country: 'UK',
    //         },
    //     },
    //     {
    //         id: 3,
    //         following: true,
    //         avatarUrl:
    //             'https://highxtar.com/wp-content/uploads/2020/07/highxtar-apple-new-emojis-4.png',
    //         fullName: 'Jian Yang',
    //         status: 'Errich Bachman is a fat and a poor',
    //         location: {
    //             city: 'Mountain Views',
    //             country: 'USA',
    //         },
    //     },
    // ],
    users: [],
    totalCount: 10,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, following: !user.following};
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
                currentPage: action.currentPage,
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
