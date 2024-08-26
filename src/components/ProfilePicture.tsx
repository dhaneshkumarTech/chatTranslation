import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//Todo: Update picture of user by fetching from API
function ProfilePicture() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default ProfilePicture;
