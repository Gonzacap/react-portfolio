/* eslint-disable no-unused-vars */
import { app, database } from "./initApp";
import { getDatabase, ref, set, push } from "firebase/database";

const addProjects = async () => {

 const projectsRef = ref(getDatabase(), `projects`);
 let newRef = push(projectsRef);
 let newKey = newRef.key;
  return await set(newRef,
    {
      id: newKey,
      image: 'test',
      title: 'test',
      description : 'test',
      appLink: '#',
      codeLink: '#'
    })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });

}

export default addProjects;
