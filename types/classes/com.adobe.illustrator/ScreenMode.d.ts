/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ScreenMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly DESKTOP: Adobe.Illustrator.ScreenMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly FULLSCREEN: Adobe.Illustrator.ScreenMode;
			public static readonly MULTIWINDOW: Adobe.Illustrator.ScreenMode;
			/** Constructor */
			public constructor();
		}
	}
}