const reviewsController = require("../../controllers/reviewsController");
const router = require("express").Router();
const review = require("../models/review.js");

router.post("/api/review", ({ body }, res) => {
  Review.create(body)
    .then(dbReview => {
      res.json(dbReview);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/review/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbReview => {
      res.json(dbReview);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/review", (req, res) => {
  Review.find({})
    .sort({ date: -1 })
    .then(dbReview => {
      res.json(dbReview);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;