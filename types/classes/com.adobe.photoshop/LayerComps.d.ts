/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Layer compositions associated with the document */
		class LayerComps extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * a layer comp
			 * @param {string} name name of layer comp
			 * @param {string} comment comment of the layer comp
			 * @param {boolean} appearance remember layer appearance, layer 
			 * style, for this layer comp ( default: false )
			 * @param {boolean} position remember layer position for this 
			 * layer comp ( default: false )
			 * @param {boolean} visibility remember layer visibility for 
			 * this layer comp ( default: true )
			 * @returns {Adobe.Photoshop.LayerComp}
			 */
			public add(name: string, comment: string, appearance: boolean, position: boolean, visibility: boolean): Adobe.Photoshop.LayerComp;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Photoshop.LayerComp}
			 */
			public getByName(nameParam: string): Adobe.Photoshop.LayerComp;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.LayerComp}
			 */
			[idx: number]: Adobe.Photoshop.LayerComp;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}