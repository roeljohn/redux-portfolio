import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RJNotification, RJList } from '../components';
import { fetchAllNotification, readNotification } from '../actions';


class RJSWR extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // this.props.notificationList();
  }


  render() {
    return (
      <div className="container">
swr
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
//   return { notifications: state.notifications }
}

const mapDispatchprops = (dispatch) => {
  return { 
    //   notificationList: () => dispatch(fetchAllNotification()),
    //   readNotification: (id, data) => dispatch(readNotification(id, data)),
  }
}

export default connect(mapStatetoProps, mapDispatchprops)(RJSWR);