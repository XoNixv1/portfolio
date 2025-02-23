import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="not-faund">
      <p className="not-faund__404">404</p>
      <p className="not-faund__label">Not Found</p>
      <p className="not-faund__descr">
        The Page you are looking for doesn`t exist or other error accured.
      </p>
    </div>
  );
}
