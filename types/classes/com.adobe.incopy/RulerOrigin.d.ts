/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RulerOrigin extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The top-left corner of each page is a new zero point on the 
			 * horizontal ruler.
			 */
			public static readonly PAGE_ORIGIN: Adobe.Incopy.RulerOrigin;
			/**
			 * Alias for PAGE_ORIGIN. The top-left corner of each page is a 
			 * new zero point on the horizontal ruler.
			 */
			public static readonly pageOrigin: Adobe.Incopy.RulerOrigin;
			/**
			 * The zero point is at the top-left corner of the left-most 
			 * page and at the top of the binding spine. The horizontal 
			 * ruler measures from the leftmost page to the binding edge, 
			 * and from the binding spine through the right edge of the 
			 * right-most page. Also locks the zero point and prevents 
			 * manual overrides.
			 */
			public static readonly SPINE_ORIGIN: Adobe.Incopy.RulerOrigin;
			/**
			 * Alias for SPINE_ORIGIN. The zero point is at the top-left 
			 * corner of the left-most page and at the top of the binding 
			 * spine. The horizontal ruler measures from the leftmost page 
			 * to the binding edge, and from the binding spine through the 
			 * right edge of the right-most page. Also locks the zero point 
			 * and prevents manual overrides.
			 */
			public static readonly spineOrigin: Adobe.Incopy.RulerOrigin;
			/**
			 * The zero point is at the top-left corner of the spread and 
			 * the ruler increments continuously across all pages of the 
			 * spread.
			 */
			public static readonly SPREAD_ORIGIN: Adobe.Incopy.RulerOrigin;
			/**
			 * Alias for SPREAD_ORIGIN. The zero point is at the top-left 
			 * corner of the spread and the ruler increments continuously 
			 * across all pages of the spread.
			 */
			public static readonly spreadOrigin: Adobe.Incopy.RulerOrigin;
			/** Constructor */
			public constructor();
		}
	}
}