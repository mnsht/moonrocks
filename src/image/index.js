import styled from "styled-components";
import { height, borderRadius } from "styled-system";
import Box from "../box";

const Image = styled(Box)(
  {
    maxWidth: "100%",
    height: "auto"
  },
  height,
  borderRadius
);

Image.defaultProps = {
  as: "img"
};

Image.displayName = "Image";

export default Image;
