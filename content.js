function modifyCallButton(callButtons) {

	callButtons.forEach((cb)=> {

    const iCall = cb.children[0];

    if (iCall != undefined) {
        if (iCall.localName == 'i') {
            cb.addEventListener('click', function() {
                iCall.click();
				console.log("S1DA: Menelpon..");
            })
        }
    }
})

}

function modCall() {
    const checkCallButtons = setInterval(function() {
        let callButtons = document.querySelectorAll('a[data-v-591d7d6e]');
        if (callButtons.length > 0) {
            modifyCallButton(callButtons);
            clearInterval(checkCallButtons);
        }
    }, 1000);    
}

modCall();

const headerHome = document.querySelector('.el-card.box-card.is-always-shadow');

headerHome.addEventListener('click', function() {
	
});