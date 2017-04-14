/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoCADRasterFormat extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly JPEG: AutoCADRasterFormat;
			public static readonly PNG: AutoCADRasterFormat;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}