/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of art styles */
		class GraphicStyles extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.GraphicStyle}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.GraphicStyle;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.GraphicStyle}
			 */
			[idx: number]: Adobe.Illustrator.GraphicStyle;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}