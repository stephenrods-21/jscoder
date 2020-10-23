window.onerror = function(message, source, lineno, colno, error){
	console.log('Error Occured!');
}

try{
    const element = document.getElementById('sde1');
    const value = element.value;
}
catch(e){
	console.log('Error gracefully handled!');
}