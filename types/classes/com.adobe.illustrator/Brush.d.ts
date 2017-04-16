/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A brush */
		class Brush extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The brush's name */
			public name: string;
			/**
			 * Apply a brush or art style to object(s)
			 * @param {any} artItem the page item(s) to apply to
			 */
			public applyTo(artItem: any): void;
		}
	}
}