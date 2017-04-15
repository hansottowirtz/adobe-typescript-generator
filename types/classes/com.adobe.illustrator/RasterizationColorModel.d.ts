/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class RasterizationColorModel extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Rasterize as 1-bit bitmap. */
			public static readonly BITMAP: Adobe.Illustrator.RasterizationColorModel;
			/** Rasterize in the default document color space. */
			public static readonly DEFAULTCOLORMODEL: Adobe.Illustrator.RasterizationColorModel;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Rasterize as grayscale image. */
			public static readonly GRAYSCALE: Adobe.Illustrator.RasterizationColorModel;
			/** Constructor */
			public constructor();
		}
	}
}