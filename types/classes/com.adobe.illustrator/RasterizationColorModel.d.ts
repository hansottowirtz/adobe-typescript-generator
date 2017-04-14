/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class RasterizationColorModel extends IllustratorEnumBase {
			/** Rasterize as 1-bit bitmap. */
			public static readonly BITMAP: RasterizationColorModel;
			/** Rasterize in the default document color space. */
			public static readonly DEFAULTCOLORMODEL: RasterizationColorModel;
			public static readonly enumCache: CSEnumSharedCache;
			/** Rasterize as grayscale image. */
			public static readonly GRAYSCALE: RasterizationColorModel;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}