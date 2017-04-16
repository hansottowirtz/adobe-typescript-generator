/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of page items */
		class PageItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
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
			 * @returns {Adobe.Illustrator.PageItem}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.PageItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.PageItem}
			 */
			[idx: number]: Adobe.Illustrator.PageItem;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}