const { User } = require( '../models/user.model' );

const getAllUsers = async ( req, res ) => {
    const users = await User.findAll();

    res.status(200).json({
        users,
    });
};

const createUser = async ( req, res ) => {
    const { name, email, password } = req.body;

    const newUser = await User.create({ name, email, password });

    res.status(201).json({ newUser });
};

module.exports = { getAllUsers, createUser }