let hamSandwich = 0
let tunaSandwich = 0
let vegeSandwich = 0

while (breadCount >= 2 && hamCount >= 1) {
hamSandwich += 1
breadCount -= 2
hamCount -= 1
}
while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
tunaSandwich += 1
breadCount -= 2
tunaCount -= 1
saladCount -= 2
}

displayThisText('Number of ham sandwich(es) : ' + hamSandwich)
displayThisText('Number of tuna sandwich(es) : ' + tunaSandwich)
displayThisText('Number of vegetarian sandwich(es) : ' + vegeSandwich)
displayIngredients()
