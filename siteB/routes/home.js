const router=require('koa-router')();
const config=require('../config/config');

router.get('/',async (ctx,next)=>{
    let user=ctx.cookies.get('user'),{token}=ctx.query;
    console.log('/ user/token:',user,token);
    //console.log('url:',ctx.protocol,ctx.host,ctx.url,ctx.port);

    if(!user)return ctx.redirect(`http://localhost:5000/login?redirect=${ctx.protocol}://${ctx.host}${ctx.url}`);

    await ctx.render('home',{
        title:[ctx.locals.name,'Home'].join('-'),
        user,
        site:config.name,
        success:ctx.flash.success,
        error:ctx.flash.error
    });

});

module.exports=router;