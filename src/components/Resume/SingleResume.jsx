import PropTypes from "prop-types";

const SingleResume = ({ element }) => {
  const { title, duration, subTitle, roles, text } = element;
  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{title}</h3>
      <div className="st-resume-timeline-duration">{duration}</div>
      <h4
        className="st-resume-timeline-subtitle"
        dangerouslySetInnerHTML={{ __html: subTitle }}
      />
      <div className="st-resume-timeline-text">
        <p>{text}</p>
      </div>
      <div>
        <ul>
          {roles &&
            roles.map((role, index) => (
              <li key={index} className="st-resume-timeline-text">
                <p>{role}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

SingleResume.propTypes = {
  element: PropTypes.object,
};

export default SingleResume;
