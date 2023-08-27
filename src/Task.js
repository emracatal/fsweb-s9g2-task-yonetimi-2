import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const diff = differenceInDays(new Date(taskObj.deadline), new Date());

  const humanReadableDeadline = formatDistanceToNow(
    new Date(taskObj.deadline),
    { addSuffix: true, locale: tr }
  );
  console.log(diff);
  return (
    <div className="task py-6 px-6 bg-white border rounded-md text-sm mt-4 shadow-md">
      <h3 className="text-lg leading-6 text-[#c8781a]">{taskObj.title}</h3>
      <div className="deadline">
        {/* son teslim:{" "}
        <span style={{ backgroundColor: diff <= 3 ? "#ffd9d4" : "lightgray" }}> */}
        <span className={diff <= 3 && "bg-[#ffd9d4]"}>
          {humanReadableDeadline}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block text-sm py-1 px-3 border border-neutral-300 mr-1 mb-1 rounded-full"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
