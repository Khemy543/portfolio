import "./Modal.scss";
import parser from 'html-react-parser';

const Modal = ({ data, modalClose }) => {
  const modalStyle = {
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "block",
  };
  return (
    <div className="modal show fade bd-example-modal-xl" style={modalStyle}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          
            <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
          <div className="modal-body">
            <div className="st-flex-center">
              <img src={data.imgLinkLg} />
            </div>
            <div className="row">
              <div className="col-lg-7">
                <h2 className="modal-subtitle">{data.title}</h2>
                <p className="modal-subtitle">{parser(data.overview)}</p>
              </div>
              <div className="col">
                <div className="project-info">
                  <div className="project-info__item">
                    <p className="modal-subtitle bold">Project Type:</p>
                    <p className="modal-subtitle light">{data.subTitle}</p>
                  </div>
                  <div className="project-info__item">
                    <p className="modal-subtitle bold">Company:</p>
                    <p className="modal-subtitle light">{data.company}</p>
                  </div>
                  <div className="project-info__item">
                    <p className="modal-subtitle bold">Role:</p>
                    <p className="modal-subtitle light">{data.role}</p>
                  </div>
                  <div className="project-info__item">
                    <p className="modal-subtitle bold">Technologies:</p>
                    <p className="modal-subtitle light">{data.technologies}</p>
                  </div>

                  <a
                    className="st-btn st-style1 st-color1"
                    style={{ marginTop: "20px" }}
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW LIVE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
