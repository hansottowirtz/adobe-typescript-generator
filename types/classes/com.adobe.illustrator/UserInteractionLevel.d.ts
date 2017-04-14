/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class UserInteractionLevel extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly DISPLAYALERTS: Adobe.Illustrator.UserInteractionLevel;
			public static readonly DONTDISPLAYALERTS: Adobe.Illustrator.UserInteractionLevel;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}