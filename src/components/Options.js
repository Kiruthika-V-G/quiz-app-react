import React from "react";
import "./Options.css";

function Options({options,selectedOption,onOptionChange}){
    return(
        <>
            {options.map((op, index) => (
                    <div key={index} className="optionStyle">
                        <input
                            type="radio"
                            name="option"
                            value={op}
                            checked={selectedOption === op}
                            onChange={onOptionChange}
                            
                        />
                        <label className="optionLabel">{op}</label>
                    </div>
            ))}
        </>
    )
}

export default Options;

