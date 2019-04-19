import React from "react";
import Cleave from "cleave.js/react";

import { Input } from "../_base";

export default ({ hasYear, ...props }) => (
  <Input
    {...props}
    as={Cleave}
    options={{
      date: true,
      delimiter: "-",
      datePattern: hasYear ? ["m", "d", "Y"] : ["m", "d"]
    }}
  />
);
