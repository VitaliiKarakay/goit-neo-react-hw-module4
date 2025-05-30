import css from "./css/ImageCard.module.css";

export default function ImageCard({ thumb, alt, onClick }) {
    return (
        <img
            className={css.ImageCard}
            src={thumb}
            width="320"
            height="240"
            loading="lazy"
            alt={alt}
            onClick={onClick}
        />
    );
}