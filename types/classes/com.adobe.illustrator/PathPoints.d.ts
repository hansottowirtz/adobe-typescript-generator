/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of path points */
		class PathPoints extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a path point
			 * @returns {Adobe.Illustrator.PathPoint}
			 */
			public add(): Adobe.Illustrator.PathPoint;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.PathPoint}
			 */
			[idx: number]: Adobe.Illustrator.PathPoint;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}