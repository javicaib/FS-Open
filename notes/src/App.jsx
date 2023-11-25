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
function App() {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <>
      <div>
        <Header course={course} />
        {parts.map((part) => {
          return <Part part={part} key={part.name} />;
        })}
        <Total parts={parts} />
      </div>
    </>
  );
}

export default App;
