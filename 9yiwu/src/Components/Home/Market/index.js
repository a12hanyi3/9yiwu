import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import ReactSwipe from 'react-swipe';
import { ActivityIndicator } from 'antd-mobile';


class Market extends Component {
	constructor(){
		super();
		this.state={
			looplist:[],
			rootList:[],
			titleList:[],
			imgList:[],
			freshList:[],
			phoneName:[],
			phonePic:[],
			runList:[],
			picList:[],
			runList2:[],
			picList2:[],
			runList3:[],
			picList3:[],
			runList4:[],
			picList4:[],
			runList5:[],
			freshList1:[],
			titleList1:[],
			imgList1:[],
			picList9:[],
			xuanList9:[],
			amanda:[],
			AmanderunList:[],
			WanderLust:[],
			show:true,
		}
	}

	componentWillMount() {

		 axios.get("/yiwu/showcase/template/00012324").then(res=>{
			 	    	this.setState({
			 	   			looplist:res.data.result.components[0].items,
			 	   			rootList:res.data.result.components[1].items,
			 	   			freshList:res.data.result.components[2].items,
			 	   			titleList:res.data.result.components[2].title,
			 	   			imgList:res.data.result.components[2].icon,
			 	   			phoneName:res.data.result.components[3].title,
			 	   			phonePic:res.data.result.components[3].icon,
			 	   			picList:res.data.result.components[4].items[0].url,
			 	   			picList2:res.data.result.components[6].items[0].url,
			 	   			picList3:res.data.result.components[8].items[0].url,
			 	   			picList4:res.data.result.components[10].items[0].url,
			 	   			titleList1:res.data.result.components[12].title,
			 	   			imgList1:res.data.result.components[12].icon,
			 	   			freshList1:res.data.result.components[12].items,
			 	   			picList9:res.data.result.components[13].icon,	
			 	   			xuanList9:res.data.result.components[13].title,
			 	   			amanda:res.data.result.components[13].items,
			 	    	})
			 	    })

		  axios.get("/yiwu/product/listByProductIds.do?productIds=617166&productIds=618172&productIds=310637").then(res=>{

		 	 	    	this.setState({
		 	 	   			runList:res.data.result,		 	   			
		 	 	    	})
		 	 	    })

		  axios.get("yiwu/product/listByProductIds.do?productIds=310085&productIds=620909&productIds=620509").then(res=>{

		  	 	    	this.setState({
		  	 	   			runList2:res.data.result,		 	   			
		  	 	    	})
		  	 	    })

		  axios.get("/yiwu/product/listByProductIds.do?productIds=144724&productIds=296753&productIds=618410").then(res=>{

		   	 	    	this.setState({
		   	 	   			runList3:res.data.result,		 	   			
		   	 	    	})
		   	 	    })

		  axios.get("/yiwu/product/listByProductIds.do?productIds=311459&productIds=311464&productIds=311381").then(res=>{

		   	 	    	this.setState({
		   	 	   			runList4:res.data.result,		 	   			
		   	 	    	})
		   	 	    })

		   axios.get("/yiwu/product/listByProductIds.do?productIds=220619&productIds=609487&productIds=216124").then(res=>{
		   	 	    	this.setState({
		   	 	   			runList5:res.data.result,		 	   			
		   	 	    	})
		   	 	    })

		   axios.get("/yiwu/product/listByProductIds.do?productIds=211962&productIds=557646&productIds=557500&productIds=609483&productIds=557664&productIds=617218").then(res=>{
		   				
		   	 	    	this.setState({
		   	 	   			AmanderunList:res.data.result,		 	   			
		   	 	    	})
		   	 	    })

		   axios.get("/yiwu/product/listByProductIds.do?productIds=613022&productIds=564155&productIds=500754&productIds=311320&productIds=613941&productIds=150807&productIds=618055&productIds=613283&productIds=615994&productIds=613990&productIds=562424&productIds=145164&productIds=615946&productIds=616655&productIds=616650&productIds=308438&productIds=310084&productIds=614503&productIds=506133&productIds=612224&productIds=613760&productIds=562404&productIds=310999&productIds=121442&productIds=311202&productIds=615905&productIds=308572&productIds=562932&productIds=612667&productIds=147514&productIds=150374&productIds=310177&productIds=143884&productIds=216916&productIds=355381&productIds=215066&productIds=220767&productIds=219249&productIds=207645").then(res=>{
		   				
		   	 	    	this.setState({
		   	 	   			WanderLust:res.data.result,		 	   			
		   	 	    	})
		   	 	    })

		    Promise.all([axios.get("/yiwu/showcase/template/00012324"), axios.get("/yiwu/product/listByProductIds.do?productIds=617166&productIds=618172&productIds=310637"),axios.get("yiwu/product/listByProductIds.do?productIds=310085&productIds=620909&productIds=620509"),axios.get("/yiwu/product/listByProductIds.do?productIds=144724&productIds=296753&productIds=618410"),axios.get("/yiwu/product/listByProductIds.do?productIds=311459&productIds=311464&productIds=311381"),axios.get("/yiwu/product/listByProductIds.do?productIds=220619&productIds=609487&productIds=216124"), axios.get("/yiwu/product/listByProductIds.do?productIds=211962&productIds=557646&productIds=557500&productIds=609483&productIds=557664&productIds=617218"),axios.get("/yiwu/product/listByProductIds.do?productIds=613022&productIds=564155&productIds=500754&productIds=311320&productIds=613941&productIds=150807&productIds=618055&productIds=613283&productIds=615994&productIds=613990&productIds=562424&productIds=145164&productIds=615946&productIds=616655&productIds=616650&productIds=308438&productIds=310084&productIds=614503&productIds=506133&productIds=612224&productIds=613760&productIds=562404&productIds=310999&productIds=121442&productIds=311202&productIds=615905&productIds=308572&productIds=562932&productIds=612667&productIds=147514&productIds=150374&productIds=310177&productIds=143884&productIds=216916&productIds=355381&productIds=215066&productIds=220767&productIds=219249&productIds=207645")]).then(res=>{
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

		<div id={styles.freshbox}>
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

		<div id={styles.piclist2}>
			<img src={this.state.picList2}/>
		</div>


		<div id={styles.rootlists_2ed}>
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

		<div id={styles.piclist3}>
			<img src={this.state.picList3}/>
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

		<div id={styles.piclist4}>
			<img src={this.state.picList4}/>
		</div>


		<div id={styles.rootlists_four}>
			<div className={styles.ontitle}>	

		</div>	
		<div className={styles.bottomlist}>
			<div className={styles.boxlist}>
				<ul>
					{
					this.state.runList5.map(item=>
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

	<div id={styles.amanda}>
		<div className={styles.title}>	
			<img src={this.state.imgList1}/>
			<p>{this.state.titleList1}</p>
		</div>	
		<div className={styles.pic}> 
			<ul>
				{
				this.state.freshList1.map(item=>
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
						<img src={this.state.picList9}/>
						<p>{this.state.xuanList9}</p>
					</div>
					<div className={styles.underlist}>
						<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:2000}} key={this.state.amanda.length}>
		                {
		                	this.state.amanda.map(item=>
		                		<img src={item.url} key={item.id}/>
		                	)
		                }
	            		</ReactSwipe>
					</div>	
				</div>


					<div id={styles.rootlists_five}>
						<div className={styles.ontitle}>	

					</div>	
					<div className={styles.bottomlist}>
						<div className={styles.boxlist}>
							<ul>
								{
								this.state.AmanderunList.map(item=>
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
						this.state.WanderLust.map(item=>
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

export default Market;