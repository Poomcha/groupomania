const db = require('../models/index');
const { decodeToken } = require('../scripts/token');

// Get all profile:
exports.getAllProfile = (req, res, next) => {
  db.Profile.findAll({
    order: [['firstName', 'ASC']],
    include: [{ model: db.User, attributes: ['email'] }],
  })
    .then((profiles) => {
      res.status(200).json(profiles);
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
};

// Get a profile by userId:
exports.getProfileById = (req, res, next) => {
  db.Profile.findOne({
    where: {
      userId: req.params.userId,
    },
    include: [
      { model: db.Post, separate: true, order: [['updatedAt', 'DESC']] },
      { model: db.User, attributes: ['email'] },
    ],
  })
    .then((profile) => {
      res.status(200).json(profile);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Update a profile:
exports.updateProfile = (req, res, next) => {
  db.Profile.findOne({ where: { userId: req.params.userId } })
    .then(() => {
      const profileObj = req.file
        ? {
            // Modifiable en fonction du JS frontend
            ...req.body,
            profilPictureURL: `${req.protocol}://${req.get('host')}/images/${
              req.file.filename
            }`,
          }
        : req.body;
      db.Profile.update(
        {
          ...profileObj,
          position:
            req.body.position === 'null'
              ? 'Travaille chez Groupomania'
              : req.body.position,
          description:
            req.body.description === 'null' ? '✌️' : req.body.description,
        },
        { where: { userId: req.params.userId } }
      )
        .then(() => {
          res.status(201).json({ message: 'Profile modified.' });
        })
        .catch((error) => {
          res.status(400).json({ error: error });
        });
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

// Supprimer un profil et un user:
exports.deleteProfile = (req, res, next) => {
  const isModerator = decodeToken(req).isModerator;
  db.User.findOne({ where: { id: req.session.user } })
    .then((user) => {
      if (req.session.user === req.params.userId || isModerator) {
        db.Profile.destroy({ where: { userId: req.params.userId } })
          .then(() => {
            db.User.destroy({ where: { id: req.params.userId } })
              .then(() => {
                res.status(200).json({
                  message: `User ${req.params.userId} successfully deleted.`,
                });
              })
              .catch((error) => {
                res.status(400).json({
                  message:
                    `Can't delete profile with userId ${req.params.userId}: ` +
                    error,
                });
              });
          })
          .catch((error) => {
            res.status(400).json({
              message:
                `Can't delete profile with userId ${req.params.userId}: ` +
                error,
            });
          });
      } else {
        res.status(401).json({ message: 'Unauthorized access.' });
      }
    })
    .catch((error) => {
      res.status(404).json({ message: error });
    });
};
