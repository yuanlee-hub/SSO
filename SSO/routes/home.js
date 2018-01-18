const router=require('koa-router')();

router.get('/',async (ctx,next)=>{
    let user=ctx.cookies.get('user');
    console.log('Home user:',user);

    if(!user)return ctx.redirect('/login');

    await ctx.render('home',{
        title:[ctx.locals.name,'Home'].join('-'),
        user,
        success:ctx.flash.success,
        error:ctx.flash.error
    });
});

module.exports=router;

