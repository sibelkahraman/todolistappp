import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class ItemService{
	constructor(){}
	
	
	getItems(){
		const url = `${API_URL}/list/`;
		return axios.get(url).then(response => response.data);
	}
	getItemsByURL(link){
		const url = `${API_URL}/list/${link}`;
		return axios.get(url).then(response => response.data);
	}
	getItem(pk) {
		const url = `${API_URL}/list/${pk}`;
		return axios.get(url).then(response => response.data);
	}
	deleteItem(list){
		const url = `${API_URL}/list/${list.pk}`;
		return axios.delete(url);
	}

	createItem(item){
		const url = `${API_URL}/list/`;
		return axios.post(url, item);
	}
	updateItem(item){
		const url = `${API_URL}/list/${item.pk}`;
		return axios.put(url, item);
	}
		
}