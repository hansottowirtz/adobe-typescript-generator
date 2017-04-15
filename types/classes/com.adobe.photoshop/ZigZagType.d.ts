/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The method of zigzagging. */
		class ZigZagType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Pixels are rotated around the center of the selection. */
			public static readonly AROUNDCENTER: Adobe.Photoshop.ZigZagType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Pixels are displaced toward or away from the center of the 
			 * selection.
			 */
			public static readonly OUTFROMCENTER: Adobe.Photoshop.ZigZagType;
			/** Pixels are displaced to the upper left or lower right. */
			public static readonly PONDRIPPLES: Adobe.Photoshop.ZigZagType;
			/** Constructor */
			public constructor();
		}
	}
}