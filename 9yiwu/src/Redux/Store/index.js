import {createStore,combineReducers} from "redux";
// import {reducer,reducer2} from "../Reducer";


//合并所有的reducer 为一个大的reducer

const myreducer = combineReducers({
	// changetitleReducer:reducer1,
	// changeListReducer:reducer2
	test1:[],
	test2:[]
})


import thunk from 'redux-thunk'; //引入中间件 做异步请求
import {applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise';


//createStore 接受一个参数 ，是我们自己创建的reducer;
const store  = createStore(myreducer,applyMiddleware(thunk,promiseMiddleware));


export default store;