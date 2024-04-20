import { getDatabase, ref, set, push } from "firebase/database";

const addProjects = (payload) => {

  const projectsRef = ref(getDatabase(), `projects`);
  let newRef = push(projectsRef);
  let newKey = newRef.key;

  let newEntity = {
    id: payload?.id || newKey,
    image: payload?.img || '',
    title: payload?.title || 'test',
    description: payload?.description || 'test',
    appLink: payload?.appLink || '',
    codeLink: payload?.codeLink || '',
    enable: payload?.enable,
  };

  return set(newRef, newEntity)
    .then((res) => true)
    .catch((error) => {
      console.error(error);
      return false;
    });
};

export default addProjects;
