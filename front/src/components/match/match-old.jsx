import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import connect from 'react-redux/es/connect/connect';

// import testImg from '../public/pic/666.png';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 600,
        padding: theme.spacing.unit * 2,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});


function MatchOld(props) {
    const {classes} = props;
    return (
        <Paper className={classes.root}>
            <Grid container spacing={16}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        {/*<img className={classes.img}*/}
                             {/*alt="complex"*/}
                             {/*src={testImg}/>*/}
                        <img className={classes.img}
                        alt="complex"
                        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1608431072,669449145&fm=27&gp=0.jpg"/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subheading">
                                Standard license
                            </Typography>
                            <Typography gutterBottom>Full resolution 1920x1080 • JPEG</Typography>
                            <Typography color="textSecondary">ID: 1030114</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{cursor: 'pointer'}}>Remove</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subheading">$200.00</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

MatchOld.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    state => ({userType: state.userType})
)(withStyles(styles)(MatchOld))