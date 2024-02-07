import Card from "./Card";

function Preview({ data }) {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <Card data={data} />
    </section>
  );
}

export default Preview;
