import React, {Component} from 'react';
import UserService from './UserService';

const userService = new UserService();

class UserList extends Component{
	constructor(props) {
		super(props);
		this.state = {
			u: [],
			nextPageURL: '',
		};
		this.nextPage = this.nextPage.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	
	componentDidMount(){
		var self = this;
		userService.getUsers().then(function (result){
			console.log(result);
			self.setState({u: result.data, nextPageURL: result.nextlink})
		});
	
	}
	handleDelete(e, pk){
		var self = this;
		userService.deleteUser({pk: pk}).then(()=>{
			var newArr = self.state.u.filter(function(obj){
				return obj.pk !== pk;
			});
			
			self.setState({u: newArr})
		});
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
			<div className="users--list">
				<table className="table">
					<thead key="thead">
						<tr>
							<th>#</th>
							<th>User Name</th>
							<th>User Pass</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
					{this.state.u && this.state.u.map(c => 
						<tr key={c.pk}>
						<td>{c.pk} </td>
						<td>{c.user_name}</td>
						<td>{c.user_pass}</td>
						<td>
						<button onClick={(e)=> this.handleDelete(e, c.pk)}> Delete</button>
						<a href={"/user/" + c.pk}> Update</a>
						</td>
						</tr>)}
					</tbody>
				</table>
				<button className="btn btn-primary" onClick= { this.nextPage }>Next</button>
			</div>
		);
	}
	
}
export default UserList;



