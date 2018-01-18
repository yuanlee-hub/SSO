module.exports=()=>async (ctx,next)=>{
    ctx.state.user=ctx.cookies.get('ssoCookieUser');
    await next();
};
