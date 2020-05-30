import { elements } from './base';

// Sign up
export const signupNewUser = e => {
  e.preventDefault();
  
  // Get user info
  const email = elements.signupForm['signup-email'].value;
  const password = elements.signupForm['signup-password'].value;

  // Sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(() => {
    // Clear form and update UI
    elements.signupForm.reset();
    elements.accountCreatedNotice.innerText = 'Your account has been created';  
  });
};

// Logout
export const logoutUser = e => {
  e.preventDefault();
  auth.signOut();
};

// Log in
export const loginUser = e => {
  e.preventDefault();
  // Get user info
  const email = elements.loginForm['login-email'].value;
  const password = elements.loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(() => {
    elements.loginForm.reset();
  })
};

// Setup user interface - if logged in show todo page, if logged out show landing page
export const setupUI = user => {
  if (user) {
    // toggle UI elements
    elements.containerBody.style.display = 'block';
    elements.landingPage.style.display = 'none';
  } else {
    elements.landingPage.style.display = 'block';    
    elements.containerBody.style.display = 'none';
  }
};