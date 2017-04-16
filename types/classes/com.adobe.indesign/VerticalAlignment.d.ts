/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class VerticalAlignment extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Place the anchored object at the bottom of the vertical 
			 * reference point.
			 */
			public static readonly BOTTOM_ALIGN: Adobe.Indesign.VerticalAlignment;
			/**
			 * Alias for BOTTOM_ALIGN. Place the anchored object at the 
			 * bottom of the vertical reference point.
			 */
			public static readonly bottomAlign: Adobe.Indesign.VerticalAlignment;
			/**
			 * Place the anchored object at the vertical center of the 
			 * vertical reference point.
			 */
			public static readonly CENTER_ALIGN: Adobe.Indesign.VerticalAlignment;
			/**
			 * Alias for CENTER_ALIGN. Place the anchored object at the 
			 * vertical center of the vertical reference point.
			 */
			public static readonly centerAlign: Adobe.Indesign.VerticalAlignment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Place the anchored object at the top of the vertical 
			 * reference point.
			 */
			public static readonly TOP_ALIGN: Adobe.Indesign.VerticalAlignment;
			/**
			 * Alias for TOP_ALIGN. Place the anchored object at the top of 
			 * the vertical reference point.
			 */
			public static readonly topAlign: Adobe.Indesign.VerticalAlignment;
			/** Constructor */
			public constructor();
		}
	}
}