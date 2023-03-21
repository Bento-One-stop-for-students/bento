import React from "react";

import DropDownPicker from "react-native-dropdown-picker";

const DropDown = (props) => {
  return (
    <DropDownPicker
      containerStyle={{
        width: "100%",
  ***REMOVED******REMOVED***
      placeholderStyle={{ color: "#a6a6a6", marginTop: 5, marginBottom: 5 ***REMOVED******REMOVED***
      style={{
        borderColor: "#D9D9D9",
        borderRadius: 15,
  ***REMOVED******REMOVED***
      textStyle={{
        fontFamily: "Poppins_500Medium",
        fontSize: 16,
  ***REMOVED******REMOVED***
      dropDownContainerStyle={{
        borderColor: "#D9D9D9",
        position: "relative",
        top: 0,
  ***REMOVED******REMOVED***
      listMode="SCROLLVIEW"
      scrollViewProps={{
        nestedScrollEnabled: true,
  ***REMOVED******REMOVED***
      placeholder={props.placeholder***REMOVED***
      open={props.open***REMOVED***
      value={props.value***REMOVED***
      items={props.items***REMOVED***
      setOpen={props.setOpen***REMOVED***
      setValue={props.setValue***REMOVED***
      setItems={props.setItems***REMOVED***
    />
  );
***REMOVED***

export default DropDown;
