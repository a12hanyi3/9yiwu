import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import ReactSwipe from 'react-swipe';

import { ActivityIndicator } from 'antd-mobile';


class Mother extends Component {
	constructor(){
		super();
		this.state={
			looplist:[],
			rootList:[],
			freshList:[],
			titleList:[],
			imgList:[],
			phoneName:[],
			phonePic:[],
			runList:[],
			picList:[],
			runList2:[],
			picList1:[],
			runList3:[],
			imgListo:[],
			fresho:[],
			runList5:[],
			show:true
		}
	}

	componentWillMount() {
		 axios.get("/yiwu/showcase/template/5").then(res=>{
			 	    	
			 	    	this.setState({
			 	   			looplist:res.data.result.components[0].items,
			 	   			rootList:res.data.result.components[1].items,
			 	   			freshList:res.data.result.components[2].items,
			 	   			titleList:res.data.result.components[2].title,
			 	   			imgList:res.data.result.components[2].icon,
			 	   			phoneName:res.data.result.components[3].title,
			 	   			phonePic:res.data.result.components[3].icon,
			 	   			picList:res.data.result.components[4].items[0].url,	
			 	   			picList1:res.data.result.components[6].items[0].url,
			 	    	})
			 	    })

		  axios.get("/yiwu/product/listByProductIds.do?productIds=560359&productIds=564016&productIds=560290&productIds=561120&productIds=614771&productIds=561095&productIds=560352&productIds=612781&productIds=561099").then(res=>{

		 	 	    	this.setState({
		 	 	   			runList:res.data.result,		 	   			
		 	 	    	})
		 	 	    })
		  
		   axios.get("/yiwu/product/listByProductIds.do?productIds=171377&productIds=170751&productIds=172444&productIds=315127&productIds=168719&productIds=501948&productIds=312784&productIds=312780&productIds=312770").then(res=>{

		  	 	    	this.setState({
		  	 	   			runList2:res.data.result,		 	   			
		  	 	    	})
		  	 	    })

		    axios.get("/yiwu/product/listByProductIds.do?productIds=305709&productIds=305619&productIds=170523&productIds=169363&productIds=168175&productIds=170943&productIds=171491&productIds=171897&productIds=305633").then(res=>{

		   	 	    	this.setState({
		   	 	   			runList3:res.data.result,		 	   			
		   	 	    	})
		   	 	    })

		    axios.get("/yiwu/product/listByProductIds.do?productIds=613360&productIds=619419&productIds=615071&productIds=297008&productIds=501974&productIds=615070&productIds=502677&productIds=619402&productIds=502010&productIds=502340&productIds=502344&productIds=504804&productIds=615162&productIds=503604&productIds=503920&productIds=504881&productIds=313074&productIds=313096&productIds=313138&productIds=612538&productIds=501008&productIds=500935&productIds=500938&productIds=613633&productIds=505337&productIds=501207&productIds=563473&productIds=614846&productIds=563415&productIds=311618&productIds=614233&productIds=500632&productIds=612751&productIds=560363&productIds=561115&productIds=616298&productIds=559539&productIds=311609&productIds=500601&productIds=614239").then(res=>{
		    	 	    	this.setState({
		    	 	    		runList5:res.data.result,	
		    	 	    	})
		    	 	    })

		     Promise.all([axios.get("/yiwu/showcase/template/5"), axios.get("/yiwu/product/listByProductIds.do?productIds=560359&productIds=564016&productIds=560290&productIds=561120&productIds=614771&productIds=561095&productIds=560352&productIds=612781&productIds=561099"), axios.get("/yiwu/product/listByProductIds.do?productIds=171377&productIds=170751&productIds=172444&productIds=315127&productIds=168719&productIds=501948&productIds=312784&productIds=312780&productIds=312770"),axios.get("/yiwu/product/listByProductIds.do?productIds=305709&productIds=305619&productIds=170523&productIds=169363&productIds=168175&productIds=170943&productIds=171491&productIds=171897&productIds=305633"),axios.get("/yiwu/product/listByProductIds.do?productIds=613360&productIds=619419&productIds=615071&productIds=297008&productIds=501974&productIds=615070&productIds=502677&productIds=619402&productIds=502010&productIds=502340&productIds=502344&productIds=504804&productIds=615162&productIds=503604&productIds=503920&productIds=504881&productIds=313074&productIds=313096&productIds=313138&productIds=612538&productIds=501008&productIds=500935&productIds=500938&productIds=613633&productIds=505337&productIds=501207&productIds=563473&productIds=614846&productIds=563415&productIds=311618&productIds=614233&productIds=500632&productIds=612751&productIds=560363&productIds=561115&productIds=616298&productIds=559539&productIds=311609&productIds=500601&productIds=614239")]).then(res=>{
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
					<img src={this.state.imgList}/>
					<p>{this.state.titleList}</p>
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

		 <div id={styles.piclist}>
		 	<img src={this.state.picList}/>
		 </div>

		 <div id={styles.rootlists_1st}>
		 	<div className={styles.ontitle}>	

		 	</div>	
		 	<div className={styles.bottomlist}>
		 		<div className={styles.boxlist}>
		 			<ul>
		 				{
		 				this.state.runList2.map(item=>
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

		 <div id={styles.piclist1}>
		 	<img src={this.state.picList1}/>
		 </div>


		 <div id={styles.rootlists_2st}>
		 	<div className={styles.ontitle}>	

		 	</div>	
		 	<div className={styles.bottomlist}>
		 		<div className={styles.boxlist}>
		 			<ul>
		 				{
		 				this.state.runList3.map(item=>
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
		 	<div className={styles.top}>
		 	</div>
		 		{					
		 		this.state.runList5.map(item=>
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

export default Mother;