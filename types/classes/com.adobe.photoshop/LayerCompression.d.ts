/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class LayerCompression extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly RLE: Adobe.Photoshop.LayerCompression;
			public static readonly ZIP: Adobe.Photoshop.LayerCompression;
			/** Constructor */
			public constructor();
		}
	}
}