/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PlacedItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a placed item
			 * @returns {Adobe.Illustrator.PlacedItem}
			 */
			public add(): Adobe.Illustrator.PlacedItem;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.PlacedItem}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.PlacedItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.PlacedItem}
			 */
			[idx: number]: Adobe.Illustrator.PlacedItem;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}