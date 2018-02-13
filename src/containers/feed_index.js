import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchFeeds } from '../actions';

import FeedProfile from '../components/feed_profile';
import FeedCompany from '../components/feed_company';

class FeedIndex extends Component {

  componentWillMount() {
    this.props.fetchFeeds();
  }

  renderFeeds() {
    return (_.map(this.props.feeds.feed_items, feed => {
      switch (feed.type) {
        case "publication":
          return (
            (feed.publication.poster_type == 'COMPANY')
            ? <FeedCompany key={ feed.id } data={ feed }/>
            : <FeedProfile key={ feed.id } data={ feed }/>);
        default:
          return;
      }
    }));
  }

  render() {
    return (<div>
      { this.renderFeeds() }
    </div>);
  }
}

function mapStateToProps(state) {
  return { feeds: state.feeds };
}

export default connect(mapStateToProps, { fetchFeeds })(FeedIndex);
