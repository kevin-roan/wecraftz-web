import { getStorage, ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { app } from "./firebaseConfig";

const storage = getStorage(app);
const storageRef = ref(storage, "image");

export { storage, storageRef };
