
import React, { useState } from 'react';
import '../components/Feedback.css'; // Import the CSS file for Feedback component
const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (feedback.trim()) {
            alert("Feedback submitted: " + feedback);
            setSubmitted(true);
            setFeedback('');
        } else {
            alert("Please enter your feedback.");
        }
    };

    return (
        <div className="feedback-container">
            <h2>We Value Your Feedback</h2>
            <form onSubmit={handleSubmit} className="feedback-form">
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Your feedback here..."
                    rows="4"
                    required
                />
                <button type="submit">Submit Feedback</button>
            </form>
            {submitted && <p>Thank you for your feedback!</p>}
        </div>
    );
};

export default Feedback;