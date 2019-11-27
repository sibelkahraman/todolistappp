import React, {Component} from 'react';
import UserService from './UserService';

const userService = new UserService();

class UserCreateUpdate extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount(){
		const{ match: { params }} = this.props;
		if(params && params.pk){
			userService.getUser(params.pk).then((c)=>{
				this.refs.userName.value = c.user_name;
				this.refs.userPass.value = c.user_pass;
			})
		}
	}
	
	
	handleCreate(){
		userService.createUser(
			{
				"user_name": this.refs.userName.value,
				"user_pass": this.refs.userPass.value,
			}
			).then((result)=>{
				alert("User created!")
			}).catch(function (error){
			alert(error)
		});
	}
	
	handleUpdate(pk){
		userService.updateUser(
			{
				"pk": pk,
				"user_name": this.refs.userName.value,
				"user_pass": this.refs.userPass.value
			}
			).then((result)=>{
				alert("User Updated!")
			}).catch(()=>{
				alert('There was a error! Please re-check your from.');
			});
	}
	
	handleSubmit(event){
		const { match: { params } } = this.props;
		if(params && params.pk){
			this.handleUpdate(params.pk);
		}
		else{
			
			this.handleCreate();
			
		}
		event.preventDefault();
	}
	
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label>
						User Name: </label>
						<input className="form-control" type="text" ref='userName' />
					<label>
						User Pass: </label>
						<input className="form-control" type="text" ref='userPass' />
					
					<input className="btn btn-primary" type="submit" value="Submit" />
				</div>
			</form>
		);
	}
}

export default UserCreateUpdate;
