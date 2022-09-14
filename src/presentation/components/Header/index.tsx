import React, { memo } from "react";

import * as S from "./styles";

const Header = (): React.ReactElement => (
  <S.HeaderContainer>
    <S.HeaderContent>
      <S.LogoutButton></S.LogoutButton>
    </S.HeaderContent>
  </S.HeaderContainer>
);

export default memo(Header);
