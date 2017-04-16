/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RulerOrigin extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The top-left corner of each page is a new zero point on the 
			 * horizontal ruler.
			 * @type {Adobe.Incopy.RulerOrigin}
			 * @readonly
			 */
			public static readonly PAGE_ORIGIN: Adobe.Incopy.RulerOrigin;
			/**
			 * Alias for PAGE_ORIGIN. The top-left corner of each page is a 
			 * new zero point on the horizontal ruler.
			 * @type {Adobe.Incopy.RulerOrigin}
			 * @readonly
			 */
			public static readonly pageOrigin: Adobe.Incopy.RulerOrigin;
			/**
			 * The zero point is at the top-left corner of the left-most 
			 * page and at the top of the binding spine. The horizontal 
			 * ruler measures from the leftmost page to the binding edge, 
			 * and from the binding spine through the right edge of the 
			 * right-most page. Also locks the zero point and prevents 
			 * manual overrides.
			 * @type {Adobe.Incopy.RulerOrigin}
			 * @readonly
			 */
			public static readonly SPINE_ORIGIN: Adobe.Incopy.RulerOrigin;
			/**
			 * Alias for SPINE_ORIGIN. The zero point is at the top-left 
			 * corner of the left-most page and at the top of the binding 
			 * spine. The horizontal ruler measures from the leftmost page 
			 * to the binding edge, and from the binding spine through the 
			 * right edge of the right-most page. Also locks the zero point 
			 * and prevents manual overrides.
			 * @type {Adobe.Incopy.RulerOrigin}
			 * @readonly
			 */
			public static readonly spineOrigin: Adobe.Incopy.RulerOrigin;
			/**
			 * The zero point is at the top-left corner of the spread and 
			 * the ruler increments continuously across all pages of the 
			 * spread.
			 * @type {Adobe.Incopy.RulerOrigin}
			 * @readonly
			 */
			public static readonly SPREAD_ORIGIN: Adobe.Incopy.RulerOrigin;
			/**
			 * Alias for SPREAD_ORIGIN. The zero point is at the top-left 
			 * corner of the spread and the ruler increments continuously 
			 * across all pages of the spread.
			 * @type {Adobe.Incopy.RulerOrigin}
			 * @readonly
			 */
			public static readonly spreadOrigin: Adobe.Incopy.RulerOrigin;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}