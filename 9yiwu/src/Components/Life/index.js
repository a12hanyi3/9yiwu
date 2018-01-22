import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import Navbar from "@/Components/Common/Navbar";
import { ActivityIndicator } from 'antd-mobile';



class Life extends Component {
	constructor(){
		super();
		this.state={
			looplist:[],
			show:true,
		}
	}

	componentWillMount() {

		axios.get("/misc-service/article/query").then(res=>{
			this.setState({
				 looplist:res.data.articles,
			})
		})

		Promise.all([axios.get("/misc-service/article/query")]).then(res=>{
			this.setState({
				show:false,
			})
		})
	}


	render(){
		return <div id={styles.all}>
				 <div id={styles.header}>生活</div>
				  <ActivityIndicator toast text="正在加载" animating={this.state.show}/>
				 <div id={styles.Amanda}>
				   <ul>
				     {
				     this.state.looplist.map(item=>
				       <li key={item.id}>
				          <img src={item.picture}/>
				          <section>
					          <span className={styles.left}>{item.catalog.name}</span>
					          <span className={styles.middle}>||</span>
					          <span  className={styles.right}>{item.createdDate}</span>
						      <p className={styles.p1}>{item.title}</p>
						      <p className={styles.p2}>{item.digest}</p>
				          </section>
				       </li>
				     )
				   }
				   </ul>
				 </div>


			<Navbar/>
		</div>
	}
}

export default Life;