import { useState } from "react";
import SalaryCalculator from "../SalaryCalculator/SalaryCalculator";

const FamilyMemberTabs = () => {
  const [windowCount, setWindowCount] = useState(1);

  const handleAddWindow = () => {
    setWindowCount(windowCount + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-1 w-45">
        <div className="w-42 p-1 ml-1">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddWindow}>+</button>
          {Array.from({ length: windowCount }).map((_, index) => (
            <>  
            <div key={index} className="flex-col items-center justify-center">
              <SalaryCalculator />
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FamilyMemberTabs;
