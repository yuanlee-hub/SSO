const router=require('koa-router')();

module.exports=app=>{
    let home=require('./home');
    router.use('/',home.routes(),home.allowedMethods());

    let post=require('./post');
    router.use('/post',post.routes(),post.allowedMethods());

    let login=require('./login');
    router.use('/login',login.routes(),login.allowedMethods());

    let logout=require('./logout');
    router.use('/logout',logout.routes(),logout.allowedMethods());

    app.use(router.routes(),router.allowedMethods());
};
