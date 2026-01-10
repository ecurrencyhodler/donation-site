'use client'

import { useCheckout } from '@moneydevkit/nextjs'
import './globals.css'

export default function HomePage() {
  const { navigate } = useCheckout()

  // Donation amounts in USD
  const DONATION_AMOUNTS = {
    TEN: 10,        // $10 USD
    HUNDRED: 100,   // $100 USD
    THOUSAND: 1000  // $1,000 USD
  }

  const handleDonation = (amountUSD) => {
    navigate({
      title: `Donation of $${amountUSD.toLocaleString()} USD`,
      description: 'Thank you for your generous donation',
      amount: amountUSD * 100, // Convert USD to cents for moneydevkit
      currency: 'USD',
      successUrl: '/checkout/success',
      metadata: {
        type: 'donation',
        amount: amountUSD,
        donor: 'supporter'
      }
    })
  }

  return (
    <div className="container">
      <header>
        <h1 className="name">ecurrencyhodler</h1>
        <p className="tagline">Support the cause</p>
      </header>
      
      <main>
        <div className="donation-section">
          <h2>Make a Donation</h2>
          <p className="description">Choose an amount to donate</p>
          
          <div className="button-group">
            {/* $10 USD Donation Button */}
            <button 
              className="donation-btn" 
              onClick={() => handleDonation(DONATION_AMOUNTS.TEN)}
            >
              <span className="amount">$10</span>
              <span className="currency">USD</span>
            </button>
            
            {/* $100 USD Donation Button */}
            <button 
              className="donation-btn" 
              onClick={() => handleDonation(DONATION_AMOUNTS.HUNDRED)}
            >
              <span className="amount">$100</span>
              <span className="currency">USD</span>
            </button>
            
            {/* $1,000 USD Donation Button */}
            <button 
              className="donation-btn" 
              onClick={() => handleDonation(DONATION_AMOUNTS.THOUSAND)}
            >
              <span className="amount">$1,000</span>
              <span className="currency">USD</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
