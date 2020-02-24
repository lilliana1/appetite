import axios from "axios";

export default {

    getYelp: function(location) {
      console.log("API");
      
        return axios({
          method: "GET",
          url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + location,
          headers: {
            Authorization: "Bearer PgJusXn31ypmekPQStCI8iUudCa9UvyHeWELfsnPHZPbxnDiOJSZtV33gDLB7BhRQ6TN3ND6xX0SpzZFPcevOsZm1CinPcCG3bgizU32K2FVhi7XMyO4JeRqCjZHXnYx"
                    }
        })
    }, 

    getYelpCat: function(location,categories) {
        return axios({
          method: "GET",
          url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + location + "&open_now=true" + "&categories=" + categories,
          headers: {
            Authorization: "Bearer PgJusXn31ypmekPQStCI8iUudCa9UvyHeWELfsnPHZPbxnDiOJSZtV33gDLB7BhRQ6TN3ND6xX0SpzZFPcevOsZm1CinPcCG3bgizU32K2FVhi7XMyO4JeRqCjZHXnYx"
                    }
        })
    }, 

    getYelpOpenNow: function(location,categories) {
      console.log("API OPEN NOW");

        return axios({
          method: "GET",
          url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + location + "&open_now=true" + "&categories=" + categories, //added categories
          headers: {
            Authorization: "Bearer PgJusXn31ypmekPQStCI8iUudCa9UvyHeWELfsnPHZPbxnDiOJSZtV33gDLB7BhRQ6TN3ND6xX0SpzZFPcevOsZm1CinPcCG3bgizU32K2FVhi7XMyO4JeRqCjZHXnYx"
                    }
        })
      
    },



  // // Gets all books
  getReviews: function() {
    return axios.get("/api/review")
  },
  saveReview: function(reviewData) {
    return axios.post("/api/review", reviewData);
  }
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
 
};
