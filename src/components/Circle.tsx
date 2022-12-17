import './circle.css'

interface CicleProps {
  /**
   * How large should the circle be?
   */
  cicleSize?: "small" | "medium" | "large";
  /**
   * What color to use
   */
  backgroundColor?: string;
  /**
   * How large should the image be?
   */
  imageSize?: "small" | "medium" | "large";
  /**
   * What url image should use?
   */
  urlImage?: string;
  /**
   * What alt image should use?
   */
   altImage?: string;
}
export const Circle = ({
  imageSize = "small",
  cicleSize = "small",
  backgroundColor,
  urlImage,
  altImage,
}: CicleProps) => {
  return (
    <div className={`circle cicle--${cicleSize}`} style={{ backgroundColor }}>
      {urlImage && (
        <div className={`cicle__img cicle__img--${imageSize}`}>
          <img src={`${urlImage}`} alt={`${altImage}`}></img>
        </div>
      )}
    </div>
  );
};
