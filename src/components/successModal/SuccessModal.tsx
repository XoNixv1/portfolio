import { SetStateAction, RefObject } from "react";
import "./successModal.scss";

interface SuccessModalProps {
  successRef: RefObject<HTMLDivElement | null>;
  closeForm: () => void;
  setSuccessOpened: React.Dispatch<SetStateAction<boolean>>;
}

export default function SuccessModal({
  successRef,
  closeForm,
  setSuccessOpened,
}: SuccessModalProps) {
  const handleGoBack = () => {
    setSuccessOpened(false);
    closeForm();
  };

  return (
    <div ref={successRef} className="succes-modal">
      <img src="/assets/form/icons8-success.svg" alt="Success icon" />
      <p>Success</p>
      <p className="succes-modal__back-btn" onClick={handleGoBack}>
        Go back
      </p>
    </div>
  );
}
