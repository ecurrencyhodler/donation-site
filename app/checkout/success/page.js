'use client'

import { useRouter } from 'next/navigation'
import { useCheckoutSuccess } from '@moneydevkit/nextjs'
import './success.css'

export default function SuccessPage() {
  const router = useRouter()
  const { isCheckoutPaidLoading, isCheckoutPaid, metadata } = useCheckoutSuccess()

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

  return (
    <div className="success-container">
      <div className="success-content">
        <div className="success-icon">✓</div>
        <h1>Payment Confirmed!</h1>
        <p>Thank you for your generous donation of ${metadata?.amount || 'N/A'} USD. Your support means the world to us!</p>
        <button 
          onClick={() => router.push('/')}
          className="continue-btn"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
