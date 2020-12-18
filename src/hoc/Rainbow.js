const Rainbow = (WrappedComponent) => {
  const colors = ["red", "pink", "orange", "blue", "green", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * 5)];

  return (props) => {
    return (
      <div style={{ color: randomColor }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
