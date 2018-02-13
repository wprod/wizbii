import React from 'react';
import SingleComment from './comment_single';
import _ from 'lodash';
import Form from './comment_form';

const CommentList = ({publications}) => {
  const renderComments = function(publications) {
    if (publications.comments.length == 0) {
      return <em>There is no comments yet.</em>;
    }
    return _.map(publications.comments, (comment) => {
      return <SingleComment key={comment._id} comment={comment}/>;
    });
  }

  return (
    <div className="card-footer text-muted">
      {renderComments(publications)}
      <hr></hr>
      <Form feed={publications}/>
    </div>
  );
}

export default CommentList;
