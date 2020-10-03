import React from "react";
import { Link } from "react-router-dom";
import { Typography, TypographyType } from "../../common-components/ui";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={className}>
      <Typography type={TypographyType.SECTION_HEADER}>ArenaName</Typography>
    </Link>
  );
};
