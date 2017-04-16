/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Channels of the document */
		class Channels extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a new object
			 * @returns {Adobe.Photoshop.Channel}
			 */
			public add(): Adobe.Photoshop.Channel;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Photoshop.Channel}
			 */
			public getByName(nameParam: string): Adobe.Photoshop.Channel;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.Channel}
			 */
			[idx: number]: Adobe.Photoshop.Channel;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}