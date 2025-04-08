setInterval(()=> {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let hrotate = 30*hour+minute/2;
    let mrotate= 6*minute;
    let srotate=6*second;
    
    hourhand.style.transform=`rotate(${hrotate}deg)`;
    minutehand.style.transform=`rotate(${mrotate}deg)`;
    secondhand.style.transform=`rotate(${srotate}deg)`;
}, 1000);