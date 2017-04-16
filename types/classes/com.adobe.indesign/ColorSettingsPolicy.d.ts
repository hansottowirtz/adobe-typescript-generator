/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ColorSettingsPolicy extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Turns off color management for documents whose profiles do 
			 * not match the working space. For imported colors, numeric 
			 * values override color appearance.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 * @readonly
			 */
			public static readonly COLOR_POLICY_OFF: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * Alias for COLOR_POLICY_OFF. Turns off color management for 
			 * documents whose profiles do not match the working space. For 
			 * imported colors, numeric values override color appearance.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 * @readonly
			 */
			public static readonly colorPolicyOff: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * Preserves raw color numbers and ignores embedded color 
			 * profiles.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 * @readonly
			 */
			public static readonly COMBINATION_OF_PRESERVE_AND_SAFE_CMYK: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * Alias for COMBINATION_OF_PRESERVE_AND_SAFE_CMYK. Preserves 
			 * raw color numbers and ignores embedded color profiles.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 * @readonly
			 */
			public static readonly combinationOfPreserveAndSafeCmyk: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * Converts newly opened documents to the current working 
			 * space. For imported colors, color appearance overrides 
			 * numeric values.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 * @readonly
			 */
			public static readonly CONVERT_TO_WORKING_SPACE: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * Alias for CONVERT_TO_WORKING_SPACE. Converts newly opened 
			 * documents to the current working space. For imported colors, 
			 * color appearance overrides numeric values.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 * @readonly
			 */
			public static readonly convertToWorkingSpace: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Preserves embedded color profiles in newly opened documents.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 * @readonly
			 */
			public static readonly PRESERVE_EMBEDDED_PROFILES: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * Alias for PRESERVE_EMBEDDED_PROFILES. Preserves embedded 
			 * color profiles in newly opened documents.
			 * @type {Adobe.Indesign.ColorSettingsPolicy}
			 * @readonly
			 */
			public static readonly preserveEmbeddedProfiles: Adobe.Indesign.ColorSettingsPolicy;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}