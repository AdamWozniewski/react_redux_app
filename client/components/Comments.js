import React, { Component } from 'react';

class Comments extends Component {
    constructor(params) {
        super(params);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderComment = this.renderComment.bind(this);
    }

    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <strong>{comment.user}</strong>
                {comment.text}
                <button
                    onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}
                    className="remove-comment"
                >
                    &times;
                </button>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const postId = this.props.params.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment); // akcja z ogolnego zbioru akcji
        this.refs.commentForm.reset();
    }

    render() {
        return (
            <div className="comment">
                {this.props.postComments.length === 0 ?
                    <h3>Napisz coś jako pierwszy!</h3> :
                    this.props.postComments.map(this.renderComment)
                }
                <hr/>
                <form
                    action=""
                    ref="commentForm"
                    className="comment-form"
                    onSubmit={this.handleSubmit}
                >
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}
export default Comments;