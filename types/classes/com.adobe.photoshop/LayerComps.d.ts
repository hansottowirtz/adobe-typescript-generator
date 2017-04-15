/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Layer compositions associated with the document */
		class LayerComps extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * a layer comp
			 * @param {string} name - name of layer comp
			 * @param {string} comment - comment of the layer comp
			 * @param {boolean} appearance - remember layer appearance, 
			 * layer style, for this layer comp ( default: false )
			 * @param {boolean} position - remember layer position for this 
			 * layer comp ( default: false )
			 * @param {boolean} visibility - remember layer visibility for 
			 * this layer comp ( default: true )
			 */
			public add(name: string, comment: string, appearance: boolean, position: boolean, visibility: boolean): Adobe.Photoshop.LayerComp;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 */
			public getByName(nameParam: string): Adobe.Photoshop.LayerComp;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 */
			public index(idx: number): Adobe.Photoshop.LayerComp;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}