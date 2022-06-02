import '../../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class kbverbGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = `<style>.my-pedal {animation:none 0s ease 0s 1 normal none running;appearance:none;background:rgb(128, 66, 66) none repeat scroll 0% 0% / contain padding-box border-box;border:0px dashed rgb(147, 92, 16);bottom:693.679px;clear:none;clip:auto;color:rgb(33, 37, 41);columns:auto auto;contain:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:block;fill:rgb(0, 0, 0);filter:none;flex:0 1 auto;float:none;font:16px / 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";gap:normal;grid:none / none / none / row / auto / auto;height:300px;hyphens:manual;inset:58.7102px 1212.22px 693.679px 212px;isolation:auto;left:212px;margin:2px;marker:none;mask:none;offset:none 0px auto 0deg;opacity:1;order:0;orphans:2;outline:rgb(33, 37, 41) none 0px;overflow:visible;padding:1px;page:auto;perspective:none;position:unset;quotes:auto;r:0px;resize:none;right:1212.22px;rx:auto;ry:auto;speak:normal;stroke:none;top:58.7102px;transform:none;transition:all 0s ease 0s;visibility:visible;widows:2;width:450px;x:0px;y:0px;zoom:1;};</style>
        <div id="kbverb" class="resize-drag my-pedal target-style-container gradiant-target" style="border: 0px solid rgb(147, 92, 16); text-align: center; display: grid; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: rgb(128, 66, 66); touch-action: none; width: 450px; position: relative; top: 0px; left: 0px; height: 300px; transform: none; grid-template-rows: repeat(1, 1fr);"><label for="bypass" style="text-align: center; display: none; touch-action: none; position: static; z-index: 1; border: none; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">bypass</label><div id="grid" style="display: grid; grid-template-columns: repeat(6, 1fr); "><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/damp" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="0" max="0.999" step="0.0001" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1002.17px; top: -44px;">0.0000</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/earlyDiff" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="0" max="0.99" step="0.001" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px -4260px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1005.23px; top: -44px;">0.000</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/highBand" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="1000" max="10000" step="0.1" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px -660px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1011.35px; top: -44px;">0.0</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/highX" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="0" max="1" step="0.01" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px -6000px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1008.29px; top: -44px;">0.00</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/lowBand" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="100" max="6000" step="0.1" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px -360px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1011.35px; top: -44px;">0.0</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/lowX" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="0" max="1" step="0.01" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px -6000px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1008.29px; top: -44px;">0.00</div>
        </webaudio-knob></div><label for="damp" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">damp</label><label for="earlyDiff" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">earlyDiff</label><label for="highBand" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">highBand</label><label for="highX" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">highX</label><label for="lowBand" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">lowBand</label><label for="lowX" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">lowX</label><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/mDepth" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="0" max="1" step="0.001" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1005.23px; top: -44px;">0.000</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/mFreq" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="0" max="10" step="0.01" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1008.29px; top: -44px;">0.00</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/midX" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="0" max="1" step="0.01" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px -6000px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1008.29px; top: -44px;">0.00</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/size" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="0.5" max="3" step="0.01" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px -6000px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1008.29px; top: -44px;">3.00</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-knob id="/kbverb/t60" src="/./img/knobs/Martial_0-10_Gold_large_80x80.png" sprites="100" min="0.1" max="60" step="0.1" width="60" height="60" style="touch-action: none; display: block;"><style>
        
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
        <div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/knobs/Martial_0-10_Gold_large_80x80.png&quot;); background-size: 60px 6060px; outline: none; width: 60px; height: 60px; background-position: 0px -60px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1011.35px; top: -44px;">0.0</div>
        </webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: static; place-self: center;"><webaudio-switch id="/kbverb/bypass" src="/./img/switches/switch_2.png" sprites="100" width="60" height="55" style="touch-action: none;"><style>
        
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
        
        webaudio-switch{
          display:inline-block;
          margin:0;
          padding:0;
          font-family: sans-serif;
          font-size: 11px;
          cursor:pointer;
        }
        .webaudio-switch-body{
          display:inline-block;
          margin:0;
          padding:0;
        }
        </style>
        <div class="webaudio-switch-body" tabindex="1" touch-action="none" style="background-image: url(&quot;/./img/switches/switch_2.png&quot;); background-size: 100% 200%; width: 60px; height: 55px; outline: none; background-position: 0px -100%;"><div class="webaudioctrl-tooltip" style="transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden;"></div></div>
        </webaudio-switch></div><label for="mDepth" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">mDepth</label><label for="mFreq" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">mFreq</label><label for="midX" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">midX</label><label for="size" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">size</label><label for="t60" style="text-align: center; display: block; touch-action: none; position: static; z-index: 1; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 16px; place-self: center;" class="drag" contenteditable="false" font="Fruktur">t60</label><label for="kbverb" style="display: block; touch-action: none; position: static; z-index: 1; border: none; font-family: Fruktur; color: rgb(255, 215, 0); font-size: 30px; place-self: center;" class="drag" contenteditable="false" data-x="0.909088134765625" data-y="1.8181838989257812" font="Fruktur">Jpverb</label></div></div>`
        
        
      
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
        this._root.getElementById('/kbverb/damp').value = this._plug.audioNode.getParamValue('/kbverb/damp');
        

        this._root.getElementById('/kbverb/earlyDiff').value = this._plug.audioNode.getParamValue('/kbverb/earlyDiff');
        

        this._root.getElementById('/kbverb/highBand').value = this._plug.audioNode.getParamValue('/kbverb/highBand');
        

        this._root.getElementById('/kbverb/highX').value = this._plug.audioNode.getParamValue('/kbverb/highX');
        

        this._root.getElementById('/kbverb/lowBand').value = this._plug.audioNode.getParamValue('/kbverb/lowBand');
        

        this._root.getElementById('/kbverb/lowX').value = this._plug.audioNode.getParamValue('/kbverb/lowX');
        

        this._root.getElementById('/kbverb/mDepth').value = this._plug.audioNode.getParamValue('/kbverb/mDepth');
        

        this._root.getElementById('/kbverb/mFreq').value = this._plug.audioNode.getParamValue('/kbverb/mFreq');
        

        this._root.getElementById('/kbverb/midX').value = this._plug.audioNode.getParamValue('/kbverb/midX');
        

        this._root.getElementById('/kbverb/size').value = this._plug.audioNode.getParamValue('/kbverb/size');
        

        this._root.getElementById('/kbverb/t60').value = this._plug.audioNode.getParamValue('/kbverb/t60');
        

          this._root.getElementById('/kbverb/bypass').value = 1 - this._plug.audioNode.getParamValue('/kbverb/bypass');
         
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
                 this._root.getElementById("/kbverb/damp").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/damp", e.target.value));
this._root.getElementById("/kbverb/earlyDiff").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/earlyDiff", e.target.value));
this._root.getElementById("/kbverb/highBand").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/highBand", e.target.value));
this._root.getElementById("/kbverb/highX").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/highX", e.target.value));
this._root.getElementById("/kbverb/lowBand").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/lowBand", e.target.value));
this._root.getElementById("/kbverb/lowX").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/lowX", e.target.value));
this._root.getElementById("/kbverb/mDepth").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/mDepth", e.target.value));
this._root.getElementById("/kbverb/mFreq").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/mFreq", e.target.value));
this._root.getElementById("/kbverb/midX").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/midX", e.target.value));
this._root.getElementById("/kbverb/size").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/size", e.target.value));
this._root.getElementById("/kbverb/t60").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/kbverb/t60", e.target.value));

              }
          
              setSliders() {
                 
              }
          
              setSwitches() {
                 this._root.getElementById("/kbverb/bypass").addEventListener("change", (e) =>this._plug.audioNode.setParamValue("/kbverb/bypass", 1 - e.target.value));

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
          customElements.define('wap-kbverb', 
                                kbverbGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      