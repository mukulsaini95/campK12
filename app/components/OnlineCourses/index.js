/**
 *
 * OnlineCourses
 *
 */

import React from 'react';

const OnlineCourseCard = ({ course: { name, description, icon, demo, readMode } }) => {
  return <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
    <div className="courses-card">
      <div className="icon w-lg">
        <img src={require(`../../assets/images/icons/${icon}.svg`)} />
      </div>
      <h4>{name}</h4>
      <p>{description}
        {readMode && <a href="#">Read More.</a>}
        {demo && <a href="#">See a demo.</a>}
      </p>
    </div>
  </div>
}

function OnlineCourses() {

  const COURSES = [{
    icon: "group-40",
    name: "Learn interactively.",
    description: "LIVE online session with our expert mentors.",
    id: 1,
    demo: true,
    readMode: false
  }, {
    icon: "woman-copy",
    name: "Learn from anywhere.",
    description: "Convenience and safety for you and your child",
    id: 2,
    demo: false,
    readMode: false
  }, {
    icon: "woman-copy-2",
    name: "Learn from the pioneers.",
    description: "We've been teaching kids to code since 2010.",
    id: 3,
    demo: false,
    readMode: true
  }, {
    icon: "woman-copy-2(1)",
    name: "Learn by doing.",
    description: "100% project-based curriculum.Solve real-world problems.",
    id: 4,
    demo: false,
    readMode: false
  }]
  return <section className="section" id="online-courses">
    <div className="container">
      <h1 className="section-title">ONLINE COURSES</h1>
      <div className="row">
        {COURSES.map(course => (
          <OnlineCourseCard course={course} key={course.id} />
        ))}
      </div>
      <div>
        <button className="btn-trial">
          BOOK A FREE TRIAL
          </button>
      </div>
    </div>
  </section>
}

OnlineCourses.propTypes = {};

export default OnlineCourses;
