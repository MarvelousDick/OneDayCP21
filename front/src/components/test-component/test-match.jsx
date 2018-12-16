import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import Card from '@material-ui/core/Card';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssRoot: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
    bootstrapRoot: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
});

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
    typography: {
        useNextVariants: true,
    },
});


class TestMatch extends React.Component {
    state = {
        name: '',
        matchName: ''
    };
    match = () => {
        if (this.state.name === '') {
            this.setState({
                matchName: '名字不可以为空且区分大小写'
            });
            return
        }
        axios.get('http://oneweekcpuni.mynatapp.cc/api/test/match?userName=' + this.state.name)
            .then(json => {
                this.setState({
                    matchName: json.data
                })
            })

    };
    handleChange = name => event => {

        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <div className={classes.container}>

                    <div>规则</div>

                    <TextField
                        id="standard-name"
                        label="输入自己的名称(确认之后不可以修改)"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        style={{width: '100%'}}
                    />

                    <MuiThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" className={classes.margin} onClick={this.match}>
                            匹配
                        </Button>
                    </MuiThemeProvider>
                    <div style={{paddingLeft: '30%'}}>
                        <div>你的小伙伴</div>
                        <div>{this.state.matchName}</div>
                    </div>

                </div>
                <div>
                    alex <br/>
                    gang <br/>
                    ling <br/>
                    hao <br/>
                    li <br/>
                    august <br/>
                    taylor <br/>
                    haocheng <br/>
                    xin <br/>
                    kenny <br/>
                    changchang <br/>
                    yintao <br/>
                    miranda <br/>
                    amanda <br/>
                    boone <br/>
                    david <br/>
                    xueying <br/>
                    lingyi <br/>
                    sylvie <br/>
                    frank <br/>
                    zhuangyuan <br/>
                    jessie <br/>
                    jiaxun <br/>
                    ruyu <br/>
                    yellow tao <br/>
                </div>
            </div>
        )
    }


}


export default withStyles(styles)(TestMatch);