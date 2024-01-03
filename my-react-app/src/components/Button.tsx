// src/components/Button.tsx

interface ButtonProps {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
  isLoading: boolean;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  style,
  isLoading,
  disabled,
}) => {
  return (
    <>
      <h1>conditional rendering</h1>
      <button
        onClick={onClick}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "#fff",
          ...style,
        }}
        disabled={isLoading || disabled}
      >
        {isLoading ? "Loading..." : label}
      </button>
    </>
  );
};
export default Button;
