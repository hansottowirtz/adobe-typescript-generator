/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** History states associated with the document */
		class HistoryStates extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
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
			 * @returns {Adobe.Photoshop.HistoryState}
			 */
			public getByName(nameParam: string): Adobe.Photoshop.HistoryState;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.HistoryState}
			 */
			[idx: number]: Adobe.Photoshop.HistoryState;
		}
	}
}