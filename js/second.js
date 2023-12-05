var ul=document.getElementById('list');

var t=document.getElementById('title');

var val = sessionStorage.getItem('val');
var f= sessionStorage.getItem('f');

if(val=='list1'){
  t.innerHTML="Algebra";
}
if(val=='list2'){
  t.innerHTML="Geometry";
}
if(val=='list3'){
  t.innerHTML="Analytical Geometry";
}

if(val=='list4'){
  t.innerHTML="Derivative";
}
if(val=='list5'){
  t.innerHTML="Integration";
}
if(val=='list6'){
  t.innerHTML="Trigonometry";
}

if(val=='list7'){
  t.innerHTML="Laplace";
}
if(val=='list8'){
  t.innerHTML="Fourier";
}
if(val=='list9'){
  t.innerHTML="Series";
}

if(val=='list10'){
  t.innerHTML="Numerical methods";
}
if(val=='list11'){
  t.innerHTML="Vector Calculus";
}
if(val=='list12'){
  t.innerHTML="Probability";
}
if(val=='list13'){
  t.innerHTML="Beta Gamma";
}
if(val=='list14'){
  t.innerHTML="Z-Transform";
}

var list1={ "Factoring Formulas":1,"Product Formulas":2, "Roots Formulas":3, "Powers Formulas":4, "Logarithmic Formulas":5, "Useful  Equation":6,"Complex Numbers":7,"Binomial Theorem":8 };

var list2={ "Isosceles Triangle":'01',"Equalateral Triangle":'02', "Square":'03', "Rectangle":'04', "Rhombus":'05', "Parallelogram":'06',"Trapezoid":'07',"Cone":'08',"Sphere":'09',"Cylinder":'10' };
var list3={"2-D Coordinate System":1,"Circle":2,"Hyperbola":3,"Ellipse":4,"Parabola":5};

var list4={"Limits Formula":1,
"Properties of Derivative":2,
"General Derivative Formulas":3,
"Trigonometric Functions":4,
"Inverse Trigonometric Functions":5,
"Hyperbolic Functions":6,
"Inverse Hyperbolic Functions":7
};

var list5={
  "Properties of Integration":1,
"Integration of Rational Functions":2,
"Integration of Trigonometric Functions":3,
"Integration of Hyperbolic Functions":4,
"Integration of Exponential and logarithmic Functions":5
};

var list6={
  "Trigonometric Ratios":1,
"Trigonometric Identities":2,
"Quadrant Rules for Finding Reference Angle":3,
"Table of Angle":4,
"Power Reduction Formulas":5,
"Sine rule and Cosine rule":6,
"Allied Angle Table":7,
"Degree Measure and Radian Measure":8
};

var list7={
  "Properties of Laplace Transformation":1,
"Functions of Laplace Transformation":2
};

var list8={
  "Fourier Transform Operations":1,
"Table of Fourier Transform":2,
"Fourier Series":3
};

var list9={
  "Arithmetic Series":1,
"Geometric Series":2,
"Finite Series":3,
"Binomial Series":4,
"Powers Series Expansions":5
};

var list10={
  "Langrange, Newton's Interpretation":1,
"Newton's Forward/Backward Difference":2,
"Numerical Integration":3,
"Roots of Equation":4
};

var list11={
  "Vector Identities":1
};

var list12={
  "Basic":1,
"Expectation":2,
"Variance":3,
"Distributions":4,
"Permutations":5,
"Combinations":6
};

var list13={
  "Beta Functions":1,
"Gamma Functions":2,
"Beta-Gamma Relation":3
};

var list14={
  "Properties of z-transform":1,
"Common Pairs":2
};

var v;

if(val=='list1'){
  v=list1;
}
if(val=='list2'){
  v=list2;
}
if(val=='list3'){
  v=list3;
}

if(val=='list4'){
  v=list4;
}
if(val=='list5'){
  v=list5;
}
if(val=='list6'){
  v=list6;
}
if(val=='list7'){
  v=list7;
}
if(val=='list8'){
  v=list8;
}
if(val=='list9'){
  v=list9;
}
if(val=='list10'){
  v=list10;
}
if(val=='list11'){
  v=list11;
}
if(val=='list12'){
  v=list12;
}
if(val=='list13'){
  v=list13;
}
if(val=='list14'){
  v=list14;
}

for(let i in v){
ul.innerHTML+=`
<a href="assets/${f}${v[i]}.html"><li>${i}</li></a><br>`;
}
