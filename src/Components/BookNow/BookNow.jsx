import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom color derived from the provided image
const CUSTOM_BG_COLOR = '#F8F3EE';

const BookNow = () => {
    const navigate = useNavigate();
  return (
    <>
      <style>{`
        /* Global Reset and Aesthetics */
        .app-container {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          color: #44403c; /* A deep stone color for good contrast */
          font-family: Georgia, 'Times New Roman', Times, serif; /* Using a standard serif font */
        }

        .content-wrapper {
          width: 100%;
          max-width: 48rem; /* Equivalent to max-w-4xl */
          margin: 0 auto;
          text-align: center;
        }

        /* Top Section Styling */
        .hook-text {
          margin-bottom: 3rem; /* mb-12 */
          font-size: 1.25rem; /* text-xl */
          font-weight: 300; /* font-light */
        }

        @media (min-width: 640px) { /* sm breakpoint */
          .hook-text {
            font-size: 1.5rem; /* sm:text-2xl */
          }
        }

        /* Button Container */
        .button-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 1rem; /* mt-4 */
          margin-bottom: 5rem; /* mb-40, adjusted for better spacing without Tailwind classes */
        }

        @media (min-width: 640px) { /* sm breakpoint */
          .button-container {
            margin-bottom: 5rem; /* sm:mb-64 */
          }
        }

        /* Button Styling */
        .book-now-button {
          padding: 0.5rem 1.5rem; /* px-6 py-2 */
          background-color: #d6d3ce; /* bg-stone-300 */
          color: #1c1917; /* text-stone-800 */
          font-weight: 500; /* font-medium */
          border-radius: 0.125rem; /* rounded-sm */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06); /* shadow-md */
          transition: background-color 150ms ease-in-out;
          white-space: nowrap;
          font-size: 0.875rem; /* text-sm */
          letter-spacing: 0.05em; /* tracking-wider */
          border: none;
          cursor: pointer;
        }

        .book-now-button:hover {
          background-color: #a8a29e; /* hover:bg-stone-400 */
        }

        /* Bottom Section Styling */
        .brand-message-italic {
          max-width: 28rem; /* max-w-md */
          margin: 0 auto 0.75rem auto; /* mx-auto mb-3 */
          font-size: 1rem; /* text-base */
          line-height: 1.625; /* leading-relaxed */
          font-weight: 300; /* font-light */
          font-style: italic;
        }

        @media (min-width: 640px) { /* sm breakpoint */
          .brand-message-italic {
            font-size: 1.125rem; /* sm:text-lg */
          }
        }

        .brand-name {
          font-size: 1.25rem; /* text-xl */
          font-weight: 500; /* font-medium */
        }

        @media (min-width: 640px) { /* sm breakpoint */
          .brand-name {
            font-size: 1.5rem; /* sm:text-2xl */
          }
        }

        .brand-name strong {
            font-weight: 700; /* font-bold */
        }
      `}</style>

      {/* Main container with custom style */}
      <div className="app-container" style={{ backgroundColor: CUSTOM_BG_COLOR }}>
        <div className="content-wrapper">
        
          <div className="hook-text">
            <p>
              Your Story Could be the next one here. Let's Create memories together.
            </p>
          </div>

          {/* Button Container */}
          <div className="button-container">
            {/* Button */}
            <button
              className="book-now-button"
             onClick={()=> navigate("/newcontact")}
            >
              Book now
            </button>
          </div>

          {/* ==================================
            BOTTOM SECTION: Brand Messaging
            ==================================
          */}
          <div>
            <p className="brand-message-italic">
              And while we preserve your timeless memories, every beautiful memory begins with a radiant bride.
            </p>
            <p className="brand-name">
              That's where <strong>Neha's Makeup Aura</strong> comes in.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default BookNow;
