"use server"

import {
  verifySiweMessage,
  type MiniAppWalletAuthSuccessPayload,
} from "@worldcoin/minikit-js"

export type WalletSession = {
  payload: MiniAppWalletAuthSuccessPayload
  nonce: string
}

export const validateSession = async (session: WalletSession) => {
  try {
    const res = await verifySiweMessage(session.payload, session.nonce)
    return {
      isValid: res.isValid,
    }
  } catch (_) {}

  return {
    isValid: false,
  }
}
