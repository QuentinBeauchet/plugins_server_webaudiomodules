
/*
Code generated with Faust version 2.38.16
Compilation options: -lang wasm-ib -cn freeverb -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONfreeverb() {
	return '{"name": "freeverb","filename": "freeverb.dsp","version": "2.38.16","compile_options": "-lang wasm-ib -cn freeverb -es 1 -mcd 16 -single -ftz 2 ","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/97A8E8FEA1BDA55B89AAB6557CD93566422CAAD4/web/wap"],"size": 573836,"inputs": 2,"outputs": 2,"meta": [ { "author": "RM" },{ "compilation_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "compile_options": "-lang wasm-ib -cn freeverb -es 1 -mcd 16 -single -ftz 2 " },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "demos_lib_name": "Faust Demos Library" },{ "demos_lib_version": "0.1" },{ "description": "Freeverb demo application." },{ "filename": "freeverb.dsp" },{ "filters_lib_allpass_comb_author": "Julius O. Smith III" },{ "filters_lib_allpass_comb_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_allpass_comb_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_version": "0.3" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/demos.lib" },{ "library_path2": "/libraries/reverbs.lib" },{ "library_path3": "/libraries/maths.lib" },{ "library_path4": "/libraries/platform.lib" },{ "library_path5": "/libraries/filters.lib" },{ "library_path6": "/libraries/delays.lib" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "name": "freeverb" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.2" },{ "reverbs_lib_name": "Faust Reverb Library" },{ "reverbs_lib_version": "0.2" },{ "version": "0.0" }],"ui": [ {"type": "hgroup","label": "Freeverb","items": [ {"type": "vgroup","label": "0x00","meta": [{ "0": "" }],"items": [ {"type": "vslider","label": "Damp","address": "/Freeverb/0x00/Damp","index": 16,"meta": [{ "0": "" },{ "style": "knob" },{ "tooltip": "Somehow control the         density of the reverb." }],"init": 0.5,"min": 0,"max": 1,"step": 0.025},{"type": "vslider","label": "RoomSize","address": "/Freeverb/0x00/RoomSize","index": 8,"meta": [{ "1": "" },{ "style": "knob" },{ "tooltip": "The room size         between 0 and 1 with 1 for the largest room." }],"init": 0.5,"min": 0,"max": 1,"step": 0.025},{"type": "vslider","label": "Stereo Spread","address": "/Freeverb/0x00/Stereo Spread","index": 311528,"meta": [{ "2": "" },{ "style": "knob" },{ "tooltip": "Spatial         spread between 0 and 1 with 1 for maximum spread." }],"init": 0.5,"min": 0,"max": 1,"step": 0.01}]},{"type": "vslider","label": "Wet","address": "/Freeverb/Wet","index": 28,"meta": [{ "1": "" },{ "tooltip": "The amount of reverb applied to the signal         between 0 and 1 with 1 for the maximum amount of reverb." }],"init": 0.3333,"min": 0,"max": 1,"step": 0.025}]}]}';
}
function getBase64Codefreeverb() { return "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InNpemUiOiA1NzM4MzYsImlucHV0cyI6IDIsIm91dHB1dHMiOiAyLCJtZXRhIjogWyB7ICJhdXRob3IiOiAiUk0iIH0seyAiY29tcGlsYXRpb25fb3B0aW9ucyI6ICItc2luZ2xlIC1zY2FsIC1JIGxpYnJhcmllcy8gLUkgcHJvamVjdC8gLWxhbmcgd2FzbSIgfSx7ICJjb21waWxlX29wdGlvbnMiOiAiLWxhbmcgd2FzbS1pYiAtY24gZnJlZXZlcmIgLWVzIDEgLW1jZCAxNiAtc2luZ2xlIC1mdHogMiAiIH0seyAiZGVsYXlzX2xpYl9uYW1lIjogIkZhdXN0IERlbGF5IExpYnJhcnkiIH0seyAiZGVsYXlzX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJkZW1vc19saWJfbmFtZSI6ICJGYXVzdCBEZW1vcyBMaWJyYXJ5IiB9LHsgImRlbW9zX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJkZXNjcmlwdGlvbiI6ICJGcmVldmVyYiBkZW1vIGFwcGxpY2F0aW9uLiIgfSx7ICJmaWxlbmFtZSI6ICJmcmVldmVyYi5kc3AiIH0seyAiZmlsdGVyc19saWJfYWxscGFzc19jb21iX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2FsbHBhc3NfY29tYl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfYWxscGFzc19jb21iX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzMF9oaWdocGFzczEiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAiZmlsdGVyc19saWJfdmVyc2lvbiI6ICIwLjMiIH0seyAibGlicmFyeV9wYXRoMCI6ICIvbGlicmFyaWVzL3N0ZGZhdXN0LmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGgxIjogIi9saWJyYXJpZXMvZGVtb3MubGliIiB9LHsgImxpYnJhcnlfcGF0aDIiOiAiL2xpYnJhcmllcy9yZXZlcmJzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGgzIjogIi9saWJyYXJpZXMvbWF0aHMubGliIiB9LHsgImxpYnJhcnlfcGF0aDQiOiAiL2xpYnJhcmllcy9wbGF0Zm9ybS5saWIiIH0seyAibGlicmFyeV9wYXRoNSI6ICIvbGlicmFyaWVzL2ZpbHRlcnMubGliIiB9LHsgImxpYnJhcnlfcGF0aDYiOiAiL2xpYnJhcmllcy9kZWxheXMubGliIiB9LHsgIm1hdGhzX2xpYl9hdXRob3IiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2NvcHlyaWdodCI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIiB9LHsgIm1hdGhzX2xpYl9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIgfSx7ICJtYXRoc19saWJfdmVyc2lvbiI6ICIyLjUiIH0seyAibmFtZSI6ICJmcmVldmVyYiIgfSx7ICJwbGF0Zm9ybV9saWJfbmFtZSI6ICJHZW5lcmljIFBsYXRmb3JtIExpYnJhcnkiIH0seyAicGxhdGZvcm1fbGliX3ZlcnNpb24iOiAiMC4yIiB9LHsgInJldmVyYnNfbGliX25hbWUiOiAiRmF1c3QgUmV2ZXJiIExpYnJhcnkiIH0seyAicmV2ZXJic19saWJfdmVyc2lvbiI6ICIwLjIiIH0seyAidmVyc2lvbiI6ICIwLjAiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogImhncm91cCIsImxhYmVsIjogIkZyZWV2ZXJiIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICIweDAwIiwibWV0YSI6IFt7ICIwIjogIiIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIkRhbXAiLCJhZGRyZXNzIjogIi9GcmVldmVyYi8weDAwL0RhbXAiLCJpbmRleCI6IDE2LCJtZXRhIjogW3sgIjAiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidG9vbHRpcCI6ICJTb21laG93IGNvbnRyb2wgdGhlICAgICAgICAgZGVuc2l0eSBvZiB0aGUgcmV2ZXJiLiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAyNX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJSb29tU2l6ZSIsImFkZHJlc3MiOiAiL0ZyZWV2ZXJiLzB4MDAvUm9vbVNpemUiLCJpbmRleCI6IDgsIm1ldGEiOiBbeyAiMSI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIlRoZSByb29tIHNpemUgICAgICAgICBiZXR3ZWVuIDAgYW5kIDEgd2l0aCAxIGZvciB0aGUgbGFyZ2VzdCByb29tLiIgfV0sImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDEsInN0ZXAiOiAwLjAyNX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJTdGVyZW8gU3ByZWFkIiwiYWRkcmVzcyI6ICIvRnJlZXZlcmIvMHgwMC9TdGVyZW8gU3ByZWFkIiwiaW5kZXgiOiAzMTE1MjgsIm1ldGEiOiBbeyAiMiI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIlNwYXRpYWwgICAgICAgICBzcHJlYWQgYmV0d2VlbiAwIGFuZCAxIHdpdGggMSBmb3IgbWF4aW11bSBzcHJlYWQuIiB9XSwiaW5pdCI6IDAuNSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDF9XX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJXZXQiLCJhZGRyZXNzIjogIi9GcmVldmVyYi9XZXQiLCJpbmRleCI6IDI4LCJtZXRhIjogW3sgIjEiOiAiIiB9LHsgInRvb2x0aXAiOiAiVGhlIGFtb3VudCBvZiByZXZlcmIgYXBwbGllZCB0byB0aGUgc2lnbmFsICAgICAgICAgYmV0d2VlbiAwIGFuZCAxIHdpdGggMSBmb3IgdGhlIG1heGltdW0gYW1vdW50IG9mIHJldmVyYi4iIH1dLCJpbml0IjogMC4zMzMzLCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMjV9XX1dfQ=="; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class freeverbNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'freeverb', options);

        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);

        // JSON parsing functions
        this.parse_ui = function (ui, obj) {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function (group, obj) {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function (items, obj) {
            for (var i = 0; i < items.length; i++) {
                this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function (item, obj) {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                || item.type === "hslider"
                || item.type === "button"
                || item.type === "checkbox"
                || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({
                                    path: item.address,
                                    min: parseFloat(item.min),
                                    max: parseFloat(item.max)
                                });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                    .push({
                                        path: item.address,
                                        min: parseFloat(item.min),
                                        max: parseFloat(item.max)
                                    });
                            }
                        }
                    }
                }
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];

        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) { }
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event) {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     * Destroy the node, deallocate resources.
     */
    destroy() {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON() {
        return this.json;
    }

    // For WAP
    async getMetadata() {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
                return responseJSON.json();
            }).then(json => {
                resolve(json);
            })
        });
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    // For WAP
    setParam(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path) {
        return this.parameters.get(path).value;
    }

    // For WAP
    getParam(path) {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler) {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler() {
        return this.output_handler;
    }

    getNumInputs() {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs() {
        return parseInt(this.json_object.outputs);
    }

    // For WAP
    inputChannelCount() {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams() {
        return this.inputs_items;
    }

    // For WAP
    getDescriptor() {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value) {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, freeverbNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (0..16383)
     */
    pitchWheel(channel, wheel) {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, freeverbNode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data) {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];

        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }

    // For WAP
    onMidi(data) {
        midiMessage(data);
    }

    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }

    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) {
        this.setState(this.presets[patch])
    }

    static remap(v, mn0, mx0, mn1, mx1) {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }

}

