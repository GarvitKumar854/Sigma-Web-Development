alert("Factorial Calculator !");
        const n = parseInt(prompt("Enter a Number: "), 10); // Convert input to integer
        let fact = 1;

        // By For Loop
        if (n < 1) {
            alert("Invalid Number !");
        } else {
            for (let i = 1; i <= n; i++) {
                fact *= i;
            }
            alert("Factorial using for loop is: " + fact);
        }

        // By reduce Method
        function factorial(number) {
            if (number === 0) return 1; // Special case for 0 factorial
            let arr = Array.from(Array(number + 1).keys());
            let c = arr.slice(1).reduce((a, b) => {
                return a * b;
            }, 1); // Provide initial value of 1
            return c;
        }

        if (n >= 1) {
            let reduceFact = factorial(n);
            alert("Factorial using reduce method is: " + reduceFact);
        }