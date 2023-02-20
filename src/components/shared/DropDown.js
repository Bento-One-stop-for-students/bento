import React, { useEffect, useState ***REMOVED*** from "react";
import DropDownPicker from "react-native-dropdown-picker";

const DropDown = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.open) {
      setOpen(false);
***REMOVED***
***REMOVED***, [props.open]);
  return (
    <DropDownPicker
      containerStyle={{
        width: 300,
        marginVertical: 12,
        zIndex: props.elevation
  ***REMOVED******REMOVED***
      placeholderStyle={{color:'#72777A'***REMOVED******REMOVED***
      style={{
        borderColor: "#D9D9D9",
  ***REMOVED******REMOVED***
      textStyle={{
        fontFamily: "Lato_700Bold",
  ***REMOVED******REMOVED***
      dropDownContainerStyle={{
        borderColor: "#D9D9D9",
  ***REMOVED******REMOVED***
      placeholder={props.placeholder***REMOVED***
      open={open***REMOVED***
      value={props.value***REMOVED***
      items={props.items***REMOVED***
      setOpen={setOpen***REMOVED***
      setValue={props.setValue***REMOVED***
      setItems={props.setItems***REMOVED***
    />
  );
***REMOVED***

export default DropDown;
