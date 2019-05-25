import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleDeleteUser = this.handleDeleteUser.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser() {
        event.preventDefault()
        const { search} = this.state;
        return () => this.props.dispatch(userActions.delete(search));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-12">
                <h1 >Hi {user.firstName}</h1><p>
                 <Link to="/login" className="logout">Logout</Link>
                </p>
                <p>
                    <Link to="/change">Change Password</Link>
                </p>
                <form className="example">
                 <input type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
                <button type="submit" onClick={this.handleDeleteUser}><i className="fa fa-search"></i></button>
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };