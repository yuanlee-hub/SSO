const router=require('koa-router')();
const config=require('../config/config');
const isLoggedIn=require('../middlewares/isLoggedIn');

router.get('/',isLoggedIn(),async (ctx,next)=>{
    let user=ctx.state.user;
    await ctx.render('home',{
        title:[ctx.locals.name,'Home'].join('-'),
        user,
        site:config.name,
        success:ctx.flash.success,
        error:ctx.flash.error
    });
});

module.exports=router;