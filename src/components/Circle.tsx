import './circle.css'

export interface CicleProps {
  /**
   * How large should the circle be?
   */
  circleSize?: "small" | "medium" | "large";
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
  circleSize = "small",
  backgroundColor,
  urlImage,
  altImage,
}: CicleProps) => {
  return (
    <div className={`circle circle--${circleSize}`} style={{ backgroundColor }} data-testid="circle">
      {urlImage && (
        <figure className={`circle__img circle__img--${imageSize}`} data-testid="circle__img">
          <img src={`${urlImage}`} alt={`${altImage}`}></img>
        </figure>
      )}
    </div>
  );
};