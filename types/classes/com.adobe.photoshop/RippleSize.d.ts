/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The size of undulations. */
		class RippleSize extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Large. */
			public static readonly LARGE: Adobe.Photoshop.RippleSize;
			/** Medium. */
			public static readonly MEDIUM: Adobe.Photoshop.RippleSize;
			/** Small. */
			public static readonly SMALL: Adobe.Photoshop.RippleSize;
			/** Constructor */
			public constructor();
		}
	}
}