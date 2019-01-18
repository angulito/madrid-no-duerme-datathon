var CURRENT_CATEGORY = 'weekday';

$.extend( $.ui.slider.prototype.options, { 
    animate: 300
});

$("#flat-slider")
    .slider({
        max: 50,
        min: 0,
        range: true,
        values: [15, 35]
    })
    .slider("pips", {
        first: "pip",
        last: "pip"
    });

    $("#flat-slider-vertical-2")
    .slider({
        max: 24,
        min: 0,
        range: "max",
        value: 12,
        orientation: "vertical"
    });

    $("#flat-slider-vertical-2")
    .slider("pips", {
        first: "pip",
        last: "pip"
    })
    .slider("float");
    
    
var show = function(elem,category){
    $(".active").removeClass("active");
    $($(elem).parents("li")).addClass("active");
    let hour = $("#flat-slider-vertical-2").slider("value");
    LoadImage(hour,category)
}

 
    
$(document).ready(function(){
    
    $('#flat-slider-vertical-2').slider({
        change: function(event, ui) { 
            let hour = $("#flat-slider-vertical-2").slider("value");
            console.log(" Slider changed : hour "+hour+" - category : "+CURRENT_CATEGORY);
            LoadImage(hour,CURRENT_CATEGORY);
        }
    });
});