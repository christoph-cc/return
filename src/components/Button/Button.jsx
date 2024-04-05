import "./Button.scss";

export default function Button({ text, onClick, type }) {

  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );

}
