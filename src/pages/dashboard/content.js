import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './index.less';

import PageContent from '../../components/layout/content';

class Content extends React.Component {

  render() {
    let {user} = this.props;

    if (!user || !user.get('login')) {
      return (
        <PageContent fluid className="dashboard">
          <div className="alert">Welcome to Drone. Please <a href="/login">login</a> to proceed.</div>
        </PageContent>
      );
    }

    return (
      <PageContent fluid className="dashboard">
        <div className="alert">Welcome to Drone.</div>
      </PageContent>
    );
  }
}

export default connect(
  (state) => {
    if (state.drone.users.size == 0) {
      return {};
    }

    const userID = state.drone.users.get('user_id');
    return {
      user: state.drone.users.get('entities').get(userID.toString())
    };
  }
)(Content);
