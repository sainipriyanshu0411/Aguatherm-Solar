const billRange = document.getElementById("billRange");

const billValue = document.getElementById("billValue");
const systemSize = document.getElementById("systemSize");
const systemCost = document.getElementById("systemCost");
const subsidy = document.getElementById("subsidy");
const investment = document.getElementById("investment");
const annualSavings = document.getElementById("annualSavings");
const lifetimeSavings = document.getElementById("lifetimeSavings");

function formatLakh(value) {
    return `₹${(value / 100000).toFixed(2)} Lakhs`;
}

function updateCalculator() {

    const bill = parseInt(billRange.value);

    let size;
    let cost;
    let subsidyAmount;
    

    /* ----------------------------------
       SYSTEM RECOMMENDATION
    ---------------------------------- */
    if (bill <= 1500) {

    size = "1";
    cost = 70000;
    subsidyAmount = 30000;

} else if (bill <= 2000) {

    size = "2 ";
    cost = 140000;
    subsidyAmount = 60000;

} else if (bill <= 4000) {

    size = "3";
    cost = 200000;
    subsidyAmount = 78000;

} else if (bill <= 6000) {

    size = "4";
    cost = 250000;
    subsidyAmount = 78000;

} else if (bill <= 7000) {

    size = "5";
    cost = 300000;
    subsidyAmount = 78000;

} else if (bill <= 8500) {

    size = "6";
    cost = 350000;
    subsidyAmount = 78000;

} else if (bill <= 10000) {

    size = "7";
    cost = 380000;
    subsidyAmount = 78000;

} else {

    size = "10";
    cost = 550000;
    subsidyAmount = 78000;
}
    

    /* ----------------------------------
       INVESTMENT
    ---------------------------------- */

    const finalInvestment =
        cost - subsidyAmount;

    /* ----------------------------------
       SAVINGS
    ---------------------------------- */

    const yearlySavings =
        bill * 12 * 0.90;

    const twentyFiveYearSavings =
        yearlySavings * 25;

    /* ----------------------------------
       PAYBACK
    ---------------------------------- */

    const paybackYears =
        finalInvestment / yearlySavings;

    /* ----------------------------------
       UI UPDATE
    ---------------------------------- */

    billValue.textContent =
        `₹${bill.toLocaleString()}`;

    systemSize.textContent =
        `${size} kW`;

    systemCost.textContent =
        formatLakh(cost);

    subsidy.textContent =
        `₹${subsidyAmount.toLocaleString()}`;

    investment.textContent =
        formatLakh(finalInvestment);

    annualSavings.textContent =
        `₹${yearlySavings.toLocaleString()}`;

    lifetimeSavings.textContent =
        `₹${(twentyFiveYearSavings / 100000).toFixed(1)} Lakhs`;

    document.getElementById("paybackPeriod").textContent =
        `${paybackYears.toFixed(1)} Years`;
}

billRange.addEventListener(
    "input",
    updateCalculator
);

updateCalculator();


