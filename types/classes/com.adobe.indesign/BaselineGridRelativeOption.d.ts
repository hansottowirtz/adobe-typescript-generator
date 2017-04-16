/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BaselineGridRelativeOption extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The baseline grid offset zero point is at the top page 
			 * margin.
			 * @type {Adobe.Indesign.BaselineGridRelativeOption}
			 * @readonly
			 */
			public static readonly TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION: Adobe.Indesign.BaselineGridRelativeOption;
			/**
			 * The baseline grid offset zero point is at the top of the 
			 * page.
			 * @type {Adobe.Indesign.BaselineGridRelativeOption}
			 * @readonly
			 */
			public static readonly TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION: Adobe.Indesign.BaselineGridRelativeOption;
			/**
			 * Alias for TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION. 
			 * The baseline grid offset zero point is at the top page 
			 * margin.
			 * @type {Adobe.Indesign.BaselineGridRelativeOption}
			 * @readonly
			 */
			public static readonly topOfMarginOfBaselineGridRelativeOption: Adobe.Indesign.BaselineGridRelativeOption;
			/**
			 * Alias for TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION. The 
			 * baseline grid offset zero point is at the top of the page.
			 * @type {Adobe.Indesign.BaselineGridRelativeOption}
			 * @readonly
			 */
			public static readonly topOfPageOfBaselineGridRelativeOption: Adobe.Indesign.BaselineGridRelativeOption;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}