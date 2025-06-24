export function Skill({ skill }) {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl bg-red-300">
      <img src={skill.source} className="size-9"></img>
      <p>{skill.name}</p>
    </div>
  );
}