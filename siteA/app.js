const config=require('./config/config');
const Koa=require('koa2');
const app=new Koa();

app.keys=config.keys;

//Middlewares
app.use(async (ctx,next)=>{
    ctx.locals={name:config.name};
    await next();
});
app.use(require('./middlewares/errorHandle'));
app.use(require('koa-static')('./public'));
app.use(require('./middlewares/logger')());
app.use(require('koa-session')(config.session,app));
app.use(require('koa-flash')({key:'flash'}));
app.use(require('koa-handlebars-next')({
    cache:'development'!==app.env,
    defaultLayout:'main',
    layoutsDir:'views/layouts',
    partialsDir:'views/partials',
    helpers:{
        section(name, opts){
            if(!this._sections)this._sections={};
            this._sections[name]=opts.fn(this);
            return null;
        }
    }
}));

require('./routes/index')(app);

app.listen(config.port,'200.200.200.240',()=>{
    console.log(`\n\n[${config.name}] Port:${config.port} Time:${new Date().toLocaleString()}`);
});