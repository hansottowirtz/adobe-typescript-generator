/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The screen mode. */
		class ScreenMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Full screen with menu bar. */
			public static readonly DESKTOP: Adobe.Illustrator.ScreenMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Full screen without menu bar. */
			public static readonly FULLSCREEN: Adobe.Illustrator.ScreenMode;
			/** Display multiple windows. */
			public static readonly MULTIWINDOW: Adobe.Illustrator.ScreenMode;
			/** Constructor */
			public constructor();
		}
	}
}