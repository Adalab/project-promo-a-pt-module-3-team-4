import Hero from "./Hero";
import Preview from "./Preview";
import Info from "./Info";
import Author from "./Author";
import Buttons from "./Buttons";

function Main({ changeData, data }) {

  return (
    <main className="main">
      <Hero />
      <Preview data={data} />
      <form className="addForm">
        <Info changeData={changeData} data={data} />
        <Author changeData={changeData} data={data} />
        <Buttons />
      </form>
    </main>
  );
}

export default Main;
