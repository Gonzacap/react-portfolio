/* eslint-disable no-unused-vars */
import { app, database } from "./initApp";
import { getDatabase, ref, child, get } from "firebase/database";

const retriveProjects = async () => {

 const dbRef = ref(getDatabase());

  return await get(child(dbRef, `projects`)).then((snapshot) => {
    if (snapshot.exists()) {
      // console.log('value: ', snapshot.val());
      return (snapshot.val());
    } else {
      console.warn("No data available");
      return false;
    }})
  .catch((error) => {
    console.error(error);
  });
}

export default retriveProjects;
