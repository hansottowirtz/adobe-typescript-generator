/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ScreenMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Full screen with menu bar. */
			public static readonly DESKTOP: Adobe.Illustrator.ScreenMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Full screen without menu bar. */
			public static readonly FULLSCREEN: Adobe.Illustrator.ScreenMode;
			/** Display multiple windows. */
			public static readonly MULTIWINDOW: Adobe.Illustrator.ScreenMode;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}