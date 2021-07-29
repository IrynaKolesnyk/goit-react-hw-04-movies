import styled from "styled-components";

const HomePageStyled = styled.div`
  text-align: center;
  .title {
    margin-bottom: 40px;
    font-style: normal;
    color: #819ff5;
    font-weight: 900;
    font-size: 50px;
    line-height: 1.22;
    text-align: center;
  }

  .homeList {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }

  .homeItem {
    text-align: center;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .homeItem {
    :hover {
      transform: scale(1.03);
    }
  }
  .homeImg {
    width: 100%;
    object-fit: cover;
  }
  .movieTitle {
    display: block;
    margin: 10px 0;
  }
`;

export default HomePageStyled;
