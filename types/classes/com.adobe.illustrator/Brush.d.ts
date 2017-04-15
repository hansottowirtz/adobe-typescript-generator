/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class Brush extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The brush's name. */
			public name: string;
			/**
			 * Apply a brush or art style to object(s)
			 * @param {any} artItem - The page item(s) to apply to.
			 */
			public applyTo(artItem: any): void;
		}
	}
}