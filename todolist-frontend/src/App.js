import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import  UserList from './UserList'
import  ItemList from './ItemList'
import  UserCreateUpdate  from './UserCreateUpdate'
import  ItemCreateUpdate  from './ItemCreateUpdate'
import  ListAbstractList from './ListAbstractList'
import  ListAbstractCreateUpdate  from './ListAbstractCreateUpdate'
import UserLogin from './UserLogin'
import './App.css';

const BaseLayout = () => (
	<div className="container-fluid">
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="/">Django React Demo</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div className="navbar-nav">
				<a className="nav-item nav-link" href="/user">Register</a>
				<a className="nav-item nav-link" href="/login/">Login</a>
				<a className="nav-item nav-link" href="/list-abstract/">Create List Abstract</a>
				<a className="nav-item nav-link" href="/item/">Item</a>
				<a className="nav-item nav-link" href="/create-item/">Create Item</a>
				
			</div>
		</div>
	</nav>  

    <div className="content">
      <Route path="/user/" exact component={UserCreateUpdate} />
      <Route path="/login/" exact component={UserLogin} />
      <Route path="/list-abstract/" exact component={ListAbstractCreateUpdate} />
	  
      <Route path="/item/" exact component={ItemList} />
      <Route path="/create-item/" exact component={ItemCreateUpdate} />
    </div>

  </div>
)


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;