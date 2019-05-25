import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';

import { userActions } from '../_actions';

class ChangePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldusername: '',
            newpassword: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }
    handleCancel(e) {
        e.preventDefault();
        history.push('/');
    }
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }


    render() {
        const { user, users } = this.props;
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
            <h2>Chnage Password</h2>
            <form name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                    <label htmlFor="username">Old Password</label>
                    <input type="password" className="form-control" name="oldusername" value={username} onChange={this.handleChange} />
                    {submitted && !oldusername &&
                        <div className="help-block">Old Password is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <label htmlFor="password">New Password</label>
                    <input type="password" className="form-control" name="newpassword" value={password} onChange={this.handleChange} />
                    {submitted && !nwpassword &&
                        <div className="help-block">New Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Submit</button>
                    <button className="btn btn-primary" onClick={this.handleCancel}>cancel</button>
                </div>
            </form>
        </div>
             
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
         user,
        users
    };
}

const connectedChangePage= connect(mapStateToProps)(ChangePage);
export { connectedChangePage as ChangePage };