import {
    addPost,
    deletePost,
    profileReducer,
    setStatus,
} from './profile-reducer';

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
    status: null,
};

test('should increment length of posts array when adding a post', () => {
    let message = 'test message';
    let action = addPost(message);
    let newState = profileReducer(initState, action);
    expect(newState.posts.length).toBe(3);
});

test('should check that post is added with its message', () => {
    let message = 'test message';
    let action = addPost(message);
    let newState = profileReducer(initState, action);
    expect(newState.posts[2].message).toBe('test message');
});

test('should delete a post', () => {
    let action = deletePost(2);
    let newState = profileReducer(initState, action);
    let found = false;
    for (let i = 0, l = newState.posts.length; i < l; i++) {
        if (newState.posts[i].id === 2) return (found = true);
    }
    expect(found).toBeFalsy();
});

test('should set a status', () => {
    let action = setStatus('test status');
    let newState = profileReducer(initState, action);
    expect(newState.status === 'test status').toBeTruthy();
});
