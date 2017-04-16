/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A symbol */
		class Symbol extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * The symbol's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * create a duplicate of the object
			 * @returns {Adobe.Illustrator.Symbol}
			 */
			public duplicate(): Adobe.Illustrator.Symbol;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}