"use client"

import { MiniKit } from "@worldcoin/minikit-js"
import { type WalletSession } from "./wallet-actions"
import { atom, useAtom } from "jotai"

export const USER_STORAGE_KEY = "__worldRelistUser" // Unique key for localStorage

type MiniKitUser = typeof MiniKit.user
type WalletUser = WalletSession & { user: MiniKitUser }
export type { WalletSession, WalletUser, MiniKitUser }

const isWorldApp = () => MiniKit.isInstalled()
const atomUser = atom<MiniKitUser | null>(MiniKit.user)
export const useWorldUser = () => useAtom(atomUser)

export const useWorldAuth = () => {
  const [user, setUser] = useWorldUser()

  const signOut = () => {
    // Clear the session from localStorage and update the user state
    localStorage.removeItem(USER_STORAGE_KEY)
    setUser(null)
  }

  const signInWithWallet = async () => {
    if (!isWorldApp()) return // Early if not installed

    const { payload, nonce } = await generateAuthPayload()
    if (payload.status === "error") return
    // Early if error

    await fetch("/api/complete-login", {
      // Finalize the sign in process
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload,
        nonce,
      }),
    })

    // Store the user session in localStorage
    localStorage.setItem(
      USER_STORAGE_KEY,
      JSON.stringify({
        user: MiniKit.user,
        nonce,
        payload,
      })
    )

    setUser(MiniKit.user) // Update the user info
  }

  return {
    signInWithWallet,
    signOut,
    isLoggedIn: Boolean(user),
    user,
  }
}

async function generateAuthPayload() {
  const res = await fetch(`/api/nonce`)
  const { nonce } = await res.json()

  const { finalPayload: payload } = await MiniKit.commandsAsync.walletAuth({
    nonce: nonce,
    expirationTime: new Date(
      new Date().getTime() + 7 * 24 * 60 * 60 * 1000 // 7 days
    ),
    notBefore: new Date(new Date().getTime() - 24 * 60 * 60 * 1000), // 1 day ago
    statement: "Allow Relist App to access your wallet.",
  })

  return { payload, nonce }
}

export function getStoredSession() {
  const savedSession = localStorage.getItem(USER_STORAGE_KEY)
  return savedSession ? (JSON.parse(savedSession) as WalletUser) : null
}
