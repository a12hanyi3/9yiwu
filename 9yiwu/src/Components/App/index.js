import React,{Component} from "react";
import "./index.scss";
import {connect} from "react-redux";
import "antd/dist/antd.css"
import "@/assets/font/iconfont.css";
import 'antd-mobile/dist/antd-mobile.css'
class App extends Component {
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return<div>
			{this.props.children}
		</div>
	}
}

export default App;