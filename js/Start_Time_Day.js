// Start_Time_Day.js
/* 範例
<div> 
    今天是:   <span id="currentDay"></span> <br>
    現在時間: <span id="currentTime"></span>
</div>
*/
function startTime() {
  var currentTimeElement = document.getElementById("currentTime"); // 目前時間
  var currentDayElement = document.getElementById("currentDay");   // 目前星期幾

  function updateTime() {
    var now = new Date();
    
    var hours = now.getHours();     // 處理今天小時
    var minutes = now.getMinutes(); // 處理今天分鐘
    var seconds = now.getSeconds(); // 處理今天秒數
    var day = now.getDay(); // 取得星期幾，0 表示星期日，1 表示星期一，以此類推

    hours = checkTime(hours);     // 查證時間 處理日期為個位數 前面要補一個零
    minutes = checkTime(minutes); // 查證時間 處理日期為個位數 前面要補一個零
    seconds = checkTime(seconds); // 查證時間 處理日期為個位數 前面要補一個零

    var dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var currentDay = dayNames[day]; // 根據 day 取得對應的星期幾名稱

    currentTimeElement.textContent = hours + ":" + minutes + ":" + seconds;
    currentDayElement.textContent = currentDay; // 顯示星期幾

    setTimeout(updateTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  updateTime();
}

startTime(); // 開始執行 startTime 函數