const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const mongoose = require('mongoose')

AdminBro.registerAdapter(AdminBroMongoose)


const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin',
    branding: {
        companyName: 'Anonymous'
    }
})

// const router = AdminBroExpress.buildRouter(adminBro)
const ADMIN = {
    email: 'admin@example.com',
    password: 'password',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async(email, password) => {
        if (ADMIN.password === password && ADMIN.email === email) {
            return ADMIN
        }
        return null
    },
    cookieName: 'admin',
    cookiePassword: 'somePassword',
})


module.exports = router