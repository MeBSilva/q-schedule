import "styled-components";

import theme from "@/presentation/styles/defaultTheme";

declare module "styled-components" {
  type DefaultThemeType = typeof theme;

  // eslint-disable-next-line
  export interface DefaultTheme extends DefaultThemeType {}
}
