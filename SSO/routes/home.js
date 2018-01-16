const router=require('koa-router')();

router.get('/',async (ctx,next)=>{

    await ctx.render('home',{
        title:[ctx.locals.name,'Home'].join('-'),
        success:ctx.flash.success,
        error:ctx.flash.error
    });
});

module.exports=router;

