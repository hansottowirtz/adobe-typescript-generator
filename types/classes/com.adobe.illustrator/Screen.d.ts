/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** color separation screen */
		class Screen extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the color separation screen name
			 * @type {string}
			 */
			public name: string;
			/**
			 * the color separation screen information
			 * @type {Adobe.Illustrator.ScreenInfo}
			 */
			public screenInfo: Adobe.Illustrator.ScreenInfo;
		}
	}
}