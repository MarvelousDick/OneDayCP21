import React from 'react'

import UserProfile from './user-profile'
import {Button, FontIcon, SVGIcon} from 'react-md';
import connect from "react-redux/es/connect/connect";
import {changeUserProfile} from "../../redux/actions";

class NewUserProfile extends React.Component {


    submitUserProfile = () => {
        console.log(this.props.userProfile);
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