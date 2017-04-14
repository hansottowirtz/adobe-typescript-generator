/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ScreenSpotFunction extends IllustratorHostObject {
			/** the color separation screen spot function name */
			public name: string;
			/** the spot function in terms of the PostScript commands */
			public spotFunction: string;
		}
	}
}