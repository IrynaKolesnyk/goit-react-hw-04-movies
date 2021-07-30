import styled from "styled-components";

const MovieDetailsPageStyled = styled.div`
  margin-top: 20px;
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
  .goBackBtn {
    margin-bottom: 20px;
    text-align: center;
    align-items: center;
    display: block;
    padding: 5px 10px;
    color: #0f3292;
    cursor: pointer;

    font-weight: 500;
    background-color: transparent;
    border-radius: 5px;
    border: 3px solid #a0a0a0;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .goBackBtn:hover {
    color: #8f05b9;
    border-color: #8f05b9;
    border: 3px solid #8f05b9;
  }
`;

export default MovieDetailsPageStyled;
