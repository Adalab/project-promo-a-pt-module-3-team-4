import Hero from "./Hero";
import Preview from "./Preview";
import Info from "./Info";
import Author from "./Author";
import Buttons from "./Buttons";

function Main({
  changeData,
  data,
  updateAvatarAuthor,
  updateAvatarProject,
  onSubmit,
  responseFetch,
}) {
  return (
    <main className="main">
      <Hero />
      <Preview data={data} />
      <form className="addForm">
        <Info changeData={changeData} data={data} />
        <Author changeData={changeData} data={data} />
        <Buttons
          updateAvatarAuthor={updateAvatarAuthor}
          updateAvatarProject={updateAvatarProject}
          onSubmit={onSubmit}
          responseFetch={responseFetch}
        />
      </form>
    </main>
  );
}

export default Main;
