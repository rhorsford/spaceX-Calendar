(function () {

    var
        today = new Date(),
        currentMonth = today.getMonth(),
        currentYear = today.getFullYear(),
        selectYear = document.getElementById("year"),
        selectMonth = document.getElementById("month"),
        calendarDays = document.querySelector("#calendar > thead > tr"),
        calendarMonths = document.querySelector("#month"),
        calendarYears = document.querySelector("#year"),
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        years = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        monthAndYear = document.getElementById("monthAndYear"),
        nextBtn = document.getElementById('next'),
        prevBtn = document.getElementById('previous'),
        monthDropdown = document.getElementById('month'),
        yearDropdown = document.getElementById('year'),
        FetchUrl = "https://api.spacexdata.com/v3/launches/upcoming?launch_year=2020&filter=launch_date_local,mission_name",
        fetchResults = [],
        obj = [];


    function callAjax(url, callback) {
        var xmlhttp;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                obj = JSON.parse(xmlhttp.responseText);
                fetchResults.concat(obj);
                showCalendar(currentMonth, currentYear);
            }
        };
        xmlhttp.open("GET", FetchUrl, true);
        xmlhttp.send();
    }

    function processResults() {
        var result = obj.map(item => ({
                date: item.launch_date_local, text: item.mission_name
            })
        );

        return result
    }


    function populateDays() {
        days.forEach(function (day) {
            var item = document.createElement("th");
            item.innerText = day;
            calendarDays.append(item);
        })
    }

    function populateMonths() {
        var index = 0;
        months.forEach(function (month) {
            var item = document.createElement("option");
            item.value = index++;
            item.innerText = month;
            calendarMonths.append(item);
        })
    }

    function populateYears() {
        years.forEach(function (year) {
            var item = document.createElement("option");
            item.value = year;
            item.innerText = year;
            calendarYears.append(item);
        })
    }

    function next() {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
    }

    function previous() {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
    }

    function jump() {
        currentYear = parseInt(selectYear.value);
        currentMonth = parseInt(selectMonth.value);
        showCalendar(currentMonth, currentYear);
    }

    function showCalendar(month, year) {

        let firstDay = (new Date(year, month)).getDay();
        var tbl = document.getElementById("calendar-body"); // body of the calendar
        var results = processResults();

        tbl.innerHTML = "";

        monthAndYear.innerHTML = months[month] + " " + year;
        selectYear.value = year;
        selectMonth.value = month;

        // creating all cells
        let date = 1;
        for (let i = 0; i < 6; i++) {
            // creates a table row
            let row = document.createElement("tr");

            //creating individual cells, filing them up with data.
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    cell = document.createElement("td");
                    cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > daysInMonth(month, year)) {
                    break;
                } else {
                    var cell = document.createElement("td"),
                        cellText = document.createTextNode(date);
                    if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        cell.classList.add("bg-info");
                    }

                    var monthPart = month + 1;
                    var monthMatch = monthPart.toString();
                    const result = results.filter(h => h.date.includes("0" + monthMatch));

                    for (var k = 0; k < result.length; k++) {

                        var part = result[k].date.split(/-|T/g);
                        var missionName = result[k].text;
                        var dateInt = parseInt(part[2]);
                        var monthInt = parseInt(part[1]);
                        var yearInt = parseInt(part[0]);
                        var timeInt = part[3];
                        var missionDetails = (missionName + ' (' + timeInt + ')');

                        if (dateInt === date && yearInt === year && monthInt === month + 1) {
                            cell.classList.add("bg-space");
                            var span = document.createElement("span");
                            cell.appendChild(span);
                            span.innerText = missionDetails
                        }
                    }

                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    date++;
                }
            }
            tbl.appendChild(row); // appending each row into calendar body.
        }
    }

// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
    function daysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }

    function init() {

        callAjax();
        populateDays();
        populateMonths();
        populateYears();

        nextBtn.addEventListener('click', next);
        prevBtn.addEventListener('click', previous);
        monthDropdown.addEventListener('change', jump);
        yearDropdown.addEventListener('change', jump);
    }

    init();
})();