import { TextInput } from "react-native";
import { useState } from "react";

import styles from "./CustomInput.style";

const CustomInput = () => {
  const [text, onChangeText] = useState("");
  return (
    <TextInput
      style={styles.input}
      onChange={onChangeText}
      value={text}
      placeholder="Ara..."
    />
  );
};

export default CustomInput;
