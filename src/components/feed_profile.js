import React from 'react'
import CommentList from './comments/comment_list';
import TagList from './tags/tags_list'

const FeedProfile = ({ data }) => (
  <div className="card">
    <img className="rounded mx-auto d-block" src={ data.publication.attachment_picture }/>
    <div className="card-block">
      <h5 className="card-title">{ data.publication.profile.name }</h5>
      <TagList publications={ data.publication } />
      <p className="card-text">{ data.publication.content }</p>
    </div>
    <CommentList publications={ data.publication }/>
  </div>
)

export default FeedProfile
