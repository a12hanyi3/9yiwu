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
    Cart.find({
      username:req.query.username,
      storeId:req.query.storeId
    },function(error,info){
      if(!error){
        var index=null;
        if(info.length!=0){
          console.log('qqqqqqq')
          for(let i=0;i<info[0].cartDetails.length;i++){
            if(info[0].cartDetails[i].skuId==req.query.skuId){
              index = i;
            }
          }
            if(!index){
              console.log(121321312323123213213214214)
              Cart.findByIdAndUpdate(info[0]._id,{$set:{
                cartDetails:[...info[0].cartDetails,{
                  productName:req.query.cartDetails,
                  price:req.query.price,
                  quantity:req.query.quantity,
                  picture:req.query.picture,
                  productId:req.query.productId,
                  skuId:req.query.skuId,
                  productAttr:req.query.cartDetails,
                }]

              }
              },function(error,info){
                if(!error){
                  res.send({result:true,message:'添加成功'})
                }
              })
            }else{
              console.log('错了')
              res.send({result:true,message:'添加成功'})
            }        
        }else{
           console.log('创建')
          Cart.create({
            username:req.query.username,
            title:req.query.title,
            storeId:req.query.storeId,
            cartDetails:[{
              productName:req.query.cartDetails,
              price:req.query.price,
              quantity:req.query.quantity,
              picture:req.query.picture,
              productId:req.query.productId,
              skuId:req.query.skuId,
              productAttr:req.query.cartDetails,
            }]
          },function(error,info){
            if(!error){
              res.send({result:true,message:'添加成功'})
            }
          })        
        }
      }else{
        res.send({result:false,message:'添加失败'})
      }
    })
})




router.get('/getcart',function(req,res){
    Cart.find({
      username:req.query.username,
    },function(error,info){
      if(!error){
        console.log(info)
              res.send({result:true,data:info})
        }else{
          return error
        }
      }
    ) 
})



router.get('/removecart',function(req,res){
    var arr = req.query.skuId.split(',')
    Cart.find({
      username:req.query.username,
    },function(error,info){
      for(let i=0;i<arr.length;i++){
        for(let j=0;j<info[0].cartDetails.length;j++){
          if(arr[i]==info[0].cartDetails[j].skuId){
            Cart.findOneAndRemove(arr[i], function (err) {
            
            });
          }
          
        }       
      }
      res.send({result:true,message:'删除成功'})
    })
})


module.exports = router;
