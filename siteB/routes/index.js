const router=require('koa-router')();

module.exports=app=>{
    let home=require('./home');
    router.use('/',home.routes(),home.allowedMethods());

    app.use(router.routes(),router.allowedMethods());
};
