let renderTree = () => {
    console.log('state render');
};

let state = {
    profilePage: {
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
        changeNewPostText(text) {
            this.newPostText = text;
            renderTree();
        },
        addPost() {
            let p = this.posts;
            let post = {
                id: p[p.length - 1].id + 1,
                message: this.newPostText,
                img: '',
                likes: 0,
            };
            this.posts.push(post);
            this.newPostText = '';
            renderTree();
        },
        profile: {
            name: 'Avril Lavigne',
            avatar:
                'https://avatars.yandex.net/get-music-content/3226792/508b3a1b.p.58069/s400x400',
        },
    },
    messagesPage: {
        people: [
            {
                id: 1,
                name: 'George',
                avatar:
                    'https://cdn.vox-cdn.com/thumbor/6WqH2YyoREHRx26bCCk1Yo04L9w=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/11701871/ive.png',
            },
            {
                id: 2,
                name: 'Natalie',
                avatar:
                    'https://media1.popsugar-assets.com/files/thumbor/fFETbJrvjudAcVZbW6MpLFHqddI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/09/18/952/n/1922507/912726385ba1736ae1b411.38580230_/i/How-Use-Memoji.jpg',
            },
            {
                id: 3,
                name: 'Vi',
                avatar: 'https://cdn.techlector.com/wp-content/uploads/2020/04/MEMOJI2.jpg',
            },
            {
                id: 4,
                name: 'Roger',
                avatar:
                    'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c5e93afee880f5278c284cb7ddb73387-1590271591/portfolio/create-you-as-memoji.png',
            },
        ],
        messages: [
            { id: 1, text: 'i cant do this all on my own' },
            { id: 2, text: 'no, I know, Im not a superman' },
            { id: 4, text: 'uuuu uuu uuu uuu uuu' },
            { id: 5, text: 'Im not a superman!' },
        ],
        newMsgText: '',
        changeNewMsgText: (text) => {
            state.messagesPage.newMsgText = text;
            renderTree();
        },
        addMessage: () => {
            let messages = state.messagesPage.messages;
            let msg = {
                id: messages[messages.length - 1].id + 1,
                text: state.messagesPage.newMsgText,
            };
            state.messagesPage.messages.push(msg);
            state.messagesPage.newMsgText = '';
            renderTree();
        },
    },
};

export const updateTree = (obs) => {
    renderTree = obs;
};

window.state = state;

export default state;
