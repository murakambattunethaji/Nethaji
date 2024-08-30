const date = document.getElementById("date")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

const today = new Date()

console.log(today)

const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

const allmonth = ["january","february","march","april","may","june","jully","august","september","october","november","december"]

date.innerHTML =( today.getDate()<10?"0":"" )+ today.getDate()
// let test =11;
// date.innerHTML =( test<10?"0":"" )+ test;

day.innerHTML = weekday [today.getDay()]
month.innerHTML = allmonth[today.getMonth()]
year.innerHTML = today.getFullYear()

