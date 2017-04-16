/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Screen information */
		class ScreenInfo extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the screen's angle (in degrees)
			 * @type {number}
			 */
			public angle: number;
			/**
			 * Is it the default screen?
			 * @type {boolean}
			 */
			public defaultScreen: boolean;
			/**
			 * the screen's frequency
			 * @type {number}
			 */
			public frequency: number;
		}
	}
}