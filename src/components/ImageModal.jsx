import Loader from './Loader';
import css from './css/ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ selectedImage, modalIsOpen, closeModal }) {
    return (
        <Modal
            className={css.Modal}
            overlayClassName={css.Overlay}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image preview"
        >
            <div className={css.ModalLoader}>
                <Loader />
            </div>
            <a href={selectedImage.links.html} target="_blank" rel="noreferrer">
                <img
                    className={css.ModalImage}
                    src={selectedImage.urls.regular}
                    alt={selectedImage.alt_description}
                />
            </a>
            <div className={css.TextContainer}>
                <p className={css.ImageInfo}>
                    <strong>Likes:</strong> {selectedImage.likes}
                </p>
                <p className={css.ImageInfo}>
                    <strong>Uploaded by:</strong> {selectedImage.user.username}
                </p>
            </div>
        </Modal>
    );
}