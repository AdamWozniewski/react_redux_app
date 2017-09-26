import React, { Component } from 'react';
import Comments from './Comments';
import Photo from './Photo';

// import komentarzy

class Single extends Component {
	render() {
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId); // pobranie z GET wartosci postId, tej samej nadanej w pliku startowym aplikacji
		const post = this.props.posts[i];
		const postComments = this.props.comments[post.code] || [];
		return (
			<div className="single-photo">
				<Photo  post={post}
					{...this.props}
				/>
				<Comments postComments={postComments}
			  		{...this.props}
				/>
			</div>
		)
	}
}

export default Single;