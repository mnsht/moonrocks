import styled from "styled-components";
import { Card as BaseCard } from "rebass";
import { fontFamily, lineHeight } from "styled-system";

const Card = styled(BaseCard)(
  {
    WebkitFontSmoothing: "antialiased"
  },
  fontFamily,
  lineHeight
);

Card.defaultProps = {
  as: "div",
  fontFamily: "main",
  fontSize: 2,
  lineHeight: "normal",
  variant: "paper"
};

Card.displayName = "Card";

export default Card;
