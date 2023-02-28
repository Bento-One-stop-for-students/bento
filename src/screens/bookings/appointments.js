import React from "react";
import { FlatList ***REMOVED*** from "react-native";
import ViewBox from "../../components/shared/styles/ViewBox";
import TextBox from "../../components/shared/styles/TextBox";
import { useCollectionData ***REMOVED*** from "react-firebase-hooks/firestore";
import { db ***REMOVED*** from "../../../lib/firebase/firebaseConfig";
import { collection, orderBy, query ***REMOVED*** from "firebase/firestore";
import ListItem from "../../components/appointments/ListItem";

const Appointments = () => {
  const dbInstance = collection(db, "barber");
  const q = query(dbInstance, orderBy("timestamp"));
  const [data] = useCollectionData(q);
  return (
    <ViewBox class="py-5 h-full items-center justify-start bg-white  flex-col">
      <TextBox class=" mb-1 ml-5 text-lg w-full px-3 text-primary-purple" bold>
        Bookings
      </TextBox>
      {!(data && data.length) ? (
        <ViewBox class="w-[80vw] m-5 p-10 items-center justify-center ">
          <TextBox bold>No booking</TextBox>
        </ViewBox>
      ) : (
        <FlatList
          className=" w-full h-full bg-white"
          data={data***REMOVED***
          renderItem={({ item, index ***REMOVED***) => (
            <ListItem index={index***REMOVED*** user={item***REMOVED*** />
          )***REMOVED***
          keyExtractor={({ index ***REMOVED***) => index***REMOVED***
        />
      )***REMOVED***
    </ViewBox>
  );
***REMOVED***

export default Appointments;
