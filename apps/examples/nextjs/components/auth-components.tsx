"use client"

import { signIn, signOut } from "next-auth/react"
import { Button } from "./ui/button"

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <Button {...props} type="button" onClick={() => signIn(provider)}>Sign In</Button>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <Button {...props} type="button" className="w-full bg-transparent hover:bg-transparent text-black hover:text-black" onClick={() => signOut()}>Sign Out</Button>
  )
}
