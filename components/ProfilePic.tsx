import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type Props = {
  id: string
  fallback: string
}
function ProfilePic({ id, fallback }: Props) {
  return (
    <Avatar>
      <AvatarImage
        src={`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${id}`}
      />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}
export default ProfilePic
