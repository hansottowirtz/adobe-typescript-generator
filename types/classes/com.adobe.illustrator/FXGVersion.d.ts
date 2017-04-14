/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FXGVersion extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** FXG version 1.0. */
			public static readonly VERSION1PT0: FXGVersion;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}