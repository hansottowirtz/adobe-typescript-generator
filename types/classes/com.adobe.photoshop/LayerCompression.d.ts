/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The layer compression type. */
		class LayerCompression extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Run Length Encoding, which is lossless. */
			public static readonly RLE: Adobe.Photoshop.LayerCompression;
			/**
			 * Zip compression, which is lossless and most effective for 
			 * images that contain large areas of single color.
			 */
			public static readonly ZIP: Adobe.Photoshop.LayerCompression;
			/** Constructor */
			public constructor();
		}
	}
}