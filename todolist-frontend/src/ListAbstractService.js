import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class ListAbstractService{
	constructor(){}
	
	
	getListAbstracts(){
		const url = `${API_URL}/list-abstract/`;
		return axios.get(url).then(response => response);
	}
	getListAbstractsByURL(link){
		const url = `${API_URL}/list-abstract/${link}`;
		return axios.get(url).then(response => response.data);
	}
	getListAbstract(pk){
		const url = `${API_URL}/list-abstract/${pk}`;
		return axios.get(url).then(response => response.data);
	}
	deleteListAbstract(list_abstract){
		const url = `${API_URL}/list-abstract/${list_abstract.pk}`;
		return axios.delete(url);
	}
	createListAbstract(listabstract){
		const url = `${API_URL}/list-abstract/`;
		return axios.post(url, listabstract);
	}
	updateListAbstract(list_abstract){
		const url = `${API_URL}/list-abstract/${list_abstract.pk}`;
		return axios.put(url, list_abstract);
	}
}