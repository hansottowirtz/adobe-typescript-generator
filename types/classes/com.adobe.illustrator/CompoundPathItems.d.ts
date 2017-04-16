/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of compound path items */
		class CompoundPathItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a compound path item
			 * @returns {Adobe.Illustrator.CompoundPathItem}
			 */
			public add(): Adobe.Illustrator.CompoundPathItem;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.CompoundPathItem}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.CompoundPathItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.CompoundPathItem}
			 */
			[idx: number]: Adobe.Illustrator.CompoundPathItem;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}