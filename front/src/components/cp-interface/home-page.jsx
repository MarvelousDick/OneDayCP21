import React from 'react'
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {changeUserProfile} from '../../redux/actions'


import {Redirect, withRouter} from 'react-router-dom';


class HomePage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userProfile: this.props.userProfile
        };
    }


    componentDidMount() {

        axios.get('http://oneweekcpuni.mynatapp.cc/api/user/userInfo/oefRZ1e0IsLAL9hVTP5aG_Z0vGnA')
            .then(
                json => {
                    this.props.changeUserProfile(json.data.data);
                    this.setState({
                        userProfile: json.data.data
                    });
                    console.log(this.props.userProfile);

                    // this.props.history.push("/myself");

                    if(this.props.userProfile.userStatus === 1){
                        this.props.history.push("/newUserProfile");
                    }else if(this.props.userProfile.userStatus === 2){
                        this.props.history.push("/match");
                    }

                    // if (this.props.userProfile.userStatus === 2) {
                    //     // this.props.history.replace('/newUserProfile');
                    //     //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
                    //     return <Redirect push to="/newUserProfile" />
                    //
                    // } else if (this.props.userProfile.userStatus === 3) {
                    //
                    // }

                }
            )
    }


    render() {

        // return <Redirect push to="/newUserProfile"/>
        return (
            <div>
            </div>
        )
    }
}


export default withRouter(connect(
    state => ({userType: state.userType}, {userProfile: state.userProfile}),
    {changeUserProfile}
)(HomePage));