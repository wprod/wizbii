import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './comments/comment_list';
import TagList from './tags/tags_list'
import Form from './comments/comment_form';

const FeedCompany = ({ data, handleFeedComment }) => (
  <div className="card">
    <img className="rounded mx-auto d-block" src={ data.publication.company.logo }/>
    <div className="card-block">
      <h5 className="card-title">{ data.publication.company.name }</h5>
      <TagList publications={ data.publication } />
      <p className="card-text">{ data.publication.content }</p>
    </div>
    <CommentList publications={ data.publication }/>
  </div>
)

export default FeedCompany
