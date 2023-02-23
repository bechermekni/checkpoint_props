import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  props.handleName(`I m  ${props.fullName} `);
  return (
    <div className="container">
      <img src={props.src} alt="" />
      {props.children}
      <h2 className="titre">{props.fullName}</h2>
      <h5 className="proff">I am a {props.profession}</h5>
      <p className="biog"> {props.bio}</p>
      <button onClick={() => props.handleName(`I m ${props.fullName} `)}>
        Hire Me
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Mekni Becher",
  profession: "Frontend Developer",
  bio: "A Frontend Developer  ",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string,
  bio: PropTypes.string,
  src: PropTypes.string,
};
export default Profile;
