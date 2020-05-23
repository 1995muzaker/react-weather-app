import styled from "styled-components";

export const SearchDiv = styled.div`
  background: #000;

  & form {
    width: 80%;
    margin: auto;
    & input {
      padding: 5px 13px;
      width: 100%;
      border: 2px solid #cecece;
      border-radius: 6px;
      box-shadow: 2px 2px 5px 0px #cecece;
      height: 41px;
      font-size: 18px;
      font-family: sans-serif;
      color: #000;
      outline: 0;
    }
  }
`;
