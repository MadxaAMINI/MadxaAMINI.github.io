document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation items
  const navItems = document.querySelectorAll('.nav-item');

  // Get all content sections
  const contentSections = document.querySelectorAll('.content-section');

  // Add smooth redirection to Results section when Last Match is clicked
  const lastMatch = document.querySelector('.last-match');
  lastMatch.addEventListener('click', function() {
    document.getElementById('results-section').style.display = 'block';
    document.getElementById('fixtures-section').style.display = 'none';
  });

  // Add hover effect on results boxes
  const matchBoxes = document.querySelectorAll('.played-match');
  matchBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      const result = box.getAttribute('data-result');
      if (result === 'win') {
        box.style.boxShadow = '0px 0px 15px 5px green';
      } else if (result === 'lose') {
        box.style.boxShadow = '0px 0px 15px 5px red';
      } else if (result === 'draw') {
        box.style.boxShadow = '0px 0px 15px 5px yellow';
      }
    });

    box.addEventListener('mouseleave', function() {
      box.style.boxShadow = 'none';
    });
  });

  // Add click event to each navigation item
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetSection = document.getElementById(this.getAttribute('data-target'));
      contentSections.forEach(section => {
        section.style.display = 'none';
      });
      targetSection.style.display = 'block';
    });
  });

  // Pop-up related variables
  const joinUsBtn = document.getElementById('join-us-btn');
  const popupModal = document.getElementById('popup-modal');
  const popupContent = document.querySelector('.popup-content');
  const contactUsBtn = document.getElementById('contact-us-btn');
  const emailUsBtn = document.getElementById('email-us-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  // Show the pop-up when "Join Us" button is clicked
  joinUsBtn.addEventListener('click', function() {
    popupModal.style.display = 'flex'; // Show the modal
    popupContent.classList.add('show'); // Zoom in the content
  });

  // Close the pop-up when "Cancel" button is clicked or anywhere outside the pop-up
  function closePopup() {
    popupContent.classList.remove('show'); // Zoom out the content
    setTimeout(() => {
      popupModal.style.display = 'none'; // Hide the modal after zoom-out
    }, 300); // Wait for the transition to complete
  }

  cancelBtn.addEventListener('click', closePopup);
  popupModal.addEventListener('click', closePopup);

  // Prevent closing when clicking inside the pop-up content
  popupContent.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  // Redirect to homepage contact section when "Contact Us" is clicked
  contactUsBtn.addEventListener('click', function() {
    window.location.href = '#contact'; // Assuming there's a contact section with ID 'contact'
  });

  // Open Gmail with pre-filled recipient when "Email Us" is clicked
  emailUsBtn.addEventListener('click', function() {
    window.location.href = 'mailto:eaglesacademy@gmail.com';
  });
});