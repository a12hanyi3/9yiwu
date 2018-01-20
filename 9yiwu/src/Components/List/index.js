import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import Navbar from "@/Components/Common/Navbar";
import {ActivityIndicator,Toast} from "antd-mobile";
import { InputNumber, message } from 'antd';

import { Modal, Button } from 'antd';
const confirm = Modal.confirm;



class List extends Component {
	constructor(){
		super();
		this.state={
			searchResult:[],
			name:[],
			moren:"ASC",
			show:true,
			chooselist:[],
			chooseshow:false,
			chooseStock:null,
			chooseName:null,
			choosePicture:null,
			chooseBar1:null,
			chooseBar2:null,
			chooseBar1list:[],
			chooseBar2list:[],
			actborder1:[],
			actborder2:[],
			actbordera:[],
			actborderb:[],
			chooseBar1listbox:[],
			storeName:null,
			chooseNumber:1,
			proPrice:null,
			skuId:null,
			canAdd:[false,false],
			username:"13333333333",
			storeId:null,
			productId:null,


		}
		this.icon = <i className="iconfont">&#xe6a6;</i>;
		this.color1 = styles.active;
		this.color2 = null;
		this.color3 = null;
	}




	componentWillMount(){
		var list = this.props.location.search.split("=");
		var decodename= decodeURI(list[1]);
		var username = sessionStorage.getItem('username')
		axios.get(`/search-service/product/query?pageSize=20&names=${decodename}`).then(res=>{
			this.setState({
				searchResult:res.data.result,
				name:decodename,
				show:false,
				username:username
			})
		})
	};

	chooseClose(e){
		e.stopPropagation()
		if(this.state.chooseshow){
			this.setState({
				chooseshow:false
			})
		}
	}

	changeBorder1(item){
		var border1list = [...this.state.actbordera]
		var canAdd = [...this.state.canAdd]




		for(var i=0; i<border1list.length; i++){
			if(border1list[i] == item.skuId){
				border1list[i] = styles.actborder	
			}	
		}

		if(canAdd[1] == true){
			canAdd = [true,true]
		}else{
			canAdd = [true,false]
		}
		this.setState({
			actborder1:border1list,
			choosePicture:item.picture,
			chooseStock:item.stock,
			proPrice:item.price,
			skuId:item.skuId,
			canAdd:canAdd,
			productId:item.productId,
		})
	}

	changeBorder2(item){
		// console.log(this.state.chooseBar1listbox[index])
		var index = null
		var border2list = [...this.state.actborderb]
		var canAdd = [...this.state.canAdd]
		for(let i=0; i<border2list.length; i++){
			if(border2list[i] == item.skuId){
				border2list[i] = styles.actborder
				index = i
			}			
		}
		// console.log(this.state.chooseBar1listbox)
		// if(this.state.chooseBar1listbox.length == 1){
			canAdd = [false,true]
		// }else

		var chooseBar1list = [...this.state.chooseBar1listbox[index]]

		var actborder1 = []
		for(var c=0; c<chooseBar1list.length; c++){
			actborder1 = [...actborder1,chooseBar1list[c].skuId]
		}


		this.setState({
			chooseBar1list:chooseBar1list,
			actborder2:[...border2list],
			actbordera:[...actborder1],
			actborder1:[...actborder1],
			choosePicture:item.picture,
			chooseStock:item.stock,
			proPrice:item.price,
			skuId:item.skuId,
			canAdd:canAdd,
			productId:item.productId,

		})
	}

