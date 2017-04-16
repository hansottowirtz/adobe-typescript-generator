/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of words */
		class Words extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a word
			 * @param {string} contents the text string
			 * @param {any} relativeObject 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation ( default: ElementPlacement.INSIDE )
			 * @returns {Adobe.Illustrator.TextRange}
			 */
			public add(contents: string, relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): Adobe.Illustrator.TextRange;
			/**
			 * @param {string} contents the text string
			 * @returns {Adobe.Illustrator.TextRange}
			 */
			public addBefore(contents: string): Adobe.Illustrator.TextRange;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.TextRange}
			 */
			[idx: number]: Adobe.Illustrator.TextRange;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}