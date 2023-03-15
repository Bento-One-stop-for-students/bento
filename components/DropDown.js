import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const DropDown = (props) => {
  return (
    <DropDownPicker
      containerStyle={{
        width: "100%",
      }}
      placeholderStyle={{ color: "#a6a6a6", marginTop: 5, marginBottom: 5 }}
      style={{
        borderColor: "#D9D9D9",
        borderRadius: 15,
      }}
      textStyle={{
        fontFamily: "Poppins_500Medium",
        fontSize: 16,
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
      open={props.open}
      value={props.value}
      items={props.items}
      setOpen={props.setOpen}
      setValue={props.setValue}
      setItems={props.setItems}
    />
  );
};

export default DropDown;
