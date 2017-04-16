/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of character styles */
		class CharacterStyles extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * create a named character style
			 * @param {string} name the character style name
			 * @returns {Adobe.Illustrator.CharacterStyle}
			 */
			public add(name: string): Adobe.Illustrator.CharacterStyle;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Illustrator.CharacterStyle}
			 */
			public getByName(nameParam: string): Adobe.Illustrator.CharacterStyle;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Illustrator.CharacterStyle}
			 */
			[idx: number]: Adobe.Illustrator.CharacterStyle;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}