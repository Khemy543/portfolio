import './Modal.scss';

const Modal = ({ data, modalClose }) => {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };
  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{data.title}</h4>
            <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="st-flex-center">
              <img src={data.imgLinkLg} />
            </div>
            <p className="modal-subtitle">{data.title}</p>
            <p className="modal-subtitle">{data.subTitle}</p>
            <p className="modal-subtitle">{data.company}</p>
            <a className="modal-subtitle" href={data.url} target='_blank' >{data.url}</a>
            <p className="modal-subtitle">{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
