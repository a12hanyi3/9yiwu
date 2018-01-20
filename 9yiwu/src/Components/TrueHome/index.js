 import React,{Component} from "react";
 import "./index.scss";
 import {connect} from "react-redux";
 import Looplist  from "../looplist";


class TrueHome extends Component {
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <div>
		<Looplist/>
		</div>
	}
}

export default TrueHome;
