import React from 'react';

export default function({ tag }) {
  return (<span className="badge badge-info">{ tag.name }</span>);
}
