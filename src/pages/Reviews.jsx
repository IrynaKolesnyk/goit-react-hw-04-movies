import React, { Component } from "react";
import ReviewsStyled from "../styles/ReviewsStyled";
import { fetchMovieReviews } from "../services/Api";
import AppLoader from "../component/AppLoader";

class Reviews extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };
  async componentDidMount() {
    const id = this.props.match.params.id || "";
    this.setState({ isLoading: true });
    await fetchMovieReviews(id)
      .then((results) => this.setState({ reviews: results }))
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  render() {
    const { reviews, isLoading } = this.state;
    return (
      <>
        <ReviewsStyled>
          {reviews.length > 1 ? (
            <ul className="reviewList">
              {reviews.map((review) => (
                <li className="reviewItem" key={review.author}>
                  <h2 className="reviewTitle">{review.author}</h2>
                  <p className="reviewText">{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <h2 className="notFound">
              We don't have any reviews for this movie
            </h2>
          )}
        </ReviewsStyled>
        {isLoading && <AppLoader />}
      </>
    );
  }
}

export default Reviews;
