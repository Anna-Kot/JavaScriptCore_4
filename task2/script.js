let n=10;
let a= +prompt('Введіть перше число');
let b= +prompt('Введіть друге число');
if (Math.abs(a-n) > Math.abs(b-n)){
    alert('найближче число='+ b)
}
else if (Math.abs(a-n) == Math.abs(b-n)){
    alert('ці числа знаходяться на однаковій відстані')
}
else {
    alert('найближче число='+ a)
}

