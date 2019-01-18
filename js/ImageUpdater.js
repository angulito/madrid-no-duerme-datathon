const BaseDir = "./Data";
const Extension = ".jpg";
const GreyImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAAA1BMVEWSkpIEm0u0AAAANklEQVR42u3BAQEAAACCoP6vbojAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADiDoIAAAEB9TdeAAAAAElFTkSuQmCC";

function ResetImage() {

	$('#ImageFrame').attr("src", GreyImage);

}
	
function LoadImage(hour, category) {

	

	const LoadPath = BaseDir + "/" + category + "/" + hour + Extension;
	
	$('#ImageFrame').attr("src", LoadPath);

}

var CurrentImage = 0;
var IntervalHandler = null;
const IntervalDelay = 200;
const MaxHours = 3;

function StartHourSlideshow(initialHour, category) {

	if(IntervalHandler !== null) StopHourSlideshow();
	CurrentImage = initialHour;
	IntervalHandler = setInterval(function() {UpdateSlideshow(category)}, IntervalDelay);

}

function StopHourSlideshow() {

	clearInterval(IntervalHandler);

}

function UpdateSlideshow(category) {

	LoadImage(CurrentImage, category);
	CurrentImage = (CurrentImage + 1) % MaxHours;

}