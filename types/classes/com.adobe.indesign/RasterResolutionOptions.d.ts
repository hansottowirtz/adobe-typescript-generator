/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RasterResolutionOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * 96 pixels per inch.
			 * @type {Adobe.Indesign.RasterResolutionOptions}
			 * @readonly
			 */
			public static readonly NINETY_SIX_PPI: Adobe.Indesign.RasterResolutionOptions;
			/**
			 * Alias for NINETY_SIX_PPI. 96 pixels per inch.
			 * @type {Adobe.Indesign.RasterResolutionOptions}
			 * @readonly
			 */
			public static readonly ninetySixPpi: Adobe.Indesign.RasterResolutionOptions;
			/**
			 * 144 pixels per inch.
			 * @type {Adobe.Indesign.RasterResolutionOptions}
			 * @readonly
			 */
			public static readonly ONE_HUNDRED_FORTY_FOUR_PPI: Adobe.Indesign.RasterResolutionOptions;
			/**
			 * Alias for ONE_HUNDRED_FORTY_FOUR_PPI. 144 pixels per inch.
			 * @type {Adobe.Indesign.RasterResolutionOptions}
			 * @readonly
			 */
			public static readonly oneHundredFortyFourPpi: Adobe.Indesign.RasterResolutionOptions;
			/**
			 * 72 pixels per inch.
			 * @type {Adobe.Indesign.RasterResolutionOptions}
			 * @readonly
			 */
			public static readonly SEVENTY_TWO_PPI: Adobe.Indesign.RasterResolutionOptions;
			/**
			 * Alias for SEVENTY_TWO_PPI. 72 pixels per inch.
			 * @type {Adobe.Indesign.RasterResolutionOptions}
			 * @readonly
			 */
			public static readonly seventyTwoPpi: Adobe.Indesign.RasterResolutionOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}