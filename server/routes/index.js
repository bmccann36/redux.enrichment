const router = require('express').Router();
module.exports = router;


// console.log('in routes')
router.use('/campuses', require('./campuses'));
router.use('/students', require('./students'));
// router.use('/playlists', require('./playlists'));
// router.use('/songs', require('./songs'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});
