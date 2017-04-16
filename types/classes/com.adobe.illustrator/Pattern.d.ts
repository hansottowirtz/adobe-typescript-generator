/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A pattern */
		class Pattern extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * The pattern's name
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