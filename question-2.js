const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
function scoreeee(students){
  let result = students.filter((student)=>student.score>50).map((student)=>student.score*1.10).
  reduce((acc,score)=>acc+score,0);
  // console.log(result)
  return `Total score is ${result}`
}

console.log(scoreeee(students))
