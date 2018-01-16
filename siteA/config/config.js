module.exports={
    name:'siteA',
    keys:['siteA'],
    secret:'siteA',
    port:5100,
    cookie:{
        maxAge:1000 * 60 * 60 * 24//1 day
    },
    session:{
        key:'siteA:sess',
        maxAge:1000*3600*24,
        overwrite:true,
        httpOnly:true,
        signed:true,
        rolling:false
    },
};