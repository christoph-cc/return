import "./Input.scss";

export default function Input(props) {
  const { label, pholder, value, onChange } = props;

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <label className="label">
      {label}
      <input
        className="label__input"
        placeholder={pholder}
        value={value ? value : ""}
        onChange={handleChange}
      />
    </label>
  );
}
