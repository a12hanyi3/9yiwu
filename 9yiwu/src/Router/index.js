import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';


import App from "@/Components/App";
import Detail from "@/Components/Detail";
import Cart from "@/Components/Cart";
import Life from "@/Components/Life";
import Mine from "@/Components/Mine";
import Search from "@/Components/Search";
import Category from "@/Components/Category";
import Register from "@/Components/Register";
import Login from "@/Components/Login";
import List from "@/Components/List";
import TrueHome from "@/Components/TrueHome";
import {Provider} from "react-redux";
import store from "@/Redux/Store";

const router = (
		<Provider store={store}>
		<Router>
		<App>
		<Switch>
			//switch 只加载匹配到第一个子路由
			<Route path="/home" component={TrueHome}/>
			<Route path="/detail/:id" component={Detail}/>
			<Route path="/cart" component={Cart}/>
			<Route path="/life" component={Life}/>
			<Route path="/mine" component={Mine}/>
			<Route path="/search" component={Search}/>
			<Route path="/category" component={Category}/>
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
			<Route path="/list" component={List}/>
			<Redirect from="/" to="/home"/>
		</Switch>
		</App>
		</Router>
		</Provider>)

export default router;