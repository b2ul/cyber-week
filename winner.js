let winner = null;
 
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Cache-Control', 'no-store');
 
  // Reset (secret admin)
  if (req.method === 'DELETE') {
    const { secret } = req.body || {};
    if (secret !== 'cyberweek2025') {
      return res.status(403).json({ error: 'forbidden' });
    }
    winner = null;
    return res.status(200).json({ success: true, message: 'reset done' });
  }
 
  if (req.method === 'GET') {
    return res.status(200).json({ winner });
  }
 
  if (req.method === 'POST') {
    const { name, code } = req.body;
    if (code !== '23') {
      return res.status(400).json({ error: 'wrong_code' });
    }
    if (winner) {
      return res.status(409).json({ error: 'already_solved', winner });
    }
    winner = name;
    return res.status(200).json({ success: true, winner });
  }
};
 
 
