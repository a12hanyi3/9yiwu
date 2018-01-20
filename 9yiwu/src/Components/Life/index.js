import React,{Component} from "react";
import "./index.scss";
import {connect} from "react-redux";
import Navbar from "@/Components/Common/Navbar";


class Life extends Component {
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <div>
			Life
			<Navbar/>
		</div>
	}
}

export default Life;