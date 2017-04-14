/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class RulerUnits extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Ruler units are measured in centimeters. */
			public static readonly Centimeters: Adobe.Illustrator.RulerUnits;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Ruler units are unknown. */
			public static readonly Inches: Adobe.Illustrator.RulerUnits;
			/** Ruler units are measured in millimeters. */
			public static readonly Millimeters: Adobe.Illustrator.RulerUnits;
			/** Ruler units are measured in picas. */
			public static readonly Picas: Adobe.Illustrator.RulerUnits;
			/** Ruler units are measured in pixels. */
			public static readonly Pixels: Adobe.Illustrator.RulerUnits;
			/** Ruler units are measured in points. */
			public static readonly Points: Adobe.Illustrator.RulerUnits;
			/** Ruler units are measured in Qs. */
			public static readonly Qs: Adobe.Illustrator.RulerUnits;
			/** Ruler units are unknown. */
			public static readonly Unknown: Adobe.Illustrator.RulerUnits;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}