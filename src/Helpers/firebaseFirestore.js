import { getStorage, ref } from "firebase/storage";
import { uploadBytes } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, "image");

export { storage, storageRef };
