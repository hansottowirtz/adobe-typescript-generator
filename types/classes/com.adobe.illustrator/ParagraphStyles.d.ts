/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of paragraph styles */
		class ParagraphStyles extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a named paragraph style
			 * @param {string} name the paragraph style name
			 * @returns {Adobe.Illustrator.ParagraphStyle}
			 */
			public add(name: string): Adobe.Illustrator.ParagraphStyle;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.ParagraphStyle}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.ParagraphStyle;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.ParagraphStyle}
			 */
			[idx: number]: Adobe.Illustrator.ParagraphStyle;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}