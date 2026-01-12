'use client'

import { useRouter } from 'next/navigation'
import { useCheckoutSuccess } from '@moneydevkit/nextjs'
import { useEffect } from 'react'
import './success.css'

export default function SuccessPage() {
  const router = useRouter()
  const { isCheckoutPaidLoading, isCheckoutPaid, metadata } = useCheckoutSuccess()

  useEffect(() => {
    if (isCheckoutPaid) {
      // Redirect to home page after payment is confirmed
      router.push('/')
    }
  }, [isCheckoutPaid, router])

  if (isCheckoutPaidLoading || isCheckoutPaid === null) {
    return (
      <div className="success-container">
        <div className="success-content">
          <p>Verifying payment…</p>
        </div>
      </div>
    )
  }

  if (!isCheckoutPaid) {
    return (
      <div className="success-container">
        <div className="success-content">
          <p>Payment has not been confirmed.</p>
        </div>
      </div>
    )
  }

  // This return should not be reached due to the redirect, but kept as fallback
  return null
}
