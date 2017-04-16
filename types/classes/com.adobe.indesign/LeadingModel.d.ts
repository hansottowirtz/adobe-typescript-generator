/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LeadingModel extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Measures the space between lines from the aki above.
			 * @type {Adobe.Indesign.LeadingModel}
			 * @readonly
			 */
			public static readonly LEADING_MODEL_AKI_ABOVE: Adobe.Indesign.LeadingModel;
			/**
			 * Measures the space between lines from the aki below.
			 * @type {Adobe.Indesign.LeadingModel}
			 * @readonly
			 */
			public static readonly LEADING_MODEL_AKI_BELOW: Adobe.Indesign.LeadingModel;
			/**
			 * Measures the space between the character center points.
			 * @type {Adobe.Indesign.LeadingModel}
			 * @readonly
			 */
			public static readonly LEADING_MODEL_CENTER: Adobe.Indesign.LeadingModel;
			/**
			 * Center down leading model.
			 * @type {Adobe.Indesign.LeadingModel}
			 * @readonly
			 */
			public static readonly LEADING_MODEL_CENTER_DOWN: Adobe.Indesign.LeadingModel;
			/**
			 * Measures the space between type baselines.
			 * @type {Adobe.Indesign.LeadingModel}
			 * @readonly
			 */
			public static readonly LEADING_MODEL_ROMAN: Adobe.Indesign.LeadingModel;
			/**
			 * Alias for LEADING_MODEL_AKI_ABOVE. Measures the space 
			 * between lines from the aki above.
			 * @type {Adobe.Indesign.LeadingModel}
			 * @readonly
			 */
			public static readonly leadingModelAkiAbove: Adobe.Indesign.LeadingModel;
			/**
			 * Alias for LEADING_MODEL_AKI_BELOW. Measures the space 
			 * between lines from the aki below.
			 * @type {Adobe.Indesign.LeadingModel}
			 * @readonly
			 */
			public static readonly leadingModelAkiBelow: Adobe.Indesign.LeadingModel;
			/**
			 * Alias for LEADING_MODEL_CENTER. Measures the space between 
			 * the character center points.
			 * @type {Adobe.Indesign.LeadingModel}
			 * @readonly
			 */
			public static readonly leadingModelCenter: Adobe.Indesign.LeadingModel;
			/**
			 * Alias for LEADING_MODEL_CENTER_DOWN. Center down leading 
			 * model.
			 * @type {Adobe.Indesign.LeadingModel}
			 * @readonly
			 */
			public static readonly leadingModelCenterDown: Adobe.Indesign.LeadingModel;
			/**
			 * Alias for LEADING_MODEL_ROMAN. Measures the space between 
			 * type baselines.
			 * @type {Adobe.Indesign.LeadingModel}
			 * @readonly
			 */
			public static readonly leadingModelRoman: Adobe.Indesign.LeadingModel;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}