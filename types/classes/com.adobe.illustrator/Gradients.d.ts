/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of gradients */
		class Gradients extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a gradient
			 * @returns {Adobe.Illustrator.Gradient}
			 */
			public add(): Adobe.Illustrator.Gradient;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.Gradient}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Gradient;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.Gradient}
			 */
			[idx: number]: Adobe.Illustrator.Gradient;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}