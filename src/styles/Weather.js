import styled from "styled-components";

export const SearchDiv = styled.div`
  background: #000;

  & form {
    width: 94%;
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

export const WeatherList = styled.div`
  display: flex;
  box-shadow: 0px 1px 6px 2px #cecece;
  margin: 30px auto;
  border-radius: 6px;
  width: 94%;
  padding: 30px;
  overflow-x: scroll;
`;
