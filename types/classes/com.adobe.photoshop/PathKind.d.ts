/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PathKind extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Clipping path. */
			public static readonly CLIPPINGPATH: Adobe.Photoshop.PathKind;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Normal path. */
			public static readonly NORMALPATH: Adobe.Photoshop.PathKind;
			/** Text mask path. */
			public static readonly TEXTMASK: Adobe.Photoshop.PathKind;
			/** Vector mask path. */
			public static readonly VECTORMASK: Adobe.Photoshop.PathKind;
			/** Workpath. */
			public static readonly WORKPATH: Adobe.Photoshop.PathKind;
			/** Constructor */
			public constructor();
		}
	}
}