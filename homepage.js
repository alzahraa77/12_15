// Affirmation sentences array
const affirmations = [
    "Every day is a fresh start, Believe in yourself and keep moving forward.",
    "You are stronger than you think. Keep going!",
    "Great things take time. Stay patient and persistent.",
    "Every step you take, no matter how small, is progress.",
    "You are worthy of all the good things in life.",
    "Challenges are opportunities for growth. Embrace them.",
    "Happiness is a journey, not a destination. Enjoy the ride."
];

// Get today's date
const today = new Date();
const index = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

// Set the affirmation text
document.getElementById("daily-affirmation").textContent = affirmations[index];
