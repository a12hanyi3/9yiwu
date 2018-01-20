import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import ReactSwipe from 'react-swipe';

import { ActivityIndicator } from 'antd-mobile';


class Fashion extends Component {
	constructor(){
		super();
		this.state={
			looplist:[],
			rootList:[],
			freshList:[],
			picList2:[],
			runList:[],
			phoneName:[],
			phonePic:[],
			long_list:[],
			show:true
		}
	}

	componentWillMount() {

		 axios.get("/yiwu/showcase/template/00014305").then(res=>{
			 	    	
			 	    	this.setState({
			 	   			looplist:res.data.result.components[0].items,
			 	   			rootList:res.data.result.components[1].items,
			 	   			freshList:res.data.result.components[2].items,
			 	   			picList2:res.data.result.components[3].items[0].url,
			 	   			phoneName:res.data.result.components[4].title,
			 	   			phonePic:res.data.result.components[4].icon,
			 	    	})
			 	    })
		 axios.get("/yiwu/product/listByProductIds.do?productIds=562764&productIds=612351&productIds=562527&productIds=563185&productIds=563190&productIds=609551").then(res=>{
			 	    	this.setState({
			 	   			runList:res.data.result,		 	   			
			 	    	})

			 	    })

		  axios.get("/yiwu/product/listByProductIds.do?productIds=612347&productIds=562779&productIds=612264&productIds=612268&productIds=506125&productIds=560814&productIds=561308&productIds=562473&productIds=609324&productIds=561675&productIds=611539&productIds=562640&productIds=561802&productIds=611210&productIds=611209&productIds=611342&productIds=562544&productIds=562541&productIds=614120&productIds=614218&productIds=612028&productIds=614367&productIds=613114&productIds=612722&productIds=611056&productIds=563543&productIds=611885&productIds=614419&productIds=612747&productIds=562949").then(res=>{
		 	 	    	this.setState({
		 	 	   			long_list:res.data.result,		 	   			
		 	 	    	})
		 	 	    })

		  Promise.all([axios.get("/yiwu/showcase/template/00014305"),axios.get("/yiwu/product/listByProductIds.do?productIds=562764&productIds=612351&productIds=562527&productIds=563185&productIds=563190&productIds=609551"), axios.get("/yiwu/product/listByProductIds.do?productIds=612347&productIds=562779&productIds=612264&productIds=612268&productIds=506125&productIds=560814&productIds=561308&productIds=562473&productIds=609324&productIds=561675&productIds=611539&productIds=562640&productIds=561802&productIds=611210&productIds=611209&productIds=611342&productIds=562544&productIds=562541&productIds=614120&productIds=614218&productIds=612028&productIds=614367&productIds=613114&productIds=612722&productIds=611056&productIds=563543&productIds=611885&productIds=614419&productIds=612747&productIds=562949")]).then(res=>{
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

		<div id={styles.piclist2}>
				<img src={this.state.picList2}/>
		</div>

		<div id={styles.rootlists}>
			<div className={styles.ontitle}>	
				<img src={this.state.phonePic}/>
				<p>{this.state.phoneName}</p>
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

export default Fashion;