import "./wonderButton.css";

interface WonderButtonProps {
  /**
   * custom font color
   */
  fontColor?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * round edge?
   */
  border?: boolean;
  /**
   * Button neon effect
   */
  neon: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * What url image should use?
   */
  urlImage?: string;
  /**
   * What alt image should use?
   */
  altImage?: string;
  /**
   * How large should the image be?
   */
  imageSize?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const WonderButton = ({
  neon = false,
  border = false,
  size = "medium",
  backgroundColor,
  label,
  urlImage,
  altImage,
  imageSize,
  fontColor = "white",
  ...props
}: WonderButtonProps) => {
  const brightness = neon ? "wonder-button--neon" : "";
  const imageWidth = imageSize
    ? `button__itern-container__img--${imageSize}`
    : "";
  const borderButton = border ? `wonder-button--border` : "";
  return (
    <button
      type="button"
      className={[
        "wonder-button",
        `wonder-button--${size}`,
        brightness,
        borderButton,
      ].join(" ")}
      style={{ backgroundColor, color: fontColor }}
      {...props}
    >
      <div className="button__itern-container">
        {urlImage && (
          <img className={imageWidth} src={urlImage} alt={altImage} />
        )}
        {label}
      </div>
    </button>
  );
};
