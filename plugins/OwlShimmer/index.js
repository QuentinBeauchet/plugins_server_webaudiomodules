  
      import WebAudioModule from '../sdk/src/WebAudioModule.js';
      import CompositeAudioNode from '../sdk-parammgr/src/CompositeAudioNode.js';
      import ParamMgrFactory from '../sdk-parammgr/src/ParamMgrFactory.js';
      import fetchModule from './fetchModule.js';
      import { createElement } from './Gui/index.js';
  
      class untitledNode extends CompositeAudioNode {
          _wamNode;

          setup(output, paramMgr) {
              this.connect(output, 0, 0);
              paramMgr.addEventListener('wam-midi', (e) => output.midiMessage(e.detail.data.bytes));
              this._wamNode = paramMgr;
              this._output = output;
          }
  
          destroy() {
              super.destroy();
              if (this._output) this._output.destroy();
          }
  
          getParamValue(name) {
              return this._wamNode.getParamValue(name);
          }
  
          setParamValue(name, value) {
              return this._wamNode.setParamValue(name, value);
          }
    }
  
    const getBasetUrl = (relativeURL) => {
          const baseURL = relativeURL.href.substring(0, relativeURL.href.lastIndexOf('/'));
          return baseURL;
    };
  
    // Definition of a new plugin
    export default class untitledPlugin extends WebAudioModule {
  	_PluginFactory;

	_baseURL = getBasetUrl(new URL('.', import.meta.url));
	_descriptorUrl = this._baseURL + "/descriptor.json";

	async _loadDescriptor() {
		const url = this._descriptorUrl;
		if (!url) throw new TypeError('Descriptor not found');
		const response = await fetch(url);
		const descriptor = await response.json();
		Object.assign(this.descriptor, descriptor);
	}

	async initialize(state) {
		await this._loadDescriptor();
		const imported = await fetchModule('./Node.js');
		this._PluginFactory = imported[Object.keys(imported)[0]];
		return super.initialize(state);
	}

  // The plugin redefines the async method createAudionode()
  // that must return an <Audionode>
  // It also listen to plugin state change event to update the audionode internal state
  async createAudioNode(initialState) {
    const factory = new this._PluginFactory(this.audioContext, this._baseURL);
    const faustNode = await factory.load();
    const paramMgrNode = await ParamMgrFactory.create(this, { internalParamsConfig: Object.fromEntries(faustNode.parameters) });
    const node = new untitledNode(this.audioContext);
    node.setup(faustNode, paramMgrNode);
  
    if (initialState) 
      node.setState(initialState);

    return node;
  }

  createGui() {
    return createElement(this);
  }
 }