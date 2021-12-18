import styled from "styled-components";

export const CheckoutPage = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // top | horizontal | bottom
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  // vertical | horizontal
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalCost = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const Warning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const PayButton = styled.div`
  margin-left: auto;
  margin-top: 50px;
  font-size: 16px;
`;

export const Message = styled.span`
  font-size: 25px;
  margin: 100px auto;
  display: flex;
  text-align: center;
`;
