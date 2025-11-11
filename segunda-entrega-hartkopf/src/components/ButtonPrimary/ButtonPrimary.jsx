import "./ButtonPrimary.css";

function ButtonPrimary({ children, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`button-primary ${className}`}>
      {children}
    </button>
  );
}

export default ButtonPrimary;
