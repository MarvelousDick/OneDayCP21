import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import {changeMatcherProfile, changeUserProfile} from '../../redux/actions'
import {connect} from 'react-redux'
import BottomBar from '../interface-components/bottom-bar'
import UserProfile from '../profile/user-profile'
import TestComponent3 from '../test-component/test-component3'

import HomePage from '../cp-interface/home-page'
import NewUserProfile from '../profile/new-user-profile'
import Match from '../match/match'
import Myself from '../me/myself'


import {HashRouter, Route} from 'react-router-dom'
import axios from "axios";

const styles = {
    root: {},
};


class CpInterface extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let mainPage;

        // if (this.props.userProfile.userStatus === 2) {
        //     // this.props.history.replace('/newUserProfile');
        //     //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
        // } else if (this.props.userProfile.userStatus === 3) {
        //
        // }

        mainPage = (
            <HashRouter basename="/">
                <div>
                    <Route exact path="/" component={HomePage}/>

                    <Route exact path="/newUserProfile" component={NewUserProfile}/>
                    <Route exact path="/match" component={Match}/>
                    <Route exact path="/myself" component={Myself}/>

                    <div style={{
                        bottom: '0px',
                        width: '100%',
                        position: 'fixed',
                        left: '0px'
                    }}>
                        <BottomBar/>
                    </div>
                </div>

            </HashRouter>
        );

        // if (this.props.userType === 2) {
        //     mainPage = (
        //         <div>
        //             <UserProfile/>
        //         </div>
        //     )
        // } else {
        //     mainPage = (
        //         <div>
        //             <div style={{
        //                 // marginTop: '1%'
        //                 //假如是用户资料,则marginBottom 设20%,假如不是,则不设置
        //                 // marginBottom: '20%'
        //                 width: '100%',
        //                 // paddingLeft: '10%',
        //                 // paddingRight: '10%'
        //             }}>
        //                 {/*<UserProfile/>*/}
        //                 {/*<NewUserProfile/>*/}
        //                 <Match/>
        //                 {/*<TestMatch/>*/}
        //                 {/*<Myself/>*/}
        //             </div>
        //             <div style={{
        //                 bottom: '0px',
        //                 width: '100%',
        //                 position: 'fixed'
        //             }}>
        //                 {/*<BottomBar/>*/}
        //                 {/*<TestComponent3/>*/}
        //
        //             </div>
        //         </div>
        //     )
        // }

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

// @withRouter
export default connect(
    state => ({userType: state.userType}, {userProfile: state.userProfile}),
    {changeMatcherProfile, changeUserProfile}
)(withStyles(styles)(CpInterface));
