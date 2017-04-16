/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An art style */
		class GraphicStyle extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The art style's name */
			public name: string;
			/**
			 * Apply a brush or art style to object(s)
			 * @param {any} artItem the page item(s) to apply to
			 */
			public applyTo(artItem: any): void;
			/**
			 * Merge an art style to object(s) current style(s)
			 * @param {any} artItem the page item(s) to merge to
			 */
			public mergeTo(artItem: any): void;
			/** delete the object */
			public remove(): void;
		}
	}
}