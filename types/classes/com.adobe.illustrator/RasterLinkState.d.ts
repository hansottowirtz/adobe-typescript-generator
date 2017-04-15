/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The raster link state. */
		class RasterLinkState extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Image data is from the linked file. */
			public static readonly DATAFROMFILE: Adobe.Illustrator.RasterLinkState;
			/** Image data has been modified. */
			public static readonly DATAMODIFIED: Adobe.Illustrator.RasterLinkState;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Image data is not set. */
			public static readonly NODATA: Adobe.Illustrator.RasterLinkState;
			/** Constructor */
			public constructor();
		}
	}
}