import React, { useState } from 'react';

const SwitchWithCounters = ({isSwitchOn, setIsSwitchOn, counterA, counterB, setCounterA, setCounterB}) => {

  const handleToggleSwitch = () => {
    setIsSwitchOn((prevIsSwitchOn) => !prevIsSwitchOn);
  };

  const handleIncreaseCounterA = () => {
    setCounterA((prevCounterA) => Math.min(prevCounterA + 1, 3));
  };

  const handleDecreaseCounterA = () => {
    setCounterA((prevCounterA) => Math.max(prevCounterA - 1, 0));
  };

  const handleIncreaseCounterB = () => {
    setCounterB((prevCounterB) => Math.min(prevCounterB + 1, counterA));
  };

  const handleDecreaseCounterB = () => {
    setCounterB((prevCounterB) => Math.max(prevCounterB - 1, 0));
  };

  return (
    <div className="p-1 m-1 rounded w-80">
      <label>
      <input
        class="p-5 m-3"
        type="checkbox"
        checked={isSwitchOn}
        onChange={handleToggleSwitch}
      />
        Family Tax Benefit
      </label>
      {isSwitchOn && (
        <div className='text-xs font-bold content-center border-black bg-gray-600 rounded-xl border-2 p-2 m-2 transition-transform'>
          <div>
            Number of family members:
            <button onClick={handleIncreaseCounterA} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 m-3 rounded">+</button>
            {counterA}
            <button onClick={handleDecreaseCounterA} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 m-3 rounded">-</button>
          </div>
          <div>
            Number of supported members:
            <button onClick={handleIncreaseCounterB} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 m-3 rounded">+</button>
            {counterB}
            <button onClick={handleDecreaseCounterB} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 m-3 rounded">-</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwitchWithCounters;
