const router=require('koa-router')();

router.get('/',async (ctx,next)=>{
/*    ctx.cookies.set('testCookie_112',new Date().toLocaleString());
    ctx.body='8';
    //ctx.redirect('/login');
    return;*/

    let user=ctx.cookies.get('ssoCookieUser');
    console.log('Home user:',user);

    await ctx.render('home',{
        title:[ctx.locals.name,'Home'].join('-'),
        user,
        success:ctx.flash.success,
        error:ctx.flash.error
    });
});

module.exports=router;

