import React from 'react';

export default function({ comment }) {
  return (
    <div>
      <b>{comment.name} : </b>
      <em>{comment.content}</em>
    </div>)
}
