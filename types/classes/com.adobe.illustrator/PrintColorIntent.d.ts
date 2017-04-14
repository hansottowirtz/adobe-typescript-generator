/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintColorIntent extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Absolute colorimetric. */
			public static readonly ABSOLUTECOLORIMETRIC: Adobe.Illustrator.PrintColorIntent;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Perceptual color intent. */
			public static readonly PERCEPTUALINTENT: Adobe.Illustrator.PrintColorIntent;
			/** Relative colorimetric. */
			public static readonly RELATIVECOLORIMETRIC: Adobe.Illustrator.PrintColorIntent;
			/** Saturation color intent. */
			public static readonly SATURATIONINTENT: Adobe.Illustrator.PrintColorIntent;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}