import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.post}>
			<div>
				<img className={s.postAvatar} src={props.img} alt='' />
			</div>
			<div className={s.message}>
				<p>{props.message}</p>
			</div>
			<div className={s.likes}>
				<img
					src='https://thumbs.dreamstime.com/b/red-heart-icon-isolated-white-background-love-symbol-web-site-logo-mobile-app-ui-design-red-heart-icon-isolated-white-136723264.jpg'
					alt=''
				/>
				<p>{props.likes}</p>
			</div>
		</div>
	);
};

export default Post;
