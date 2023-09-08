// 日歷套件 https://www.daterangepicker.com/
$(function () {

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}/${month}/${day}`;
    let maxDate = `${year + 1}/${month}/${day}`;
    // console.log(maxDate);

    $('input[name="datefilter"]').daterangepicker({
        "minYear": 2023,
        "maxYear": 2025,
        "showWeekNumbers": false,
        "autoApply": true,
        "maxSpan": {
            "days": 7
        },
        "buttonClasses": "btn-sm-1",
        "applyButtonClasses": "btn-primary-1",
        "cancelClass": "btn-default-1",
        "locale": {
            "format": "YYYY/MM/DD",
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "日",
                "一",
                "二",
                "三",
                "四",
                "五",
                "六"
            ],
            "monthNames": [
                "01 月",
                "02 月",
                "03 月",
                "04 月",
                "05 月",
                "06 月",
                "07 月",
                "08 月",
                "09 月",
                "10 月",
                "11 月",
                "12 月"
            ],
            "firstDay": 1
        },
        "parentEl": "datefilter",
        "startDate": "2023/08/23",
        "endDate": "2023/08/29",
        "minDate": currentDate,
        "maxDate": maxDate,
        "applyButtonClasses": ".activebtn"
    });
});