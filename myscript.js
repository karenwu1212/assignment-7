//store inputs
$('button').click(function(){
	var inputName = $('#name').val();
	var backgroundColor = $('#backgroundcolor').val();

	localStorage.setItem('name', inputName);
	localStorage.setItem(inputName, backgroundColor);

})

//generate GUID
function GUID(){
	function s4(){
		return Math.floor((1 + Math.random())*0x10000).toString(16).substring(1);
	}
	return guid = (s4() + s4() + "-" + s4() + "-4" + s4().substr(0,3) + "-" + s4() + "-" + s4() + s4() + s4()).toLowerCase();
	}

//show stored inputs
$(function showResult(){
	var name = localStorage.getItem('name');
	var backgroundColor = localStorage.getItem(name);
	var guid = GUID();	
	sessionStorage.setItem('GUID',guid);
	var footer = $('footer');
	var content = "Hi " + name +", your session GUID is" + guid;
	footer.append(content);
	if (backgroundColor) {
		$('body').css('background-color', backgroundColor);
	};
})
	





