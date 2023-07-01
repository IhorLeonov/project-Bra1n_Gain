import { FeedbackForm } from "components/FeedbackForm/FeedbackForm";
import { Modal } from "components/Modal/Modal";
import { useSelector } from "react-redux";
import { modalType } from "redux/modal/selector";

export const AddFeedbackModal = () => {
  const modalTypeSelected = useSelector(modalType)

  return (
    <Modal>
      {modalTypeSelected === "feedback" && (<FeedbackForm></FeedbackForm>)}
    </Modal>
  )
};