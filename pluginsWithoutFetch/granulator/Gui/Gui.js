import '../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class granulatorGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = `<style>.my-pedal {animation:none 0s ease 0s 1 normal none running;appearance:none;background:rgb(128, 128, 128) none repeat scroll 0% 0% / contain padding-box border-box;border:1px solid rgb(73, 73, 73);bottom:0px;clear:none;clip:auto;color:rgb(33, 37, 41);columns:auto auto;contain:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:inline-block;fill:rgb(0, 0, 0);filter:none;flex:0 1 auto;float:none;font:16px / 24px -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";gap:normal;grid:none / none / none / row / auto / auto;height:217.766px;hyphens:manual;inset:0px;isolation:auto;left:0px;margin:2px;marker:none;mask:none;offset:none 0px auto 0deg;opacity:1;order:0;orphans:2;outline:rgb(33, 37, 41) none 0px;overflow:visible;padding:1px;page:auto;perspective:none;position:unset;quotes:auto;r:0px;resize:none;right:0px;rx:auto;ry:auto;speak:normal;stroke:none;top:0px;transform:matrix(1, 0, 0, 1, 54.0005, 68.9854);transition:all 0s ease 0s;visibility:visible;widows:2;width:350.391px;x:0px;y:0px;zoom:1;};</style>
<div id="granulator" class="resize-drag my-pedal gradiant-target" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; width: 350.391px; position: relative; top: 0px; left: 0px; height: 217.773px; transform: translate(54.0005px, 68.9854px);" data-x="54.00048828125" data-y="68.98536682128906"><div id="granulator" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: 100% 100%; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 33px; left: 1px; width: 350.594px; height: 219.37px; transform: translate(-4.45288px, -35.8316px); background-image: url(&quot;./img/background/metal15.jpeg&quot;);" data-x="-4.452880859375" data-y="-35.83158874511719"></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 67px; width: 70px; height: 78.5px; transform: translate(-49.3672px, -31.038px);" data-x="-49.367218017578125" data-y="-31.037994384765625"><webaudio-knob id="/Granulator/Granulator/GrainSize" src="./img/knobs/vslider1.png" sprites="100" min="5" max="2205" step="1" width="70" height="116" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/vslider1.png&quot;); outline: none; width: 70px; height: 116px; background-position: 0px -1392px; background-size: 70px 11716px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1012.82px; top: -36.5px;">277</div>
</webaudio-knob></div><div class="drag target-style" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 199px; width: 70px; height: 78.5px; transform: translate(56.8572px, -31.1712px);" data-x="56.857208251953125" data-y="-31.171234130859375"><webaudio-knob id="/Granulator/Granulator/Speed" src="./img/knobs/vslider1.png" sprites="100" min="1" max="20" step="0.0001" width="70" height="116" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/vslider1.png&quot;); outline: none; width: 70px; height: 116px; background-position: 0px -7772px; background-size: 70px 11716px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1003.12px; top: -36.5px;">13.7654</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 149.5px; left: 133px; transform: translate(7.80927px, -87.8699px);" data-x="7.80926513671875" data-y="-87.869873046875"><webaudio-knob id="/Granulator/Granulator/Probability" src="./img/knobs/simplegray.png" sprites="100" min="50" max="100" step="1" width="70" height="70" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/simplegray.png&quot;); outline: none; width: 70px; height: 70px; background-position: 0px -5460px; background-size: 70px 7070px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1017.88px; top: -36.5px;">89</div>
</webaudio-knob></div><label for="Granulator" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 396px; left: 2px; top: 4.28125px; transform: translate(-23.4983px, -3.5412px); border: none; font-size: 22px; color: rgb(0, 0, 0); -webkit-text-stroke: 1px rgb(255, 255, 255); font-family: &quot;Francois One&quot;;" class="drag" contenteditable="false" data-x="-23.498260498046875" data-y="-3.54119873046875" font="Francois One">Granulator</label><label for="Granulator" style="display: none; touch-action: none; position: absolute; z-index: 1; width: 388px; left: 6px; top: 40.2812px; border: none; font-size: 22px; color: rgb(0, 0, 0); -webkit-text-stroke: 1px rgb(255, 255, 255); font-family: &quot;Francois One&quot;;" class="drag" contenteditable="false" font="Francois One">Granulator</label><label for="GrainSize" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 70px; top: 118.781px; font-size: 22px; color: rgb(0, 0, 0); -webkit-text-stroke: 1px rgb(255, 255, 255); font-family: &quot;Francois One&quot;; transform: translate(-78.1779px, 45.4375px); border: none;" class="drag" contenteditable="false" font="Francois One" data-x="-78.17788696289062" data-y="45.437469482421875">GrainSize</label><label for="Speed" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 202px; top: 118.781px; font-size: 22px; color: rgb(0, 0, 0); -webkit-text-stroke: 1px rgb(255, 255, 255); font-family: &quot;Francois One&quot;; transform: translate(25.2632px, 44.6713px); border: none;" class="drag" contenteditable="false" font="Francois One" data-x="25.26324462890625" data-y="44.6712646484375">Speed</label><label for="Probability" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 128px; left: 136px; top: 199.281px; font-size: 22px; color: rgb(0, 0, 0); -webkit-text-stroke: 1px rgb(255, 255, 255); font-family: &quot;Francois One&quot;; transform: translate(-23.668px, -35.85px); border: none;" class="drag" contenteditable="false" font="Francois One" data-x="-23.66802978515625" data-y="-35.850006103515625">Probability</label></div>`;
  
        this.isOn;
            this.state = new Object();
            this.setKnobs();
            this.setSliders();
            this.setSwitches();
            //this.setSwitchListener();
            this.setInactive();
            // Change #pedal to .my-pedal for use the new builder
            this._root.querySelector('.my-pedal').style.transform = 'none';
            //this._root.querySelector("#test").style.fontFamily = window.getComputedStyle(this._root.querySelector("#test")).getPropertyValue('font-family');
  
            // Compute base URI of this main.html file. This is needed in order
            // to fix all relative paths in CSS, as they are relative to
            // the main document, not the plugin's main.html
            this.basePath = getBaseURL();
            console.log("basePath = " + this.basePath)
  
            // Fix relative path in WebAudio Controls elements
            this.fixRelativeImagePathsInCSS();
  
            // optionnal : set image background using a relative URI (relative
            // to this file)
        //this.setImageBackground("/img/BigMuffBackground.png");
          
        // Monitor param changes in order to update the gui
        window.requestAnimationFrame(this.handleAnimationFrame);
      
              }
          
              fixRelativeImagePathsInCSS() {
                 
      // change webaudiocontrols relative paths for spritesheets to absolute
          let webaudioControls = this._root.querySelectorAll(
              'webaudio-knob, webaudio-slider, webaudio-switch, img'
          );
          webaudioControls.forEach((e) => {
              let currentImagePath = e.getAttribute('src');
              if (currentImagePath !== undefined) {
                  //console.log("Got wc src as " + e.getAttribute("src"));
                  let imagePath = e.getAttribute('src');
                  e.setAttribute('src', this.basePath + '/' + imagePath);
                  //console.log("After fix : wc src as " + e.getAttribute("src"));
              }
          });
  
          let sliders = this._root.querySelectorAll('webaudio-slider');
          sliders.forEach((e) => {
              let currentImagePath = e.getAttribute('knobsrc');
              if (currentImagePath !== undefined) {
                  let imagePath = e.getAttribute('knobsrc');
                  e.setAttribute('knobsrc', this.basePath + '/' + imagePath);
              }
          });

          // BMT Get all fonts
          // Need to get the attr font
          let usedFonts = "";
          let fonts = this._root.querySelectorAll('label[font]');
          fonts.forEach((e) => {
              if(!usedFonts.includes(e.getAttribute("font"))) usedFonts += "family=" + e.getAttribute("font") + "&";
          });
          let link = document.createElement('link');
          link.rel = "stylesheet";
          if(usedFonts.slice(0, -1)) link.href = "https://fonts.googleapis.com/css2?"+usedFonts.slice(0, -1)+"&display=swap";
          document.querySelector('head').appendChild(link);
          
          // BMT Adapt for background-image
          let divs = this._root.querySelectorAll('div');
          divs.forEach((e) => {
              if('background-image' in e.style){
                let currentImagePath = e.style.backgroundImage.slice(4, -1);
                if (currentImagePath !== undefined) {
                    let imagePath = e.style.backgroundImage.slice(5, -2);
                    if(imagePath != "") e.style.backgroundImage = 'url(' + this.basePath + '/' + imagePath + ')';
                }
              }
          });
          
              }
          
              setImageBackground() {
                 
      // check if the shadowroot host has a background image
          let mainDiv = this._root.querySelector('#main');
          mainDiv.style.backgroundImage =
              'url(' + this.basePath + '/' + imageRelativeURI + ')';
  
          //console.log("background =" + mainDiv.style.backgroundImage);
          //this._root.style.backgroundImage = "toto.png";
      
              }
          
              attributeChangedCallback() {
                 
            console.log('Custom element attributes changed.');
            this.state = JSON.parse(this.getAttribute('state'));
        let tmp = '/PingPongDelayFaust/bypass';
        
        if (this.state[tmp] == 1) {
          this._root.querySelector('#switch1').value = 0;
          this.isOn = false;
        } else if (this.state[tmp] == 0) {
          this._root.querySelector('#switch1').value = 1;
          this.isOn = true;
        }
  
        this.knobs = this._root.querySelectorAll('.knob');
        console.log(this.state);
  
        for (var i = 0; i < this.knobs.length; i++) {
          this.knobs[i].setValue(this.state[this.knobs[i].id], false);
          console.log(this.knobs[i].value);
        }
      
              }
          handleAnimationFrame = () => {
        this._root.getElementById('/Granulator/Granulator/GrainSize').value = this._plug.audioNode.getParamValue('/Granulator/Granulator/GrainSize');
        

        this._root.getElementById('/Granulator/Granulator/Speed').value = this._plug.audioNode.getParamValue('/Granulator/Granulator/Speed');
        

        this._root.getElementById('/Granulator/Granulator/Probability').value = this._plug.audioNode.getParamValue('/Granulator/Granulator/Probability');
        
window.requestAnimationFrame(this.handleAnimationFrame);
         }
      
              get properties() {
                 
        this.boundingRect = {
            dataWidth: {
              type: Number,
              value: null
            },
            dataHeight: {
              type: Number,
              value: null
            }
        };
        return this.boundingRect;
      
              }
          
              static get observedAttributes() {
                 
        return ['state'];
      
              }
          
              setKnobs() {
                 this._root.getElementById("/Granulator/Granulator/GrainSize").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/Granulator/Granulator/GrainSize", e.target.value));
this._root.getElementById("/Granulator/Granulator/Speed").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/Granulator/Granulator/Speed", e.target.value));
this._root.getElementById("/Granulator/Granulator/Probability").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/Granulator/Granulator/Probability", e.target.value));

              }
          
              setSliders() {
                 
              }
          
              setSwitches() {
                 
              }
          
              setInactive() {
                 
        let switches = this._root.querySelectorAll(".switch webaudio-switch");
  
        switches.forEach(s => {
          console.log("### SWITCH ID = " + s.id);
          this._plug.audioNode.setParamValue(s.id, 0);
        });
      
              }
          }
      try {
          customElements.define('wap-granulator', 
                                granulatorGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      