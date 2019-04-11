import styled from "styled-components";
import Box from "../box";
import Flex from "../flex";
import { maxWidth } from "styled-system";

export const Container = styled(Box)(maxWidth);

Container.defaultProps = {
  as: "div",
  mx: "auto",
  maxWidth: ["100%", null, null, "1400px"]
};

Container.displayName = "Container";

export const Row = styled(Flex)({});

Row.defaultProps = {
  as: "div",
  flexWrap: "wrap"
};

Row.displayName = "Row";

export { default as Column } from "../box";
