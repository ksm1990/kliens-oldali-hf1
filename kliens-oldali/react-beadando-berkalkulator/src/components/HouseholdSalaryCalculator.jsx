import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

const HouseholdSalaryCalculator = () => {
  return (
    <>
      <header>
        <FamilyMemberTabs />
      </header>
      <main>
        <div className="flex flex-col items-center justify-center">       
          <HouseholdSummary />
        </div>
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
