import "./wonderButton.css";

interface WonderButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Button neon effect
   */
  neon: boolean;
  /**
   * Image object with url and alt
   */
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
   * Color personalizado de la fuente
   */
  fontColor?: string;
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
  size = "medium",
  backgroundColor,
  label,
  urlImage,
  altImage,
  imageSize,
  fontColor="white",
  ...props
}: WonderButtonProps) => {
  const brightness = neon ? "storybook-button--neon" : "";
  const imageWidth = imageSize ? `img--${imageSize}` : "";
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        brightness,
      ].join(" ")}
      style={{ backgroundColor, color:fontColor }}
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
