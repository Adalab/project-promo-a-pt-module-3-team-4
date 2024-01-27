import Hero from "./Hero";
import Preview from "./Preview";
import Info from "./Info";
import Author from "./Author";
import Buttons from "./Buttons";

function Main() {
  return (
    <main className="main">
      <Hero />
      <Preview />
      <form className="addForm">
        <Info />
        <Author />
        <Buttons />
      </form>
    </main>
  );
}

export default Main;
