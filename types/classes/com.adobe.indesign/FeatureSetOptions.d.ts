/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FeatureSetOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for JAPANESE. Uses the Japanese feature set and 
			 * defaults.
			 * @type {Adobe.Indesign.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly japanese: Adobe.Indesign.FeatureSetOptions;
			/**
			 * Uses the Japanese feature set and defaults.
			 * @type {Adobe.Indesign.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly JAPANESE: Adobe.Indesign.FeatureSetOptions;
			/**
			 * Alias for RIGHTTOLEFT. Uses the R2L feature set
			 * @type {Adobe.Indesign.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly righttoleft: Adobe.Indesign.FeatureSetOptions;
			/**
			 * Uses the R2L feature set
			 * @type {Adobe.Indesign.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly RIGHTTOLEFT: Adobe.Indesign.FeatureSetOptions;
			/**
			 * Alias for ROMAN. Uses the Roman feature set and defaults.
			 * @type {Adobe.Indesign.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly roman: Adobe.Indesign.FeatureSetOptions;
			/**
			 * Uses the Roman feature set and defaults.
			 * @type {Adobe.Indesign.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly ROMAN: Adobe.Indesign.FeatureSetOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}