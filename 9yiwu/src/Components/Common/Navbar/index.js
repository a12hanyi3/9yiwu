import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom"



class Navbar extends Component {
	constructor(){
		super();
		this.state={
			hasStorage:false
		}
	}
	componentWillMount(){

		if(sessionStorage.getItem("username")){
			this.setState({
				hasStorage:true
			})
		}else{
			this.setState({
				hasStorage:false
			})
		}
		
	}
	render(){
		return <nav>
			<li>
			<NavLink  activeClassName={styles.active} to="/home">
				<i className="iconfont">&#xe633;</i>
				<span>首页</span>
			</NavLink>
			</li>
			<li>
			<NavLink  activeClassName={styles.active} to="/life">
				<i className="iconfont">&#xe739;</i>
				<span>生活</span>
			</NavLink>
			</li>
			<li>
			<NavLink  activeClassName={styles.active} to={this.state.hasStorage?"/cart":"/login"}>
				<i className="iconfont">&#xe651;</i>
				<span>购物车</span>
			</NavLink>
			</li>
			<li>
			<NavLink  activeClassName={styles.active} to="/mine">
				<i className="iconfont">&#xe667;</i>
				<span>我的</span>
			</NavLink>
			</li>
 		</nav>
	}
	componentDidMount(){

	}
}

export default Navbar;