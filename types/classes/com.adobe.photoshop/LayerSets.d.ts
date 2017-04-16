/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class LayerSets extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a new object
			 * @returns {Adobe.Photoshop.LayerSet}
			 */
			public add(): Adobe.Photoshop.LayerSet;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Photoshop.LayerSet}
			 */
			public getByName(nameParam: string): Adobe.Photoshop.LayerSet;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.LayerSet}
			 */
			[idx: number]: Adobe.Photoshop.LayerSet;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}