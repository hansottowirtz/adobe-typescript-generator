/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoCADUnit extends IllustratorEnumBase {
			public static readonly Centimeters: AutoCADUnit;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly Inches: AutoCADUnit;
			public static readonly Millimeters: AutoCADUnit;
			public static readonly Picas: AutoCADUnit;
			public static readonly Pixels: AutoCADUnit;
			public static readonly Points: AutoCADUnit;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}