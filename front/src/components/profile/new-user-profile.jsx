import React from 'react'

import UserProfile from './user-profile'
import {Button, FontIcon, SVGIcon} from 'react-md';
import connect from "react-redux/es/connect/connect";
import {changeUserProfile} from "../../redux/actions";
import axios from "axios";

class NewUserProfile extends React.Component {


    submitUserProfile = () => {
        // axios.post('http://oneweekcpuni.mynatapp.cc/api/user/UserInfo/oefRZ1e0IsLAL9hVTP5aG_Z0vGnA')
        //     .then(data => console.log(data));

        let params = new URLSearchParams();
        let userInfo = this.props.userProfile;
        console.log(userInfo);
        params.append('userInfo', userInfo);

        // axios.post('http://oneweekcpuni.mynatapp.cc/api/user/UserInfo/oefRZ1e0IsLAL9hVTP5aG_Z0vGnA', params)
        //     .then(data => {
        //         console.log(data)
        //     }).catch(function (e) {
        //     alert("error:" + e);
        // })

        axios({
            method: 'post',
            url: 'http://oneweekcpuni.mynatapp.cc/api/user/userInfo/oefRZ1e0IsLAL9hVTP5aG_Z0vGnA',
            data: userInfo,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })

    };


    render() {
        return (
            <div>
                <UserProfile/>
                <div className="buttons__group">
                    <Button
                        raised
                        primary
                        onClick={this.submitUserProfile}
                        style={{width: '100%'}}>开始匹配</Button>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({userType: state.userType}, {userProfile: state.userProfile}),
    {changeUserProfile}
)(NewUserProfile);