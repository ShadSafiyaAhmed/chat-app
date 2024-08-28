import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    if(!req.user || !req.user._id){
        return res.status(400).json({error: "User not authenticated!"})
    }
    const loggedInUsers = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUsers } }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
