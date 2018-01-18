## SSO流程

1.访问系统A，跳转到SSO登录页

2.登录成功，响应SSO登录，并在SSO域名下设置此用户Cookie

3.跳转到系统A

4.访问系统B，跳转到SSO检查Cookie，判断是否已经登录

