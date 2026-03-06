import React from "react";

const UpFooter = () => {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dsgdfqnbj/image/upload/q_auto,f_auto/v1760796385/HomeUpFooterImg_fueyrg.jpg";

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          overflow-x: hidden;
          font-family: 'Georgia', 'Times New Roman', Times, serif;
        }

        /* --- HERO SECTION --- */
        .hero-section {
          position: relative;
          width: 100%;
          height: 40vh;
          background: url('${backgroundImageUrl}') center center / cover no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem;
        }

        .hero-text {
          max-width: 700px;
          font-size: 1.1rem;
          line-height: 1.7;
          font-weight: 400;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
        }

        .cta-button {
          margin-top: 1.5rem;
          padding: 0.7rem 2rem;
          background-color: #f5f0ea;
          color: #1a1a1a;
          border: none;
          font-size: 1rem;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button:hover {
          background-color: #ddd3c5;
        }

        /* --- BOTTOM SECTION --- */
        .bottom-section {
          background-color: #f8f3ee;
          padding: 3rem 1.5rem;
          text-align: center;
          color: #1a1a1a;
        }

        .bottom-section h2 {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1rem;
        }

        .bottom-section p {
          font-size: 1rem;
          line-height: 1.8;
        }

        .bottom-section strong {
          font-weight: 600;
        }

        /* --- RESPONSIVE DESIGN --- */
        @media (max-width: 1024px) {
          .hero-section {
            height: 40vh;
          }

          .hero-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 40vh;
            background-position: center center;
          }

          .hero-text {
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .cta-button {
            font-size: 0.9rem;
            padding: 0.6rem 1.6rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 30vh;
            background-position: top center;
          }

          .hero-text {
            font-size: 0.85rem;
          }

          .cta-button {
            font-size: 0.85rem;
          }

          .bottom-section {
            padding: 2.5rem 1rem;
          }
        }
      `}</style>

      <div className="hero-section">
        <div className="overlay">
          <p className="hero-text">
            Specializing in bridal elegance, <br />
            <strong>Neha</strong> crafts looks that are graceful, modern, and made just for you. <br />
            Because the right makeup isn’t just about beauty — it’s about confidence, glow, and feeling unforgettable.
          </p>
          <a
            href="https://www.instagram.com/neha_makeupaura?igsh=MWNuMXhnMWJ2bTYyMA"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Step into Aura
          </a>
        </div>
      </div>

      <div className="bottom-section">
        <h2>Where Photography Meets Emotions, and makeup meets Magic</h2>
        <p>
          <strong>Shagun Utsav</strong> and <strong>Neha makeup Aura</strong><br />
          Together, we are here to make your Shagun unforgettable.
        </p>
      </div>
    </>
  );
};

export default UpFooter;
