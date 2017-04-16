/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ArtLayers extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a new object
			 * @returns {Adobe.Photoshop.ArtLayer}
			 */
			public add(): Adobe.Photoshop.ArtLayer;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Photoshop.ArtLayer}
			 */
			public getByName(nameParam: string): Adobe.Photoshop.ArtLayer;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.ArtLayer}
			 */
			[idx: number]: Adobe.Photoshop.ArtLayer;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}