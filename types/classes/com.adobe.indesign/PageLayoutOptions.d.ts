/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageLayoutOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses default page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Alias for DEFAULT_VALUE. Uses default page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.PageLayoutOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Single page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly SINGLE_PAGE: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Single page continuous layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly SINGLE_PAGE_CONTINUOUS: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Alias for SINGLE_PAGE. Single page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly singlePage: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Alias for SINGLE_PAGE_CONTINUOUS. Single page continuous 
			 * layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly singlePageContinuous: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Two up cover page page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly TWO_UP_COVER_PAGE: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Two up cover page continuous page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly TWO_UP_COVER_PAGE_CONTINUOUS: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Two up facing page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly TWO_UP_FACING: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Two up facing continuous page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly TWO_UP_FACING_CONTINUOUS: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Alias for TWO_UP_COVER_PAGE. Two up cover page page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly twoUpCoverPage: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Alias for TWO_UP_COVER_PAGE_CONTINUOUS. Two up cover page 
			 * continuous page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly twoUpCoverPageContinuous: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Alias for TWO_UP_FACING. Two up facing page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly twoUpFacing: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Alias for TWO_UP_FACING_CONTINUOUS. Two up facing continuous 
			 * page layout.
			 * @type {Adobe.Indesign.PageLayoutOptions}
			 * @readonly
			 */
			public static readonly twoUpFacingContinuous: Adobe.Indesign.PageLayoutOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}