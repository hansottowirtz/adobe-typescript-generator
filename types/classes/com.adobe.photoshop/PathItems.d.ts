/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** art paths associated with this document */
		class PathItems extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a new path item
			 * @param {string} name name for the new path
			 * @param {any[]} entirePath all of the sub paths, including 
			 * operation, and the path points, including path closed 
			 * parameter
			 * @returns {Adobe.Photoshop.PathItem}
			 */
			public add(name: string, entirePath: any[]): Adobe.Photoshop.PathItem;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Photoshop.PathItem}
			 */
			public getByName(nameParam: string): Adobe.Photoshop.PathItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.PathItem}
			 */
			[idx: number]: Adobe.Photoshop.PathItem;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}