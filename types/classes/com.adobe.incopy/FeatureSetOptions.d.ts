/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FeatureSetOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for JAPANESE. Uses the Japanese feature set and 
			 * defaults.
			 * @type {Adobe.Incopy.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly japanese: Adobe.Incopy.FeatureSetOptions;
			/**
			 * Uses the Japanese feature set and defaults.
			 * @type {Adobe.Incopy.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly JAPANESE: Adobe.Incopy.FeatureSetOptions;
			/**
			 * Alias for RIGHTTOLEFT. Uses the R2L feature set
			 * @type {Adobe.Incopy.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly righttoleft: Adobe.Incopy.FeatureSetOptions;
			/**
			 * Uses the R2L feature set
			 * @type {Adobe.Incopy.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly RIGHTTOLEFT: Adobe.Incopy.FeatureSetOptions;
			/**
			 * Alias for ROMAN. Uses the Roman feature set and defaults.
			 * @type {Adobe.Incopy.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly roman: Adobe.Incopy.FeatureSetOptions;
			/**
			 * Uses the Roman feature set and defaults.
			 * @type {Adobe.Incopy.FeatureSetOptions}
			 * @readonly
			 */
			public static readonly ROMAN: Adobe.Incopy.FeatureSetOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}