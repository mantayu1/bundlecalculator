function updateValue(value, outputId) {
    document.getElementById(outputId).value = value;
    calculateEarnings();
}

function updateRange(value, rangeId) {
    document.getElementById(rangeId).value = value;
    calculateEarnings();
}

function calculateEarnings() {
    const buyers = parseInt(document.getElementById('buyers').value);
    const amount = parseFloat(document.getElementById('amount').value);
    const signups = parseInt(document.getElementById('signups').value);

    const salesVolume = buyers * amount;
    let commissionRate = 0.1; // Default commission rate is 10%

    if (salesVolume >= 1000 && salesVolume < 10000) {
        commissionRate = 0.2; // 20% commission rate
    } else if (salesVolume >= 10000 && salesVolume < 50000) {
        commissionRate = 0.3; // 30% commission rate
    } else if (salesVolume >= 50000 && salesVolume < 100000) {
        commissionRate = 0.4; // 40% commission rate
    } else if (salesVolume >= 100000) {
        commissionRate = 0.5; // 50% commission rate
    }

    // Bake's transaction fee is 1% of the total sales volume
    const platformFee = salesVolume * 0.01;
    const commission = platformFee * commissionRate;
    const bonus = signups * 5;
    const total = commission + bonus;

    document.getElementById('commission').innerText = `$${commission.toFixed(2)}`;
    document.getElementById('bonus').innerText = `$${bonus.toFixed(2)}`;
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', calculateEarnings);
