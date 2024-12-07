import React, { useEffect, useRef } from "react";
import "./VissionMission.css";

const VissionMission = () => {
  const fadeInRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeInRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision-mission">
      <h1 className="section-title">Vision</h1>
      <p className="fade-in" ref={(el) => fadeInRefs.current.push(el)}>
      Our vision is to create a world where no life is lost due to the unavailability of blood. We aspire to build a compassionate and unified network that ensures timely access to safe and sufficient blood for everyone in need. By fostering a community of committed donors and healthcare providers, we aim to make blood donation a seamless and lifesaving act accessible to all.
      </p>

      <h1 className="section-title">Mission</h1>
      <p className="fade-in" ref={(el) => fadeInRefs.current.push(el)}>
      Our mission is to connect voluntary blood donors with patients in need, creating a bridge of hope and support. We are dedicated to raising awareness about the importance of blood donation and eliminating shortages through consistent outreach and education. By leveraging innovative technology, we strive to make the donation process transparent, safe, and accessible for donors and recipients alike. Above all, we aim to inspire a culture of kindness, where every individual feels empowered to save lives through the simple yet profound act of giving.
      </p>
    </section>
  );
};

export default VissionMission;
