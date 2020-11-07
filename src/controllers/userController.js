import User from "../models/User";

export const createUser = async (req, res) => {
    res.json('Creating User');
};

export const getUsers = async (req, res) => {
    const user = await User.find();
    return res.status(200).json(user);
};