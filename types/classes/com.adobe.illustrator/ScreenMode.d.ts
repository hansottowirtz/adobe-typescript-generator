/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ScreenMode extends IllustratorEnumBase {
			/** Full screen with menu bar. */
			public static readonly DESKTOP: ScreenMode;
			public static readonly enumCache: CSEnumSharedCache;
			/** Full screen without menu bar. */
			public static readonly FULLSCREEN: ScreenMode;
			/** Display multiple windows. */
			public static readonly MULTIWINDOW: ScreenMode;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}