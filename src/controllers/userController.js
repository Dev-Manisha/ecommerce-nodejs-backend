import User from "../models/userModel.js";


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (!users) {
            return res.status(400).json({ err: "unable to get all users" })
        }
        console.log("getting all users")

    } catch (error) {
        return res.status(500).json({ err: `Server Error:${error}` })
    }
}

export const getUserById = async (req, res) => {
    console.log("get user by id")
}

export const createUser = async (req, res) => {
    console.log("create users")
}

export const updateUser = async (req, res) => {
    console.log("update a user")
}

export const deleteUser = async (req, res) => {
    console.log("delete a user")
}
