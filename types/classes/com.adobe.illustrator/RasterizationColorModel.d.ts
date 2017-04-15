/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Controls the color model for the rasterization. */
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