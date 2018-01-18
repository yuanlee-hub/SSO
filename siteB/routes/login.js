const router=require('koa-router')();
const config=require('../config/config');
const isLoggedIn=require('../middlewares/isLoggedIn');

router.get('/',isLoggedIn(),async (ctx,next)=>{
    let user=ctx.state.user;

    console.log('/login user:',user);
    //console.log('url:',ctx.protocol,ctx.host,ctx.url,ctx.port);

    if(!user)return ctx.redirect(`http://localhost:5000/login?redirect=${ctx.protocol}://${ctx.host}`);

    ctx.redirect('/');
});

module.exports=router;

