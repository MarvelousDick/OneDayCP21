import React from 'react'
import connect from "react-redux/es/connect/connect";
import {DatePicker, SelectField, TextField} from "react-md";
import {changeUserProfile} from '../../redux/actions'
import axios from "axios";
import DateFormat from 'dateformat-util'

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userProfile: this.props.userProfile
        };
    }

    componentDidMount() {

    }

    handleChange = (stateName) => (e) => {
        let {userProfile} = this.state;
        userProfile[stateName] = e;

        this.setState({
            userProfile: userProfile
        });
        // console.log(userProfile);
        this.props.changeUserProfile(userProfile);
        console.log(this.props.userProfile)
    };


    handleChangeDate = (stateName) => (e) => {
        let {userProfile} = this.state;
        let time = new Date(e);
        userProfile[stateName] = DateFormat.format(time, 'yyyy-MM-dd');
        this.setState({
            userProfile: userProfile
        });

        this.props.changeUserProfile(userProfile);
        console.log(this.props.userProfile)
    };


    transNullValue = (value) => {
        if (value == null) {
            return "";
        }
        return value;
    };

    render() {

        const sexItems = [{
            value: 1,
            label: '男',
        }, {
            value: 2,
            label: '女',
        }];

        const textFieldList = [
            {
                fieldType: 'textField',
                id: 'nickName',
                label: '昵称',
                lineDirection: 'center',
                className: 'md-cell md-cell--bottom',
                value: this.transNullValue(this.state.userProfile.nickName),
                onChange: this.handleChange('nickName'),
                fullWidth: true
            }, {
                fieldType: 'selectField',
                id: 'sex',
                label: '你的性别',
                lineDirection: 'center',
                className: 'md-cell md-cell--bottom',
                value: this.transNullValue(this.state.userProfile.sex),
                onChange: this.handleChange('sex'),
                menuItems: sexItems,
                itemLabel: 'label',
                itemValue: 'value',
                fullWidth: true
            }, {
                fieldType: 'selectField',
                id: 'sex',
                label: '期望中TA的性别',
                lineDirection: 'center',
                className: 'md-cell md-cell--bottom',
                value: this.transNullValue(this.state.userProfile.matchSex),
                onChange: this.handleChange('matchSex'),
                menuItems: sexItems,
                itemLabel: 'label',
                itemValue: 'value',
                fullWidth: true
            }, {
                fieldType: 'datePicker',
                id: 'birthday',
                label: '生日',
                locales: 'zh-CN',
                className: 'md-cell',
                value: this.transNullValue(this.state.userProfile.birthday),
                onChange: this.handleChangeDate('birthday'),
                displayMode: true
            }, {
                fieldType: 'textField',
                id: 'wechatAccount',
                label: '微信号',
                lineDirection: 'center',
                className: 'md-cell md-cell--bottom',
                value: this.transNullValue(this.state.userProfile.wechatAccount),
                onChange: this.handleChange('wechatAccount'),
                fullWidth: true
            }, {
                fieldType: 'textField',
                id: 'university',
                label: '大学',
                lineDirection: 'center',
                className: 'md-cell md-cell--bottom',
                value: this.transNullValue(this.state.userProfile.university),
                onChange: this.handleChange('university'),
                fullWidth: true
            }, {
                fieldType: 'textField',
                id: 'major',
                label: '专业',
                lineDirection: 'center',
                className: 'md-cell md-cell--bottom' || "",
                value: this.transNullValue(this.state.userProfile.major),
                onChange: this.handleChange('major'),
                fullWidth: true
            }
        ];

        let profileList = () => {
            let res = [];
            for (let i = 0; i < textFieldList.length; i++) {
                if (textFieldList[i].fieldType === 'textField') {
                    res.push(
                        <TextField
                            key={i}
                            id={textFieldList[i].id}
                            label={textFieldList[i].label}
                            lineDirection={textFieldList[i].lineDirection}
                            className={textFieldList[i].className}
                            value={textFieldList[i].value}
                            onChange={textFieldList[i].onChange}
                            fullWidth={textFieldList[i].fullWidth}
                        />
                    )
                } else if (textFieldList[i].fieldType === 'selectField') {
                    res.push(
                        <SelectField
                            key={i}
                            id={textFieldList[i].id}
                            label={textFieldList[i].label}
                            className={textFieldList[i].className}
                            value={textFieldList[i].value}
                            onChange={textFieldList[i].onChange}
                            menuItems={textFieldList[i].menuItems}
                            itemLabel={textFieldList[i].itemLabel}
                            itemValue={textFieldList[i].itemValue}
                            position={SelectField.Positions.BELOW}
                        />
                    )
                } else if (textFieldList[i].fieldType === 'datePicker') {
                    res.push(
                        <DatePicker
                            key={i}
                            id={textFieldList[i].id}
                            label={textFieldList[i].label}
                            locales={textFieldList[i].locales}
                            className={textFieldList[i].className}
                            value={textFieldList[i].value}
                            onChange={textFieldList[i].onChange}
                        />
                    )
                }
            }
            return res
        };

        return (

            <div>
                <div className="md-grid">
                    {profileList()}
                </div>
            </div>

        )

    }
}

export default connect(
    state => ({userType: state.userType}, {userProfile: state.userProfile}),
    {changeUserProfile}
)(UserProfile);
