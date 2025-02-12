attendanceRegistor = ["Aditya", "Bhanu", "Chahal", "Dev"]
console.log(`Our classroom Student names are - ${attendanceRegistor}`)
// One more student join the classroom
attendanceRegistor.push("Abhi")
console.log(`Our classroom Student names are - ${attendanceRegistor}`)
//Teacher notes the new student name atlast,while she as to write 
// students name alphabetically. Now she has to remove abhi name from Last.
attendanceRegistor.pop()
console.log(`Our classroom Student names are - ${attendanceRegistor}`)
// Now teacher has to register "Abhi" in the beginning of the page.
attendanceRegistor.unshift("Abhi")
console.log(`Our classroom Student names are - ${attendanceRegistor}`)
// Futher teacher find Abhi is not from her section. So, she removes Abhi again
attendanceRegistor.shift()
console.log(`Our classroom Student names are - ${attendanceRegistor}`)
//Back Benchers are talking, reverse the sitting arrangement
attendanceRegistor.reverse()
console.log(`Our classroom Student names are - ${attendanceRegistor}`)

