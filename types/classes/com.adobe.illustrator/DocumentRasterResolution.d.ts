/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentRasterResolution extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly HighResolution: Adobe.Illustrator.DocumentRasterResolution;
			public static readonly MediumResolution: Adobe.Illustrator.DocumentRasterResolution;
			public static readonly ScreenResolution: Adobe.Illustrator.DocumentRasterResolution;
			/** Constructor */
			public constructor();
		}
	}
}