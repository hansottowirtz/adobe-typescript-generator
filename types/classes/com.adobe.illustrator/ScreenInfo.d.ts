/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ScreenInfo extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the screen's angle (in degrees) */
			public angle: number;
			/** Is it the default screen? */
			public defaultScreen: boolean;
			/** the screen's frequency */
			public frequency: number;
		}
	}
}