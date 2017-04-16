/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A tag associated with a piece of artwork */
		class Tag extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * The tag's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * the data stored in this tag
			 * @type {string}
			 */
			public value: string;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}