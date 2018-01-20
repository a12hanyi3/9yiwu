import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import ReactSwipe from 'react-swipe';

import { ActivityIndicator } from 'antd-mobile';


class Shoes extends Component {
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
		 axios.get("/yiwu/showcase/template/1807").then(res=>{
			 	    	
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
			 	   			imgListo:res.data.result.components[8].icon,
			 	   			fresho:res.data.result.components[8].title,	   	
			 	    	})
			 	    })

		  axios.get("/yiwu/product/listByProductIds.do?productIds=613992&productIds=614042&productIds=614046&productIds=311542&productIds=561833&productIds=559687").then(res=>{

		 	 	    	this.setState({
		 	 	   			runList:res.data.result,		 	   			
		 	 	    	})
		 	 	    })
		  
		   axios.get("/yiwu/product/listByProductIds.do?productIds=613547&productIds=564230&productIds=613525&productIds=563482&productIds=563477&productIds=563471").then(res=>{

		  	 	    	this.setState({
		  	 	   			runList2:res.data.result,		 	   			
		  	 	    	})
		  	 	    })

		    axios.get("/yiwu/product/listByProductIds.do?productIds=559681&productIds=559727&productIds=502827&productIds=501980&productIds=501944&productIds=501931").then(res=>{

		   	 	    	this.setState({
		   	 	   			runList3:res.data.result,		 	   			
		   	 	    	})
		   	 	    })

		    axios.get("/yiwu/product/listByProductIds.do?productIds=561833&productIds=609302&productIds=558499&productIds=561438&productIds=559687&productIds=561435&productIds=564230&productIds=559690&productIds=502354&productIds=561921&productIds=559719&productIds=559528&productIds=559502&productIds=502372&productIds=502681&productIds=560049&productIds=561604&productIds=559697&productIds=559680&productIds=613978&productIds=614009&productIds=560015&productIds=614017&productIds=564187&productIds=613522&productIds=504131&productIds=609977&productIds=610001&productIds=613178&productIds=613533&productIds=311525&productIds=311578&productIds=502982&productIds=561459&productIds=614842&productIds=614849&productIds=504308&productIds=564119&productIds=563377&productIds=614808&productIds=501932&productIds=563387&productIds=501946&productIds=559681&productIds=502818").then(res=>{
		    	 	    	this.setState({
		    	 	    		runList5:res.data.result,	
		    	 	    	})
		    	 	    })

		     Promise.all([axios.get("/yiwu/showcase/template/1807"),axios.get("/yiwu/product/listByProductIds.do?productIds=613992&productIds=614042&productIds=614046&productIds=311542&productIds=561833&productIds=559687"), axios.get("/yiwu/product/listByProductIds.do?productIds=613547&productIds=564230&productIds=613525&productIds=563482&productIds=563477&productIds=563471"),axios.get("/yiwu/product/listByProductIds.do?productIds=559681&productIds=559727&productIds=502827&productIds=501980&productIds=501944&productIds=501931"), axios.get("/yiwu/product/listByProductIds.do?productIds=561833&productIds=609302&productIds=558499&productIds=561438&productIds=559687&productIds=561435&productIds=564230&productIds=559690&productIds=502354&productIds=561921&productIds=559719&productIds=559528&productIds=559502&productIds=502372&productIds=502681&productIds=560049&productIds=561604&productIds=559697&productIds=559680&productIds=613978&productIds=614009&productIds=560015&productIds=614017&productIds=564187&productIds=613522&productIds=504131&productIds=609977&productIds=610001&productIds=613178&productIds=613533&productIds=311525&productIds=311578&productIds=502982&productIds=561459&productIds=614842&productIds=614849&productIds=504308&productIds=564119&productIds=563377&productIds=614808&productIds=501932&productIds=563387&productIds=501946&productIds=559681&productIds=502818")]).then(res=>{
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
		 		<img src={this.state.imgListo}/>
		 		<p>{this.state.fresho}</p>
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

export default Shoes;