import "./Button.scss";

export default function Button({ text, onClick, name }) {

  return (
    <button className={`button-comp ${name}`} onClick={onClick}>
      {text}
    </button>
  );

}
