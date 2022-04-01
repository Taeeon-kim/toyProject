const Global: React.FC = (props) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        minWidth: "350px",
        margin: "auto",
        position: "fixed",
        right: "50%",
        top: "0%",
        transform: "translate(50%, 0%)",
      }}
    >
      {props.children}
    </div>
  );
};

export default Global;
