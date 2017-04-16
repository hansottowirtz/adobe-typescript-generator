/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintColorIntent extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly ABSOLUTECOLORIMETRIC: Adobe.Illustrator.PrintColorIntent;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PERCEPTUALINTENT: Adobe.Illustrator.PrintColorIntent;
			public static readonly RELATIVECOLORIMETRIC: Adobe.Illustrator.PrintColorIntent;
			public static readonly SATURATIONINTENT: Adobe.Illustrator.PrintColorIntent;
			/** Constructor */
			public constructor();
		}
	}
}