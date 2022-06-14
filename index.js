const Box = (props) => {
  const { text, className } = props;
  return (
    <div className={className}>
      <p className="boxes">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box text="small" className="small-box" />
      <Box text="medium" className="medium-box" />
      <Box text="large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
