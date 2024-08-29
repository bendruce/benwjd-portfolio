import React from "react";

/**
 * CV Component
 *
 * This component renders the detailed content of a CV, including sections for
 * personal information, technical skills, education, work experience, and
 * projects. The visibility of the content is controlled by the `isVisible` prop,
 * which triggers animations for showing or hiding the CV content.
 *
 * Props:
 * - `isVisible` (boolean): Controls the visibility of the CV content. When true,
 *   the content is fully visible; when false, the content is hidden with reduced
 *   opacity.
 */

function CV({ isVisible }) {
  return (
    <div className="h-fit sm:h-[100vh] w-full sm:w-7/12 flex flex-col sm:py-12 sm:px-12 sm:pr-24 justify-start text-xl font-montserrat sm:overflow-y-auto">
      {/* Container for the CV content with transition effects based on visibility */}
      <div
        className={`flex flex-col h-fit gap-4 text-orange-50 z-50 bg-zinc-800 p-4 transition-all duration-500 ${
          isVisible ? "opacity-100 " : "opacity-0 "
        }`}
      >
        {/* Personal Information Section */}
        <div className="flex flex-col items-center text-orange-50 gap-2 h-fit">
          <h2 className="text-2xl">BENJAMIN DRUCE</h2>
          <div className="flex flex-row flex-wrap text-sm gap-2 items-center text-center justify-center">
            <a
              href="http://benwjd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline hover:italic"
            >
              benwjd.com
            </a>
            <p>|</p>
            <a
              href="mailto:hello@benwjd.com?subject=Software%20Opportunity"
              className="underline hover:no-underline hover:italic"
            >
              hello@benwjd.com
            </a>
            <p>| +44 7555 793351 |</p>
            <a
              href="https://linkedin.com/in/benjamindruce"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline hover:italic"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Technical Skills & Key Strengths Section */}
        <div className="flex flex-col w-full h-fit text-left gap-2">
          <p className="text-xl font-bold underline">
            Technical Skills & Key Strengths
          </p>
          <div className="text-sm">
            <p>
              Node.js | Next.js | React | JavaScript | HTML | CSS | Python |
              Flutter | Java | SQL | AWS | GCP | Azure | Git | Bitbucket
            </p>
            <p>
              Collaboration | Rapid Learning | Proactive Problem Solving |
              Logical Thinking
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="flex flex-col w-full h-fit text-left gap-2">
          <p className="text-xl font-bold underline">Education</p>
          <div className="text-sm">
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <p className="font-bold">Loughborough University </p>
              </div>
              <p>Oct 2021 - Sept 2025</p>
            </div>
            <p className="ml-8">- UK Computer Science BSc</p>

            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <p className="font-bold">Reepham Sixth Form College </p>
              </div>
              <p>Sept 2019 - Jun 2021</p>
            </div>
            <p className="ml-8">
              - Physics (A), Maths (A), Computer Science (B)
            </p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="flex flex-col w-full h-fit text-left gap-2">
          <p className="text-xl font-bold underline">Work Experience</p>
          <div className="text-sm">
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <h4 className="font-bold">Software Engineer Placement </h4>
                <p>electronRx</p>
              </div>
              <p>July 2023 - Present</p>
            </div>

            <ul className="ml-8">
              <li>
                - Led development of web and mobile applications, including
                projects for clinical data collection and analysis, applying
                full-stack development skills.
              </li>
              <li>
                - Acted as Scrum Lead, managing a small team using Agile
                methodologies to ensure timely delivery and alignment with
                project goals.
              </li>
              <li>
                - Spearheaded the integration of Python-based machine learning
                models into cloud services, converting them into microservices
                for enhanced scalability.
              </li>
              <li>
                - Involved in clinical trials and data collection studies on
                respiratory conditions such as COPD and asthma, including a
                100-patient study in Japan using a Software as a Medical Device
                (SaMD).
              </li>
              <li>
                - Collaborated with advanced machine learning and data science
                teams to develop innovative solutions in healthcare technology.
              </li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col w-full h-fit text-left gap-2">
          <p className="text-xl font-bold underline">Projects</p>
          <div className="text-sm">
            <div className="flex flex-row gap-2">
              <p className="font-bold">purpleDx Dashboard</p>
              <p>electronRx</p>
            </div>
            <ul className="ml-8">
              <li>
                - Developed a web application designed to enable clinicians to
                remotely monitor patient health, utilizing data collected from
                the PurpleDx SaMD mobile application. The dashboard allowed
                clinicians to log in, view patient metrics, and analyze health
                trends over time.
              </li>
              <li>
                - Led an internal development team to create a custom web
                dashboard, ensuring seamless data integration with the mobile
                application through close collaboration with external teams.
                This role honed my leadership skills and deepened my
                understanding of full-stack development and cross-team
                coordination.
              </li>
            </ul>

            <div className="flex flex-row gap-2">
              <p className="font-bold">Dr In Your Pocket</p>
              <p>electronRx</p>
            </div>
            <ul className="ml-8">
              <li>
                - Developed a community website and forum for individuals with
                respiratory conditions, facilitating information sharing and
                support.
              </li>
              <li>
                - Implemented front-end with Next.js and React; back-end powered
                by Firebase and hosted on AWS.
              </li>
            </ul>

            <div className="flex flex-row gap-2">
              <p className="font-bold">PREDICT-oRx</p>
              <p>Oxcitas, electronRx</p>
            </div>
            <ul className="ml-8">
              <li>
                - Integrated machine learning models into microservices to
                process biomarkers, generating predictive age and risk scores,
                which were then utilized within a web application.
              </li>
              <li>
                - Developed web applications that interfaced seamlessly with
                these microservices, enabling users to upload data and visualize
                results through an intuitive, user-friendly interface.
              </li>
              <li>
                - Collaborated closely with PhD-level ML engineers to refine the
                models and contributed to the creation of a robust MVP, which
                was showcased to collaborators and partners.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
