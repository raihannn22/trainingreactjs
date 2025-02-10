const TextChanger = ({ label, handler }) => {
  return (
    <div>
      <button onClick={handler}>{label}</button>
    </div>
  );
};

export default TextChanger;
