import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux'

import BottomBar from '../interface-components/bottom-bar'
import TestComponent from '../test-component/test-component'

import UserProfile from '../profile/user-profile'

const styles = {
    root: {},
};


class CpInterface extends React.Component {

    render() {
        let mainPage
        if (this.props.userType === 1) {
            mainPage = (
                <div>
                    {/*<TestComponent/>*/}
                    <UserProfile />
                    <div style={{
                        bottom: '0px',
                        width: '100%',
                        position: 'fixed'
                    }}>
                        <BottomBar/>
                    </div>
                </div>
            )
        } else {
            mainPage = (
                <div>
                    <TestComponent/>
                </div>
            )
        }

        return (
            <div>
                {mainPage}
            </div>
        )
    }
}

CpInterface.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    state => ({userType: state.userType})
)(withStyles(styles)(CpInterface));
