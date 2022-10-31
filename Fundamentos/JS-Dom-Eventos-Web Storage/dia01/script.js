document.getElementById('header-container').style.backgroundColor = 'green';
document.getElementById('footer-container').style.backgroundColor = 'green';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'salmon';
// document.querySelectorAll('.emergency-tasks h3')[0].style.backgroundColor = 'purple';
// document.querySelectorAll('.emergency-tasks h3')[1].style.backgroundColor = 'purple';
// document.querySelectorAll('.no-emergency-tasks h3')[0].style.backgroundColor = 'black';
// document.querySelectorAll('.no-emergency-tasks h3')[1].style.backgroundColor = 'black';
let emergencyH3 = document.querySelectorAll('.emergency-tasks h3');
function emergenciaH3() {

    for (let i of emergencyH3) {
        i.style.backgroundColor = 'purple';
    }
}
emergenciaH3();
let noEmergencyH3 = document.querySelectorAll('.no-emergency-tasks h3');
function semEmergenciaH3() {

    for (let i2 of noEmergencyH3) {
        i2.style.backgroundColor = 'black';
    }
}
semEmergenciaH3();


// const emergencyHeader = () => {
//     let emergency = document.querySelectorAll('.emergency-tasks h3');
//     for (let index = 0; index < emergency.length; index += 1) {
//         emergency[index].style.backgroundColor = "purple";
//     }
//     }
//     emergencyHeader();

// const noEmergencyHeader = () => {
//     let noEmergency = document.querySelectorAll('.no-emergency-tasks h3');
//     for (let index = 0; index < noEmergency.length; index += 1) {
//         noEmergency[index].style.backgroundColor = "black";
//     }
//     }
//     noEmergencyHeader();