/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** color separation screen spot function */
		class ScreenSpotFunction extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the color separation screen spot function name */
			public name: string;
			/** the spot function in terms of the PostScript commands */
			public spotFunction: string;
		}
	}
}