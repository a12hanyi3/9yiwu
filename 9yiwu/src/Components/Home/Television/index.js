import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import ReactSwipe from 'react-swipe';

import { ActivityIndicator } from 'antd-mobile';


class LifeHome extends Component {
	constructor(){
		super();
		this.state={
			looplist:[],
			rootList:[],
			freshList:[],
			runList:[],
			phoneName:[],
			phonePic:[],
			long_list:[],
			phonePic1:[],
			phoneName1:[],
			show:true
		}
	}

	componentWillMount() {

		 axios.get("/yiwu/showcase/template/9").then(res=>{
			 	    	
			 	    	this.setState({
			 	   			looplist:res.data.result.components[0].items,
			 	   			rootList:res.data.result.components[1].items,
			 	   			freshList:res.data.result.components[2].items,
			 	   			phoneName:res.data.result.components[2].title,
			 	   			phonePic:res.data.result.components[2].icon,
			 	   			phoneName1:res.data.result.components[3].title,
			 	   			phonePic1:res.data.result.components[3].icon,
			 	    	})
			 	    })

		 axios.get("/yiwu/product/listByProductIds.do?productIds=610261&productIds=563035&productIds=562653&productIds=613321&productIds=545978&productIds=613323").then(res=>{
			 	    	this.setState({
			 	   			runList:res.data.result,		 	   			
			 	    	})

			 	    })

		 axios.get("/yiwu/product/listByProductIds.do?productIds=500364&productIds=484878&productIds=313035&productIds=610307&productIds=610702&productIds=609307&productIds=313052&productIds=610624&productIds=610626&productIds=610707&productIds=610467&productIds=194056&productIds=192674&productIds=196307&productIds=102164&productIds=563730&productIds=616018&productIds=613425&productIds=281475&productIds=505137&productIds=611316&productIds=505135&productIds=279546&productIds=191693&productIds=282644&productIds=192812&productIds=280002&productIds=101846&productIds=191994&productIds=611196&productIds=291269&productIds=101784&productIds=311715&productIds=280077&productIds=559139&productIds=311768&productIds=611199&productIds=613637&productIds=101850&productIds=307929").then(res=>{
		 	 	    	this.setState({
		 	 	   			long_list:res.data.result,		 	   			
		 	 	    	})
		 	 	    })

		 Promise.all([axios.get("/yiwu/showcase/template/9"),axios.get("/yiwu/product/listByProductIds.do?productIds=610261&productIds=563035&productIds=562653&productIds=613321&productIds=545978&productIds=613323"),axios.get("/yiwu/product/listByProductIds.do?productIds=500364&productIds=484878&productIds=313035&productIds=610307&productIds=610702&productIds=609307&productIds=313052&productIds=610624&productIds=610626&productIds=610707&productIds=610467&productIds=194056&productIds=192674&productIds=196307&productIds=102164&productIds=563730&productIds=616018&productIds=613425&productIds=281475&productIds=505137&productIds=611316&productIds=505135&productIds=279546&productIds=191693&productIds=282644&productIds=192812&productIds=280002&productIds=101846&productIds=191994&productIds=611196&productIds=291269&productIds=101784&productIds=311715&productIds=280077&productIds=559139&productIds=311768&productIds=611199&productIds=613637&productIds=101850&productIds=307929")]).then(res=>{
				this.setState({
					show:false
				})
			})
	}

	render(){
		return <div id={styles.all}>
		<ActivityIndicator toast text="正在加载" animating={this.state.show}/>
		<div id={styles.banner}>
			<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:1500}} key={this.state.looplist.length}>
	            {
	               	this.state.looplist.map(item=>
	                	<img src={item.url} key={item.id}/>
	                )
	            }
            </ReactSwipe>
		</div>

		<div id={styles.root}>
			<ul>
				{
					this.state.rootList.map(item=>
						<li key={item.id}>
						   <img src={item.url} key={item.id}/>
						   <p>{item.title}</p>
						</li>
					)
				}
			</ul>
		</div>

		<div id={styles.fresh}>
			<div className={styles.title}>	
				<img src={this.state.phonePic}/>
				<p>{this.state.phoneName}</p>
			</div>	
			<div className={styles.pic}> 
				<ul>
					{
					this.state.freshList.map(item=>
						<li key={item.id}>
							<img src={item.url}/>
						</li>
					)
				}
				</ul>
			</div>
		</div>

		<div id={styles.rootlists}>
			<div className={styles.ontitle}>	
				<img src={this.state.phonePic1}/>
				<p>{this.state.phoneName1}</p>
			</div>	
			<div className={styles.bottomlist}>
				<div className={styles.boxlist}>
					<ul>
						{
						this.state.runList.map(item=>
							<li key={item.id}>
								<img src={item.picture}/>
								<p>{item.name}</p>
								<article>{'¥' + item.price}</article>
							</li>
						)
					}
					</ul>
				</div>
			</div>
		</div>

		<div id={styles.underlist}>
				{
				this.state.long_list.map(item=>
					<div key={item.id} className={styles.box}>
						<div className={styles.left}><img src={item.picture}/></div>
						<div className={styles.right}>
								<p className={styles.p1}>{item.name}</p>
								<span className={styles.price}>{'¥' + item.originPrice}</span><span className={styles.car}><i className="iconfont">&#xe651;</i></span>
								<p className={styles.p2}>{item.sellCount+'人已选'}</p>
						</div>
					</div>
				)
			}
		</div>


		</div>		
	}
}

export default LifeHome;