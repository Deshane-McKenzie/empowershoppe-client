import './Reviews.scss';


function Reviews({ activeReviews }) {

    return (
      <>
      {activeReviews.map((review) => (
        <div className="delete__container" key={review.review_id}>
              <div className="delete__container-inner">
                  <div className="delete-text__wrapper">
                      <h2 className="delete__title">{review.review_text}</h2>
                      <p>{new Date(review.review_date).toISOString().split('T')[0]}</p>
                      <p className="delete__subtitle"></p>
                  </div>
                
              </div>
        </div>
      )        
      )}
      <div>
      <form className="form" >
        <div>
          <label htmlFor="first_name"></label>
          <input type="text" id="first_name" name="first_name" placeholder="First Name.." />
          <label htmlFor="last_name"></label>
          <input type="text" id="last_name" name="last_name" placeholder="Last Name.." /><br /> 
        </div>
        <div>
          <label htmlFor="review_section" className="form__subtitle"></label><br />
          <textarea className="form__comment-box" id="review_section" name="review" placeholder="Add a new review" ></textarea>
        </div>
        <div>
          <button className="btn" type="submit" value="new message">Leave Review</button>
        </div>
      </form>
      </div>
      </>
    );
};
  
export default Reviews;