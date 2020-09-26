import React, { useState, useEffect } from "react";
// import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import courseStore from "../stores/courseStore";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { loadAuthors } from "../actions/authorActions";
import authorStore from "../stores/authorStore";
import ReactPaginate from "react-paginate";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  // for Authors
  useEffect(() => {
    authorStore.addChangeListener(onChangeAuthors);
    if (authors.length === 0) loadAuthors();
    return () => authorStore.removeChangeListener(onChangeAuthors);
  }, [authors.length]);

  // for Courses
  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courses.length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length]);

  /* since our component is connected to flux store, when courses are added 
  to the store onChange will be called */
  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function onChangeAuthors() {
    setAuthors(authorStore.getAuthors());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList
        courses={courses}
        authors={authors}
        deleteCourse={deleteCourse}
      />
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        // onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>
  );
}

export default CoursesPage;
