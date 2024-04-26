
var students = []
function addStudent(){
    const formData = {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        pursuing: "",
        cpi: 0,
        experience: 0,
        website: "",
        language: []
    };
    for(a in formData){
        if(a !== "pursuing" && a !== "language"){
            formData[a] = document.getElementById(a).value
        }else if(a === "pursuing"){
            var allRadioBtns = document.querySelectorAll('input[type="radio"]');
            for(i=0;i<allRadioBtns.length;i++){
                if(allRadioBtns[i].checked === true){
                    formData[a] = allRadioBtns[i].value
                }
            }
        }else if(a === "language"){
            var allCheckBoxs = document.querySelectorAll('input[type="checkbox"]');
            for(i=0;i<allCheckBoxs.length;i++){
                if(allCheckBoxs[i].checked === true){
                    formData[a].push(allCheckBoxs[i].value)
                }
            }

        }
    }

    students.push(formData)

    displayUsers()
}

function displayUsers(){
    document.querySelector("tbody").innerHTML = "";
    for(i=0;i<students.length;i++){
        var stdObj = students[i];
        var myTr = document.createElement("tr")
        for(a in stdObj){
            var myTd = document.createElement("td");
            myTd.innerHTML=stdObj[a]
            myTr.appendChild(myTd)
        }
        document.querySelector("tbody").appendChild(myTr)
    }
}