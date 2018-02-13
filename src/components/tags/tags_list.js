import React from 'react';
import SingleTag from './tag_single';
import _ from 'lodash';

const TagList = ({ publications }) => {
  const renderTags = function(publications) {
    if (publications.tags.length == 0) {
      return;
    }
    return _.map(publications.tags, (tag) => {
      return <SingleTag key={ tag._id } tag={ tag }/>;
    });
  }

  return (
    <div>
      {renderTags(publications)}
    </div>
  );
}

export default TagList;
