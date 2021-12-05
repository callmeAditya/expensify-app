// entry
const path=require('path')
// console.log(path.join(__dirname,'public'))
// const Pth=require('./')
module.exports={
    entry:'./app.js',
    mode:'development',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    devtool:'eval-cheap-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true
    }
}




