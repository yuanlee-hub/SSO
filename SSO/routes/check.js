const router=require('koa-router')();
const {Users}=require('../config/config');

router.get('/',async (ctx,next)=>{
    let user=ctx.cookies.get('user'),{redirect}=ctx.query;
    console.log('check user:',user);
    if(user){

    }
    await ctx.render('login',{
        title:[ctx.locals.name,'Login'].join('-'),
        success:ctx.flash.success,
        error:ctx.flash.error
    });
});

router.post('/',async ctx=>{
    let {name,password}=ctx.request.body,{redirect}=ctx.query;
    if(Users[name] && password==Users[name]){
        ctx.cookies.set('user',name);
        ctx.flash={success:'登录成功'};
        ctx.redirect(redirect?redirect:'/');
    }else{
        ctx.flash={error:'登录失败'};
        ctx.redirect('/login');
    }
});
module.exports=router;

