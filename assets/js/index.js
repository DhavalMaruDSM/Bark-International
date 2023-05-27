var his = document.querySelector(".history");
var mission = document.querySelector(".mission");
var values = document.querySelector(".values");
var history_btn = document.querySelector(".history-btn");
var mission_btn = document.querySelector(".mission-btn");
var values_btn = document.querySelector(".values-btn");

console.log(history, mission, values, history_btn, mission_btn, values_btn);

function showhistory(){
    history_btn.classList.add("active");
    mission_btn.classList.remove("active");
    values_btn.classList.remove("active");
    his.classList.remove("hidden");
    mission.classList.add("hidden");
    values.classList.add("hidden");
}

function showmission(){
    console.log(mission_btn); // add this line to debug
    history_btn.classList.remove("active");
    mission_btn.classList.add("active");
    values_btn.classList.remove("active");
    his.classList.add("hidden");
    mission.classList.remove("hidden");
    values.classList.add("hidden");
}

function showvalues(){
    history_btn.classList.remove("active");
    mission_btn.classList.remove("active");
    values_btn.classList.add("active");
    his.classList.add("hidden");
    mission.classList.add("hidden");
    values.classList.remove("hidden");
}
