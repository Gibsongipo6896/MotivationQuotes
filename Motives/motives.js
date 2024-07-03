const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go, as long as you do not stop. - Confucius",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "All our dreams can come true, if we have the courage to pursue them. - Walt Disney",
    "Good things come to people who wait, but better things come to those who go out and get them. - Anonymous",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your limitation—it's only your imagination. - Unknown",
    "Push yourself, because no one else is going to do it for you. - Unknown",
    "Great things never come from comfort zones. - Unknown",
    "Dream it. Wish it. Do it. - Unknown",
    "Success doesn’t just find you. You have to go out and get it. - Unknown",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. - Unknown",
    "Wake up with determination. Go to bed with satisfaction. - Unknown",
    "Do something today that your future self will thank you for. - Unknown",
    "Little things make big days. - Unknown",
    "It’s going to be hard, but hard does not mean impossible. - Unknown"


];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote-text').textContent = quote;
}

document.getElementById('generate-btn').addEventListener('click', generateQuote);
