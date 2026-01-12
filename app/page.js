'use client'

import { useState } from 'react'
import { useCheckout } from '@moneydevkit/nextjs'
import './globals.css'

export default function HomePage() {
  const { navigate } = useCheckout()
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')

  // Preset donation amounts in USD
  const PRESET_AMOUNTS = [10, 50, 100]

  const handlePresetClick = (presetAmount) => {
    setAmount(presetAmount.toString())
    setError('')
  }

  const handleAmountChange = (e) => {
    const value = e.target.value
    setAmount(value)
    setError('')
  }

  const validateAmount = (amountValue) => {
    if (!amountValue || amountValue.trim() === '') {
      return 'Please enter an amount'
    }
    
    const numValue = parseFloat(amountValue)
    
    if (isNaN(numValue)) {
      return 'Please enter a valid number'
    }
    
    if (numValue <= 0) {
      return 'Amount must be greater than 0'
    }
    
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const validationError = validateAmount(amount)
    if (validationError) {
      setError(validationError)
      return
    }

    const amountUSD = parseFloat(amount)
    handleDonation(amountUSD)
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
        <p className="tagline">Creating vibe coding education to support human rights advocates</p>
      </header>
      
      <main>
        <div className="donation-section">
          <h2>Make a Donation</h2>
          
          <form onSubmit={handleSubmit} className="donation-form">
            <div className="input-group">
              <div className="input-wrapper">
                <span className="currency-symbol">$</span>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder=""
                  className={`amount-input ${error ? 'error' : ''}`}
                />
              </div>
              {error && <p className="error-message">{error}</p>}
            </div>

            <div className="preset-buttons">
              {PRESET_AMOUNTS.map((presetAmount) => (
                <button
                  key={presetAmount}
                  type="button"
                  className="preset-btn"
                  onClick={() => handlePresetClick(presetAmount)}
                >
                  ${presetAmount}
                </button>
              ))}
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={!amount || parseFloat(amount) <= 0}
            >
              Continue to Checkout
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
