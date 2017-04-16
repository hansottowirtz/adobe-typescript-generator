/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A color swatch */
		class Swatch extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the color information of the swatch
			 * @type {Adobe.Illustrator.Color}
			 */
			public color: Adobe.Illustrator.Color;
			/**
			 * The swatch's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}