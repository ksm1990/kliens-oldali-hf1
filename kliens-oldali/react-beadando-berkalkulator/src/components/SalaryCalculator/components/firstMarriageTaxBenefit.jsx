import React, { useState } from 'react';

const FirstMarriageTaxBenefit = ({isMarriageSwitchOn, setIsMarriageSwitchOn, date, setDate, errorMessage, setErrorMessage}) => {

  const handleToggleSwitch = () => {
    setIsMarriageSwitchOn(!isMarriageSwitchOn);
    if (!isMarriageSwitchOn) {
      setDate('');
      setErrorMessage('');
    }
  };

  const handleDateChange = (e) => {
    const inputDate = new Date(e.target.value);
    const currentDate = new Date();
    const differenceInYears = currentDate.getFullYear() - inputDate.getFullYear();

    if (differenceInYears > 2) {
      setErrorMessage('Not eligible');
    } else {
      setErrorMessage('');
    }

    setDate(e.target.value);
  };

  return (
    <div className="p-1 m-1 rounded w-80">
      <label>
        <input
          class="p-5 m-3"
          type="checkbox"
          checked={isMarriageSwitchOn}
          onChange={handleToggleSwitch}
        />
        First Marriage Tax Benefit
      </label>
      {isMarriageSwitchOn && (
        <div className='flex flex-col justify-center text-xs border-black bg-gray-600 rounded-xl border-2 p-2 m-2 transition-transform'>
          <label className='font-bold' htmlFor="date">Please enter date of the wedding:</label>
          <input
            className='p-1 m-1 rounded text-center flex flex-col items-center justify-center'
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
          {errorMessage && <p class="text-rose-500 text-center">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default FirstMarriageTaxBenefit;