import React,{Component} from "react";
import styles from "./index.scss";
import {Tabs} from 'antd-mobile';
import Navbar from "@/Components/Common/Navbar";
import Searchbar from "@/Components/Common/Searchbar";
import Home from "@/Components/Home";
import Numeral from "@/Components/Home/Numeral";
import Fashion from "@/Components/Home/Fashion";
import Earth from "@/Components/Home/Earth";
import LifeHome from "@/Components/Home/LifeHome";
import Shoes from "@/Components/Home/Shoes";
import Mother from "@/Components/Home/Mother";
import Television from "@/Components/Home/Television";
import Market from "@/Components/Home/Market"



document.documentElement.style.fontSize=window.innerWidth/375*100+"px";

class Looplist extends Component{
  constructor(){
    super(); 
    this.state={
      tabs:[],
       list:[<Home/>,<Numeral/>,<Fashion/>,<Earth/>,<LifeHome/>,<Shoes/>,<Market/>,<Mother/>,<Television/>,],
    }
     this.mytitle = [{title:""}]
  }

  componentWillMount(){
       axios.get('/yiwu/showcase/list?_k=dkhen2').then(res=>{
        for(var i=0;i<res.data.result.length;i++){
          this.mytitle[i]={title:res.data.result[i].showcaseName}
        }    
              this.setState({
                tabs:this.mytitle
              })
                      
            })
      }


render(){
  var obj={
    border:"2px solid #f60"
  }
  
  return (<div>
      <Searchbar/>
      <div className={styles.con}>
        <Tabs tabs={this.state.tabs} initialPage={0} tabBarUnderlineStyle={false} animated={true} tabBarActiveTextColor='#f60' tabBarUnderlineStyle={obj} >
            {
              this.state.tabs.map((item,index)=>
                <div key={index}>
                  <div style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                     {item.showcaseName} 
                  </div>
                  { this.state.list[index]}
                </div>
              )
            }
        </Tabs>
        </div>
      <Navbar/>
  </div>)
}

}

export default Looplist;