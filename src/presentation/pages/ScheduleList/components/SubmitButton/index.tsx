import React from "react";

import Button, { Props as ButtonProps } from "@/presentation/components/Button";

type Props = {
  text: string;
} & ButtonProps;

const SubmitButton = ({ text, ...rest }: Props): React.ReactElement => (
  <Button data-testid="submit" type="submit" {...rest}>
    {text}
  </Button>
);

export default SubmitButton;
