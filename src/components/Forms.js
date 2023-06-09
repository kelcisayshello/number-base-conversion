import React, { Component } from "react";

class Forms extends Component {

    render() {
        let input_dec = document.getElementById("decimalID");

        function foo() {
            console.log(input_dec.value)
        }

        // function dectobin(x) {
        //     let bin = 0;
        //     let rem, i = 1, step = 1;
        //     while (x != 0) {
        //         rem = x % 2;
        //         // console.log(
        //         //     `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x / 2)}`
        //         // );
        //         x = parseInt(x / 2);
        //         bin = bin + rem * i;
        //         i = i * 10;
        //     }
        //     console.log(`Binary: ${bin}`);
        // }

        // take input
        // let number = prompt('Enter a decimal number: ');

        // convertToBinary(number);

        // function bar() {
        //     console.log("bar")
        // }

        return (
            <div>
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input id="decimalID" class="input" type="text" placeholder="Enter a decimal number" />
                        <p class="help">Decimal</p>
                    </div>
                    <div class="control">
                        <button class="button is-info" onClick={foo}>
                            Convert
                        </button>
                    </div>
                </div>

                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input id="binaryID" class="input" type="text" placeholder="Enter a binary number" />
                        <p class="help">Binary</p>
                    </div>
                    <div class="control">
                        <button class="button is-info">
                            Convert
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Forms;