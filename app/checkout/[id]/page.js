"use client";
import { Checkout, useCheckoutSuccess } from "@moneydevkit/nextjs";
import { use, useEffect } from "react";

export default function CheckoutPage({ params }) {
  const { id } = use(params);
  const { isCheckoutPaid, metadata } = useCheckoutSuccess();

  useEffect(() => {
    if (isCheckoutPaid && metadata?.amount) {
      // Find and replace MDK's default success message
      const replaceSuccessMessage = () => {
        // Try multiple selectors to find the success message
        const selectors = [
          'p',
          'div',
          '[class*="success"]',
          '[class*="message"]',
        ];

        for (const selector of selectors) {
          const elements = document.querySelectorAll(selector);
          elements.forEach((element) => {
            const text = element.textContent || element.innerText;
            if (text && text.includes('Thank you for your business')) {
              const amount = metadata.amount;
              element.textContent = `Thank you for your generous donation of $${amount.toLocaleString()} USD to Human Rights Foundation. Your support means the world to us!`;
            }
          });
        }
      };

      // Try immediately and also after a short delay to catch dynamically rendered content
      replaceSuccessMessage();
      const timeout = setTimeout(replaceSuccessMessage, 500);
      const interval = setInterval(replaceSuccessMessage, 1000);

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [isCheckoutPaid, metadata]);

  return <Checkout id={id} />;
}
