import UserContext from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) return <div>please LogIn</div>;
  return <div>Welcome {user.username}</div>;
};

export default Profile;
