import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">Pages</h1>
                    <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                </div>
                <div className="card-columns mb-3 text-center">
                    <div className="card shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Notifications</h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Notification of All List</li>
                                <li>Dropdown of unread notification</li>
                                <li>Unread and read notification will show</li>
                                <li>Working mock api</li>
                                <li className="text-danger">Unread function is not yet implemented</li>
                            </ul>
                            <Link to="/notification" className="btn btn-lg btn-block btn-primary">Learn more</Link>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">SWR Realtime</h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                            </ul>
                            <Link to="/swr" className="btn btn-lg btn-block btn-primary">Learn more</Link>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Form Component</h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                            </ul>
                            <Link to="/notification" className="btn btn-lg btn-block btn-primary">Learn more</Link>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Drag and Drop Component</h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                            </ul>
                            <Link to="/notification" className="btn btn-lg btn-block btn-primary">Learn more</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;