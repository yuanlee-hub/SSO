const router=require('koa-router')();

module.exports=app=>{
    let home=require('./home');
    router.use('/',home.routes(),home.allowedMethods());

    let login=require('./login');
    router.use('/login',login.routes(),login.allowedMethods());

    let check=require('./check');
    router.use('/check',check.routes(),check.allowedMethods());

    app.use(router.routes(),router.allowedMethods());
};
