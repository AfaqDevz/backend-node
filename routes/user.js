import express from "express";
const router = express.Router();
const users = [
    {
        fullName: 'Michael Jackson',
        email: 'michaeljackson@gmail.com',
        id: 1,
    },
]

router.get('/', (req, res) => {
    res.status(200).json({
        error: false,
        data: users,
        message: 'User found!',
    })
});

router.post('/', (req, res) => {
    const {fullName, email} = req.body;
    users.push({fullName, email, id: users.length + 1});
    res.status(201).json({
        error: false,
        data: users,
        message: 'User added!',
    })
});

router.get("/:id", (req, res) => {
    const user = users.find((data) => data.id == req.params.id);
    if(!user){
        return res.status(404).json({
            error: true,
            data: null,
            message: 'User not found!',
        })
    }
    if(user){
        return res.status(200).json({
            error: false,
            data: user,
            message: 'User found!',
        })
    }

    res.status(500).json({
        error: true,
        data: null,
        message: "Something went wrong",
    })
})


router.put('/:id', (req, res) => {
    const user = users.find((data) => data.id == req.params.id);
    const {fullName, email} = req.body;
    if(!user){
        return res.status(404).json({
            error: true,
            data: null,
            message: 'User not found!',
        })
    }

    if (fullName) user.fullName = fullName
    if (email) user.email = email

    return res.status(200).json({
        error: false,
        data: user,
        message: 'User Updated!',
    })
})

export default router;