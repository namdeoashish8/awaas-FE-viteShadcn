import { ValidateNotLoggedInUser } from "@/utility/protectRoutes";

const Profile = () => {
  ValidateNotLoggedInUser();
  return (
    <div>
      You
    </div>
  )
}

export default Profile
