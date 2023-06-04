import { Check, PlusIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from './ui/sheet'
import ProfilePic from './ProfilePic'
import { ScrollArea } from './ui/scroll-area'

function NewChat() {
  return (
    <Sheet>
      <SheetTrigger className="w-8 h-8 rounded-full border border-input hover:bg-accent hover:text-accent-foreground flex justify-center items-center">
        <PlusIcon className="h-4 w-4" />
        <span className="sr-only">New chat</span>
      </SheetTrigger>
      <SheetContent position="bottom" size="xl" className="flex flex-col">
        <SheetHeader className="text-left">
          <SheetTitle>
            <span className="text-2xl font-bold">New chat</span>
          </SheetTitle>
          <SheetDescription>
            <Input type="search" placeholder="Search" />
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1 my-4">
          <ul className="space-y-1">
            <li className="flex cursor-pointer items-center gap-3 bg-accent text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
            <li className="flex cursor-pointer items-center gap-3 hover:bg-accent hover:text-accent-foreground p-4 rounded-full">
              <ProfilePic id="1" fallback="Someone" />
              <p className="font-semibold tracking-tight">Someone</p>
              <Check className="ml-auto opacity-0" />
            </li>
          </ul>
        </ScrollArea>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Create chat</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
export default NewChat
