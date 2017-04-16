/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An installed font */
		class TextFont extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the font's family name
			 * @type {string}
			 * @readonly
			 */
			public readonly family: string;
			/**
			 * The font's full name
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * the font's style name
			 * @type {string}
			 * @readonly
			 */
			public readonly style: string;
		}
	}
}