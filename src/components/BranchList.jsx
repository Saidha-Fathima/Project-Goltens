import BranchCard from "./BranchCard";

function BranchList({ branches }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-6 space-y-4">
      {branches.map((branch, index) => (
        <BranchCard key={index} branch={branch} />
      ))}
    </div>
  );
}

export default BranchList;
