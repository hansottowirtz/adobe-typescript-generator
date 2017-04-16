/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class RasterizeType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ENTIRELAYER: Adobe.Photoshop.RasterizeType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly FILLCONTENT: Adobe.Photoshop.RasterizeType;
			public static readonly LAYERCLIPPINGPATH: Adobe.Photoshop.RasterizeType;
			public static readonly LINKEDLAYERS: Adobe.Photoshop.RasterizeType;
			public static readonly SHAPE: Adobe.Photoshop.RasterizeType;
			public static readonly TEXTCONTENTS: Adobe.Photoshop.RasterizeType;
			/** Constructor */
			public constructor();
		}
	}
}