

class UserController{
    // 用户注册
    static async register(ctx) {
        ctx.body = 'this is a users registerregisterregister!'
    }
    // 用户登录
    static async login(ctx) {
        ctx.body = 'this is a users/bar loginloginloginlogin'
    }
}
module.exports = UserController