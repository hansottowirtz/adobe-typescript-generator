/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentRasterResolution extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** High raster resolution, 300 PPI. */
			public static readonly HighResolution: Adobe.Illustrator.DocumentRasterResolution;
			/** Medium raster resolution, 150 PPI. */
			public static readonly MediumResolution: Adobe.Illustrator.DocumentRasterResolution;
			/** Low raster resolution, 72 PPI. */
			public static readonly ScreenResolution: Adobe.Illustrator.DocumentRasterResolution;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}