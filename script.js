// Handle donation button clicks
document.addEventListener('DOMContentLoaded', function() {
    const donationButtons = document.querySelectorAll('.donation-btn');
    
    donationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const amount = this.getAttribute('data-amount');
            console.log(`Donation button clicked: $${amount} USD`);
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // TODO: Add your payment processing logic here
            // For example: redirect to payment gateway, open payment modal, etc.
        });
    });
});
