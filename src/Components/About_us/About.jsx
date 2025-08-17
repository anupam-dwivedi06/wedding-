import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-heading">
          <h1>About Us</h1>
        </div>

        <div className="para-img">
          <div className="about-para">
            <div className="icon-para">
              <i class="fa-regular fa-face-grin-beam"></i>{" "}
              <p>
                Weddings are not just events — they’re emotions. At{" "}
                <strong>Shagun Utsav</strong>, we live and capture every emotion
                with grace, beauty, and creativity.
              </p>
            </div>
            <div className="icon-para">
              <i class="fa-regular fa-face-grin-beam"></i>
              <p>
                Founded in 2001 as <strong>Utsav Studio & Graphics</strong>,
                we’ve grown with time and technology, transforming into{" "}
                <strong>Shagun Utsav</strong> — a new-age celebration of
                timeless traditions through the lens of art.
              </p>
            </div>
            <div className="icon-para">
              <i class="fa-regular fa-face-grin-beam"></i>
              <p>
                With over two decades of experience, we’ve been part of
                countless love stories — crafting unforgettable memories through{" "}
                <em>candid photography</em>, <em>cinematic wedding films</em>,{" "}
                <em>drone coverage</em>, and <em>same-day edits</em>.
              </p>
            </div>
            <div className="icon-para">
              <i class="fa-regular fa-face-grin-beam"></i>
              <p>
                Our passionate team of photographers, editors, and creators
                believes that every wedding is unique. From intimate rituals to
                grand celebrations, we ensure every moment is captured with
                care, elegance, and storytelling magic.
              </p>
            </div>
            <div className="icon-para">
              <i class="fa-regular fa-face-grin-beam"></i>
              <p>
                That’s why we’re here —{" "}
                <strong>
                  to make your special day truly unforgettable, frame by frame
                </strong>
                .
              </p>
            </div>
            <div className="icon-para">
              <i class="fa-regular fa-face-grin-beam"></i>
              <p>
                Join us in turning your big day into a beautiful story.
                <br />
                <strong>Shagun Utsav</strong> – Where every moment becomes a
                memory.
              </p>
            </div>
          </div>
          <div className="para-in-img">
            <img src="IMG_1131.PNG" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
