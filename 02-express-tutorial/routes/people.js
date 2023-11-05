const express = require('express');
const router = express.Router();
// const { people } = require('../data');
const {
  addPerson,
  getPeople,
  putPersonById,
  deletePerson,
} = require('../controllers/people.js');

router.get('/', getPeople);

// router.get('/', (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

router.post('/', addPerson);
// router.post('/', (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: 'Please provide name value!' });
//   }
//   console.log(req.body.name);
//   // people.push({ id: people.length + 1, name: req.body.name });
//   res.status(201).json({ success: true, name: req.body.name });
//});

router.put('/:id', putPersonById);

router.delete('/:id', deletePerson);
module.exports = router;
