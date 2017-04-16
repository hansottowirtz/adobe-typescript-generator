/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An art style */
		class GraphicStyle extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * The art style's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * Apply a brush or art style to object(s)
			 * @param {any} artItem the page item(s) to apply to
			 * @returns {void}
			 */
			public applyTo(artItem: any): void;
			/**
			 * Merge an art style to object(s) current style(s)
			 * @param {any} artItem the page item(s) to merge to
			 * @returns {void}
			 */
			public mergeTo(artItem: any): void;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}