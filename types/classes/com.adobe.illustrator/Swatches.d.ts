/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of swatches */
		class Swatches extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a swatch
			 * @returns {Adobe.Illustrator.Swatch}
			 */
			public add(): Adobe.Illustrator.Swatch;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.Swatch}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Swatch;
			/**
			 * get selected swatches in the document
			 * @returns {any[]}
			 */
			public getSelected(): any[];
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.Swatch}
			 */
			[idx: number]: Adobe.Illustrator.Swatch;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}