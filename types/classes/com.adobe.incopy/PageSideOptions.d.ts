/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PageSideOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The page is on the left side of the binding spine in the 
			 * spread.
			 * @type {Adobe.Incopy.PageSideOptions}
			 * @readonly
			 */
			public static readonly LEFT_HAND: Adobe.Incopy.PageSideOptions;
			/**
			 * Alias for LEFT_HAND. The page is on the left side of the 
			 * binding spine in the spread.
			 * @type {Adobe.Incopy.PageSideOptions}
			 * @readonly
			 */
			public static readonly leftHand: Adobe.Incopy.PageSideOptions;
			/**
			 * The page is on the right side of the binding spine in the 
			 * spread.
			 * @type {Adobe.Incopy.PageSideOptions}
			 * @readonly
			 */
			public static readonly RIGHT_HAND: Adobe.Incopy.PageSideOptions;
			/**
			 * Alias for RIGHT_HAND. The page is on the right side of the 
			 * binding spine in the spread.
			 * @type {Adobe.Incopy.PageSideOptions}
			 * @readonly
			 */
			public static readonly rightHand: Adobe.Incopy.PageSideOptions;
			/**
			 * The page is a single-sided page.
			 * @type {Adobe.Incopy.PageSideOptions}
			 * @readonly
			 */
			public static readonly SINGLE_SIDED: Adobe.Incopy.PageSideOptions;
			/**
			 * Alias for SINGLE_SIDED. The page is a single-sided page.
			 * @type {Adobe.Incopy.PageSideOptions}
			 * @readonly
			 */
			public static readonly singleSided: Adobe.Incopy.PageSideOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}