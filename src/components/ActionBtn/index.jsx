function ActionBtn({ setTotal, value, onClick }) {
  const plusOne = () => {
    onClick(value);
    setTotal((curr) => curr + value);
  };

  return (
    <div>
      <button onClick={plusOne}>
        {value > 0 ? `+` : `-`} {Math.abs(value)}
      </button>
    </div>
  );
}

export default ActionBtn;
