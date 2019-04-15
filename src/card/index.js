import styled from "styled-components";
import {
  fontFamily,
  lineHeight,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant
} from "styled-system";
import Box from "../box";

const cards = variant({ key: "cards" });

const Card = styled(Box)(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  cards
);

Card.defaultProps = {
  ...Box.defaultProps,
  as: "div",
  variant: "paper"
};

Card.displayName = "Card";

export default Card;
