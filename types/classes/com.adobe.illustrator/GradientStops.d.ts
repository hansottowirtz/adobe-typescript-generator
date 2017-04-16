/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of gradient stops */
		class GradientStops extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a gradient stop
			 * @returns {Adobe.Illustrator.GradientStop}
			 */
			public add(): Adobe.Illustrator.GradientStop;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.GradientStop}
			 */
			[idx: number]: Adobe.Illustrator.GradientStop;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}