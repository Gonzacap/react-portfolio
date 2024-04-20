import { getDatabase, ref, child, get } from "firebase/database";

const retriveExperiences = async () => {

    const dbRef = ref(getDatabase());

    return await get(child(dbRef, `experiences`)).then((snapshot) => {
        if (snapshot.exists()) {
            return (snapshot.val());
        } else {
            console.warn("No data available");
            return false;
        }
    })
        .catch((error) => {
            console.error(error);
        });
}

export default retriveExperiences;
