/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LeadingModel extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Measures the space between lines from the aki above.
			 * @type {Adobe.Incopy.LeadingModel}
			 * @readonly
			 */
			public static readonly LEADING_MODEL_AKI_ABOVE: Adobe.Incopy.LeadingModel;
			/**
			 * Measures the space between lines from the aki below.
			 * @type {Adobe.Incopy.LeadingModel}
			 * @readonly
			 */
			public static readonly LEADING_MODEL_AKI_BELOW: Adobe.Incopy.LeadingModel;
			/**
			 * Measures the space between the character center points.
			 * @type {Adobe.Incopy.LeadingModel}
			 * @readonly
			 */
			public static readonly LEADING_MODEL_CENTER: Adobe.Incopy.LeadingModel;
			/**
			 * Center down leading model.
			 * @type {Adobe.Incopy.LeadingModel}
			 * @readonly
			 */
			public static readonly LEADING_MODEL_CENTER_DOWN: Adobe.Incopy.LeadingModel;
			/**
			 * Measures the space between type baselines.
			 * @type {Adobe.Incopy.LeadingModel}
			 * @readonly
			 */
			public static readonly LEADING_MODEL_ROMAN: Adobe.Incopy.LeadingModel;
			/**
			 * Alias for LEADING_MODEL_AKI_ABOVE. Measures the space 
			 * between lines from the aki above.
			 * @type {Adobe.Incopy.LeadingModel}
			 * @readonly
			 */
			public static readonly leadingModelAkiAbove: Adobe.Incopy.LeadingModel;
			/**
			 * Alias for LEADING_MODEL_AKI_BELOW. Measures the space 
			 * between lines from the aki below.
			 * @type {Adobe.Incopy.LeadingModel}
			 * @readonly
			 */
			public static readonly leadingModelAkiBelow: Adobe.Incopy.LeadingModel;
			/**
			 * Alias for LEADING_MODEL_CENTER. Measures the space between 
			 * the character center points.
			 * @type {Adobe.Incopy.LeadingModel}
			 * @readonly
			 */
			public static readonly leadingModelCenter: Adobe.Incopy.LeadingModel;
			/**
			 * Alias for LEADING_MODEL_CENTER_DOWN. Center down leading 
			 * model.
			 * @type {Adobe.Incopy.LeadingModel}
			 * @readonly
			 */
			public static readonly leadingModelCenterDown: Adobe.Incopy.LeadingModel;
			/**
			 * Alias for LEADING_MODEL_ROMAN. Measures the space between 
			 * type baselines.
			 * @type {Adobe.Incopy.LeadingModel}
			 * @readonly
			 */
			public static readonly leadingModelRoman: Adobe.Incopy.LeadingModel;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}