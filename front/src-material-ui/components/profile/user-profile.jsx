import React from 'react'
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import {withStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: '100%',
    },
});

class UserProfile extends React.Component {

    state = {
        nickName: '',
        sex: '',
        matchSex: '',
        birthday: '',
        wechatAccount: '',
        university: '上海大学',
        major: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;
        const textFieldList = [
            {
                fieldType: 'textField',
                id: 'nickName',
                label: '昵称',
                value: this.state.nickName,
                onChange: this.handleChange('nickName'),
                margin: 'normal'
            }, {
                fieldType: 'textField',
                id: 'sex',
                label: '你的性别',
                value: this.state.sex,
                onChange: this.handleChange('sex'),
                margin: 'normal'
            }, {
                fieldType: 'textField',
                id: 'matchSex',
                label: 'TA的性别',
                value: this.state.matchSex,
                onChange: this.handleChange('matchSex'),
                margin: 'normal'
            }, {
                fieldType: 'datePicker',
                id: 'birthday',
                type: 'date',
                label: '生日',
                value: this.state.birthday,
                onChange: this.handleChange('birthday'),
                margin: 'normal'
            }, {
                fieldType: 'textField',
                id: 'wechatAccount',
                label: '微信号',
                value: this.state.wechatAccount,
                onChange: this.handleChange('wechatAccount'),
                margin: 'normal'
            }, {
                fieldType: 'textField',
                id: 'university',
                label: '大学',
                value: this.state.university,
                onChange: this.handleChange('university'),
                margin: 'normal'
            }, {
                fieldType: 'textField',
                id: 'major',
                label: '专业',
                value: this.state.major,
                onChange: this.handleChange('major'),
                margin: 'normal'
            }
        ];

        let profileList = () => {
            let res = []
            for (let i = 0; i < textFieldList.length; i++) {
                if (textFieldList[i].fieldType === 'textField') {
                    res.push(
                        <TextField
                            key={i}
                            id={textFieldList[i].id}
                            label={textFieldList[i].label}
                            className={classes.textField}
                            value={textFieldList[i].value}
                            onChange={textFieldList[i].onChange}
                            margin={textFieldList[i].margin}
                        />
                    )
                } else if (textFieldList[i].fieldType === 'datePicker') {
                    res.push(

                    )
                }
            }
            return res
        };

        let list = (length) => {
            let res = [];
            for (let i = 0; i < length; i++) {
                res.push(<h2 key={i}>hello react</h2>)
            }
            return res
        };

        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    {profileList()}
                </form>
            </div>
        )
    }
}

UserProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    state => ({userType: state.userType})
)(withStyles(styles)(UserProfile));
