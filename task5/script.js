let a= +prompt('Введіть змінну a з рівняння ах^2+bx+c=0');
let b= +prompt('Введіть змінну b з рівняння ах^2+bx+c=0');
let c= +prompt('Введіть змінну c з рівняння ах^2+bx+c=0');
let d=Math.pow(b,2)-4*a*c;
console.log(d);
if (d>0){
    alert('перший корінь = '+ (-b+Math.pow(d,1/2))/(2*a));
    alert('другий корінь = '+ (-b-Math.pow(d,1/2))/(2*a))
}
else if (d==0){
    alert('перший і другий корені рівні=' + (-b)/(2*a))
}
else {
    alert('дійсних коренів немає') 
}
