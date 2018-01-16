const chalk=require('chalk');

module.exports=()=>async (ctx,next)=>{
    let start=Date.now();
    console.log([
        ' ',
        chalk.gray('<--')
        ,ctx.method,
        chalk.gray(ctx.url)
    ].join(' '));

    await next();

    console.log([
        ' ',
        chalk.gray('-->'),
        ctx.method,
        chalk.gray(ctx.url),
        chalk.green(ctx.response.status),
        chalk.gray((Date.now()-start)+'ms'),
        chalk.gray(length(ctx.response.headers['content-length']))
    ].join(' ')+'\n');
};

function length(l,i=0){
    let r=1024,units=['b','Kb','Mb','Gb'];
    l=Number(l);
    if(!l)return '--';
    if(l<r || i>=units.length-1)return l.toFixed(2)+units[i];
    return length(l/r,++i);
}