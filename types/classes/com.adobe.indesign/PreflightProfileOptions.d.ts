/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightProfileOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Preflight using the embedded profile.
			 * @type {Adobe.Indesign.PreflightProfileOptions}
			 * @readonly
			 */
			public static readonly USE_EMBEDDED_PROFILE: Adobe.Indesign.PreflightProfileOptions;
			/**
			 * Preflight using working profile.
			 * @type {Adobe.Indesign.PreflightProfileOptions}
			 * @readonly
			 */
			public static readonly USE_WORKING_PROFILE: Adobe.Indesign.PreflightProfileOptions;
			/**
			 * Alias for USE_EMBEDDED_PROFILE. Preflight using the embedded 
			 * profile.
			 * @type {Adobe.Indesign.PreflightProfileOptions}
			 * @readonly
			 */
			public static readonly useEmbeddedProfile: Adobe.Indesign.PreflightProfileOptions;
			/**
			 * Alias for USE_WORKING_PROFILE. Preflight using working 
			 * profile.
			 * @type {Adobe.Indesign.PreflightProfileOptions}
			 * @readonly
			 */
			public static readonly useWorkingProfile: Adobe.Indesign.PreflightProfileOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}