module.exports={
    name:'siteB',
    keys:['siteB'],
    secret:'siteB',
    port:5200,
    cookie:{
        maxAge:1000 * 60 * 60 * 24//1 day
    },
    session:{
        key:'siteB:sess',
        maxAge:1000*3600*24,
        overwrite:true,
        httpOnly:true,
        signed:true,
        rolling:false
    },
};