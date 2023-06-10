# Number Base Conversion
Last updated 10 June 2023.

<br>


### Set up.
1. To use the number base conversion tool, you must first download all files from this repository by clicking the green `Code` button at the top and selecting "Download ZIP".
2. On your local machine, extract the contents of the .zip file.
3. Open the system's terminal (or command prompt) application and navigate to the directory containing the extracted folder.
4. Within the main directory of the folder, install required node modules by typing the following in the terminal:
```bash
> npm install
```
5. To actually run and access the tool on a local web server, type the following into the terminal after the node modules have been installed:
```bash
> npm start
```

<br>


### Behind the math.
#### Decimal
> A **dec·i·mal** refers to the set of infinite combinations using the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. Decimals have a log base of 10.
* 120 is a decimal
* 0 is also a decimal
* 0.23092 is actually also a decimal
In JavaScript, we can convert any decimal to binary using the `toString(x)` function, replacing the `x` with 2 to denote it's log base.
```JavaScript
let decimal = 4;
let binary = decimal.toString(2);
console.log(binary) // 100
```

<br>

#### Binary
> A **bi·na·ry** number refers to a number's representation using only 0's and 1's. Binary numbers have a log base of 2.
* 100 is the binary representation for 4
* 1 is the binary representation for 1
* 101011001 is the binary representation for 345
We can convert any binary number into a decimal using JavaScript's `parseInt(x, y)` function, replacing the `x` with the number to be converted and the `y` with 2 to denote the log base number `x` is currently in.
```JavaScript
let binary = 100;
let decimal = parseInt(binary, 2);
console.log(decimal) // 4
```

We can also convert any binary number into a hexadecimal still using a combination of JavaScript's `parseInt(x, y)` and `toString(z)` functions, replacing the `z` with 16 to denote it's log base.
```JavaScript
let binary = 11011;
let hex = parseInt(binary, 2).toString(16);
console.log(hex) // 1B
```

<br>


#### Hexadecimal
> A **hex·a·dec·i·mal** number is an alphanumeric combinations of digits 0 through 9 and letters A through F (case insensitive). Hexadecimal numbers have a log base of 16.
* FFF is a hexadecimal number
* 4AB9EF is a hexadecimal number
* 222222 is also a hexadecimal number

