import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 20px 50px;
  border-bottom: 1px solid #ececec;
  margin-bottom: 20px;
  .navigationList {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navigationItem:not(:last-child) {
    margin-right: 70px;
  }
  .navigetionLink {
    font-weight: 700;
    font-size: 20px;
    text-decoration: none;
    color: rgb(129, 159, 245);
    text-transform: uppercase;
    &:hover {
      color: #5f73a1;
    }
  }

  .activeNavLink {
    color: #5f73a1;
  }
`;

export default HeaderStyled;
