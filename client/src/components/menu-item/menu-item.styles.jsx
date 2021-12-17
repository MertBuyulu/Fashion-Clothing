import styled from "styled-components";

export const MenuItem = styled.div`
  height: ${({ size }) => (size ? "380px" : "240px")};
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    div:nth-child(1) {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    div:nth-child(2) {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 470px) {
    height: 220px;
    min-width: 90%;
  }

  @media screen and (min-width: 470px) and (max-width: 800px) {
    height: 220px;
    min-width: 40%;
  }
`;

export const BackGroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: white;
  opacity: 0.7;
  position: absolute;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
