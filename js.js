// Handle Rental Form Submission
function handleRental(event) {
    event.preventDefault();
    const rentalSuccessModal = document.getElementById('rental-success-modal');
    rentalSuccessModal.style.display = 'block';
  }
  
  // Close Rental Success Modal
  document.getElementById('close-rental-success').addEventListener('click', () => {
    const rentalSuccessModal = document.getElementById('rental-success-modal');
    rentalSuccessModal.style.display = 'none';
  });
  
  // Close Rental Success Modal When Clicking Outside
  window.addEventListener('click', (event) => {
    const rentalSuccessModal = document.getElementById('rental-success-modal');
    if (event.target === rentalSuccessModal) {
      rentalSuccessModal.style.display = 'none';
    }
  });