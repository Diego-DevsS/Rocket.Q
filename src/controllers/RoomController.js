const Database = require("../db/config")

module.exports = {
  async create(req, res) {
    const db = await Database()
    const pass = req.body.password
    let roomId

    // Gera o numero da sala
    for(var i=0; i<6; i++) {
      i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
      roomId += Math.floor(Math.random() * 10).toString()
    }

    // verifica se  esse  numero ja existe no banco
    db.run(`SELECT id FROM rooms`)


    // Inseri a sala no banco
    await db.run(`INSERT INTO rooms (
      id,
      pass
  ) VALUES (
      ${parseInt(roomId)},
      ${pass}
  )`)

    await db.close()

    res.redirect(`/room/${roomId}`)
  }
}