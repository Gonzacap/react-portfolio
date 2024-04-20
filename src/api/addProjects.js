import { getDatabase, ref, set, push } from "firebase/database";

const addProjects = (payload) => {

  const db = getDatabase();
  const projectsRef = ref(db, `projects`);

  let newRef;
  if (payload.id) {
    newRef = ref(db, `projects/${payload.id}`);
  } else {
    newRef = push(projectsRef);
  }

  let newEntity = {
    id: payload?.id || newRef.key,
    image: payload?.img || '',
    title: payload?.title || 'test',
    description: payload?.description || 'test',
    appLink: payload?.appLink || '',
    codeLink: payload?.codeLink || '',
    enable: (payload?.enable == true),
  };

  return set(newRef, newEntity)
    .then(() => true)
    .catch((error) => {
      console.error(error);
      return false;
    });
};

export default addProjects;
