import React from "react";
import "./Sidetitle.css";

function Sidetitle() {
  return (
    <div>
      <section class="section">
        <div class="paras">
          <p class="sectionTag text-big">GET TO KNOW US</p>
          <p class="sectionSubTag text-small">
            Dhulikona Foundation, founded in 2020, works with villages in
            Darrang, Assam to support the implementation of Jal Jeevan mission
            spearheaded by the government of Assam. The Jal Jeevan mission aims
            to provide 55 Its of clean drinking water per day to every rural
            household through piped water supply projects. Dhulikona foundation
            is engaged to support the mission in information, education and
            communication activities, catering to approximately 60,000
            households with a population close to 2.5 lakhs.
          </p>
        </div>
        <div>
          <img class="thumbnail" src="./drinking-water-image.jpg" />
        </div>
      </section>

      <section class="section section-left" id="about">
        <div class="paras">
          <p class="sectionTag text-big">HOW WE WORK</p>
          <p class="sectionSubTag text-small">
            Dhulikona primarily caters to smooth and seamless implementation of
            the mission in Darrang district. It has been engaged in 60 villages
            spread across 9 gram panchayats. During the course of this project,
            the government builds pipelines to supply water in the villages.
            Post the construction, the responsibility of implementation and
            maintenance falls on the villages and Gram Panchayats (GP). Each GP
            oversees around 10 villages.
          </p>
        </div>
        <div>
          <img class="thumbnail" src="./safe_water.jpg" />
        </div>
      </section>
    </div>
  );
}

export default Sidetitle;
