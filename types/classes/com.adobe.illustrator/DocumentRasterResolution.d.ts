/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentRasterResolution extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** High raster resolution, 300 PPI. */
			public static readonly HighResolution: DocumentRasterResolution;
			/** Medium raster resolution, 150 PPI. */
			public static readonly MediumResolution: DocumentRasterResolution;
			/** Low raster resolution, 72 PPI. */
			public static readonly ScreenResolution: DocumentRasterResolution;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}