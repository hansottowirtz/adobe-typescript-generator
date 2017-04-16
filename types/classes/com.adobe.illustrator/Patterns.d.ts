/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of patterns */
		class Patterns extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a pattern
			 * @returns {Adobe.Illustrator.Pattern}
			 */
			public add(): Adobe.Illustrator.Pattern;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.Pattern}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Pattern;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.Pattern}
			 */
			[idx: number]: Adobe.Illustrator.Pattern;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}