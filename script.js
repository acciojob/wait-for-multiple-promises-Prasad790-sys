//your JS code here. If required.
function createRandomPromise(promiseName) {
    const timeToResolve = Math.random() * 2 + 1; // Random time betwe
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: promiseName, time: timeToResolve });
        }, timeToResolve * 1000);
    });
}

const promises = [
    createRandomPromise('Promise 1'),
    createRandomPromise('Promise 2'),
    createRandomPromise('Promise 3')
];

const loadingRow = document.getElementById('loading');
const outputTable = document.getElementById('output');

// Start waiting for all promises
Promise.all(promises).then(results => {
    // Remove loading row
    loading.parentElement.removeChild(loading);
    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${result.name}</td><td>${result.time.toFixed(3)}</td>`;
        outputTable.appendChild(row);
    });
    const totalTime = results.reduce((sum, result) => sum + result.time, 0);
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
    outputTable.appendChild(totalRow);
});