import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import ReactSwipe from 'react-swipe';

import { ActivityIndicator } from 'antd-mobile';


class Numeral extends Component {
	constructor(){
		super();
		this.state={
			looplist:[],
			rootList:[],
			freshList:[],
			titleList:[],
			imgList:[],
			picList:[],
			xuanList:[],
			xialist:[],
			brandName:[],
			brandPic:[],
			brandList:[],
			phoneName:[],
			phonePic:[],
			runList:[],
			picList2:[],
			hotPic:[],
			hotName:[],
			hotList:[],
			music:[],
			loudspeaker_box:[],
			loudspeaker_boxPic:[],
			loudspeaker_boxName:[],
			long_list:[],
			show:true
		}
	}


	componentWillMount(){
		 axios.get("/yiwu/showcase/template/00013707").then(res=>{
			 	    
			 	    	this.setState({
			 	   			looplist:res.data.result.components[0].items,
			 	   			rootList:res.data.result.components[1].items,
			 	   			freshList:res.data.result.components[2].items,
			 	   			titleList:res.data.result.components[2].title,
			 	   			imgList:res.data.result.components[2].icon,	
			 	   			picList:res.data.result.components[3].icon,	
			 	   			xuanList:res.data.result.components[3].title,
			 	   			xialist:res.data.result.components[3].items,
			 	   			brandName:res.data.result.components[4].title,
			 	   			brandPic:res.data.result.components[4].icon,
			 	   			brandList:res.data.result.components[4].items,
			 	   			phoneName:res.data.result.components[5].title,
			 	   			phonePic:res.data.result.components[5].icon,
			 	   			picList2:res.data.result.components[6].items[0].url,
			 	   			hotName:res.data.result.components[7].title,
			 	   			hotPic:res.data.result.components[7].icon,
			 	   			music:res.data.result.components[8].items[0].url,
			 	   			loudspeaker_boxName:res.data.result.components[9].title,
			 	   			loudspeaker_boxPic:res.data.result.components[9].icon,
			 	    	})
			 	    })
		
		 axios.get("/yiwu/product/listByProductIds.do?productIds=563500&productIds=559435&productIds=564094&productIds=559076&productIds=559590&productIds=561306&productIds=559073&productIds=561805&productIds=563872").then(res=>{

			 	    	this.setState({
			 	   			runList:res.data.result,		 	   			
			 	    	})
			 	    })
		
		 axios.get("/yiwu/product/listByProductIds.do?productIds=613468&productIds=559315&productIds=564080&productIds=610752&productIds=559295&productIds=564090&productIds=610679&productIds=559297&productIds=559081").then(res=>{

			 	    	this.setState({
			 	   			hotList:res.data.result,		 	   			
			 	    	})
			 	    })

		 axios.get("/yiwu/product/listByProductIds.do?productIds=139339&productIds=132283&productIds=376057&productIds=138952&productIds=136653&productIds=136026&productIds=384182&productIds=137119&productIds=136895").then(res=>{

			 	    	this.setState({
			 	   			loudspeaker_box:res.data.result,		 	   			
			 	    	})
			 	    })

		 axios.get("/yiwu/product/listByProductIds.do?productIds=613939&productIds=370444&productIds=559083&productIds=616115&productIds=559588&productIds=560288&productIds=559080&productIds=610674&productIds=559052&productIds=564083&productIds=561658&productIds=616116&productIds=284021&productIds=559323&productIds=559047&productIds=561307&productIds=137841&productIds=564086&productIds=613725&productIds=613379&productIds=563910&productIds=311305&productIds=562978&productIds=561851&productIds=558710&productIds=506017&productIds=612482&productIds=557755&productIds=384398&productIds=611741&productIds=137129&productIds=560094&productIds=560041&productIds=561489&productIds=255478&productIds=559324&productIds=610296&productIds=611778&productIds=139386&productIds=311881&productIds=612829&productIds=311306&productIds=311870&productIds=563882&productIds=561488&productIds=312764").then(res=>{

			 	    	this.setState({
			 	   			long_list:res.data.result,		 	   			
			 	    	})
			 	    })

		 Promise.all([axios.get("/yiwu/showcase/template/00013707"),axios.get("/yiwu/product/listByProductIds.do?productIds=563500&productIds=559435&productIds=564094&productIds=559076&productIds=559590&productIds=561306&productIds=559073&productIds=561805&productIds=563872"),axios.get("/yiwu/product/listByProductIds.do?productIds=613468&productIds=559315&productIds=564080&productIds=610752&productIds=559295&productIds=564090&productIds=610679&productIds=559297&productIds=559081"),axios.get("/yiwu/product/listByProductIds.do?productIds=139339&productIds=132283&productIds=376057&productIds=138952&productIds=136653&productIds=136026&productIds=384182&productIds=137119&productIds=136895"),axios.get("/yiwu/product/listByProductIds.do?productIds=139339&productIds=132283&productIds=376057&productIds=138952&productIds=136653&productIds=136026&productIds=384182&productIds=137119&productIds=136895"), axios.get("/yiwu/product/listByProductIds.do?productIds=613939&productIds=370444&productIds=559083&productIds=616115&productIds=559588&productIds=560288&productIds=559080&productIds=610674&productIds=559052&productIds=564083&productIds=561658&productIds=616116&productIds=284021&productIds=559323&productIds=559047&productIds=561307&productIds=137841&productIds=564086&productIds=613725&productIds=613379&productIds=563910&productIds=311305&productIds=562978&productIds=561851&productIds=558710&productIds=506017&productIds=612482&productIds=557755&productIds=384398&productIds=611741&productIds=137129&productIds=560094&productIds=560041&productIds=561489&productIds=255478&productIds=559324&productIds=610296&productIds=611778&productIds=139386&productIds=311881&productIds=612829&productIds=311306&productIds=311870&productIds=563882&productIds=561488&productIds=312764")]).then(res=>{
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

			<div id={styles.choice}>
				<div className={styles.uptitle}>	
					<img src={this.state.picList}/>
					<p>{this.state.xuanList}</p>
				</div>
				<div className={styles.underlist}>
					<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:2000}} key={this.state.xialist.length}>
	                {
	                	this.state.xialist.map(item=>
	                		<img src={item.url} key={item.id}/>
	                	)
	                }
            		</ReactSwipe>
				</div>	
			</div>

			<div id={styles.recommend}>
				<div className={styles.ontitle}>	
					<img src={this.state.brandPic}/>
					<p>{this.state.brandName}</p>
				</div>
				<div className={styles.picture}>	
					<ul>
						{
						this.state.brandList.map(item=>
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

			<div id={styles.piclist2}>
				<img src={this.state.picList2}/>
			</div>


			<div id={styles.hotlists}>
				<div className={styles.ontitle}>	
					<img src={this.state.hotPic}/>
					<p>{this.state.hotName}</p>
				</div>	
				<div className={styles.bottomlist}>
					<div className={styles.boxlist}>
						<ul>
							{
							this.state.hotList.map(item=>
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

			<div id={styles.music}>
				<img src={this.state.music}/>
			</div>

			<div id={styles.loudspeaker_box}>
				<div className={styles.ontitle}>	
					<img src={this.state.loudspeaker_boxPic}/>
					<p>{this.state.loudspeaker_boxName}</p>
				</div>	
				<div className={styles.bottomlist}>
					<div className={styles.boxlist}>
						<ul>
							{
							this.state.loudspeaker_box.map(item=>
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

export default Numeral;