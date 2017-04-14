/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Screen extends IllustratorHostObject {
			/** the color separation screen name */
			public name: string;
			/** the color separation screen information */
			public screenInfo: ScreenInfo;
		}
	}
}