/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoCADCompatibility extends IllustratorEnumBase {
			public static readonly AutoCADRelease13: AutoCADCompatibility;
			public static readonly AutoCADRelease14: AutoCADCompatibility;
			public static readonly AutoCADRelease15: AutoCADCompatibility;
			public static readonly AutoCADRelease18: AutoCADCompatibility;
			public static readonly enumCache: CSEnumSharedCache;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}