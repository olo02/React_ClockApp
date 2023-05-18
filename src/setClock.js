import React from 'react';

const SetClock = () => {

    /* 참고 사이트 :  https://dalseobi.tistory.com/3 */
    function Clock() {
        let date = new Date();
        let YYYY = String(date.getFullYear());
        let MM = String(date.getMonth() + 1);
        let DD = Zero(date.getDate());
        let hh = Zero(date.getHours());
        let mm = Zero(date.getMinutes());
        let ss = Zero(date.getSeconds());
        let week = Weekday()

        write(YYYY, MM, DD, hh, mm, ss, week);
        function Zero(num) {
            return (num < 10 ? '0' + num : '' + num);
        }

        function Weekday() {
            let week = ['일', '월', '화', '수', '목', '금', '토'];
            let weekday = date.getDay();
            return week[weekday];
        }
        function write(YYYY, MM , DD, hh, mm, ss, week) {
            let clockDay = document.getElementById("clockDay");
            let clock = document.getElementById("clock");
            clockDay.innerText = YYYY + " / " + MM + " / " + DD + " (" + week + ")";
            clock.innerText = hh + " : " + mm + " : " + ss;
        }
    }

    setInterval(Clock, 100);

    return (
        <div className="ClockWrapper" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            width: "100%",
            height: "100vh",
            textAlign: "center"
        }}>
            <div>
                <div id="clock" style={{fontSize : 70, fontWeight: 600}}></div>
                <div id="clockDay">loading...</div>
            </div>

        </div>
    );
};

export default React.memo(SetClock);