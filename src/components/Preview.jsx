import Card from "./Card";

import defaultImage from "../images/ebook-example.jpg";

function Preview({ data }) {
  return (
    <section className="preview">

      <div className="projectImage" style= {{ backgroundImage: `url(${data.image || defaultImage })` }}></div>
      <Card 
        data={data} 
      />
    </section>
  );
}

export default Preview;
