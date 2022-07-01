const joinMeeting = (t) => {
  let desiredTime = t || "11:30";
  console.log("starting...");
  let tryAgain = window.setInterval(() => {
    let hrs = (new Date().getHours() + 24) % 12 || 12;
    let mins = new Date().getMinutes();
    let currentTime = `${hrs}:${mins}`;
    if (currentTime.endsWith(":0")) {
      currentTime = `${currentTime}0`;
    }
    console.log(`============================`);
    console.log(`Current time: ${currentTime}:${new Date().getSeconds()}`);
    console.log(`Desired time: ${desiredTime}`);
    console.log(`============================`);
    Array.from(document.getElementsByTagName("span"))
      .filter(function (btn) {
        return (
          btn.innerText in
          {
            "Keep waiting": 1,
          }
        );
      })
      .map(function (btn) {
        btn.click();
        console.log("yes Google, I do want to keep waiting");
      });
    if (currentTime == desiredTime) {
      Array.from(document.getElementsByTagName("span"))
        .filter(function (btn) {
          return (
            btn.innerText in
            {
              "Join now": 1,
              "Ask to join": 1,
            }
          );
        })
        .map(function (btn) {
          btn.click();
          clearInterval(tryAgain);
          console.log("done!");
        });
    }
  }, 1000);
};
let inputTime = prompt("enter meeting time:");
joinMeeting(inputTime);
