import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RJNotification, RJList } from '../components';
import { fetchAllNotification, readNotification } from '../actions';


class RJDragandDrop extends Component {
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
<div class="container dnd">
    <h3>Trello style Kanban Layout</h3>
    <h6>Stacks vertically on mobile screens</h6>
    <div class="row flex-row flex-sm-nowrap py-5">
        <div class="col-sm-4 col-md-3">
            <div class="card">
                <div class="card-block">
                    <a href="" data-toggle="dismiss" class="close">&times;</a>
                    <h4 class="card-title text-truncate py-2">Category 1</h4>
                    <div class="card p-2 bg-faded">
                        <h5 class="card-title">Item</h5>
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 col-md-3">
            <div class="card">
                <div class="card-block">
                    <a href class="close">&times;</a>
                    <h4 class="card-title text-truncate py-2">Category 2</h4>
                    <div class="card p-2 bg-faded">
                        <h5 class="card-title">Item</h5>
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <h5 class="card-title">Item</h5>
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 col-md-3">
            <div class="card">
                <div class="card-block">
                    <a href class="close">&times;</a>
                    <h4 class="card-title text-truncate py-2">Category 3</h4>
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 col-md-3">
            <div class="card">
                <div class="card-block">
                    <a href class="close">&times;</a>
                    <h4 class="card-title text-truncate py-2">Category 4</h4>
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <h5 class="card-title">Item</h5>
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 col-md-3">
            <div class="card">
                <div class="card-block">
                    <a href class="close">&times;</a>
                    <h4 class="card-title text-truncate py-2">Category 5</h4>
                    <div class="card p-2 bg-faded">
                        <h5 class="card-title">Some item</h5>
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 col-md-3">
            <div class="card">
                <div class="card-block">
                    <a href class="close">&times;</a>
                    <h3 class="card-title text-truncate py-2">Category 6</h3>
                    <div class="card p-2 bg-faded">
                        <h5 class="card-title">Another item</h5>
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 col-md-3">
            <div class="card">
                <div class="card-block">
                    <a href class="close">&times;</a>
                    <h4 class="card-title text-truncate py-2">Category 7</h4>
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <hr />
                    <div class="card p-2 bg-faded">
                        <p>With supporting or additional content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
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

export default connect(mapStatetoProps, mapDispatchprops)(RJDragandDrop);