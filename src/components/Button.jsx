
export default function Button({
  children,
  onClick,
  type = "button"
}) {
  return (
    <button
      className="action-button"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