// Factory class
class freeverb {

    static fWorkletProcessors;

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "") {
        console.log("baseLatency " + context.baseLatency);
        console.log("outputLatency " + context.outputLatency);
        console.log("sampleRate " + context.sampleRate);

        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];

        this.fWorkletProcessors = this.fWorkletProcessors || [];
    }

    heap2Str(buf) {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load() {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,

                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                    _isnanf: Number.isNaN,
                    _isinff: function (x) { return !isFinite(x); },
                    _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    _isnan: Number.isNaN,
                    _isinf: function (x) { return !isFinite(x); },
                    _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "freeverb.wasm" : (this.baseURL + "/freeverb.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);

            let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
            let json = this.heap2Str(HEAPU8);
            let json_object = JSON.parse(json);
            let options = { wasm_module: dspModule, json: json };

            if (this.fWorkletProcessors.indexOf(name) === -1) {
                try {
                    let re = /JSON_STR/g;
                    let freeverbProcessorString1 = freeverbProcessorString.replace(re, json);
                    let real_url = window.URL.createObjectURL(new Blob([freeverbProcessorString1], { type: 'text/javascript' }));
                    await this.context.audioWorklet.addModule(real_url);
                    // Keep the DSP name
                    console.log("Keep the DSP name");
                    this.fWorkletProcessors.push(name);
                } catch (e) {
                    console.error(e);
                    console.error("Faust " + this.name + " cannot be loaded or compiled");
                    return null;
                }
            }
            this.node = new freeverbNode(this.context, this.baseURL,
                {
                    numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                    numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                    channelCount: Math.max(1, parseInt(json_object.inputs)),
                    outputChannelCount: [parseInt(json_object.outputs)],
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    processorOptions: options
                });
            this.node.onprocessorerror = () => { console.log('An error from freeverb-processor was detected.'); }
            return (this.node);
        } catch (e) {
            console.error(e);
            console.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    }

    async loadGui() {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createfreeverbGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createfreeverbGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

    linkExists(url) {
        return document.querySelectorAll(`link[href="${url}"]`).length > 0;
    }
}

// Template string for AudioWorkletProcessor

let freeverbProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class freeverbProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                freeverbProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                freeverbProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                freeverbProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                freeverbProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            freeverbProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, freeverbProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            this.running = true;
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.freeverb_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.freeverb_instance.exports;
            this.HEAP = this.freeverb_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                freeverbProcessor.parse_ui(this.json_object.ui, this, freeverbProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
        
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return this.running;
    	}
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('freeverb', freeverbProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "freeverb";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.freeverb = freeverb;
    window.Faustfreeverb = freeverb;
    window[dspName] = freeverb;
} else {
    module.exports = { freeverb };
}
