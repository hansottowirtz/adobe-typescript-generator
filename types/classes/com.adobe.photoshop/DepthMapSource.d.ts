/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DepthMapSource extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the image highlight for the depth map. */
			public static readonly IMAGEHIGHLIGHT: Adobe.Photoshop.DepthMapSource;
			/** Uses the layer mask for the depth map. */
			public static readonly LAYERMASK: Adobe.Photoshop.DepthMapSource;
			/** No depth map in use. */
			public static readonly NONE: Adobe.Photoshop.DepthMapSource;
			/** Uses the transparency channel for the depth map. */
			public static readonly TRANSPARENCYCHANNEL: Adobe.Photoshop.DepthMapSource;
			/** Constructor */
			public constructor();
		}
	}
}