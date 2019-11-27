import React, {Component} from 'react';
import ItemService from './ItemService';

const itemService = new ItemService();

class ItemCreateUpdate extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount(){
		const{ match: { params }} = this.props;

		if(params && params.pk){
			itemService.getItem(params.pk).then((c) =>{
				this.refs.listName.value = c.list;
				this.refs.item.value = c.item;
				this.refs.complete.value = c.complete;
				this.refs.status.value = c.status;
				this.refs.description.value = c.description;
				this.refs.expireDate.value = c.expire_date;
				
			})
			
		}
	}
	
	
	handleCreate(){
		itemService.createItem(
			{
				"list": this.refs.listName.value ,
				"item": this.refs.item.value,
				"complete": this.refs.complete.value,
				"status" : this.refs.status.value,
				"description": this.refs.description.value,
				"expire_date": this.refs.expireDate.value,
			}
			).then((result)=>{
				alert("Item created!")
				alert(JSON.stringify(result))

			}).catch(function (error){
				alert(error);
				//alert('There was an error! Please re-check your form.');
			});
	}
	
	handleUpdate(pk){
		itemService.updateItem(
			{
				"pk": pk,
				"list": this.refs.listName.value ,
				"item": this.refs.item.value,
				"complete": this.refs.complete.value,
				"status" : this.refs.status.value,
				"description": this.refs.description.value,
				"expire_date": this.refs.expireDate.value,
			}
			).then((result)=>{
				alert("Item Updated!")
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
						List Name: </label>
						<input className="form-control" type="text" ref='listName' />
					<label>
						Item: </label>
						<input className="form-control" type="text" ref='item' />
					<label>
						Complete: </label>
						<input className="form-control" type="boolean" ref='complete'  defaultValue={false}/>
						
					<label>
						Description: </label>
						<input className="form-control" type="text" ref='description' />
					<label>
						Expire Date: </label>
						<input className="form-control" type="date" ref='expireDate' />
						
						<label> Status: </label>
						<label> <input type="radio" value="S"  ref='status'/> Started </label> 
						<label> <input type="radio" value="p"  ref='status'/> Proceed </label>
						<label> <input type="radio" value="d"  ref='status'/> Done 	</label>
					
					<input className="btn btn-primary" type="submit" value="Create" />
				</div>
			</form>
		);
	}
}

export default ItemCreateUpdate;
