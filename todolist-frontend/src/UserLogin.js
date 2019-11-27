import React, {Component} from 'react';
import UserService from './UserService';
import ListAbstractCreateUpdate from './ListAbstractCreateUpdate';
const userService = new UserService();


//var window.$login = -1
const loginContext = React.createContext(false);
 
class UserLogin extends Component{
	
	static loginContextt = loginContext;
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			nextPageURL: '',
		};
		this.nextPage = this.nextPage.bind(this);
		this.handleLogin = this.handleLogin.bind(this);

	}
	
	componentDidMount(){
		var self = this;
		userService.getUsers().then(function (result){
				console.log(result);
				self.setState({users: JSON.stringify(result).split('"},'), nextPageURL: result.nextlink})
			})
		.catch(function (error){
			alert(error)
		});
	}
	
	handleLogin(){
		var self = this;
		var x = 0;
				
		console.log(loginContext);
		console.log(this.loginContextt);
		for (let i=0; i < this.state.users.length; i++){
			let a = (self.state.users[i]);
			var user = a.match(/"[\w]+\"/g);
			var pass = a.split(':"');
			user[2]= (user[2].replace('"', "")).replace('"', "");
			if(user[2] === this.refs.userName.value && pass[2] === this.refs.userPass.value){
				alert('Login Success');
				this.loginContextt = true;
				console.log(this.loginContextt);
				
				x = 1;
				break;
			}
		}
		if (x === 0){
			alert('Invalid Username/Password');
			//login = -1
		}
	}
	nextPage(){
		var self = this;
		console.log(this.state.nextPageURL);
		
		userService.getUsersByURL(this.state.nextPageURL).then((result) => {
			self.setState({users: result.data, nextPageURL: result.nextlink})
		});
	}	
	render(){
		return(
			
			<div className="user---login">
				<table className="form">
					<thead key="thead">
						<div className="form-group">
					<label>
						User Name:</label>
						<input className="form-control" type="text" ref='userName' />
					<label>
						User Pass:</label>
						<input className="form-control" type="text" ref='userPass' />
				
					<button className="btn btn-primary" onClick= { this.handleLogin }>Login</button>
					</div>
					</thead>
					<tbody>
					{ this.state.users.map(c => 
						<tr key={c.pk}>
						<td>{c.pk} </td>
						<td>{c.user_name}</td>
						<td>{c.user_pass}</td>
						</tr>)}
					</tbody>
				</table>
			</div>
			
		);
	}
	
}
export default UserLogin;



