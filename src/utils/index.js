// Utility function to create page URLs
export const createPageUrl = (pageName) => {
  // For this single-page portfolio, all routes go to the same page
  return '/';
};

// Other utility functions can be added here
export const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
