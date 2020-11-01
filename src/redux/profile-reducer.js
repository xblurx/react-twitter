const ADD_POST = 'addPost'
const CHANGE_POST_TEXT = 'changeNewPostText'

let initState = {
    posts: [
        {
            id: 1,
            message: 'hey, its okay to fail, be strong!',
            img:
                'https://lh3.googleusercontent.com/jyF9cEq-ugHkMkrEBLg2xnmILr7aZikXhf5OnTZbEJN-ogzgLUOvqMXQWOjO9FJDOQ',
            likes: '188',
        },
        {
            id: 2,
            message: 'i love you no matter what!',
            img: 'https://image.emojipng.com/962/35962.jpg',
            likes: '214',
        },
    ],
    newPostText: '',
    profile: {
        name: 'Avril Lavigne',
        avatar:
            'https://avatars.yandex.net/get-music-content/3226792/508b3a1b.p.58069/s400x400',
    },
}

export const profileReducer = (state=initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let posts = state.posts;
            let newPostText = state.newPostText
            let post = {
                id: posts[posts.length - 1].id + 1,
                message: newPostText,
                img: posts[posts.length - 1].img,
                likes: String(Math.floor(Math.random() * Math.floor(500))),
            };
            posts.push(post);
            newPostText = '';
            return state;
        case CHANGE_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}