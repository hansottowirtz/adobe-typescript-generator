/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DepthMapSource extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly IMAGEHIGHLIGHT: Adobe.Photoshop.DepthMapSource;
			public static readonly LAYERMASK: Adobe.Photoshop.DepthMapSource;
			public static readonly NONE: Adobe.Photoshop.DepthMapSource;
			public static readonly TRANSPARENCYCHANNEL: Adobe.Photoshop.DepthMapSource;
			/** Constructor */
			public constructor();
		}
	}
}