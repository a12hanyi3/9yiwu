var webpack =require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool:"source-map",
    entry: {
        index:path.join(__dirname , "src/index.js")
    }, //已多次提及的唯一入口文件
    output: {
        path: path.join(__dirname ,"dist"), //打包后的文件存放的地方
        filename: "[name].bundle.js",//打包后输出文件的文件名
        publicPath:"/dist/"   //webpack output is served from
    },

    devServer: {
        inline:true,
        contentBase: "./",  //content not from webpack is serverd
        port: '8080',
        historyApiFallback: true,

        proxy:{
           '/search-service/*': {
                  target: 'http://m.9yiwu.com',
                  host: 'm.9yiwu.com',
                  changeOrigin:true
              },
           '/yiwu/*': {
                  target: 'http://m.9yiwu.com',
                  host: 'm.9yiwu.com',
                  changeOrigin:true
              },
           '/api/*': {
                  target: 'http://localhost:3000',
                  host: 'localhost:3000',
                  changeOrigin:true
              }
        }
        // localshot:8088/v4/api/a.php
        // https://m.maizuo.com/v4/api/a.php
        
    },
    

    module:{
        loaders:[
         
            {
                test: /\.css$/,
                 loader: 'style-loader!css-loader'//添加对样式表的处理,内联样式
                // loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })//外部样式
            },

            {
                test: /\.scss$/,
                 loader: 'style-loader!css-loader?modules!sass-loader'//添加对样式表的处理,内联样式
                // loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })//外部样式
            },

            {
                test:/\.js$/, //随便起的test 名字
                exclude: /node_modules/, //排除一个
                // exclude: /(node_modules|src)/, //*****排除多个怎么写？？？
                loader:'babel-loader',
                query:{
                    presets:['env','react']
                }
                
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[ext]?[hash]' //目标文件夹
                }
            }, //添加对字体文件的支持。

            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[ext]'
                }
            }
            
        ]
    },

    resolve: {
        alias: {
          '@': path.resolve("src")
        }
        //起一个别名@ 代替src
    },

    plugins:[
        new webpack.ProvidePlugin({
            axios: 'axios'  //各个模块都可以使用axios
        })
        // new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })
    ] 
       
}
