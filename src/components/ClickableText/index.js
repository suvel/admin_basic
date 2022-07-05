import "./style.css";

const ClickableText = ({ children, onClick, disappear }) => {
  const getClassName = () => {
    if (disappear) {
      return "clickableText disappear";
    }
    return "clickableText";
  };
  return (
    <span onClick={onClick} className={getClassName()}>
      {children}
    </span>
  );
};

export default ClickableText;
