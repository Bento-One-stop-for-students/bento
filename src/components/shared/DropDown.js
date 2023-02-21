import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const DropDown = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.open) {
      setOpen(false);
    }
  }, [props.open]);
  return (
    <DropDownPicker
      containerStyle={{
        width: 270,
        marginVertical: 12,
        zIndex: props.elevation,
      }}
      placeholderStyle={{ color: "#72777A" }}
      style={{
        borderColor: "#D9D9D9",
      }}
      textStyle={{
        fontFamily: "Lato_700Bold",
      }}
      dropDownContainerStyle={{
        borderColor: "#D9D9D9",
        position: "relative",
        top: 0,
      }}
      listMode="SCROLLVIEW"
      scrollViewProps={{
        nestedScrollEnabled: true,
      }}
      placeholder={props.placeholder}
      open={open}
      value={props.value}
      items={props.items}
      setOpen={setOpen}
      setValue={props.setValue}
      setItems={props.setItems}
    />
  );
};

export default DropDown;
