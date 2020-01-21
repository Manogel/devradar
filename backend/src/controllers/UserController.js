const axios = require("axios");
const User = require("../models/User");
const parseStringAsArray = require("../utils/parseStringAsArray");
const { findConnections, sendMessage } = require('../websocket')

module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let user = await User.findOne({ github_username });

    if (!user) {
      const { data } = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      user = await User.create({
        github_username,
        techs: techsArray,
        avatar_url: data.avatar_url,
        bio: data.bio,
        name: data.name || data.login,
        location
      });

      const sendSocketMessageTo = findConnections({latitude, longitude}, techsArray)

      sendMessage(sendSocketMessageTo, 'new-user', user)

      return res.json(user);
    }
    return res.json(user);
  },

  async index(req, res) {
    let users = await User.find();

    return res.json(users);
  }
};
