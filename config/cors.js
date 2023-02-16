const CORS_CONFIG = {
    origin:() => 'http://127.0.0.1:5173/',
    credentials:true,
    allowMethods:['GET','POST'],
    exposeHeaders:['Authorization'],
    allowHeaders:['Content-Type', 'Authorization', 'Accept']
}