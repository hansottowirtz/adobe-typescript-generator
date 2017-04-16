/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** a named style that remembers character attributes */
		class CharacterStyle extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the character properties for the text range
			 * @type {Adobe.Illustrator.CharacterAttributes}
			 * @readonly
			 */
			public readonly characterAttributes: Adobe.Illustrator.CharacterAttributes;
			/**
			 * the character style's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * Apply the character style to text object(s)
			 * @param {any} textItem the text object(s) to apply the style 
			 * to
			 * @param {boolean} clearingOverrides whether to clear any text 
			 * attributes before apply the style ( default: false )
			 * @returns {void}
			 */
			public applyTo(textItem: any, clearingOverrides: boolean): void;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}