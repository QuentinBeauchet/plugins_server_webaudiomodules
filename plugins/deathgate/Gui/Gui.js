import '../../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class deathgateGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this.style.display = "inline-flex";
        this._root.innerHTML = `<style>.my-pedal {animation:none 0s ease 0s 1 normal none running;appearance:none;background:rgb(128, 128, 128) url("https://mainline.i3s.unice.fr/fausteditorweb/dist/PedalEditor/Front-End/img/background/psyche9.jpg") repeat scroll 0% 0% / 100% 100% padding-box border-box;border:1px dashed rgb(73, 73, 73);bottom:-17.3333px;clear:none;clip:auto;color:rgb(33, 37, 41);columns:auto auto;contain:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:block;fill:rgb(0, 0, 0);filter:none;flex:0 1 auto;float:none;font:16px / 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";gap:normal;grid:none / none / none / row / auto / auto;height:300px;hyphens:manual;inset:58.2222px 849.111px -17.3333px 212px;isolation:auto;left:212px;margin:2px;marker:none;mask:none;offset:none 0px auto 0deg;opacity:1;order:0;orphans:2;outline:rgb(33, 37, 41) none 0px;overflow:visible;padding:1px;page:auto;perspective:none;position:unset;quotes:auto;r:0px;resize:none;right:849.111px;rx:auto;ry:auto;speak:normal;stroke:none;top:58.2222px;transform:none;transition:all 0s ease 0s;visibility:visible;widows:2;width:230px;x:0px;y:0px;zoom:1;};</style>
        <div id="deathgate" class="resize-drag my-pedal target-style-container gradiant-target" style="border: 1px dashed rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: 100% 100%; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; width: 230px; position: relative; top: 0px; left: 0px; height: 300px; background-image: url(&quot;/./img/background/psyche9.jpg&quot;); transform: none;border: none;"><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 33px; left: 1px; transform: translate(87.1111px, -28.4444px);" data-x="87.11114501953125" data-y="-28.444446563720703"><webaudio-knob id="/deathgate/Dead Zone" src="/./img/knobs/Jambalaya.png" sprites="100" min="-120" max="0" step="0.001" width="50" height="50" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Jambalaya.png&quot;); background-size: 50px 5050px; outline: none; width: 50px; height: 50px; background-position: 0px -5000px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 992.292px; top: -44px;">-120.000</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 137.944px; left: 1px; transform: translate(82.6667px, -29.3334px);" data-x="82.66665649414062" data-y="-29.333389282226562"><webaudio-knob id="/deathgate/Noise Gate" src="/./img/knobs/Jambalaya.png" sprites="100" min="-120" max="0" step="0.001" width="50" height="50" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Jambalaya.png&quot;); background-size: 50px 5050px; outline: none; width: 50px; height: 50px; background-position: 0px -5000px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 995.347px; top: -44px;">-90.000</div>
        </webaudio-knob></div><label for="deathgate" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 220px; left: 2px; top: 4.22222px; border: none; font-size: 30px; color: rgb(0, 0, 0); -webkit-text-stroke: 1px rgb(255, 255, 255); font-family: &quot;Faster One&quot;; transform: translate(1.77753px, 230.222px);" class="drag" contenteditable="false" font="Faster One" data-x="1.77752685546875" data-y="230.2221736907959">DeathGate</label><label for="Dead Zone" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 260px; left: 4px; top: 83.1667px; border: none; font-size: 25px; color: rgb(255, 255, 255); -webkit-text-stroke: 0px rgb(255, 255, 255); font-family: &quot;Shojumaru&quot;; transform: translate(-17.7778px, -24.0001px);" class="drag" contenteditable="false" font="Shojumaru" data-x="-17.77777099609375" data-y="-24.00005340576172">Dead Zone</label><label for="Noise Gate" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 200px; left: 4px; top: 188.111px; border: none; font-size: 25px; color: rgb(255, 255, 255); -webkit-text-stroke: 0px rgb(255, 255, 255); font-family: &quot;Shojumaru&quot;; transform: translate(6.2222px, -14.2222px);" class="drag" contenteditable="false" font="Shojumaru" data-x="6.222198486328125" data-y="-14.22222900390625">Noise Gate</label></div>`
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
        this._root.getElementById('/deathgate/Dead Zone').value = this._plug.audioNode.getParamValue('/deathgate/Dead Zone');
        

        this._root.getElementById('/deathgate/Noise Gate').value = this._plug.audioNode.getParamValue('/deathgate/Noise Gate');
        
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
                 this._root.getElementById("/deathgate/Dead Zone").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/deathgate/Dead Zone", e.target.value));
this._root.getElementById("/deathgate/Noise Gate").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/deathgate/Noise Gate", e.target.value));

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
          customElements.define('wap-deathgate', 
                                deathgateGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      