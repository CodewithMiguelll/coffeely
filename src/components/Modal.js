import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white px-20 py-10 rounded shadow-lg text-center">
        <FontAwesomeIcon
          className="text-6xl text-[#6d4c41]"
          icon={faCheckCircle}
        />
        <p className="mt-6 lato-regular">{message}</p>
        <button
          onClick={onClose}
          className="mt-10 bg-[#a1887f] text-[#fafafa] p-2 rounded transition-all hover:bg-[#7e655c]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
