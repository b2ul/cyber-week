let winner = null;
 
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Cache-Control', 'no-store');
 
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
 
