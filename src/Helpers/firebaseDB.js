import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, "product/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}
