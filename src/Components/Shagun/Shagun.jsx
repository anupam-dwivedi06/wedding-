import React, { useState, useEffect } from "react";
import "./Shagun.css";
import { useNavigate } from "react-router-dom";

const imagesData = [
  // --- Subham ---
  {
    id: 1,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham02_n7s0tn.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham02_n7s0tn.jpg",
    alt: "Subham image 2",
  },
  {
    id: 2,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham06_j1mjs0.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham06_j1mjs0.jpg",
    alt: "Subham image 6",
  },
  {
    id: 3,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham05_u6mg6u.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham05_u6mg6u.jpg",
    alt: "Subham image 5",
  },
  {
    id: 4,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham03_fpnuqe.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham03_fpnuqe.jpg",
    alt: "Subham image 3",
  },
  {
    id: 5,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham10_px5bl3.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham10_px5bl3.jpg",
    alt: "Subham image 10",
  },
  {
    id: 6,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham07_kcza2m.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham07_kcza2m.jpg",
    alt: "Subham image 7",
  },
  {
    id: 7,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham01_j6qy0s.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham01_j6qy0s.jpg",
    alt: "Subham image 1",
  },
  {
    id: 8,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551251/Subham09_pmuwdo.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551251/Subham09_pmuwdo.jpg",
    alt: "Subham image 9",
  },
  {
    id: 9,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham11_fi7x93.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham11_fi7x93.jpg",
    alt: "Subham image 11",
  },
  {
    id: 10,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham04_i1hbur.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham04_i1hbur.jpg",
    alt: "Subham image 4",
  },
  {
    id: 11,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551251/Subham12_wgqati.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551251/Subham12_wgqati.jpg",
    alt: "Subham image 12",
  },
  {
    id: 12,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham08_i6reuu.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham08_i6reuu.jpg",
    alt: "Subham image 8",
  },

  // --- Khusi ---
  {
    id: 13,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi02_xlfxbz.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi02_xlfxbz.jpg",
    alt: "Khusi image 2",
  },
  {
    id: 14,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi04_z1qpnr.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi04_z1qpnr.jpg",
    alt: "Khusi image 4",
  },
  {
    id: 15,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi01_btcazc.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi01_btcazc.jpg",
    alt: "Khusi image 1",
  },
  {
    id: 16,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi03_xffrey.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi03_xffrey.jpg",
    alt: "Khusi image 3",
  },
  {
    id: 17,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi05_zowe1h.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi05_zowe1h.jpg",
    alt: "Khusi image 5",
  },
  {
    id: 18,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi06_gga2qk.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi06_gga2qk.jpg",
    alt: "Khusi image 6",
  },
  {
    id: 19,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi10_vwjgcz.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi10_vwjgcz.jpg",
    alt: "Khusi image 10",
  },
  {
    id: 20,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi07_imldoh.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi07_imldoh.jpg",
    alt: "Khusi image 7",
  },
  {
    id: 21,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi11_ojt3rr.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi11_ojt3rr.jpg",
    alt: "Khusi image 11",
  },
  {
    id: 22,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi09_y4pusq.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi09_y4pusq.jpg",
    alt: "Khusi image 9",
  },
  {
    id: 23,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi12_hmctkk.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi12_hmctkk.jpg",
    alt: "Khusi image 12",
  },
  {
    id: 24,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi08_jt4ozx.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi08_jt4ozx.jpg",
    alt: "Khusi image 8",
  },
  {
    id: 25,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi14_te4x0b.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi14_te4x0b.jpg",
    alt: "Khusi image 14",
  },
  {
    id: 26,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi16_og1j1u.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi16_og1j1u.jpg",
    alt: "Khusi image 16",
  },
  {
    id: 27,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi15_vrwjqg.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi15_vrwjqg.jpg",
    alt: "Khusi image 15",
  },
  {
    id: 28,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551903/Khusi17_i9yytn.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551903/Khusi17_i9yytn.jpg",
    alt: "Khusi image 17",
  },
  {
    id: 29,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi13_c8tsti.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi13_c8tsti.jpg",
    alt: "Khusi image 13",
  },

  // --- Agrawal ---
  {
    id: 30,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552512/Agrawal25_sge2hg.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552512/Agrawal25_sge2hg.jpg",
    alt: "Agrawal image 25",
  },
  {
    id: 31,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552509/Agrawal24_etyirx.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552509/Agrawal24_etyirx.jpg",
    alt: "Agrawal image 24",
  },
  {
    id: 32,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552509/Agrawal23_vpan3h.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552509/Agrawal23_vpan3h.jpg",
    alt: "Agrawal image 23",
  },
  {
    id: 33,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552508/Agrawal22_bkqxsw.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552508/Agrawal22_bkqxsw.jpg",
    alt: "Agrawal image 22",
  },
  {
    id: 34,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552508/Agrawal21_shaud1.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552508/Agrawal21_shaud1.jpg",
    alt: "Agrawal image 21",
  },
  {
    id: 35,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552507/Agrawal20_duovck.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552507/Agrawal20_duovck.jpg",
    alt: "Agrawal image 20",
  },
  {
    id: 36,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552505/Agrawal19_sdhz4y.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552505/Agrawal19_sdhz4y.jpg",
    alt: "Agrawal image 19",
  },
  {
    id: 37,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552505/Agrawal18_m4poor.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552505/Agrawal18_m4poor.jpg",
    alt: "Agrawal image 18",
  },
  {
    id: 38,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal17_fydqlw.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal17_fydqlw.jpg",
    alt: "Agrawal image 17",
  },
  {
    id: 39,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal16_g7uocq.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal16_g7uocq.jpg",
    alt: "Agrawal image 16",
  },
  {
    id: 40,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal15_j1fz7w.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal15_j1fz7w.jpg",
    alt: "Agrawal image 15",
  },
  {
    id: 41,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552503/Agrawal14_nvbvco.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552503/Agrawal14_nvbvco.jpg",
    alt: "Agrawal image 14",
  },
  {
    id: 42,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552499/Agrawal08_l1v1rm.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552499/Agrawal08_l1v1rm.jpg",
    alt: "Agrawal image 8",
  },
  {
    id: 43,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal09_ustca3.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal09_ustca3.jpg",
    alt: "Agrawal image 9",
  },
  {
    id: 44,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552499/Agrawal13_lnccfu.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552499/Agrawal13_lnccfu.jpg",
    alt: "Agrawal image 13",
  },
  {
    id: 45,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal11_pnvvld.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal11_pnvvld.jpg",
    alt: "Agrawal image 11",
  },
  {
    id: 46,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal10_jokw0f.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal10_jokw0f.jpg",
    alt: "Agrawal image 10",
  },
  {
    id: 47,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal12_lgl2et.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal12_lgl2et.jpg",
    alt: "Agrawal image 12",
  },
  {
    id: 48,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal06_yhmbig.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal06_yhmbig.jpg",
    alt: "Agrawal image 6",
  },
  {
    id: 49,
    thumb:
      "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal07_ore2fd.jpg",
    full: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal07_ore2fd.jpg",
    alt: "Agrwal image 69",
  },
];

