/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoCADGlobalScaleOption extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly FitArtboard: AutoCADGlobalScaleOption;
			public static readonly OriginalSize: AutoCADGlobalScaleOption;
			public static readonly ScaleByValue: AutoCADGlobalScaleOption;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}