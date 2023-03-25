$(function () {

    const startYear = 2022
    const years = Array.from(Array(new Date().getFullYear() - (startYear-1)), (_, i) => (i + startYear).toString())
    const months = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ]
    let values = []
    let labels = []
    years.forEach(y => {
        months.forEach(m => {
            if (m == "Январь") {
                values.push(y)
            } else {
                values.push(m.substring(0,3))
            }
            labels.push(m + ' ' + y)
        })
    })
    values.push(+years[years.length-1]+1)

    $(".js-range-slider").ionRangeSlider({
        hide_min_max: true,
        prettify_enabled: false,
        skin: "round",
        type: "double",
        min: 0,
        max: 24,
        to: 24,
        grid: true,
        from: new Date().getMonth(),
        values: values,
        onChange: (value) => {
            let from = labels[value.from_pretty]
            let to = labels[value.to_pretty]
            $('.years-input .irs-from').text(from);
            $('.years-input .irs-to').text(to);
            console.log(from, to);
        }
    });





    // ************************************************************************
    
    const startYearTwo = 2015
    const yearsTwo = Array.from(Array(new Date().getFullYear() - (startYearTwo-1)), (_, i) => (i + startYearTwo).toString())
    const monthsTwo = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ]
    let valuesTwo = []
    let labelsTwo = []
    yearsTwo.forEach(y => {
        monthsTwo.forEach(m => {
            labelsTwo.push(m + " "  + y)
        })
    });
    
    lastYear = monthsTwo[0] + " " + (Number(yearsTwo[yearsTwo.length-1]) + 1).toString();
    labelsTwo.push(lastYear);

    $(".js-range-slider-two").ionRangeSlider({
        hide_min_max: true,
        prettify_enabled: true,
        skin: "round",
        type: "double",
        min: 0,
        max: 2024,
        grid: true,
        to: 2024,
        // from: new Date().getMonth(),
        from: 0,
        values: labelsTwo,
        onChange: (value) => {
            let from = labelsTwo[value.from_pretty]
            let to = labelsTwo[value.to_pretty]
            $('.months-input .irs-from').text(from);
            $('.months-input .irs-to').text(to);
            console.log(from, to);
        }
    });
    let defaultText = "";
    $('.months-input .irs-grid-text').each(function () {
        let text = $(this).text();
        text = text.slice(text.length-5, text.length);
        if(defaultText != text){
            $(this).text(text);
            defaultText = text
        }
        else{
            $(this).text("");
        }
        
    })

    $(".tab_button .tab_button_in1").click(function(){
        $(".main-sec").addClass("main-sec_active");
        $(".main-sec").removeClass("main-sec_active2");
    });
    $(".tab_button .tab_button_in2").click(function(){
        $(".main-sec").addClass("main-sec_active2");
        $(".main-sec").removeClass("main-sec_active");
    });
});

