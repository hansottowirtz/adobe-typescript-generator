/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PathItems extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * create a new path item
			 * @param {string} name - name for the new path
			 * @param {any} entirePath - all of the sub paths, including 
			 * operation, and the path points, including path closed 
			 * parameter
			 */
			public add(name: string, entirePath: any): Adobe.Photoshop.PathItem;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam - 
			 */
			public getByName(nameParam: string): Adobe.Photoshop.PathItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx - 
			 */
			public index(idx: number): Adobe.Photoshop.PathItem;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}