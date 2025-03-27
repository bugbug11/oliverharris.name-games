const audio = document.getElementById('audio')
const source = document.getElementById('source')
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const fsbutton=document.getElementById('fsbutton')
setscreen('start game')
function setscreen(screen){
	if (screen=='start game'){
		
	}
}
	function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
 	 element.style.display = 'none';
  document.body.appendChild(element);
	  element.click();
	  document.body.removeChild(element);
}
function play(datakey){
	if (datakey.search('ogg')>-1) {
		audiotype='ogg'
		source.type='audio/'+audiotype
		}
		data = localStorage.getItem(datakey)
		blob = new Blob([data], {type: 'audio/'+audiotype})
		url = URL.createObjectURL(blob)
		URL.revokeObjectURL(source.src)
		source.src=url
		audio.play()
	}
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function togglefsbutton() {
    if (fsbutton.hidden) {
        fsbutton.hidden=false
    }
    else  {
        fsbutton.hidden=true
    }
}
document.addEventListener("fullscreenchange",togglefsbutton)
const supportsKeyboardLock =
    ('keyboard' in navigator) && ('lock' in navigator.keyboard);
if (supportsKeyboardLock) {
  document.addEventListener('fullscreenchange', async () => {
    if (document.fullscreenElement) {
      await navigator.keyboard.lock(['Escape']);
      return;
    }
    navigator.keyboard.unlock();
  });
}
async function getData(file) {
	let x = await fetch(file);
	let y = await x.text();
	return y;
}

