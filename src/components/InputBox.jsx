import React from "react";

const InputBox = ({ label, amount, currencyOptions, onCurrencyChange, selectCurrency, onAmountChange, amountDisable }) => {
    return (
      <div className="flex flex-col">
        <select
          className="block w-full p-2 mb-2 border rounded"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          className="block w-full p-2 border rounded"
          disabled={amountDisable}
        />
      </div>
    );
  };
  
  export default InputBox;