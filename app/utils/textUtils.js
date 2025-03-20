const cleanText = (text) => {
    return text.replace(/\s+/g, ' ').trim();  // Normalize whitespace
  };
  
  module.exports = { cleanText };
  