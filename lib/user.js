import {signInWithPopup***REMOVED*** from 'firebase/auth'
import {auth,db,provider***REMOVED*** from './firebaseConfig.js'
import {setDoc, doc, serverTimestamp, getDocs,collection***REMOVED*** from 'firebase/firestore'


//signUp call
export const handleSignUp = async(e) => {
    e.preventDefault();
  ***REMOVED***
        //Signup call from google and get user information
        const {user***REMOVED*** = await signInWithPopup(auth,provider)
        const {uid,displayName, photoURL,email***REMOVED*** = user
        
        //get branch code
        const splitEmail = email.split('.')
        const branchCode = splitEmail[1];

        //Setting the new user in firestore
        await setDoc(doc(db,'users',uid),{
            'name': displayName,
            'email': email,
            'img': photoURL,
            'branch': branchCode,
            'club': {
                'head': false,
                'name': ''
        ***REMOVED***,
            'timestamp': serverTimestamp()
    ***REMOVED***,{merge:true***REMOVED***)

        //handle dispatch and payload
***REMOVED***catch(err) {
        console.log(err)
***REMOVED***
***REMOVED***

//updateUser
export const userInfo = async(data,uid) => { 
  ***REMOVED***
        //information from user form
        const {hostel,room_no,roll_no,mobile_no,gender***REMOVED*** = data;
        await setDoc(doc(db,'users',uid),{
            'gender': gender,
            'hostel': hostel,
            'room_no':room_no,
            'roll_no':roll_no,
            'mobile_no':mobile_no
    ***REMOVED***,{merge:true***REMOVED***)
***REMOVED***catch(err) {
        console.log(err)
***REMOVED***
***REMOVED***

//get All users
export const getAllUsers = async() => {
  ***REMOVED***
        const users = await getDocs(collection(db,'users'))
        users.forEach(user => user.data())
***REMOVED***catch(err) {
        console.log(err)
***REMOVED***
***REMOVED***

