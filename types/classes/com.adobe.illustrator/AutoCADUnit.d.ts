/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoCADUnit extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly Centimeters: Adobe.Illustrator.AutoCADUnit;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly Inches: Adobe.Illustrator.AutoCADUnit;
			public static readonly Millimeters: Adobe.Illustrator.AutoCADUnit;
			public static readonly Picas: Adobe.Illustrator.AutoCADUnit;
			public static readonly Pixels: Adobe.Illustrator.AutoCADUnit;
			public static readonly Points: Adobe.Illustrator.AutoCADUnit;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}