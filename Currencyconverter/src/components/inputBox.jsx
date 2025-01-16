import React from "react";

function inputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input 
        type="number"
        className="w-full outline-none bg-transparent scroll-py-1.5"
        placeholder="Amount"
        disabled={amountDisabled}
        value={amount}
        onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
         />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select 
            name="" 
            id=""
            >
                
            </select>
      </div>
    </div>
  );
}

export default inputBox;
