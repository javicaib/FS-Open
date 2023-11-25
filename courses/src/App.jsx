import "./App.css";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Part = ({ part }) => {
  const { name, exercises } = part;

  return (
    <p>
      {name} {exercises}
    </p>
  );
};
const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);
  return <p>Number of exercises {total}</p>;
};
const Course = (props) => {
  const { course } = props
  return (<>

    {course.parts.map((part) => {
      return <Part part={part} key={part.name} />;
    })}
  </>)
}
function App() {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  return (
    <>
      <div>
        <Header course={course.name} />
        <Course course={course} />
        <Total parts={course.parts} />
      </div>
    </>
  );
}

export default App;
