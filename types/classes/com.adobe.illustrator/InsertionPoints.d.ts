/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of insertion points */
		class InsertionPoints extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 */
			public index(idx: number): Adobe.Illustrator.InsertionPoint;
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
		}
	}
}