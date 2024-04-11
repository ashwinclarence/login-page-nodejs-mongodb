const collection = require('../model/connection')

const admin = (req, res) => {
    if (req.session.admin) {
        res.redirect('/admin/home')
    } else {
        res.redirect('/admin/login')
    }
}
const login = (req, res) => {
    if (req.session.admin) {
        res.redirect('/admin/home')
    } else {
        res.render('adminLogin', { title: "Admin Login", status: false })
    }
}
const loginPost = (req, res) => {
    const adminUsername = 'admin@123';
    const adminPassword = 'admin'
    if (req.body.adminMail === adminUsername && req.body.adminPassword === adminPassword) {
        req.session.admin = req.body.adminMail
        res.redirect('/admin/home')
    } else {
        res.render('adminLogin', { title: 'Login Error', loginErrorMess: "Invalid username or password", status: true })
    }
}
const home = async (req, res) => {
    if (req.session.admin) {
        try {
            const userSearch = req.query.adminSearch || '';
            const user = await collection.find({ name: { $regex: userSearch, $options: 'i' } })
            res.render('adminHome', { title: 'Admin Home', user })
        } catch (err) {
            console.log(`Error occurred during admin home ${err}`);
        }

    } else {
        res.redirect('/admin')
    }
}
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(`Error occurred while admin logout ${err}`)
        } else {
            res.redirect('/admin/login')
        }
    })
}

module.exports = { admin, login, loginPost, home, logout }