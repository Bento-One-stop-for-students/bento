import React from "react";

import { Text } from "native-base";

const TextBox = ({ children, semibold, classNames, style }) => {
  return (
    <Text
      style={{
        fontFamily: semibold ? "Poppins_600SemiBold" : "Poppins_500Medium",
        ...style,
      }}
      className={`${classNames}`}
    >
      {children}
    </Text>
  );
};

export default TextBox;
