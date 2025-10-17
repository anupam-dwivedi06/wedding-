import React from 'react';
import { useNavigate } from "react-router-dom";
// Tailwind CSS has been removed. Styles are now included in the component below.

const faqData = [
    {
        question: "Why do you take only a few weddings each year?",
        answer: "Because every wedding deserves time, creativity, and personal attention. We focus on fewer weddings so that every couple gets the best of us—not just a service, but a premium experience."
    },
    {
        question: "What kind of weddings do you love to capture?",
        answer: "From soulful traditional ceremonies to grand destination celebrations and new-era weddings—we love capturing it all. Every wedding is a unique story, and we are there to tell it through."
    },
    {
        question: "How long will it take to get our photos and films?",
        answer: "Good storytelling takes time—that's why our final delivery takes 4-5 months. But don't worry, we make sure you have memories to enjoy instantly:",
        list: [
            "An AI-optimized online gallery available on the wedding day itself",
            "*Same-day reels (If Possible)",
            "*A 5-10 min same-day edit film (If required)"
        ]
    },
    {
        question: "How can we book you for our wedding?",
        answer: "It's simple: Fill out the booking form on our website (we'll call you within 24 hrs), or call us in person for a detailed discussion."
    },
    {
        question: "Do you offer complete wedding coverage or just photography?",
        answer: "We provide all-in-one wedding solutions:",
        list: [
            "Candid & traditional photography",
            "Cinematic wedding films",
            "Drone coverage, albums & live streaming and more."
        ]
    },
    {
        question: "Do you travel for weddings?",
        answer: "Absolutely! We capture weddings across India—from intimate hometown functions to luxurious destination weddings. No distance is too far when it comes to telling your story."
    },
    {
        question: "What makes Shagun Utsav different?",
        answer: "We don't just click pictures—we live your wedding with you. Every frame is crafted with emotions, traditions, and fine details, so when you look back, you don't just see a photo—you relive the moment."
    },
];

// Component to embed CSS styles
const StyleBlock = () => (
    <style dangerouslySetInnerHTML={{__html: `
        /* Utility for Text Shadow */
        .text-shadow-lg {
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
        }

        /* Global and Layout Styles */
        .app-container {
            min-height: 100vh;
            background-color: #fcf6ef; /* Matches the original background color */
            font-family: Arial, sans-serif;
        }

        .faq-content {
            max-width: 900px;
            margin: 0 auto;
            padding: 3rem 1rem;
        }

        /* FAQ Header Styles */
        .faq-title {
            font-size: 2.25rem; /* 3xl */
            text-align: center;
            font-weight: normal;
            color: #4b5563; /* Gray-700 */
            margin-bottom: 3rem;
        }

        /* FAQ Item Styles */
        .faq-item {
            margin-bottom: 2rem; /* mb-8 */
        }

        .faq-question {
            font-size: 1.125rem; /* lg */
            font-weight: 600;
            color: #1f2937; /* Gray-800 */
            margin-bottom: 0.5rem;
        }

        .faq-answer {
            color: #4b5563; /* Gray-600 */
            font-size: 1rem; /* base */
            margin-bottom: 0.25rem;
        }

        .faq-list {
            list-style-type: disc;
            margin-left: 1.25rem; /* ml-5 */
            margin-top: 0.5rem; /* mt-2 */
            color: #4b5563; /* Gray-600 */
            font-size: 0.875rem; /* sm */
        }
        
        .faq-list li {
            margin-bottom: 0.25rem; /* space-y-1 */
        }

        /* Footer Hero Styles */
        .footer-hero {
            position: relative;
            width: 100%;
            height: 400px;
            overflow: hidden;
        }

        .hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .hero-overlay {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            justify-content: flex-end; /* justify-end */
            align-items: center; /* items-center */
            padding: 2.5rem; /* p-10 */
            gap: 1rem; /* space-y-4 */
        }

        .hero-text {
            color: white;
            font-size: 1.25rem; /* xl */
            font-weight: 500;
            letter-spacing: 0.1em; /* tracking-widest */
        }

        .contact-button {
            padding: 0.75rem 2rem; /* px-8 py-3 */
            border: 1px solid white;
            color: white;
            text-transform: uppercase;
            font-size: 0.875rem; /* sm */
            letter-spacing: 0.05em; /* tracking-wider */
            transition: all 0.3s ease; /* transition duration-300 */
            border-radius: 0.5rem; /* rounded-lg */
            cursor: pointer;
            background-color: transparent;
        }

        .contact-button:hover {
            background-color: white;
            color: #1f2937; /* Gray-900 */
        }

        /* Responsive Adjustments (md breakpoint: 768px) */
        @media (min-width: 768px) {
            .faq-content {
                padding-top: 5rem; /* py-20 */
                padding-bottom: 5rem; /* py-20 */
                padding-left: 1rem;
                padding-right: 1rem;
            }
            .faq-title {
                font-size: 2.5rem; /* 4xl */
            }
            .footer-hero {
                height: 500px;
            }
            .hero-text {
                font-size: 1.5rem; /* 2xl */
            }
            .contact-button {
                font-size: 1rem; /* base */
            }
        }
    `}} />
);

const FAQItem = ({ question, answer, list }) => (
    <div className="faq-item">
        <h3 className="faq-question">{question}</h3>
        <p className="faq-answer">{answer}</p>
        {list && (
            <ul className="faq-list">
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )}
    </div>
);

const FooterHero = () => {
    const navigate = useNavigate();
    const imageUrl = "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760615823/AboutFooterPhoto_mznakc.jpg";

    return (
        <div className="footer-hero">
            <img 
                src={imageUrl} 
                alt="Couple performing wedding rituals"
                className="hero-image"
            />
            <div className="hero-overlay">
                <p className="hero-text text-shadow-lg">
                    YOUR MEMORIES DESERVE THE PERFECT FRAME.
                </p>
                <button className="contact-button" onClick={()=> navigate("/newcontact")}>
                    Contact us
                </button>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <div className="app-container">
            <StyleBlock />
            <div className="faq-content">
                <h1 className="faq-title">
                    Frequently asked questions.
                </h1>

                <div className="faq-section">
                    {faqData.map((item, index) => (
                        <FAQItem 
                            key={index} 
                            question={item.question} 
                            answer={item.answer} 
                            list={item.list} 
                        />
                    ))}
                </div>
            </div>
            
            <FooterHero />
        </div>
    );
}

export default FAQ;
