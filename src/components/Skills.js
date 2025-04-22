import React from "react";

function Skills() {
  return (
    <div className="bg-black mt-8 pb-16">
      {/* Heading */}
      <div className="flex justify-content-center ">
        <div className="font-bold text-3xl text-white">Skills</div>
        <div className="border-t border-gray-700 w-72 ml-6 mt-3" />
      </div>

      {/* Skill Boxes */}
      <div className="flex flex-wrap justify-center gap-8 mt-8 px-16">

        {/* C++ */}
        <Skill
          label="C++"
          fill="#00599C"
          svg={<text x="1" y="18" fontSize="16" fontWeight="bold" fill="#00599C">C++</text>}
        />

        {/* C */}
        <Skill
          label="C"
          fill="#00599C"
          svg={<text x="6" y="18" fontSize="16" fontWeight="bold" fill="#00599C">C</text>}
        />

        {/* JavaScript */}
        <Skill
          label="JavaScript"
          fill="#F7DF1E"
          svg={<text x="0" y="18" fontSize="16" fontWeight="bold" fill="#F7DF1E">JS</text>}
        />

        {/* CSS */}
        <Skill
          label="CSS"
          fill="#2965f1"
          svg={<text x="0" y="18" fontSize="16" fontWeight="bold" fill="#2965f1">CSS</text>}
        />

        {/* React */}
        <Skill
          label="React"
          svg={
            <>
              <circle cx="12" cy="12" r="2" fill="#61DAFB" />
              <g stroke="#61DAFB">
                <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(120 12 12)" />
                <ellipse cx="12" cy="12" rx="11" ry="4" />
              </g>
            </>
          }
        />

        {/* Express.js */}
        <Skill
          label="Express.js"
          svg={<text x="0" y="18" fontSize="16" fontWeight="bold" fill="#000000">EX</text>}
          viewBox="0 0 100 24"
        />

        {/* Bootstrap */}
        <Skill
          label="Bootstrap"
          fill="#7952B3"
          svg={
            <path
              fill="#7952B3"
              d="M292.3 311.8c0-30.3-23.5-43.7-64.1-43.7H180v87.5h49.3c41.9 0 63-14.5 63-43.8zM272.7 206.4c0-28.4-20.5-40.6-55.8-40.6H180v81.1h36.9c37.2 0 55.8-13 55.8-40.5zM0 32C0 14.3 14.3 0 32 0h384c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V32zm198.6 336c88.3 0 134.6-36.7 134.6-98.3 0-46.5-33.6-77.2-89.2-81.5v-1.5c41.1-5 68.3-30 68.3-66.3C312.3 78.4 272.3 48 212 48H84v320h114.6z"
            />
          }
          viewBox="0 0 448 512"
        />

        {/* VS Code */}
        <Skill
          label="VS Code"
          fill="#007ACC"
          svg={
            <path
              d="M25.6 5.2L12.6 14.3 7.7 10.5 5.3 12.2l4.7 4.4-4.7 4.4 2.4 1.7 4.9-3.8 13 9.2V5.2z"
              fill="#007ACC"
            />
          }
          viewBox="0 0 32 32"
        />

        {/* Postman */}
        <Skill
          label="Postman"
          fill="#FF6C37"
          svg={
            <>
              <circle cx="24" cy="24" r="20" fill="#FF6C37" />
              <path d="M14 25h20v2H14z" fill="white" />
            </>
          }
          viewBox="0 0 48 48"
        />

        {/* MongoDB */}
        <Skill
          label="MongoDB"
          fill="#47A248"
          svg={
            <path
              d="M192 0c-10.7 0-15.4 96-15.4 96s-48 37.5-61.3 111.2C98 285 160 320 192 448c32-128 94-163 76.7-240.8C239.4 133.5 192 96 192 96S202.7 0 192 0z"
              fill="#47A248"
            />
          }
          viewBox="0 0 384 512"
        />

        {/* SQL (PostgreSQL visual) */}
        <Skill
          label="SQL"
          svg={
            <>
              <rect width="64" height="64" rx="10" fill="#336791" />
              <text x="10" y="40" fontSize="20" fill="white" fontWeight="bold">SQL</text>
            </>
          }
          viewBox="0 0 64 64"
        />

        {/* Mongoose */}
        <Skill
          label="Mongoose"
          svg={
            <>
              <rect width="64" height="64" rx="10" fill="#800000" />
              <text x="6" y="40" fontSize="12" fill="white" fontWeight="bold">Mongoose</text>
            </>
          }
          viewBox="0 0 64 64"
        />
      </div>
    </div>
  );
}

// Reusable Skill component
const Skill = ({ label, svg, viewBox = "0 0 24 24", fill = "#FFFFFF" }) => (
  <div className="border-2 border-sky-400 bg-slate-800 rounded-lg h-16 w-72 flex items-center justify-center gap-3 text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width="30"
      height="30"
    >
      {svg}
    </svg>
    <span className="text-lg font-semibold">{label}</span>
  </div>
);

export default Skills;
