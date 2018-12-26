import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux'
import BottomBar from '../interface-components/bottom-bar'
import UserProfile from '../profile/user-profile'
import TestComponent3 from '../test-component/test-component3'
import {getUserInfo} from '../../redux/actions'

import NewUserProfile from '../profile/new-user-profile'
import Match from '../match/match'
import Myself from '../me/myself'

import axios from 'axios'
import Card from "@material-ui/core/Card/Card";

import TestMatch from "../test-component/test-match"

const styles = {
    root: {},
};


class CpInterface extends React.Component {

    componentDidMount() {
        // axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
        //     .then(json => console.log(json))

        // axios.get('http://localhost:8081/')
        //     .then(json => console.log(json))
        // let a = 'uyio';
        // this.props.getUserInfo(a)
        // axios.get('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcb6afee676d68aa8&redirect_uri=http%3a%2f%2foneweekcpuni.mynatapp.cc%2f&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect')
        //     .then(json => console.log(json))
        axios.get('http://oneweekcpuni.mynatapp.cc/api/user/getUserInfo/oefRZ1e0IsLAL9hVTP5aG_Z0vGnA')
            .then(json => console.log(json))
    }

    render() {
        let mainPage;
        if (this.props.userType === 2) {
            mainPage = (
                <div>
                    <UserProfile/>
                </div>
            )
        } else {
            mainPage = (
                <div>
                    <div style={{
                        // marginTop: '1%'
                        //假如是用户资料,则marginBottom 设20%,假如不是,则不设置
                        // marginBottom: '20%'
                        width: '100%',
                        // paddingLeft: '10%',
                        // paddingRight: '10%'
                    }}>
                        {/*<UserProfile/>*/}
                        <NewUserProfile/>
                        {/*<Match/>*/}
                        {/*<TestMatch/>*/}
                        {/*<Myself/>*/}
                    </div>
                    <div style={{
                        bottom: '0px',
                        width: '100%',
                        position: 'fixed'
                    }}>
                        {/*<BottomBar/>*/}
                        {/*<TestComponent3/>*/}

                    </div>
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
    state => ({userType: state.userType}),
    {getUserInfo}
)(withStyles(styles)(CpInterface));
