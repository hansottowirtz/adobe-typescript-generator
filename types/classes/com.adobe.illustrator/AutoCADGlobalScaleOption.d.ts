/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoCADGlobalScaleOption extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly FitArtboard: Adobe.Illustrator.AutoCADGlobalScaleOption;
			public static readonly OriginalSize: Adobe.Illustrator.AutoCADGlobalScaleOption;
			public static readonly ScaleByValue: Adobe.Illustrator.AutoCADGlobalScaleOption;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}