/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of Swatch groups */
		class SwatchGroups extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a Swatch group
			 * @returns {Adobe.Illustrator.SwatchGroup}
			 */
			public add(): Adobe.Illustrator.SwatchGroup;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.SwatchGroup}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.SwatchGroup;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.SwatchGroup}
			 */
			[idx: number]: Adobe.Illustrator.SwatchGroup;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}