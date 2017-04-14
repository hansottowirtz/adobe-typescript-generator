/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class RulerUnits extends IllustratorEnumBase {
			/** Ruler units are measured in centimeters. */
			public static readonly Centimeters: RulerUnits;
			public static readonly enumCache: CSEnumSharedCache;
			/** Ruler units are unknown. */
			public static readonly Inches: RulerUnits;
			/** Ruler units are measured in millimeters. */
			public static readonly Millimeters: RulerUnits;
			/** Ruler units are measured in picas. */
			public static readonly Picas: RulerUnits;
			/** Ruler units are measured in pixels. */
			public static readonly Pixels: RulerUnits;
			/** Ruler units are measured in points. */
			public static readonly Points: RulerUnits;
			/** Ruler units are measured in Qs. */
			public static readonly Qs: RulerUnits;
			/** Ruler units are unknown. */
			public static readonly Unknown: RulerUnits;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}