const router=require('koa-router')();
const config=require('../config/config');
const isLoggedIn=require('../middlewares/isLoggedIn');

router.get('/',isLoggedIn(),async (ctx,next)=>{
    let user=ctx.state.user,{token}=ctx.query;

    console.log('/post user/token:',user,token);
    //console.log('url:',ctx.protocol,ctx.host,ctx.url,ctx.port);

    if(!user)return ctx.redirect(`http://localhost:5000/login?redirect=${ctx.protocol}://${ctx.host}${ctx.url}`);

    await ctx.render('post',{
        title:[ctx.locals.name,'Post'].join('-'),
        user,
        success:ctx.flash.success,
        error:ctx.flash.error
    });

});

module.exports=router;