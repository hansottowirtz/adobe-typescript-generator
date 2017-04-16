/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** color separation screen spot function */
		class ScreenSpotFunction extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the color separation screen spot function name
			 * @type {string}
			 */
			public name: string;
			/**
			 * the spot function in terms of the PostScript commands
			 * @type {string}
			 */
			public spotFunction: string;
		}
	}
}