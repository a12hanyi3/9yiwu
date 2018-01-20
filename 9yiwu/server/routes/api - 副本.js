var express = require('express');
var router = express.Router();
var User = require('../model/user');
var Cart = require('../model/cart')
/* GET users listing. */
router.post('/login', function(req, res) {
  // console.log(req.body)
	  User.find({
	  	username:req.body.username,
      password:req.body.password
	  },function(error,info){
	  	if(!error){
        console.log(req.body.username)
        console.log(req.body.password)
	  		if(info.length==0){
	  			res.send({result:false,message:"用户名密码错误"});
	  		}else{
	  			req.session.buoumall=info[0];
	  			res.send({result:true,message:req.body.username,sessionID:info[0].id});
	  		}
	  	}else{
        return error
      }
	})
})

router.post('/register', function(req, res) {
  User.find({
  	username:req.body.username,
  },function(error,info){
  	if(!error){
  		if(info.length==0){
  			  User.create({
  			  	username:req.body.username,
  			  	password:req.body.password,
  			  },function(error,info){
  			  	if(!error){
  			  		res.send({result:true,message:"注册成功"});
  			  }
  			})
  		}else{
  			res.send({result:false,message:"用户名已存在"});
  		}
  	}
  })
})

router.get('/addcart',function(req,res){
  // if(req.session.buoumall){
    Cart.find({
      username:req.query.username,
      skuId:req.query.skuId
    },function(error,info){
      if(!error){
        if(info.length==0){
          Cart.create({
            username:req.query.username,
            title:req.query.title,
            storeId:req.query.storeId,
            cartDetails:req.query.cartDetails,
            price:req.query.price,
            quantity:req.query.quantity,
            picture:req.query.picture,
            productId:req.query.productId,
            skuId:req.query.skuId,
          },function(error,info){
            if(!error){
              res.send({result:true,message:'添加成功'})
            }
          })
        }else{
          User.findByIdAndUpdate(info._id,{$set:{
            quantity:req.query.quantity,
          }},function(error,info){
            if(!error){
              res.send({result:true,message:'更改成功'})
            }
          })
        }
      }else{
        return error
      }
    })
  // }
 
})

router.get('/getcart',function(req,res){
  // if(req.session.buoumall){
    Cart.find({
      username:req.query.username,
      //skuId:req.query.skuId
    },function(error,info){
      if(!error){
        console.log(info)
              res.send({result:true,data:info})
        }else{
          return error
        }
      }
    )
  // }
 
})
module.exports = router;
