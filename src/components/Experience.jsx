import React from "react";
import PropTypes from "prop-types";

Experience.propTypes = {
  experience: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }),
};

function Experience({ experience }) {
  return (
    <>
      <div>{experience.start}</div>
      <div>{experience.end}</div>
      <div>{experience.description}</div>
      <div>{experience.company}</div>
    </>
  );
}

export default Experience;