const reviewsController = require("../../controllers/reviewsController");
const router = require("express").Router();
const db = require("../../models")
// const review = require("../models/review.js");


router.post("/review", (req, res) => {
    db.Review.find({

        restaurantId: req.body.restaurantId
      
    }).then(data => {
        console.log(data);
      if(!data.length) {
        console.log("No REVIEWS");
        

        db.Review.create(req.body)
        .then(dbReview => {
          res.json(dbReview);
        })
        .catch(err => {
          res.status(400).json(err);
        });
      } else {
        console.log("PUSH REVIEWS", data[0].restaurantId);

        db.Review.findOneAndUpdate({
          restaurantId: data[0].restaurantId
        },
        {
          $push: { rating: req.body.rating, review: req.body.review}
        })
        .then(dbReview => {
          res.json(dbReview);
        })
        .catch(err => {
          res.status(400).json(err);
        });
      }
        
    })
    .catch(err => {
      res.status(400).json(err);
    });



  
 
});

router.post("/review/restaurant", ({ body }, res) => {
  db.Review.insert(body)
    .then(dbReview => {
      res.json(dbReview);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/review", (req, res) => {
  db.Review.find({})
    .then(dbReview => {
      res.json(dbReview);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;