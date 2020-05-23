import styled from "styled-components";

export const CurrentWeatherDiv = styled.div`
  box-shadow: 0px 1px 6px 2px #cecece;
  margin: 30px auto;
  border-radius: 6px;
  width: 94%;
  padding: 30px;
`;

export const LocationHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  & img {
    height: 73px;
    width: 73px;
    margin-left: 35px;
    object-fit: cover;
  }

  & h2 {
    font-size: 35px;
  }
`;
