function ActionBtn({ setTotal, value }) {
  const plusOne = () => {
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
