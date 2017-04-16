/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A brush */
		class Brush extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * The brush's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * Apply a brush or art style to object(s)
			 * @param {any} artItem the page item(s) to apply to
			 * @returns {void}
			 */
			public applyTo(artItem: any): void;
		}
	}
}