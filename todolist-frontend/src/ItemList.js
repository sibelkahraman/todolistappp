import React, {Component} from 'react';
import ItemService from './ItemService';

const itemService = new ItemService();

class ItemList extends Component{
	constructor(props) {
		super(props);
		this.state = {
			nextPageURL: '',
			items: []
		};
		this.nextPage = this.nextPage.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	
	componentDidMount(){
		var self = this;
		itemService.getItems().then(function (result){
				self.setState({items: JSON.parse(JSON.stringify(result)), nextPageURL: result.nextlink})
			})
		.catch(function (error){
			alert(error)
		});
		
	}
	handleDelete(e, pk){
		var self = this;
		itemService.deleteItem({pk: pk}).then(()=>{
			var newArr = self.state.items.filter(function(obj){
				return obj.pk !== pk;
			});
			
			self.setState({items: newArr})
		});
	}
	
	nextPage(){
		var self = this;
		console.log(this.state.nextPageURL);
		itemService.getItemsByURL(this.state.nextPageURL).then((result) => {
			self.setState({items: result.data, nextPageURL: result.nextlink})
		});
	}	
	render(){
		return(
			<div className="items--list">
				<table className="table">
					<thead key="thead">
						<tr>
							<th>#</th>
							<th>List Name</th>
							<th>Item</th>
							<th>Complete </th>
							<th>Status</th>
							<th>Description</th>
							<th>Expire Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
					{ this.state.items.map(c => 
						<tr key={c.pk}>
						<td>{c.pk} </td>
						<td>{c.list}</td>
						<td>{c.item}</td>
						<td>{c.complete}</td>
						<td>{c.status}</td>
						<td>{c.description}</td>
						<td>{c.expire_date}</td>
						<td>
						<button onClick={(e)=> this.handleDelete(e, c.pk)}> Delete</button>
						<a href={"/list/" + c.pk}> Update</a>
						</td>
						</tr>)}
					</tbody>
				</table>
				<button className="btn btn-primary" onClick= { this.nextPage }>Next</button>
			</div>
		);
	}
	
}
export default ItemList;



