import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Button, Snackbar} from 'react-md';
import connect from 'react-redux/es/connect/connect';
import Style from './style.scss';
import {receiveMatcherProfile, changeUserType, changeMatcherProfile} from "../../redux/actions";
import axios from 'axios';
import copy from 'copy-to-clipboard';


let user = {
    basicInfo: {
        name: "Jane Doe",
        gender: "Female",
        birthday: "April 3, 1990",
        location: "Los Angeles, CA",
        photo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608431072,669449145&fm=27&gp=0.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit quia pariatur est saepe necessitatibus, quibusdam reiciendis ratione voluptate atque in qui provident rem repellat soluta. Blanditiis repellat velit eligendi."
    }

};

let userProfile = {
    nickName: "nick",
    photo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608431072,669449145&fm=27&gp=0.jpg",
    sex: "sex8",
    matchSex: "sex9",
    birthday: "1990-01-01",
    wechatAccount: "temash",
    university: "上海大学",
    major: "电气工程及其自动化"
};


class Avatar extends React.Component {
    render() {
        let image = this.props.image,
            style = {
                width: this.props.width || 50,
                height: this.props.height || 50
            };

        if (!image) return null;

        return (
            <div className="avatar" style={style}>
                <img src={this.props.image}/>
            </div>
        );
    }
}

class MainPanel extends React.Component {
    render() {
        let info = this.props.info;
        if (!info) return null;

        return (
            <div>
                <div className="top">
                    <Avatar
                        image={info.photo}
                        width={100}
                        height={100}
                    />
                    <h2>{info.nickName}</h2>
                    <h3>{info.birthday}</h3>
                    {/*<h3>000</h3>*/}
                    <hr/>
                    <p>{info.university} | {info.major}</p>
                </div>

                <div className="bottom">
                    <p>微信号</p>
                    <h4>{info.wechatAccount}</h4>
                </div>
            </div>
        );
    }
}

class Match extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matcherProfile: this.props.matcherProfile,
            toasts: [],
            autoHide: true
        };
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
            .then(json => {

                const init = {
                    nickName: "nicky000000",
                    photo: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608431072,669449145&fm=27&gp=0.jpg",
                    sex: "sex8",
                    matchSex: "sex9",
                    birthday: "1990-01-01",
                    wechatAccount: "temash",
                    university: "上海大学",
                    major: "电气工程及其自动化"
                };

                this.setState({
                    matcherProfile: init,
                });

                this.props.changeMatcherProfile(init);

                console.log(json)
            });
    };

    addToast = (text, action, autoHide = true) => {
        this.setState((state) => {
            const toasts = state.toasts.slice();
            toasts.push({text, action});
            return {toasts, autoHide};
        });
    };
    toastHello = () => {
        this.addToast('Hello, World!');
    };
    submitUserProfile = () => {
        console.log(this.props.matcherProfile);
    };

    copyToClipboard = () => {
        copy(this.state.matcherProfile.wechatAccount);
        this.addToast('Hello, World!');
        console.log("复制成功")
    };

    render() {
        return (
            <div>
                <div id="user-profile">
                    <MainPanel info={this.state.matcherProfile}/>
                </div>
                <div className="buttons__group"
                     style={{
                         marginTop: '10%',
                     }}>
                    <Button raised primary swapTheming
                            onClick={this.copyToClipboard}
                            style={{
                                width: '45%',
                                float: 'left',
                            }}
                        // tooltipLabel="I am another tooltip!" tooltipPosition="top"
                    >复制微信号</Button>
                    <Button raised primary swapTheming
                            onClick={this.submitUserProfile}
                            style={{
                                width: '45%',
                                float: 'left',
                                marginLeft: '10%',
                            }}
                    >换一个</Button>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        userType: state.userType,
        matcherProfile: state.matcherProfile
    }), {
        receiveMatcherProfile,
        changeMatcherProfile
    }
)(withStyles(Style)(Match))
