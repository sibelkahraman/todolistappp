import React, {Component} from 'react';
import ListAbstractService from './ListAbstractService';

const listAbstractService = new ListAbstractService();

class ListAbstractList extends Component{
	constructor(props){
		super(props);
		this.state = {
			list_abstracts: [],
			nextPageURL: ''
		};
		this.nextPage = this.nextPage.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	
	componentDidMount(){
		var self = this;
		listAbstractService.getListAbstracts().then(function (result){
			console.log(result);
			self.setState({list_abstracts: result.data, nextPageURL: result.nextlink})
		});
	}
	handleDelete(e, pk){
		var self = this;
		ListAbstractService.deleteListAbstract({pk: pk}).then(()=>{
			var newArr = self.state.list_abstracts.filter(function(obj){
				return obj.pk !== pk;
			});
			
			self.setState({list_abstracts: newArr})
		});
	}
	
	nextPage(){
		var self = this;
		console.log(this.state.nextPageURL);
		listAbstractService.getListAbstractsByURL(this.state.nextPageURL).then((result) =>{
			self.setState({list_abstracts: result.data, nextPageURL: result.nextlink})
		});
	}
	render(){
		return(
			<div className="listabstracts--list">
				<table className="table" >
					<thead key="thead">
						<tr>
							<th>#</th>
							<th>User</th>
							<th>List Name</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
					{this.state.list_abstracts && this.state.list_abstracts.map(c =>
						<tr key={c.pk}>
						<td>{c.pk}</td>
						<td>{c.user}</td>
						<td>{c.list_name}</td>
						<td>
						<button onClick={(e)=> this.handleDelete(e, c.pk)}> Delete</button>
						<a href={"/list-abstract/" + c.pk}> Update</a>
						</td>
						</tr>)}
					</tbody>
				</table>
			<button className="btn btn-primary" onClick={this.nextPage}>Next</button>
			</div>
		);
	}
}

export default ListAbstractList;
