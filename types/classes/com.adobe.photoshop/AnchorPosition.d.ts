/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The point around which to transform the object. */
		class AnchorPosition extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The middle point of the bottom of the object. */
			public static readonly BOTTOMCENTER: Adobe.Photoshop.AnchorPosition;
			/** The bottom left corner of the object. */
			public static readonly BOTTOMLEFT: Adobe.Photoshop.AnchorPosition;
			/** The bottom right corner of the object. */
			public static readonly BOTTOMRIGHT: Adobe.Photoshop.AnchorPosition;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The center of the object. */
			public static readonly MIDDLECENTER: Adobe.Photoshop.AnchorPosition;
			/** The middle point on the left side of the object. */
			public static readonly MIDDLELEFT: Adobe.Photoshop.AnchorPosition;
			/** The middle point on the right side of the object. */
			public static readonly MIDDLERIGHT: Adobe.Photoshop.AnchorPosition;
			/** The middle point on the top of the object. */
			public static readonly TOPCENTER: Adobe.Photoshop.AnchorPosition;
			/** The top left corner of the object. */
			public static readonly TOPLEFT: Adobe.Photoshop.AnchorPosition;
			/** The top right corner of the object. */
			public static readonly TOPRIGHT: Adobe.Photoshop.AnchorPosition;
			/** Constructor */
			public constructor();
		}
	}
}