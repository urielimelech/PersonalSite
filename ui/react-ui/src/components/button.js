import React, { useEffect, useState } from "react";
import { StyledButton } from "../style/styledButton";

export const Button = ({
  children,
  onClick,
  isPrimary = true,
  backgroundColor,
  margin,
  padding,
  isLoading = false,
  isDisabled = false,
  ...props
}) => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDisabled(isDisabled);
  }, []);

  const handleClick = async (e) => {
    if (!disabled) {
      console.log(e);
      setLoading(true);
      setDisabled(true);
      await onClick();
      setLoading(false);
      setDisabled(false);
    }
  };

  return (
    <StyledButton
      isPrimary={isPrimary}
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
      isLoading={loading}
      isDisabled={disabled}
      onClick={handleClick}
      props={props}
    >
      {children}
    </StyledButton>
  );
};
