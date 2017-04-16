/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Layers extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Photoshop.Layer}
			 */
			public getByName(nameParam: string): Adobe.Photoshop.Layer;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.Layer}
			 */
			[idx: number]: Adobe.Photoshop.Layer;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}