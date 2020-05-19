var list = [];
var buyPricePerGram = 9.5
var add = function() {
    var amount = parseFloat($("#paidInput").val())
    var grams = parseFloat($("#gramsInput").val())
    buyPricePerGram = parseFloat($("#gramPricecInput").val())
    console.log(amount,grams)
    if (isNaN(amount) || isNaN(grams)) {
        alert('Please enter a valid amount paid and grams sold');
        return;
    }

    var profit = amount - (grams * buyPricePerGram)
    let payment = {
        amount: amount,
        grams: grams,
        profit: profit
    }
    list.push(payment);
    $("#paidInput").val('');
    $('#gramsInput').val('');
    display();
}

var display = function() {
    console.log(list)
    var totalGrams = 0;
    var totalAmount = 0;
    var totalProfit = 0;
    for (let i = 0; i < list.length; i++) {
        totalGrams += list[i].grams
        totalAmount += list[i].amount
        totalProfit += list[i].profit
    }
    totalProfit = Math.floor(totalProfit * 100)/100
    $("#totalProfit").html('Total Profit: $' + totalProfit);
    $('#totalEarnings').html('Gross Income: $' + totalAmount);
    $('#totalGrams').html('Total Sold: ' +totalGrams +'g');
}