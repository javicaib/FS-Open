import Part from "./Part";

function Content(props) {
  const { course } = props;
  return (
    <>
      {course.parts.map((part) => {
        return <Part part={part} key={part.name} />;
      })}
    </>
  );
}
export default Content;
