let roleInput = document.getElementById("role");
roleInput.value = "public";
let public = document.getElementById("public-btn");
let org = document.getElementById("organizer-btn");

public.addEventListener("click", () => {
    roleInput.value = "public";
    console.log(roleInput.value);
});
org.addEventListener("click", () => {
    roleInput.value = "organizer";
    console.log(roleInput.value);
});

document.addEventListener('DOMContentLoaded', function () {
    const publicBtn = document.querySelector('.btn.public');
    const organizerBtn = document.querySelector('.btn.organizer');
    const userTypeInput = document.getElementById('userType');
    const submitBtn = document.getElementById('submit');
  
    if (!publicBtn || !organizerBtn || !userTypeInput || !submitBtn) return;
  
    // Function to update submit button color based on user type
    function updateSubmitBtnColor(type) {
      if (type === 'public') {
        submitBtn.style.backgroundColor = '#4a90e2'; // green
        submitBtn.style.borderColor = '#4a90e2';
      } else if (type === 'organizer') {
        submitBtn.style.backgroundColor = '#0b1e47'; // orange
        submitBtn.style.borderColor = '#0b1e47';
      }
    }
  
    // Initialize submit button color based on default value
    updateSubmitBtnColor(userTypeInput.value);
  
    publicBtn.addEventListener('click', () => {
      userTypeInput.value = 'public';
      publicBtn.classList.add('active');
      organizerBtn.classList.remove('active');
      updateSubmitBtnColor('public');
      // console.log('User type selected: public');
    });
  
    organizerBtn.addEventListener('click', () => {
      userTypeInput.value = 'organizer';
      organizerBtn.classList.add('active');
      publicBtn.classList.remove('active');
      updateSubmitBtnColor('organizer');
      // console.log('User type selected: organizer');
    });
  });
  