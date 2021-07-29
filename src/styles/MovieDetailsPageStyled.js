import styled from "styled-components";

const MovieDetailsPageStyled = styled.div`
  margin-top: 50px;
  .wrapper {
    display: flex;
  }
  .detailsImg {
    margin-right: 50px;
  }

  .detailsTitle {
    margin-bottom: 30px;
    font-size: 50px;
    text-transform: uppercase;
    color: #0732a8;
  }
  .detailsSubtitle {
    margin-bottom: 15px;
    font-size: 30px;
    color: #819ff5;
  }
  .detailsOverview {
    display: block;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 15px;
    color: #6f7b9c;
  }
  .detailsList {
    margin-bottom: 15px;
    list-style: square outside;
  }
  .detailsItem {
    margin-left: 20px;
    color: #0f3292;
    font-size: 20px;
    font-weight: 500;
  }

  .detailseLink {
    font-size: 30px;
    border-bottom: 1px solid #6f7b9c;
    color: #0841df;
    font-weight: 500;
    &:hover {
      color: #395596;
    }
  }

  .reviews {
    margin-right: 20px;
  }
  .castReviews {
    display: block;
    margin-top: 50px;
  }
`;

export default MovieDetailsPageStyled;
