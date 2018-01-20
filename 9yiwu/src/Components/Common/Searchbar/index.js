import React,{Component} from "react";
import {connect} from "react-redux";
import styles from "./index.scss";
import {NavLink} from "react-router-dom"


class Searchbar extends Component {
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <div className={styles.searchbar}>
			<NavLink to="/search"></NavLink>
			<div>取消</div>
		</div>
	}
}

export default Searchbar;