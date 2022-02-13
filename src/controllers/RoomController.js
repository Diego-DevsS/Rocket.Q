module.exports = {
  create(req, res) {
    const roomId = 12345

    res.redirect(`/room/${roomId}`)
  }
}