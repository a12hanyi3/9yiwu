import React,{Component} from "react";
import "./index.scss";
import {connect} from "react-redux";
import Navbar from "@/Components/Common/Navbar";


class Mine extends Component {
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <div>
			Mine
		<Navbar/>
		</div>
	}
}

export default Mine;