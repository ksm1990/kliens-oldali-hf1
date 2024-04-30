import React, { useState, useEffect } from "react";
import InputField from "./components/inputField";
import Checkbox from "./components/checkBox";
import FirstMarriageTaxBenefit from "./components/firstMarriageTaxBenefit";
import SwitchWithCounter from "./components/switchWithCounter";

const SalaryCalculator = () => {
  const [netSalary, setNetSalary] = useState(0);
  const [grossSalary, setGrossSalary] = useState(0);
  const [name, setName] = useState("");
  const [familyTaxBenefit, setFamilyTaxBenefit] = useState(false);
  const [under25TaxBenefit, setUnder25TaxBenefit] = useState(false);
  const [personalTaxBenefit, setPersonalTaxBenefit] = useState(false);
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isMarriageSwitchOn, setIsMarriageSwitchOn] = useState(false);
  const [date, setDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFamilyTaxBenefit = (isSwitchOn) => {
    setFamilyTaxBenefit(isSwitchOn);
  };

  const calculateFamilyTaxBenefit = () => {
    let amount = 0;
    let amount_per_children = 0;
    if (isSwitchOn) {
      switch (parseInt(counterB)) {
        case 1:
          amount_per_children = 10000;
          break;
        case 2:
          amount_per_children = 20000;
          break;
        case 3:
          amount_per_children = 33000;
          break;
        default:
          amount_per_children = 0;
          break;
      }
      amount = parseInt(counterA) * amount_per_children;
    }
    return amount;
  };

  const calculateUnder25TaxBenefitValue = () => {
    let under25TaxBenefitValue = 0;
    if (under25TaxBenefit) {
      if (grossSalary < 499952){
        under25TaxBenefitValue = grossSalary*(0.15)
      } else {
        under25TaxBenefitValue = 499952*0.15;
      }
    }
    return under25TaxBenefitValue;
  }

  const calculateFirstMarriageTaxBenefit = () => {
    let firstMarriageTaxBenefitValue = 0;
    if (isMarriageSwitchOn){
      if (errorMessage.length == 0){
        firstMarriageTaxBenefitValue = 5000;
      } else {
        firstMarriageTaxBenefitValue = 0;
      }
    }
    return firstMarriageTaxBenefitValue;
  }

  const handleFirstMarriageTaxBenefit = () => {
    setIsMarriageSwitchOn(!isMarriageSwitchOn);
  };

  const handleBelow25TaxBenefit = () => {
    setUnder25TaxBenefit(!under25TaxBenefit);
  };

  const handlePersonalTaxBenefit = () => {
    setPersonalTaxBenefit(!personalTaxBenefit);
  };

const handleSalaryChange = (e) => {
  const salary = e.target.value;
  setGrossSalary(salary);
};

useEffect(() => {
  const familyBenefitAmount = calculateFamilyTaxBenefit();
  const under25TaxBenefitValue = calculateUnder25TaxBenefitValue();
  const firstMarriageTaxBenefitValue = calculateFirstMarriageTaxBenefit();
  // const personalTaxBenefitValue = calculatePersonalBenefit(); feladatkiírás alapján nem jár érte pont elvileg
  setNetSalary(grossSalary * 0.665 + familyBenefitAmount + under25TaxBenefitValue + firstMarriageTaxBenefitValue);
}, [grossSalary, counterA, counterB, isSwitchOn, under25TaxBenefit, personalTaxBenefit, isMarriageSwitchOn, calculateFamilyTaxBenefit]);

  return (
    <div className="text-xl bg-gray-400 w-45 rounded-xl p-5 m-1 border-black border-4">
      <h1 className="text-2xl font-bold m-2 p-2 flex items-center justify-center">
        SalaryCalculator
      </h1>
      <InputField
        label="Name of family member:"
        value={name}
        onChange={handleNameChange}
      />
      <InputField
        label="Gross Salary / month [HUF]:"
        value={grossSalary}
        onChange={handleSalaryChange}
      />
      <div className="content-center object-center">
        <input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" type="range" name="" id="" value={grossSalary} onChange={handleSalaryChange} min={1000} max={3000000}/>
      </div>
      <div className="flex items-left flex-col justify-center">
        <Checkbox
          id="personalTaxBenefit"
          label="Personal Tax Benefit"
          checked={personalTaxBenefit}
          onChange={handlePersonalTaxBenefit}
        />
        <Checkbox
          id="under25TaxBenefit"
          label="Under 25 Tax Benefit"
          checked={under25TaxBenefit}
          onChange={handleBelow25TaxBenefit}
        />
        <SwitchWithCounter
          counterA={counterA}
          counterB={counterB}
          setCounterA={setCounterA}
          setCounterB={setCounterB}
          isSwitchOn={isSwitchOn}
          setIsSwitchOn={setIsSwitchOn}
          id="familyTaxBenefit"
          label="Family Tax Benefit"
          checked={familyTaxBenefit}
          onChange={handleSalaryChange}
        />
        <FirstMarriageTaxBenefit
          onChange={handleFirstMarriageTaxBenefit}
          isMarriageSwitchOn={isMarriageSwitchOn}
          setIsMarriageSwitchOn={setIsMarriageSwitchOn}
          date={date}
          setDate={setDate}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </div>
      <div className="b-3 m-3 flex flex-col font-bold items-center">
        Net Salary / month:
      </div>
      <div className="font-bold flex items-center justify-center">
        {parseInt(netSalary).toLocaleString("en-EU")} HUF
      </div>
    </div>
  );
};

export default SalaryCalculator;