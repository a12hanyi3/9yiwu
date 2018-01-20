import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom"


class Search extends Component {
	constructor(){
		super();
		this.state={
			historylist:[]
		}
	}
	
	savelocal(e){
		if(e.keyCode !== 13){
			return
		}
		if(!this.refs.searchInput.value){
			return
		}
		if(localStorage.getItem('historylist')){
			var list = [localStorage.getItem('historylist')]
			localStorage.setItem('historylist',[this.refs.searchInput.value,...list])
		}else{
			localStorage.setItem('historylist',[this.refs.searchInput.value])
		}

		this.props.history.push(`/list?names=${this.refs.searchInput.value}`)
	}
	removeItem(){
		localStorage.removeItem("historylist");
		this.setState({
			historylist:[]
		})
	}
	componentWillMount(){
		if(localStorage.getItem('historylist')){
			var list = localStorage.getItem('historylist').split(",")
			list= new Set(list)
			list = Array.from(list) 
			this.setState({
				historylist:list
			})
		}
	}

	render(){
		return <div id={styles.search}>
			<div className={styles.top}>
				<div>
					<i className="iconfont">&#xe7b8;</i>
					<input type="text" placeholder="商品名 品牌 分类" ref="searchInput" onKeyDown={
						this.savelocal.bind(this)
					}/>
				</div>
				<NavLink to="/home">取消</NavLink>
			</div>
			
			<div className={styles.hisList}>
				<div className={styles.del} >
					<i className="iconfont">&#xe7b8;</i>
					搜索历史
					<i className="iconfont" onClick={this.removeItem.bind(this)}>&#xe628;</i>
				</div>
				{

					this.state.historylist.map(item=>
						<NavLink to={`/list?names=${item}`} key={item} className={styles.his}>
							<i className="iconfont">&#xe646;</i>
							{item}
							<i className="iconfont">&#xe63c;</i>
						</NavLink>)
				}
			</div>
		</div>
	}
}

export default Search;