//按秒计算
var maxtime = 5;
var sum = document.getElementById('sum').value;
var id = document.getElementById('id').value;

function CountDown() {
    if (maxtime >= 0) {
        msg = "距离结束还有" + maxtime + "秒";
        document.all["timer"].innerHTML = msg;
        --maxtime;
    } else {
        window.location.href = 'playServlet?type=judge&&id=' + id + '&&fid=0&&tid=1&&sum=' + sum;
    }
}

timer = setInterval("CountDown()", 1000);