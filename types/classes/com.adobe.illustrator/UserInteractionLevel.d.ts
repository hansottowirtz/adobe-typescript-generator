/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class UserInteractionLevel extends IllustratorEnumBase {
			public static readonly DISPLAYALERTS: UserInteractionLevel;
			public static readonly DONTDISPLAYALERTS: UserInteractionLevel;
			public static readonly enumCache: CSEnumSharedCache;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}