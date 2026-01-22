import { useState } from "react";

function BranchCard({ branch }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg shadow">
      {/* Branch Header */}
      <div
        className="p-5 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <div>
          <h2 className="text-xl font-semibold text-white">
            {branch.branchName}
          </h2>
          <p className="text-sm text-gray-300">
            {branch.country}
          </p>
        </div>

        <span className="text-white font-bold text-lg">
          {open ? "−" : "+"}
        </span>
      </div>

      {/* Dropdown Content */}
      {open && (
        <div className="px-5 pb-5 border-t border-gray-700 text-sm space-y-2">
          <p className="text-gray-200">
            <strong className="text-white">Address:</strong> {branch.address}
          </p>
          <p className="text-gray-200">
            <strong className="text-white">Phone:</strong> {branch.phone}
          </p>
          <p className="text-gray-200">
            <strong className="text-white">Email:</strong> {branch.email}
          </p>

          {/* Departments */}
          <div className="mt-4">
            <h3 className="font-semibold text-white mb-2">
              Departments
            </h3>

            {branch.departments.map((dept, index) => (
              <div
                key={index}
                className="ml-4 mb-2 border-l-2 border-gray-700 pl-3"
              >
                <p className="font-medium text-white">{dept.name}</p>
                <p className="text-gray-300">
                  Role: {dept.role}
                </p>
                 <p className="text-gray-300">
                  Phone: {dept.phone}
                </p>
                <p className="text-gray-300">
                  Email: {dept.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BranchCard;