const Shagun = () => {
    const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateImage = (direction) => {
    let newIndex = currentImageIndex + direction;
    if (newIndex < 0) newIndex = imagesData.length - 1;
    else if (newIndex >= imagesData.length) newIndex = 0;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen) return;

      if (event.key === "Escape") closeModal();
      else if (event.key === "ArrowLeft") navigateImage(-1);
      else if (event.key === "ArrowRight") navigateImage(1);
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, currentImageIndex]);

  return (
    <div className="bodys">
      <div className="gallery-container">
        <h1>My Awesome Photo Gallery</h1>
        <div className="gallery-grid">
          {imagesData.map((image, index) => (
            <img
              key={image.id}
              src={image.thumb}
              alt={image.alt}
              onClick={() => openModal(index)}
              className="gallery-thumbnail"
            />
          ))}
        </div>

        {isModalOpen && (
          <div className="modal" onClick={closeModal}>
            <span
              className="close-button"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              &times;
            </span>
            <div
              className="modal-content-wrapper"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imagesData[currentImageIndex].full}
                alt={imagesData[currentImageIndex].alt}
                className="modal-image"
              />
              <div className="modal-caption">
                {imagesData[currentImageIndex].alt}
              </div>
              <button
                className="nav-button prev"
                onClick={() => navigateImage(-1)}
              >
                &#10094;
              </button>
              <button
                className="nav-button next"
                onClick={() => navigateImage(1)}
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="shagun-img-div">
        <img
          src="https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760810699/ShagunBottom_h3oo2f.jpg"
          alt="Decorative Bottom Border"
          className="shagun-bottom-image"
        />
        <div className="shagum-img-text">
          <h1>Your Dream Memories Await</h1>
          <button className="shagun-img-btn" onClick={()=> navigate("/newcontact")}>Reach out now</button>
        </div>
      </div>
    </div>
  );
};

export default Shagun;
