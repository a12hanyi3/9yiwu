import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import ReactSwipe from 'react-swipe';
import { ActivityIndicator } from 'antd-mobile';


class Earth extends Component {
	constructor(){
		super();
		this.state={
			rootList:[],
			imgList:[],
			titleList:[],
			fresh:[],
			fresh2:[],
			freshList:[],
			fresh_1st:[],
			looplist:[],
			looplist2:[],
			looplist3:[],
			looplist4:[],
			runList:[],
			runList2:[],
			runList3:[],
			runList4:[],
			runList5:[],
			picList2:[],
			imgListo:[],
			fresho:[],
			show:true
		}
	}

	componentWillMount() {

		 axios.get("/yiwu/showcase/template/1810").then(res=>{
			 	    	this.setState({
			 	   			looplist:res.data.result.components[0].items,
			 	   			rootList:res.data.result.components[1].items,
			 	   			freshList:res.data.result.components[2].items,
			 	   			titleList:res.data.result.components[3].title,
			 	   			imgList:res.data.result.components[3].icon,
			 	   			fresh:res.data.result.components[3].items,
			 	   			looplist2:res.data.result.components[4].items,
			 	   			fresh2:res.data.result.components[5].items,
			 	   			looplist3:res.data.result.components[7].items,
			 	   			fresh_1st:res.data.result.components[8].items,
			 	   			looplist4:res.data.result.components[10].items,
			 	   			picList2:res.data.result.components[12].items[0].url,
			 	   			imgListo:res.data.result.components[14].icon,
			 	   			fresho:res.data.result.components[14].title,
			 	    	})
			 	    })

		  axios.get("/yiwu/product/listByProductIds.do?productIds=500910&productIds=500896&productIds=557701&productIds=500624&productIds=501935&productIds=500263").then(res=>{
			 	    	this.setState({
			 	    		runList:res.data.result,	
			 	    	})
			 	    })
		  
		  axios.get("/yiwu/product/listByProductIds.do?productIds=311315&productIds=617734&productIds=612327&productIds=616716&productIds=618190&productIds=610611").then(res=>{
			 	    	this.setState({
			 	    		runList2:res.data.result,	
			 	    	})
			 	    })

		  axios.get("/yiwu/product/listByProductIds.do?productIds=562404&productIds=614908&productIds=614503&productIds=618168&productIds=615990&productIds=615946").then(res=>{
			 	    	this.setState({
			 	    		runList3:res.data.result,	
			 	    	})
			 	    })

		  axios.get("/yiwu/product/listByProductIds.do?productIds=616146&productIds=615166&productIds=613403&productIds=613273&productIds=613116&productIds=503168").then(res=>{
			 	    	this.setState({
			 	    		runList4:res.data.result,	
			 	    	})
			 	    })

		  axios.get("/yiwu/product/listByProductIds.do?productIds=618910&productIds=615940&productIds=614818&productIds=616709&productIds=615291&productIds=617137&productIds=561018&productIds=614255&productIds=296646&productIds=100830&productIds=278705&productIds=311266&productIds=616686&productIds=292627&productIds=613497&productIds=500361&productIds=613998&productIds=609943&productIds=310209&productIds=610178&productIds=558717").then(res=>{
			 	    	this.setState({
			 	    		runList5:res.data.result,	
			 	    	})
			 	    })

		  Promise.all([axios.get("/yiwu/showcase/template/1810"),axios.get("/yiwu/product/listByProductIds.do?productIds=500910&productIds=500896&productIds=557701&productIds=500624&productIds=501935&productIds=500263"),axios.get("/yiwu/product/listByProductIds.do?productIds=311315&productIds=617734&productIds=612327&productIds=616716&productIds=618190&productIds=610611"),axios.get("/yiwu/product/listByProductIds.do?productIds=562404&productIds=614908&productIds=614503&productIds=618168&productIds=615990&productIds=615946"),axios.get("/yiwu/product/listByProductIds.do?productIds=616146&productIds=615166&productIds=613403&productIds=613273&productIds=613116&productIds=503168"),axios.get("/yiwu/product/listByProductIds.do?productIds=618910&productIds=615940&productIds=614818&productIds=616709&productIds=615291&productIds=617137&productIds=561018&productIds=614255&productIds=296646&productIds=100830&productIds=278705&productIds=311266&productIds=616686&productIds=292627&productIds=613497&productIds=500361&productIds=613998&productIds=609943&productIds=310209&productIds=610178&productIds=558717")]).then(res=>{
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

					<div id={styles.freshbox}>
						<div className={styles.title}>	
							<img src={this.state.imgList}/>
							<p>{this.state.titleList}</p>
						</div>	
						<div className={styles.pic}> 
							<ul>
								{
								this.state.fresh.map(item=>
									<li key={item.id}>
									   <img src={item.url}/>
									</li>
								)
							}
							</ul>
						</div>
					</div>

					<div id={styles.banner2}>
						<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:1500}} key={this.state.looplist.length}>
				            {
				               	this.state.looplist2.map(item=>
				                	<img src={item.url} key={item.id}/>
				                )
				            }
			            </ReactSwipe>
					</div>	

					<div id={styles.freshbox_1st}>
						<div className={styles.title}>	
						</div>	
						<div className={styles.pic}> 
							<ul>
								{
								this.state.fresh2.map(item=>
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

				<div id={styles.banner3}>
					<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:1500}} key={this.state.looplist.length}>
			            {
			               	this.state.looplist3.map(item=>
			                	<img src={item.url} key={item.id}/>
			                )
			            }
		            </ReactSwipe>
				</div>	

				<div id={styles.freshbox_2ed}>
					<div className={styles.title}>	

					</div>	
					<div className={styles.pic}> 
						<ul>
							{
							this.state.fresh_1st.map(item=>
								<li key={item.id}>
								   <img src={item.url}/>
								</li>
							)
						}
						</ul>
					</div>
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

					<div id={styles.banner4}>
						<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:1500}} key={this.state.looplist.length}>
				            {
				               	this.state.looplist4.map(item=>
				                	<img src={item.url} key={item.id}/>
				                )
				            }
			            </ReactSwipe>
					</div>

					<div id={styles.rootlists_2sd}>
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

						<div id={styles.piclist2}>
								<img src={this.state.picList2}/>
						</div>

						<div id={styles.rootlists_3trd}>
								<div className={styles.ontitle}>	

								</div>	
								<div className={styles.bottomlist}>
									<div className={styles.boxlist}>
										<ul>
											{
											this.state.runList4.map(item=>
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

export default Earth;