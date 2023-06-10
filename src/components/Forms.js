import React, { Component } from "react";
import "../css/Forms.css"

class Forms extends Component {

    render() {
        let binary_input = document.getElementsByName("name_binary"), 
        hex_input = document.getElementsByName("name_hex"), 
        decimal_input = document.getElementsByName("name_decimal");

        const decimalSubmit = (e) => {
            e.preventDefault();
            let decimal = e.target.name_decimal.value;    // (1) get value from "Decimal" input field
            decimal = Number(decimal);  // (2) convert value from String to Number type

            // (3) converting numbers
            binary_input[0].value = decimal.toString(2);    // (*) decimal to binary
            hex_input[0].value = decimal.toString(16);  // (*) decimal to hex
        }

        const binarySubmit = (e) => {
            e.preventDefault();
            let binary = e.target.name_binary.value;    // (1) get value from "Binary" input field
            binary = Number(binary);  // (2) convert value from String to Number type

            // (3) converting numbers
            decimal_input[0].value = parseInt(binary, 2);    // (*) binary to decimal
            hex_input[0].value = parseInt(binary, 2).toString(16);  // (*) binary to hex
        }

        const hexSubmit = (e) => {
            e.preventDefault();
            let hex = e.target.name_hex.value;    // (1) get value from "Hexadecimal" input field
    
            // (2) converting numbers
            decimal_input[0].value = parseInt(hex, 16);    // (*) hex to decimal
            binary_input[0].value = parseInt(hex, 16).toString(2);    // (*) hex to decimal
        }

        return (
            <div>
                <form onSubmit={decimalSubmit} className="field has-addons">
                    <div className="control is-expanded">
                        <input name="name_decimal" className="input" type="text" placeholder="Enter a decimal number"/>
                        <p className="help">Decimal</p>
                    </div>
                    <div className="control">
                        <button className="button is-info convert-dec">Convert</button>
                    </div>
                </form>

                <form onSubmit={binarySubmit} className="field has-addons">
                    <div className="control is-expanded">
                        <input name="name_binary" className="input" type="text" placeholder="Enter a binary number"/>
                        <p className="help">Binary</p>
                    </div>
                    <div className="control">
                        <button className="button is-info convert-bin">Convert</button>
                    </div>
                </form>

                <form onSubmit={hexSubmit} className="field has-addons">
                    <div className="control is-expanded">
                        <input name="name_hex" className="input" type="text" placeholder="Enter a hexadecimal number"/>
                        <p className="help">Hexadecimal</p>
                    </div>
                    <div className="control">
                        <button className="button is-info convert-hex">Convert</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Forms;