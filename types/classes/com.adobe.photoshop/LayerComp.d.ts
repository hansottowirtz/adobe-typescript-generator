/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A layer composition in a document */
		class LayerComp extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * use layer appearance
			 * @type {boolean}
			 */
			public appearance: boolean;
			/**
			 * the description of the layer comp
			 * @type {any}
			 */
			public comment: any;
			/**
			 * the name of the layer comp
			 * @type {string}
			 */
			public name: string;
			/**
			 * use layer position
			 * @type {boolean}
			 */
			public position: boolean;
			/**
			 * the layer comp is currently selected
			 * @type {boolean}
			 * @readonly
			 */
			public readonly selected: boolean;
			/**
			 * use layer visibility
			 * @type {boolean}
			 */
			public visibility: boolean;
			/**
			 * apply the layer comp to the document
			 * @returns {void}
			 */
			public apply(): void;
			/**
			 * recapture the current layer state(s) for this layer comp
			 * @returns {void}
			 */
			public recapture(): void;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * reset the layer comp state to the document state
			 * @returns {void}
			 */
			public resetFromComp(): void;
		}
	}
}