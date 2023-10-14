import './Reviews.scss';
import React, { useState } from 'react';
import axios from 'axios';


/* 
 * Functionality and design for both Reviews & Leave a Review sections
 * Mobile 320px / Tablet 768px / Desktop 1280 px
*/

function Reviews({ activeReviews, productId, refreshActiveReviews }) {

    const [reviewText, setReviewText] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [rating, setRating] = useState(0);


    /****** Extras Function Section ******/

    // Allows all characters except apostrophes and quotation marks in the review text 
    // so there aren't errors in the database (didn't accept apostrophes when inputting info due to syntax)
    const handleReviewChange = (event) => {
      // Removes apostrophes and quotation marks
      const sanitizedText = event.target.value.replace(/['"]/g, '');
      setReviewText(sanitizedText);
    };

    // get current date for review_date
    const getCurrentDate = () => {
      const now = new Date().toISOString().split('T')[0];
      return now;
    };

    // Add a ref to the form element
    const formRef = React.createRef();
      
          /****** Submit Form Function ******/

          const handleSubmit = (event) => {
            event.preventDefault();
          
            const formData = new FormData(event.target);
            const data = {
              product_id: productId,
              first_name: formData.get('first_name'), // Gets the value of the first_name field
              last_name: formData.get('last_name'), // Gets the value of the last_name field
              review_text: reviewText,
              star_rating: rating,
              review_date: getCurrentDate()
            };
          
            axios
              .post(`${process.env.REACT_APP_API_BASE_URL}/reviews`, data)
              .then((response) => {
                if (response.status === 201) {
                  setResponseMessage(console.log('Review submitted successfully'));
                  // Reset form fields
                  setReviewText('');
                  setRating('');

                  // Resets first & last name fields using the form ref (function listed in Extras section below)
                  formRef.current.reset();

                  // Refresh active reviews by updating the parent component's state
                  return refreshActiveReviews();

                } else {
                  setResponseMessage('Failed to submit review');
                }
              })
              .catch((error) => {
                setResponseMessage(console.log(`Error submitting review: ${error.message}`));
              });
          };

                    /****** Stars Function Section ******/

                // Set the rating when you click on the stars
                const handleStarClick = (newRating) => {
                  setRating(newRating);
                };

                const renderStars = () => {
                  const stars = [];
                  for (let i = 1; i <= 5; i++) {
                    stars.push(
                      <span
                        key={i}
                        className={`star ${i <= rating ? 'filled' : ''}`}
                        onClick={() => handleStarClick(i)}
                      >
                        ★
                      </span>
                    );
                  }
                  return stars;
                };

                // Show stars for each review
                const renderStarsRating = (rating) => {
                  const stars = [];
                  for (let i = 1; i <= 5; i++) {
                    stars.push(
                      <span
                        key={i}
                        className={`star ${i <= rating ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    );
                  }
                  return stars;
                };
                  

    return (
      <>
      <h4 className="review__header">Reviews</h4>
      {activeReviews.map((review) => (
        <div key={review.review_id}>
              <div>
                  <div>  
                    <div className="review__names-date"> 
                      <h2 className="review__names">{review.first_name} {review.last_name}</h2>
                      <p className="review__date">{new Date(review.review_date).toISOString().split('T')[0]}</p>
                    </div> 
                      <div className="review__star-rating">{renderStarsRating(review.star_rating)}</div>
                      <h2 className="review">{review.review_text}</h2>
                  </div> 
              </div>
        </div>
      )        
      )}
      <div>
        <div id="response">{responseMessage}</div>
        <h2 className="form__header">Leave a Review</h2>
          <form className="form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form__names-wrapper">
              <label htmlFor="first_name"></label>
              <input className="form__first-name" type="text" id="first_name" name="first_name" placeholder="First Name.." />
              <label htmlFor="last_name"></label>
              <input className="form__last-name" type="text" id="last_name" name="last_name" placeholder="Last Name.." /><br />  
            </div>
            <div>
              <div className="form__star-rating">{renderStars()}</div>
                <input type="hidden" name="user_id" value="1" />
                <input type="hidden" name="product_id" value={productId} />
                <input type="hidden" name="review_date" value={getCurrentDate()} />
                  <div className="form__review-wrapper">
                    <label htmlFor="review_section" className="form__subtitle"></label><br />
                    <textarea className="form__review" id="review_section" name="review" placeholder="Add a new review" value={reviewText}
                    onChange={handleReviewChange} maxLength={250}></textarea>
                  </div>
            </div>
            <div className="form__btn-wrapper">
              <button className="form__btn" type="submit" value="new message">Leave Review</button>
            </div>
          </form>
      </div>
      </>
    );
};
  
export default Reviews;