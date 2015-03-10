//store inputs
$('button').click(function(){
	var inputName = $('name').value;
	var backgroundColor = $('backgroundcolor').value;

	localstorage.setItem('name', inputName);
	localstorage.setItem(inputName, backgroundColor);

})

//generate GUID
$(function GUID(){
	function s4(){
		return Math.floor((1 + Math.random())*0x10000).toString(16).substring(1);
	}
	var guid = (s4() + s4() + "-" + s4() + "-4" + s4().substr(0,3) + "-" + s4() + "-" + s4() + s4() + s4()).toLowerCase();
})

//show stored inputs
$(function showResult(){
	var name = localstorage.getItem('name');
	var backgroundColor = localstorage.getItem(name);
	var guid = sessionstorage.setItem('GUID',guid);
	var footer = $.create('footer');
	var h = $.create('h');
	h.textContent = "Hi" + name +", your session GUID is" + guid;
	footer.appendChild(h);
	if (backgroundColor) {
		$('body').css('backgroundcolor', backgroundColor);
};
})
	





