const axios = require('axios')
const User = require('../models/User')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async store (req, res) {
    const { github_username, techs, latitude, longitude } = req.body
   
    let user = await User.findOne({github_username})

    if (!user){
    const { name, avatar_url, bio } = await axios.get(`https://api.github.com/users/${github_username}`)
    
    const techsArray = parseStringAsArray(techs)
  
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }
  
    user = await User.create({
      github_username,
      techs: techsArray,
      avatar_url,
      bio,
      name,
      location
    })
  
    return res.json(user)
  }
    return res.json(user)
  },

  async index (req, res) {

    let users = await User.find()

    return res.json(users)
  }
  
}