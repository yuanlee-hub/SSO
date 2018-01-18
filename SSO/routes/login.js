const router=require('koa-router')();
const {Users}=require('../config/config');

router.get('/',async (ctx,next)=>{
    let user=ctx.cookies.get('ssoCookieUser'),{redirect}=ctx.query;
    console.log('user/redirect:',user,redirect);

    if(user){
        if(redirect){
            return ctx.redirect(redirect+'?token='+user);
        }
        return ctx.redirect('/');
    }
    await ctx.render('login',{
        title:[ctx.locals.name,'Login'].join('-'),
        user,
        success:ctx.flash.success,
        error:ctx.flash.error
    });
});

router.post('/',async ctx=>{
    let {name,password}=ctx.request.body,{redirect}=ctx.query;
    if(Users[name] && password==Users[name]){
        ctx.cookies.set('ssoCookieUser',name);
        ctx.flash={success:'登录成功'};
        ctx.redirect(redirect?redirect+'?token='+name:'/');
        //ctx.redirect('/');
    }else{
        ctx.flash={error:'登录失败'};
        ctx.redirect('/login');
    }
});
module.exports=router;

