import { SetStateAction } from "react";
import "./successModal.scss";

export default function SuccessModal({
  successRef,
  closeForm,
  setSuccessOpened,
}: {
  setSuccessOpened: React.Dispatch<SetStateAction<boolean>>;
  closeForm: () => void;
  successRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={successRef} className="succes-modal">
      <img src="/assets/form/icons8-success.svg" alt="" />
      <p>Success</p>
      <p
        className="succes-modal__back-btn"
        onClick={() => {
          setSuccessOpened(false);
          closeForm();
        }}
      >
        Go back
      </p>
    </div>
  );
}
