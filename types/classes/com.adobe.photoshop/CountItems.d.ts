/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class CountItems extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * a count item
			 * @param {any[]} position - position of origin (unit value)
			 */
			public add(position: any[]): Adobe.Photoshop.CountItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx - 
			 */
			public index(idx: number): Adobe.Photoshop.CountItem;
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