	choose (e,proid) {
		e.stopPropagation();

		this.setState({
			chooseStock:null,
			chooseName:null,
			choosePicture:null,
			chooseBar1:null,
			chooseBar2:null,
			chooseBar1list:[],
			chooseBar2list:[],
			actborder1:[],
			actborder2:[],
			show:true,

		})

		if(!this.state.chooseshow){
			axios.get(`/yiwu/product/detail.do?productId=${proid}`).then(res=>{
				var list = res.data.result.sku
				var key0 = res.data.result.attribute[0].attrId
				var key1 = res.data.result.attribute[1].attrId
				var attrValue2 = null
				var attrValue1 = null
				var chooseBar1list = []
				var chooseBar2list = []
				var count = 0

				for(let i=0; i<list.length; i++){

					// if(list[i].attribute.length == 1){
					// 	chooseBar1list = [...chooseBar1list,list[i]]
					// }else{
						if(list[i].attribute[0].attrId == 70||list[i].attribute[0].attrId == 17){
							chooseBar1list = [...chooseBar1list,list[i]]
						}
						if(list[i].attribute[1].attrId == 70||list[i].attribute[1].attrId == 17){
							chooseBar1list = [...chooseBar1list,list[i]]
						}
								
						if(list[i].attribute[1].attrId == 67){
							if(list[i].attribute[1].attrValue !== attrValue2){
								count++
								chooseBar2list = [...chooseBar2list,list[i]]
								attrValue2 = list[i].attribute[1].attrValue
							}
						}
						if(list[i].attribute[0].attrId == 67){
							if(list[i].attribute[0].attrValue !== attrValue2){
								count += 1
								chooseBar2list = [...chooseBar2list,list[i]]
								attrValue2 = list[i].attribute[0].attrValue
							}
						}

					// }

				}
				// if(res.data.result.attribute.length !== 1){
					var chooseBar1listbox = []
					for(var d=0; d<count; d++){
						chooseBar1listbox.push(chooseBar1list.slice(d*chooseBar1list.length/count,(d+1)*chooseBar1list.length/count))
					}

					var actborder1 = [];
					var actborder2 = [];
					var bar1listbox = [...chooseBar1listbox[0]]
					for(var c=0; c<bar1listbox.length; c++){
						actborder1 = [...actborder1,bar1listbox[c].skuId]
					}

					var bar2listbox = [...chooseBar2list]
					for(var d=0; d<bar2listbox.length; d++){

						actborder2 = [...actborder2,bar2listbox[d].skuId]
					}
					// console.log(chooseBar1listbox)
					var decodename= decodeURI(res.data.result.storeName);
					this.setState({
						chooselist:res.data.result,
						chooseshow:true,
						chooseStock:res.data.result.stock,
						chooseName:res.data.result.name,
						choosePicture:res.data.result.picture,
						chooseBar1:res.data.result.attribute[0],
						chooseBar2:res.data.result.attribute[1],
						chooseBar2list:chooseBar2list,
						chooseBar1list:[...chooseBar1listbox[0]],
						actborder1:[...actborder1],
						actborder2:[...actborder2],
						actbordera:[...actborder1],
						actborderb:[...actborder2],
						chooseBar1listbox:[...chooseBar1listbox],
						storeName:decodename,
						proPrice:res.data.result.sku[0].price,
						skuId:res.data.result.sku[0].skuId,
						show:false,
						storeId:res.data.result.storeId,


					})

				// }else{
				// 	var decodename= decodeURI(res.data.result.storeName);
				// 	this.setState({
				// 		chooselist:res.data.result,
				// 		chooseshow:true,
				// 		chooseStock:res.data.result.stock,
				// 		chooseName:res.data.result.name,
				// 		choosePicture:res.data.result.picture,
				// 		chooseBar1:res.data.result.attribute[0],
				// 		// chooseBar2:res.data.result.attribute[1],
				// 		// chooseBar2list:chooseBar2list,
				// 		chooseBar1list:[...chooseBar1list],
				// 		actborder1:[...actborder1],
				// 		// actborder2:[...actborder2],
				// 		actbordera:[...actborder1],
				// 		// actborderb:[...actborder2],
				// 		// chooseBar1listbox:[...chooseBar1listbox],
				// 		storeName:decodename,
				// 		proPrice:res.data.result.sku[0].price,
				// 		skuId:res.data.result.sku[0].skuId,
				// 		show:false,
				// 		storeId:res.data.result.storeId,


				// 	})

				// }


			})
		}
	}


	moren(){

		this.color1 = styles.active
		this.color2 = null
		this.color3 = null
		this.icon = <i className="iconfont">&#xe6a6;</i>
		
		axios.get(`/search-service/product/query?pageSize=20&pageNo=0&sortCol=id&sortOrder=DESC&names=${this.state.name}`).then(res=>{
			this.setState({
				searchResult:res.data.result,
			})
		})
	}

	jiage(){
		this.color1 = null
		this.color2 = styles.active
		this.color3 = null

		axios.get(`/search-service/product/query?pageSize=20&pageNo=0&sortCol=price&sortOrder=${this.state.moren}&names=${this.state.name}`).then(res=>{
			this.setState({
				searchResult:res.data.result,
			})
		})
		if(this.state.moren == "ASC"){
			this.setState({
				moren:"DESC"
			})

			this.icon = <i className="iconfont" style={{color:'#fe5400'}}>&#xe664;</i>;

		}

		if(this.state.moren == "DESC"){
			this.setState({
				moren:"ASC"
			})

			this.icon = <i className="iconfont"  style={{color:'#fe5400'}}>&#xe665;</i>;
		}
	}
	changxiao(){
		this.color1 = null
		this.color2 = null
		this.color3 = styles.active

		this.icon = <i className="iconfont">&#xe6a6;</i>;

		axios.get(`/search-service/product/query?pageSize=20&pageNo=0&sortCol=sell_count&sortOrder=DESC&names=${this.state.name}`).then(res=>{
			this.setState({
				searchResult:res.data.result,
			})
		})
	}

