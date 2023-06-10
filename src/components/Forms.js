import React, { Component } from "react";


class Forms extends Component {

    render() {

        const decimalSubmit = (e) => {
            e.preventDefault();
            let decimal = e.target.name_decimal.value;    // (1) get value from "Decimal" input field
            decimal = Number(decimal);  // (2) convert value from String to Number type

            let binary_input = document.getElementsByName("name_binary");   // (3) get access to "Binary" text field
            binary_input[0].value = decimal.toString(2);    // (4) convert number to binary and set "Binary" input field value
        }

        const binarySubmit = (e) => {
            e.preventDefault();
            let binary = e.target.name_binary.value;    // (1) get value from "Binary" input field
            binary = Number(binary);  // (2) convert value from String to Number type

            let decimal_input = document.getElementsByName("name_decimal");   // (3) get access to "Decimal" text field
            decimal_input[0].value = parseInt(binary, 2);    // (4) convert number to decimal and set "Decimal" input field value
        }

        return (
            <div>
                <form onSubmit={decimalSubmit} className="field has-addons">
                    <div className="control is-expanded">
                        <input name="name_decimal" className="input" type="text" placeholder="Enter a decimal number"/>
                        <p className="help">Decimal</p>
                    </div>
                    <div className="control">
                        <button className="button is-info">Convert</button>
                    </div>
                </form>

                <form onSubmit={binarySubmit} className="field has-addons">
                    <div className="control is-expanded">
                        <input name="name_binary" className="input" type="text" placeholder="Enter a binary number"/>
                        <p className="help">Binary</p>
                    </div>
                    <div className="control">
                        <button className="button is-info">Convert</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Forms;