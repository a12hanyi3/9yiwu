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
			picList2:[],
			runList:[],
			phoneName:[],
			phonePic:[],
			long_list:[],
			show:true
		}
	}

	componentWillMount() {

		 axios.get("/yiwu/showcase/template/1808").then(res=>{
			 	    	
			 	    	this.setState({
			 	   			looplist:res.data.result.components[0].items,
			 	   			rootList:res.data.result.components[1].items,
			 	   			freshList:res.data.result.components[2].items,
			 	   			picList2:res.data.result.components[3].items[0].url,
			 	   			phoneName:res.data.result.components[4].title,
			 	   			phonePic:res.data.result.components[4].icon,
			 	    	})
			 	    })

		 axios.get("/yiwu/product/listByProductIds.do?productIds=206627&productIds=558344&productIds=204550&productIds=614755&productIds=562509&productIds=614760").then(res=>{
			 	    	this.setState({
			 	   			runList:res.data.result,		 	   			
			 	    	})

			 	    })

		 axios.get("/yiwu/product/listByProductIds.do?productIds=559856&productIds=613304&productIds=563975&productIds=201641&productIds=614701&productIds=617300&productIds=197597&productIds=612554&productIds=259195&productIds=258449&productIds=256945&productIds=258024&productIds=261132&productIds=265067&productIds=614562&productIds=297558&productIds=612263&productIds=611604&productIds=204179&productIds=614753&productIds=261931&productIds=612456&productIds=563612&productIds=617213&productIds=562036").then(res=>{
		 	 	    	this.setState({
		 	 	   			long_list:res.data.result,		 	   			
		 	 	    	})
		 	 	    })

		 Promise.all([axios.get("/yiwu/showcase/template/1808"),axios.get("/yiwu/product/listByProductIds.do?productIds=206627&productIds=558344&productIds=204550&productIds=614755&productIds=562509&productIds=614760"), axios.get("/yiwu/product/listByProductIds.do?productIds=559856&productIds=613304&productIds=563975&productIds=201641&productIds=614701&productIds=617300&productIds=197597&productIds=612554&productIds=259195&productIds=258449&productIds=256945&productIds=258024&productIds=261132&productIds=265067&productIds=614562&productIds=297558&productIds=612263&productIds=611604&productIds=204179&productIds=614753&productIds=261931&productIds=612456&productIds=563612&productIds=617213&productIds=562036")]).then(res=>{
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

export default LifeHome;