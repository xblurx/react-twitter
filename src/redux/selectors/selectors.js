export const getMessagesPage = (state) => {
    return state.messagesPage;
};

export const getUsersPage = (state) => {
    return state.usersPage;
};

export const getUserId = (state) => {
    return state.auth.id;
};

export const getProfilePage = (state) => {
    return state.profilePage;
};
export const getProfilePosts = (state) => {
    return state.profilePage.posts;
};

export const getProfile = (state) => {
    return state.profilePage.profile;
};

export const getProfileStatus = (state) => {
    return state.profilePage.status;
};

export const getAuth = (state) => {
    return state.auth;
};
