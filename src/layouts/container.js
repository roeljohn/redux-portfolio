import React, { Component } from 'react';
import MainHeader from './mainHeader';
import MainFooter from './mainFooter';

class Container extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                {this.props.children}
                <MainFooter />
            </div>
        );
    }
}

export default Container;