/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** color separation screen */
		class Screen extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the color separation screen name */
			public name: string;
			/** the color separation screen information */
			public screenInfo: Adobe.Illustrator.ScreenInfo;
		}
	}
}