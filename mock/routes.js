const express = require('express')
const router = express.Router()
const cookie = require('cookie')

const auth = require('./auth')

const { getUserData, generateToken } = require('./utils')

const users = [
    {
        id: 1,
        name: 'Ismet David',
        location: 'Aadorf, Thurgau',
        email: 'ismet.david@example.com',
        phone: '075 626 53 56',
        picture: 'https://randomuser.me/api/portraits/med/men/4.jpg',
        cover: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        username: 'ismetdavid',
        password: 'ismetdavid',
        connections: 1000,
        batch: 14,
        branch: 'CSE',
        position: 'SENIOR SOFTWARE ENGINEER AT INFOSYS',
        about: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    },
    {
        id: 2,
        name: 'Charlotte Li',
        location: 'Notre Dame de Lourdes, Saskatchewan',
        email: 'charlotte.li@example.com',
        phone: '904-999-8683',
        picture: 'https://randomuser.me/api/portraits/med/women/29.jpg',
        cover: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        username: 'charlotteli',
        password: 'charlotteli',
        connections: 2000,
        batch: 14,
        branch: 'CSE',
        position: 'SENIOR SOFTWARE ENGINEER AT INFOSYS',
        about: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.',
        skills: [
            {"1" : 'html'},
            {"2": 'css'}
        ]
    },
    {
        id: 3,
        name: 'Lauren Hoffman',
        location: 'Buncrana, Wexford',
        email: 'lauren.hoffman@example.com',
        phone: '031-152-9047',
        picture: 'https://randomuser.me/api/portraits/med/women/62.jpg',
        cover: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg',
        username: 'laurenhoffman',
        password: 'laurenhoffman',
        connections: 3000,
        batch: 14,
        branch: 'CSE',
        position: 'SENIOR SOFTWARE ENGINEER AT INFOSYS',
        about: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    }
]

router.get('/users', auth, (req, res) => {
    const data = users.results.map((user) => getUserData(user))
    res.status(200).json(data)
})

router.get('/users/:username', auth, (req, res) => {
    const { username } = req.params
    const user = users.find((user) => user.username == username)

    if (!user) return res.status(404).send()

    res.status(200).json(getUserData(user))
})

router.post('/login', (req, res) => {
    const { username, password } = req.body
    if (!username || !password) return res.status(401).send()

    const user = users.find((user) => user.username == username)

    if (!user) return res.status(404).send()
    if (user.password != password) return res.status(401).send()

    res.setHeader(
        'Set-Cookie',
        cookie.serialize('auth', generateToken(user), {
            httpOnly: true,
            path: '/',
            domain: 'localhost',
            expires: new Date(Date.now() + 6.048e8)
        })
    )
    res.status(200).json({ user })
})

router.get('/profile', auth, (req, res) => {
    const { username } = req.user
    if (!username) return res.status(401).send()

    const user = users.find((user) => user.username == username)
    if (!user) return res.status(401).send()

    res.status(200).json(user)
})

router.get('/feeds', auth, (req, res) => {
    res.status(200).json({ test: 'test' })
})

router.get('/messages', auth, (req, res) => {
    res.status(200).json({ test: 'test' })
})

router.get('/notifications', auth, (req, res) => {
    res.status(200).json({ test: 'test' })
})

router.get('/logout', auth, (req, res) => {
    res.setHeader(
        'Set-Cookie',
        cookie.serialize('auth', 'deleted', {
            httpOnly: true,
            path: '/',
            domain: 'localhost',
            expires: new Date(Date.now())
        })
    )
    res.status(200).send()
})
router.post('/registration', (req, res) => {
    let newuserdetails = {
        name: req.body.name,
        username: req.body.username,
        phone: req.body.phonenumber,
        location: req.body.location,
        email: req.body.email,
        password: req.body.password
    }

    console.log(newuserdetails)

    res.status(200).send()
})

// router.post('/registration', (req, res) => {
//     let newuserdetails = {
//         name: req.body.name,
//         username: req.body.username,
//         phone: req.body.phonenumber,
//         location: req.body.location,
//         email: req.body.email,
//         password: req.body.password
//     }

//     newuserdetails.save((err) => {
//         if (err) {
//             res.json({ msg: 'failed to add details' })
//             console.log(err)
//             res.status(401).send()
//         } else {
//             res.json({ msg: 'details added' })
//             res.status(200).send()
//         }
//     })
// })

module.exports = router
