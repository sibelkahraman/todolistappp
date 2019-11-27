import React, {Component} from 'react';
import UserService from './UserService';

const userService = new UserService();

class UserLogin extends Component{
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			nextPageURL: '',
		};
		this.nextPage = this.nextPage.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	
	componentDidMount(){
		var self = this;
		userService.getUsers().then(function (result){
			console.log(result);
			self.setState({users: result.data, nextPageURL: result.nextlink})
		});
	
	}
	
	handleLogin(){
		var self = this;
		userService.getUsers().then(function (result){
			console.log(result);
			self.setState({users: result.data, nextPageURL: result.nextlink})
		});
		console.log(result);

		/*userService.createUser(
			{
				"user_name": this.refs.userName.value,
				"user_pass": this.refs.userPass.value,
			}
			).then((result)=>{
				alert("User created!")
			}).catch(()=>{
				alert('There was an error! Please re-check your form.');
			});*/
	}
	nextPage(){
		var self = this;
		console.log(this.state.nextPageURL);
		userService.getUsersByURL(this.state.nextPageURL).then((result) => {
			self.setState({u: result.data, nextPageURL: result.nextlink})
		});
	}	
	render(){
		return(
			<form onSubmit={this.handleLogin}>
				<div className="form-group">
					<label>
						User Name:</label>
						<input className="form-control" type="text" ref='userName' />
					<label>
						List Name:</label>
						<input className="form-control" type="text" ref='listName' />
				
					<input className="btn btn-primary" type="submit" value="Submit" />
				</div>
			</form>	
		);
	}
	
}
export default UserLogin;



