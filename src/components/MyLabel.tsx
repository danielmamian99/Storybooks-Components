import "./myLabel.css";

export interface Props {
  /**
   * Este es mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Estos son los tamaños de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Estos son los colores de la etiqueta
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Texto capitalizado
   */
  allCaps?: boolean;
  /**
   * Color personalizado de la fuente
   */
   fontColor?: string;
   /**
   * Color personalizado del fondo
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No label",
  size = "normal",
  fontColor,
  backgroundColor = 'transparent'
}: Props) => {
  return (
    <span 
        className={`label ${size} text-${color}`}
        style={{color:fontColor, backgroundColor:backgroundColor}}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
