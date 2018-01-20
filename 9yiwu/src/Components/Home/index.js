import React,{Component} from "react";
import styles from "./index.scss";
import {connect} from "react-redux";
import ReactSwipe from 'react-swipe';

import { ActivityIndicator } from 'antd-mobile';
//import Looplist from "../looplist";

class Home extends Component {
  constructor(){
    super();
    this.state={
      list:[],
      looplist:[],
      rootList:[],
      freshList:[],
      imgList:[],
      picList:[],
      ywList:[],
      ywtitleList:[],
      ywimgList:[],
      picList2:[],
      rootLists:[],
      runList:[],
      rootIcon:[],
      underList:[],
      show:true
    }
  }

  // componentDidMount(){
  //    var ulList = this.refs.ulList;
  //    ulList.ontouchstart = function(ev){
  //      var left = ulList.offsetLeft;
  //      var start= ev.changedTouches[0].clientX;  
  //      ulList.ontouchmove = function(ev){
  //        var move= ev.changedTouches[0].clientX - start + left;
  //        var ulWidth = ulList.offsetWidth -  window.innerWidth;
  //        if(move<-ulWidth){
  //          ulList.style.left=-ulWidth/100+"rem"
  //        }else if(move>0){
  //          ulList.style.left=0+"rem"
  //        }else{
  //          ulList.style.left=move/100+"rem"
  //        }
  //      }
  //        ulList.ontouchend = function(){
  //          ulList.ontouchmove = null;
  //        }
  //    }

  // }
  componentWillMount(){
              axios.get("/yiwu/showcase/template/7").then(res=>{
             
              this.setState({
                looplist:res.data.result.components[0].items,
                rootList:res.data.result.components[1].items,
                freshList:res.data.result.components[2].items,
                titleList:res.data.result.components[2].title,
                imgList:res.data.result.components[2].icon,
                picList:res.data.result.components[3].items[0].url,
                ywList:res.data.result.components[4].items,
                ywtitleList:res.data.result.components[4].title,
                ywimgList:res.data.result.components[4].icon,
                picList2:res.data.result.components[5].items[0].url,
                rootLists:res.data.result.components[6].title,
                rootIcon:res.data.result.components[6].icon,
                
              })
            })
        
               axios.get("/yiwu/product/listByProductIds.do?productIds=148556&productIds=310091&productIds=616922&productIds=615689&productIds=144703&productIds=289615&productIds=150160&productIds=557688&productIds=291280&productIds=616306&productIds=500263&productIds=311388&productIds=290979&productIds=616571&productIds=310767&productIds=562518&productIds=614682&productIds=563612&productIds=504840&productIds=260938&productIds=505040&productIds=563544&productIds=563143&productIds=614233&productIds=563415&productIds=311618&productIds=560359&productIds=501948&productIds=565806&productIds=513198&productIds=545193&productIds=189354&productIds=456487&productIds=277183&productIds=616018&productIds=560129&productIds=406286&productIds=616542&productIds=560231&productIds=502506&productIds=561604&productIds=615954&productIds=617288&productIds=612036&productIds=615659&productIds=306899&productIds=294046&productIds=294500&productIds=616665&productIds=310202&productIds=294339").then(res=>{

              this.setState({
                underList:res.data.result,              
              })
            })


               axios.get("/yiwu/product/listByProductIds.do?productIds=294047&productIds=612155&productIds=220399&productIds=563200&productIds=561691&productIds=614516&productIds=140041&productIds=145780&productIds=144056").then(res=>{

              this.setState({
                runList:res.data.result,              
              })
             
            })

      Promise.all([axios.get("/yiwu/showcase/template/7"),axios.get("/yiwu/product/listByProductIds.do?productIds=148556&productIds=310091&productIds=616922&productIds=615689&productIds=144703&productIds=289615&productIds=150160&productIds=557688&productIds=291280&productIds=616306&productIds=500263&productIds=311388&productIds=290979&productIds=616571&productIds=310767&productIds=562518&productIds=614682&productIds=563612&productIds=504840&productIds=260938&productIds=505040&productIds=563544&productIds=563143&productIds=614233&productIds=563415&productIds=311618&productIds=560359&productIds=501948&productIds=565806&productIds=513198&productIds=545193&productIds=189354&productIds=456487&productIds=277183&productIds=616018&productIds=560129&productIds=406286&productIds=616542&productIds=560231&productIds=502506&productIds=561604&productIds=615954&productIds=617288&productIds=612036&productIds=615659&productIds=306899&productIds=294046&productIds=294500&productIds=616665&productIds=310202&productIds=294339"),axios.get("/yiwu/product/listByProductIds.do?productIds=294047&productIds=612155&productIds=220399&productIds=563200&productIds=561691&productIds=614516&productIds=140041&productIds=145780&productIds=144056")]).then(res=>{
      
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

      <div id={styles.piclist}>
        <img src={this.state.picList}/>
      </div>

      <div id={styles.recommend}>
        <div className={styles.ontitle}>  
          <img src={this.state.ywimgList}/>
          <p>{this.state.ywtitleList}</p>
        </div>  
        <div className={styles.picture}> 
          <ul>
            {
            this.state.ywList.map(item=>
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
          <img src={this.state.rootIcon}/>
          <p>{this.state.rootLists}</p>
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
          this.state.underList.map(item=>
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
  
export default Home;