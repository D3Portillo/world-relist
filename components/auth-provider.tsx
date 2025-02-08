"use client"

import { getStoredSession, useWorldAuth, useWorldUser } from "@/lib/wallet"
import { validateSession } from "@/lib/wallet-actions"
import { type ReactNode, useEffect } from "react"

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [_, setUser] = useWorldUser()
  const { signOut } = useWorldAuth()

  useEffect(() => {
    // Check localStorage for saved session data
    const session = getStoredSession()
    console.debug({ session })
    if (session) {
      validateSession(session).then(({ isValid }) => {
        if (isValid) {
          setUser(session.user)
        } else signOut() // Clear the session if it's invalid
      })
    }
  }, [])

  return children
}