	numberChange(value){
		this.setState({
			chooseNumber:value
		})
	}

	addGood(){
		this.setState({
			show:true
		})
		axios.get(`/api/addcart?productId=${this.state.productId}&storeId=${this.state.storeId}&title=${this.state.storeName}&skuId=${this.state.skuId}&cartDetails=${this.state.chooseName}&price=${this.state.proPrice}&picture=${this.state.choosePicture}&quantity=${this.state.chooseNumber}&username=${this.state.username}`).then(res=>{
			this.setState({
				show:false,
				chooseshow:false
			})
					this.success();

		})

	}

	success(){
		message.config({
		  top: 250,
		  duration: 2,
		});
		message.success('添加成功');
	}

	render(){
		return <div id={styles.list} >
		{
			this.state.chooseshow?<div className={styles.choose} onClick={
				(e)=>{this.chooseClose.bind(this,e)()}
			}><div className={styles.addcart} onClick={(e)=>{e.stopPropagation()}}>
				<div className={styles.protop}>
					<img src={this.state.choosePicture}/>
					<div className={styles.cpRigth}>
						<p></p>
						<p>{this.state.chooseName}</p>
						<span>库存：{this.state.chooseStock}</span>
					</div>
				</div>
				<div className={styles.content}>
					<p>请选择颜色：</p>
					<div className={styles.chooseBar2list}>
						{
							this.state.chooseBar2list.map((item,index)=><div key={item.skuId} className={this.state.actborder2[index]} onClick={
									this.changeBorder2.bind(this,item)
								}>
								{item.attribute[1].attrId == 67?item.attribute[1].attrValue:item.attribute[0].attrValue}

								</div>)
						}
					</div>
					<p>请选择尺寸：</p>
					<div className={styles.chooseBar1list}>
						{	
							this.state.chooseBar1list.map((item,index)=> <div key={item.skuId} onClick={
								this.changeBorder1.bind(this,item)
								} className={this.state.actborder1[index]}>
								{
									item.attribute[0].attrId!==67||item.attribute[0].attrId!==67?item.attribute[0].attrValue:item.attribute[1].attrValue
								}

							</div>)
						}
					</div>

					
					<p>请选择数量：</p>
					<div className={styles.addCount}>
						<InputNumber size="large" min={1} max={parseInt(this.state.chooseStock)} defaultValue={1} onChange={this.numberChange.bind(this)} />
					</div>
				</div>
				<div className={styles.probottom}>
					<p className={styles.price}>
						单价：￥{this.state.proPrice}
					</p>
					{
						this.state.canAdd[0]&&this.state.canAdd[1]?<div onClick={
								this.addGood.bind(this)							
						}>加入购物车
						</div>:<div className={styles.notadd}>加入购物车</div>
					}
					
				</div>
			</div>
			</div>:null
		}
		<ActivityIndicator toast animating={this.state.show}/>
			<div className={styles.top}>
				<div className={styles.back} onClick={()=>{
					this.props.history.goBack()
				}}>
					<i className="iconfont">&#xe6be;</i>
				</div>
				<div className={styles.search}>
					<i className="iconfont">&#xe7b8;</i>
					<input type="text" placeholder={this.state.name}  onFocus={()=>{
						{
							this.props.history.push("/search")
						}
					}}/>
				</div>
				<NavLink to="/cart">
					<i className="iconfont">&#xe651;</i>
				</NavLink>
			</div>

			<ul className={styles.filter}>
				<li onClick={
					this.moren.bind(this)
				} className={this.color1}><p>默认</p></li>
				<li onClick={
					this.jiage.bind(this)
				} className={this.color2}>
				<p>价格
					{
						this.icon
					}
				</p>
				</li>
				<li onClick={
					this.changxiao.bind(this)
				} className={this.color3}><p>畅销</p></li>
			</ul>

			<ul className={styles.list}>
				{	
					this.state.searchResult.map(item=>
						<li  onClick={()=>{this.props.history.push(`/detail/${item.productId}`)}} key={item.productId}>
							<img src={item.picture}/>
							<div className={styles.proname}>{item.name}</div>
							<div className={styles.addcart}>
								<div>
									<p>￥{item.price}</p>
									<p>{item.sellCount}人已选购</p>
								</div>
								<img onClick={(e)=>this.choose(e,`${item.productId}`)
									//(e)=>this.handleClick(e)
								} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRBOEU4OEU1NUVDMTExRTY4NEZEQTk2RTMwNTg5ODg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRBOEU4OEU2NUVDMTExRTY4NEZEQTk2RTMwNTg5ODg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEE4RTg4RTM1RUMxMTFFNjg0RkRBOTZFMzA1ODk4ODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEE4RTg4RTQ1RUMxMTFFNjg0RkRBOTZFMzA1ODk4ODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz64mDHhAAAEM0lEQVR42syZW2iURxTH/7OJUayuVqkbWi+5mpgEr23BNyMVKwiKpRbbCiptoaUFX0QtRlCrLz72qVD6Ym9qFVSKPog++NCKSoXapsZsNTVik2BKzMVNXP36P+5ZXWM2+8188cse+EMevpnzy+yZM3POGO/TKAJaDbWUWkRVUzOoCdQkqovqoW5Sf1GXqDPUn0EcGkfoEmoT9R5V5jD+b+o76hvqxvOGrqB2UuuoQgS3JPUDtZtq9jso4vO7cdQu6gq1foSAofOs13l3q58Rga6kftEVHovnYzJvg/qpDAq9nLpIzUc4Nl/9vekK/TZ1nIoiXBN/x9S/FbSksG+pIoyOFan/pX6hJaaOjiJwJrhwzM4FLbv3oB4M+WDC8ePgrDIYeju1APllwvN5tsOlQvNl9rS2/xb/5wmpv88fYdRtCgu8n6pLH0CZ0N/rSZfVvGgpj4OxMC9OBzYfgbe9DqbnZljgcnK+mxke5dTanGf+3eswnbz3xE8D97phiueEGSbvKOdj6A+oAqsp2nnnmVYRJrSwfoiMO8Q66yna4kBxBbzYApiS1wLReDcuwLT95udT4dwm0LXULHtornTZQpjS14ElG92JC8bARHcAW2f6+Vo+qhXoJU7O2riRF3Mb/PpVSq5W/gbw8QGbEfUSJ686/aRtTcDU6fAKxgeL1JfKU/vDvy0S6ConZx2NJPdgptUEg+a+wL/NNiOqIk7xLOnvQR/Q2QrEZgeDjpXZrvTMiBahbiYrFKsMCC0rfc1mxMRIoPty+3Xm6lL3VCf7YSqL93Yr6KhA33VfaTqLlQfYhDxRjYHXbtVR6I5oX8JxpeOpmHTtX0ho3WmFSfZaQUuebqFedkt7jTBy61vBQj3h8IPV1AO3Gm1HtQj0VWqx00r1MHs8uA/MY/17zwG6pxPeiX0wdqOuFmqraoPzb/zP78AFVkXnvnQLEfshlySmzwZKWZJji6sQop1NFwEtehmxt7q3gI++Zkz3uiH0Mw80VPv+XamSwoyqYKuT0yusYHZxQ06Z4Qbd12VbvXjplZZk2wT/vb0hbmvLCPAfcPtijiCmi+qVzM3NMHes8vNDbSfE05BxbR242Su8U2/+CdjyM7yiycN/O5dV0ycHYD47ZOvlkHI+tbI7teq1z9fdHTxXO1KFQbJv+I87GZb9jP9Wq1XuV75nWghi0m5tQP7ZF5lcg2N4H3U5z4CFZ+9wHaaElupdeQLcpTyJ4aChWWQNNTDKwAPK0TRUL2Eokxeo90cRfED9n8nWAMlmh6lVge7bbtZNrVb/sIUWO6XV+uUQN528R57M1WrKZdf06rrHNY/7DIc96idn7eX32E5ocpd2q3RWkiMEm9T5anX+hK/rbMAXW9ksLpUtK+JHbyqhvNgOZbJK9XjyNi59lBe0ypdN3KtX3/TbuNzf/wji8H8BBgCFWw/xcXAfaQAAAABJRU5ErkJggg=="/>

							</div>
						</li>)
				}
			</ul>
			<Navbar/>
		</div>
	}



}


export default List;