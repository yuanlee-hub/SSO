module.exports={
    name:'SSO',
    keys:['SSO'],
    secret:'SSO',
    port:5000,
    cookie:{
        maxAge:1000 * 60 * 60 * 24//1 day
    },
    session:{
        key:'SSO:sess',
        maxAge:1000*3600*24,
        overwrite:true,
        httpOnly:true,
        signed:true,
        rolling:false
    },
};