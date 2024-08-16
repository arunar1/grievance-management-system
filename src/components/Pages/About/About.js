import React from "react";
import Header from "../Home/Header";

export default function About() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4">About the Grievance Management System</h1>
        <p className="lead">
          Our Grievance Management System is designed to provide a transparent,
          efficient, and user-friendly platform for addressing and resolving
          grievances. We believe in creating a safe and inclusive environment
          where every voice is heard and every issue is handled with the utmost
          care.
        </p>

        <section className="mt-5">
          <h2>Our Mission</h2>
          <p>
            The mission of our Grievance Management System is to ensure that
            every grievance is addressed promptly, fairly, and confidentially.
            We aim to empower users by providing a platform that facilitates
            open communication and fosters trust within the organization.
          </p>
        </section>

        <section className="mt-5">
          <h2>Our Vision</h2>
          <p>
            Our vision is to create an environment where grievances are not just
            managed, but also prevented. By promoting transparency and
            accountability, we aim to build a culture of continuous improvement
            where feedback is valued and issues are resolved proactively.
          </p>
        </section>

        <section className="mt-5">
          <h2>Meet the Team</h2>
          <p>
            Our team is composed of dedicated professionals with expertise in
            conflict resolution, human resources, and technology. Together, we
            work to ensure that the Grievance Management System meets the
            highest standards of integrity, efficiency, and user satisfaction.
          </p>
        </section>

        <section className="mt-5">
          <h2>Why Choose Us?</h2>
          <p>
            We understand that addressing grievances can be challenging, which
            is why our system is designed with the user in mind. Our platform
            offers:
          </p>
          <ul>
            <li>Easy submission and tracking of grievances</li>
            <li>Confidentiality and privacy assurance</li>
            <li>Timely resolution and feedback</li>
            <li>Comprehensive reports and analytics</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
