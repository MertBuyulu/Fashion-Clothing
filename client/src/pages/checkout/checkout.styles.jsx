import styled from "styled-components";
import CustomButton from "../../components/custom-button/custom-button.component";

export const CheckoutPage = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  // top | horizontal | bottom
  margin: 50px auto 0;
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
`;

export const PayButton = styled(CustomButton)`
  margin-left: auto;
  margin-top: 50px;
  font-size: 16px;
`;