function maior() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var num3 = parseFloat(document.getElementById('num3').value);

  if (num1 > num2 && num1 > num3) {
    alert(`O primeiro valor ${num1} é o maior`);
  } else if (num2 > num1 && num2 > num3) {
    alert(`O segundo valor ${num2} é o maior`);
  } else {
    alert(`O terceiro valor ${num3} é o maior`);
  }
}
