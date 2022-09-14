import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Spinner } from "@/presentation/components";

import * as S from "./styles";

const Home = (): React.ReactElement => {
  const [buttonContent, setButtonContent] =
    useState<React.ReactNode>("Try it out");

  const navigate = useNavigate();

  const tryItOut = () => {
    setButtonContent(() => Spinner({ type: "primary" }));

    // Simulate data querying
    setTimeout(() => {
      navigate("/schedules");
    }, 1000);
  };

  return (
    <S.HomeContainer>
      <S.HomeContentWrapper>
        <S.HomeTitle>Q-SCHEDULE</S.HomeTitle>
        <S.HomeSubTitle>Your schedule manager</S.HomeSubTitle>
        <S.HomeText>
          Keep your scheduling in check! Manage your schedule for free with
          Q-Schedule. This app was made using React, Typescript and Styled
          components.
        </S.HomeText>
        <Button styleType="primary" onClick={() => tryItOut()}>
          {buttonContent}
        </Button>
      </S.HomeContentWrapper>
    </S.HomeContainer>
  );
};

export default Home;
