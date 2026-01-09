 //always compare 2 val of same data types 

 console.log(null > 0); // coz here JS converts null ->0 ,0>0 =>false
 console.log(null == 0);// avaScript does NOT convert null to 0 for ==
 console.log(null >= 0); // same reason as first hence , 0 >= 0 → true

 //but for undefined O/Pia always false in all the cases
console.log(undefined ==0)
console.log(undefined > 0)
console.log(undefined < 0)

// ==  (loose equality)
5 == "5"      // true, compares value only (type converted)
0 == false    // true

// ===  (strict equality)
5 === "5"     // false, compares value AND type ,no conversion
0 === false   // false