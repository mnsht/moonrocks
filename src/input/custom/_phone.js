import React from "react";
import Cleave from "cleave.js/react";

import { Input } from "../_base";

export default props => (
  <Input
    {...props}
    as={Cleave}
    options={{
      numericOnly: true,
      blocks: [0, 3, 0, 3, 4],
      delimiters: ["(", ")", " ", "-"]
    }}
  />
);
