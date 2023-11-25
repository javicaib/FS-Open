import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

function Course({ courses }) {
  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course.name} />
            <Content course={course} />
            <Total parts={course.parts} />
          </div>
        );
      })}
    </>
  );
}
export default Course;
