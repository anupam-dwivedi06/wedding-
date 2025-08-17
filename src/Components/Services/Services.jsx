import React from 'react';
import './Services.css'; // optional: if you separate CSS

const WorkProcess = () => {
  return (
    <section className="container work-container">
      <div className="work-heading">
        <h1>WORK PROCESS</h1>
        <p>
          necessitation eius conseques ex aliquisd tugs eum quidem sint
          consecter verit
        </p>
      </div>

      <div className="work-wrapper">
        {/* Card 1 */}
        <div className="work-show">
          <div className="work1">
            <img src="https://feast-it-web-prod.imgix.net/7ce97163-0293-4932-80e3-61cb8cadecbf/uQT2AK80V2/Feast_It_telling-stories-by-jacque-prates-d_0T-aR4ar.jpg?auto=format&fit=max&w=1080&q=20" alt="Work step 1" />
          </div>
          <div className="work-name">
            <div className="gola">01</div>
            <h1>Photography & Videography Packages</h1>
          </div>
          <div className="work-para">
            <p>
              Capture every glance, smile, and moment with our professionally curated packages:
            </p>
          </div>
          <div className="work-list">
            <ul>
              <li><i className="fa-solid fa-check-to-slot"></i> Candid & Traditional Photography</li>
              <li><i className="fa-solid fa-check-to-slot"></i>Cinematic & Documentary-style Videography</li>
              <li><i className="fa-solid fa-check-to-slot"></i> Pre-Wedding Shoots & Save-the-Date Films</li>
              <li><i className="fa-solid fa-check-to-slot"></i>Couple Portraits, Haldi, Mehndi, Reception coverage</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="work-show">
          <div className="work1">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-gorgeous-indian-bride-with-heavy-makeup-wearing-traditional-bridal-attire-and-image_15809162.jpg" alt="Work step 2" />
          </div>
          <div className="work-name">
            <div className="gola">02</div>
            <h1>Makeup & Bridal Makeover Services</h1>
          </div>
          <div className="work-para">
            <p>
             By Neha Makeup Aura (in-house beauty partner)

Transforming brides into queens — with elegance and confidence:
            </p>
          </div>
          <div className="work-list">
            <ul>
              <li><i className="fa-solid fa-check-to-slot"></i> Bridal & Engagement Makeup</li>
              <li><i className="fa-solid fa-check-to-slot"></i>Pre-wedding Skin & Hair Styling</li>
              <li><i className="fa-solid fa-check-to-slot"></i>Party Makeovers for Family & Guests</li>
              <li><i className="fa-solid fa-check-to-slot"></i>On-location Beauty Services</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="work-show">
          <div className="work1">
            <img src="https://www.bayareabeatsdjs.com/wp-content/uploads/2024/05/Uplights_Outdoors_PurpleBambooAmbience.jpg" alt="Work step 3" />
          </div>
          <div className="work-name">
            <div className="gola">03</div>
            <h1>Optional Add-Ons (for a grand experience)</h1>
          </div>
          <div className="work-para">
            <p>
              Enhance your celebrations with high-tech & creative features:
            </p>
          </div>
          <div className="work-list">
            <ul>
              <li><i className="fa-solid fa-check-to-slot"></i> Drone Aerial Coverage</li>
              <li><i className="fa-solid fa-check-to-slot"></i> Wedding Albums</li>
              <li><i className="fa-solid fa-check-to-slot"></i> Insta Reels & Trending Short Edits</li>
              <li><i className="fa-solid fa-check-to-slot"></i> Live Streaming (YouTube /Private Link)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
