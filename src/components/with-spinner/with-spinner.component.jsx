import React from "react";
import * as S from "./with-spinner.styles";

// this is a reuseable higher order component
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    // if the data is still being fetched from the backend run the spinner animation
    return isLoading ? (
      <S.SpinnerOverlay>
        <S.SpinnerContainer />
      </S.SpinnerOverlay>
    ) : (
      // else run the component with the data being fetched
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
