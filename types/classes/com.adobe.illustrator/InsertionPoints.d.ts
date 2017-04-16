/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of insertion points */
		class InsertionPoints extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.InsertionPoint}
			 */
			[idx: number]: Adobe.Illustrator.InsertionPoint;
		}
	}
}