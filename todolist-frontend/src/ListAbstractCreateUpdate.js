import React, {Component} from 'react';
import ListAbstractService from './ListAbstractService';
import UserLogin from './UserLogin';

const listAbstractService = new ListAbstractService();

var login = login;

class ListAbstractCreateUpdate extends Component{
	
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount(){
		const{ match: { params }} = this.props;
		if(params && params.pk){
			listAbstractService.getListAbstract(params.pk).then((c) => {
				this.refs.userName.value = c.user_id;
				this.refs.listName.value = c.list_name;
			})
		}
	}
	
	
	handleCreate(){
alert(login);
		if (!login){
			alert('First Login');
		}
			alert('User ' + String(login) + ' is Login');
		listAbstractService.createListAbstract(
			{
				"user_name": this.refs.userName.value,
				"list_name": this.refs.listName.value
			}
			).then((result)=>{
				alert("List Created!");
			}).catch(()=>{
				alert("There was an error! Please re-check your form!");
			});
		
	}
	
	handleUpdate(pk){
		listAbstractService.updateListAbstract(
			{
				"pk": pk,
				"user_id": this.refs.userName.value,
				"list_name": this.refs.listName.value
			}
			).then((result)=>{
				alert("List Abstract Updated!")
			}).catch(() => {
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

export default ListAbstractCreateUpdate;