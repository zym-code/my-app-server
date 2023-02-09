const Koa = require("koa");
const app = new Koa();

const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const router = require("./routes/index");
const cors = require("koa-cors");

// 注册error
onerror(app);
// 注册bodyparser
app.use(bodyparser());
// 注册日志
app.use(logger());
// 注册静态资源
app.use(require("koa-static")(__dirname + "/public"));
// 注册跨域
app.use(cors());
// 注册路由
app.use(router.routes(), router.allowedMethods());

// logger-handling
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

app.listen(3000);
