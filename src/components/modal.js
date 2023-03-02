import ReactDOM from 'react-dom';
import './Modal.css';
export default function Modal({ children, handleClick, isSalesModal }) {
  return ReactDOM.createPortal(
    <div className='modal-backdrop'>
      <div
        className='modal'
        style={{
          border: '4px solid',
          textAlign: `center`,
          borderColor: isSalesModal ? `#a0144f` : `black`,
        }}
      >
        {children}
        <br />
        <br />
        <button
          onClick={handleClick}
          className={isSalesModal ? 'sales-btn' : ''}
        >
          close this item
        </button>
      </div>
    </div>,
    document.body
  );
}
