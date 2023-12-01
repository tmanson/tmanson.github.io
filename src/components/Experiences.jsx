import Experience from "./Experience.jsx";

Experiences.propTypes = {};
const experiences = [
  {
    start: "2022-01-01",
    end: "2023-12-31",
    description: "All those cosmonauts pull seismic, solid creatures.",
    company: "Company 1",
  },
  {
    start: "2021-01-01",
    end: "2022-12-31",
    description: "As i have trapped you, so you must praise one another.",
    company: "Company 2",
  },
  {
    start: "2020-01-01",
    end: "2021-12-31",
    description:
      "Everyone just loves the tartness of meatloaf curry mash upd with parsley.",
    company: "Company 3",
  },
];

function Experiences() {
  return (
    <div>
      <h1>Experiences</h1>
      <div className="flex flex-col gap-2">
        {experiences.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
