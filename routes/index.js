const router = require('koa-router')()
const UserController = require("./users")

router.prefix('/api')
router
    // 用户
    .post('/user/register',UserController.register)
    .post('/user/login',UserController.login)

module.exports = router