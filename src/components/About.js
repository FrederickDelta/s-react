import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="is-size-1 has-text-centered">About</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
        laboriosam ad doloremque neque nisi nulla consequuntur dicta assumenda
        qui ipsum?
      </p>
    </div>
  );
};

export default Rainbow(About);
