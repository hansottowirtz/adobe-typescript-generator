/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageSideOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The page is on the left side of the binding spine in the 
			 * spread.
			 * @type {Adobe.Indesign.PageSideOptions}
			 * @readonly
			 */
			public static readonly LEFT_HAND: Adobe.Indesign.PageSideOptions;
			/**
			 * Alias for LEFT_HAND. The page is on the left side of the 
			 * binding spine in the spread.
			 * @type {Adobe.Indesign.PageSideOptions}
			 * @readonly
			 */
			public static readonly leftHand: Adobe.Indesign.PageSideOptions;
			/**
			 * The page is on the right side of the binding spine in the 
			 * spread.
			 * @type {Adobe.Indesign.PageSideOptions}
			 * @readonly
			 */
			public static readonly RIGHT_HAND: Adobe.Indesign.PageSideOptions;
			/**
			 * Alias for RIGHT_HAND. The page is on the right side of the 
			 * binding spine in the spread.
			 * @type {Adobe.Indesign.PageSideOptions}
			 * @readonly
			 */
			public static readonly rightHand: Adobe.Indesign.PageSideOptions;
			/**
			 * The page is a single-sided page.
			 * @type {Adobe.Indesign.PageSideOptions}
			 * @readonly
			 */
			public static readonly SINGLE_SIDED: Adobe.Indesign.PageSideOptions;
			/**
			 * Alias for SINGLE_SIDED. The page is a single-sided page.
			 * @type {Adobe.Indesign.PageSideOptions}
			 * @readonly
			 */
			public static readonly singleSided: Adobe.Indesign.PageSideOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}