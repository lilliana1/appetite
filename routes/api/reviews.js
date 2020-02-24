const reviewsController = require("../../controllers/reviewsController");
const router = require("express").Router();
const db = require("../../models")
// const review = require("../models/review.js");


router.post("/api/review", ({ body }, res) => {
  db.Review.create(body)
    .get(reviewsController)
    .then(dbReview => {
      res.json(dbReview);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/review/restaurant", ({ body }, res) => {
  db.Review.insert(body)
    .then(dbReview => {
      res.json(dbReview);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/review", (req, res) => {
  db.Review.find({})
    .then(dbReview => {
      res.json(dbReview);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;