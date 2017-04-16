/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of words */
		class Words extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * create a word
			 * @param {string} contents the text string
			 * @param {any} relativeObject 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation ( default: ElementPlacement.INSIDE )
			 */
			public add(contents: string, relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): Adobe.Illustrator.TextRange;
			/**
			 * @param {string} contents the text string
			 */
			public addBefore(contents: string): Adobe.Illustrator.TextRange;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 */
			public index(idx: number): Adobe.Illustrator.TextRange;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}