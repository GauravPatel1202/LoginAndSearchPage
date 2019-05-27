import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchlistdata:[]
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
        const {search} = this.state;

        const {users} = this.props;
        let matchedUsers = users.items.filter(user => { 
            return JSON.stringify(user).toLocaleLowerCase().includes(search.toLocaleLowerCase());
        
        });
        
        let user = matchedUsers.length ? matchedUsers : [];
        this.setState({ 
            searchlistdata: user
        });
    }

    render() {
        const { user, users } = this.props;
        const list = this.state.searchlistdata.map((invoice, index) => {
            return (
                <tr key={index}>
                    <td>{invoice.firstName}</td>
                    <td>{invoice.lastName}</td>
                    <td>{invoice.company}</td>
                    <td>{invoice.Email}</td>
                    <td>{invoice.Phone}</td>
                    <td>{invoice.address}</td>
                </tr>
            )
        });
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
                 <div className="Invoices" >

                 { list.length>0
                 ?  <table className="table">
                 <thead>
                     <tr>
                         <th>firstName</th>
                         <th>lastName</th>
                         <th>Company</th>
                         <th>Email</th>
                         <th>Phone</th>
                         <th>Address</th>
                     </tr>
                 </thead>
                 <tbody>
                     {list}
                 </tbody>
             </table>
                 : 
                    'no data found'
                
                 }
                   
                </div>
            </div>
             
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users};
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };