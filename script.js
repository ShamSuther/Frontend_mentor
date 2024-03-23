const path = "/data.json";
const chart = document.getElementById("chart");
const ctx = document.getElementById('myChart');
const DayIndex = (new Date().getDay() + 6) % 7;

const displayData = async (path) => {
    const response = await fetch(path);
    const result = await response.json();
    return result;
}

addEventListener("DOMContentLoaded", () => {
    displayData(path).then((resolve) => {
        // chart
        if (Array.isArray(resolve)) {
            resolve.forEach((stock, index) => {
                // container
                const container = document.createElement("div");
                container.setAttribute("class", "stocks");
                chart.appendChild(container);
                // child
                const child = document.createElement("div");
                child.setAttribute("id", `day-${index}`);
                child.setAttribute("class", `bar ${(DayIndex === index ? "today" : "")}`);
                child.style.height = `${stock.amount}px`;
                container.appendChild(child);
                // tooltip
                const tooltip = document.createElement("div");
                tooltip.setAttribute("class", "tooltip");
                tooltip.textContent = `$${stock.amount}`;
                child.appendChild(tooltip);
                // label
                const label = document.createElement("p");
                label.setAttribute("class", "label");
                label.textContent = stock.day;
                container.appendChild(label);
            })
        }
    })
        .catch((error) => {
            console.error(error);
        })
})