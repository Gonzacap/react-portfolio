import { getDatabase, ref, set, push } from "firebase/database";

const addExperiences = (payload) => {

    const db = getDatabase();
    const projectsRef = ref(db, `experiences`);

    let newRef;
    if (payload.id) {
        newRef = ref(db, `experiences/${payload.id}`);
    } else {
        newRef = push(projectsRef);
    }

    let newEntity = {
        id: payload?.id || newRef.key,
        project: payload?.project || 'test',
        technologies: payload?.technologies || 'test',
        description: payload?.description || 'test',
        rol: payload?.rol || 'test',
        status: (payload?.status == true),
    };

    return set(newRef, newEntity)
        .then(() => true)
        .catch((error) => {
            console.error(error);
            return false;
        });
};

export default addExperiences;
