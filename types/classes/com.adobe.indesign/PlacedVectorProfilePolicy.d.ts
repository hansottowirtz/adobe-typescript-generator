/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PlacedVectorProfilePolicy extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Honors all profiles and output intent. */
			public static readonly HONOR_ALL_PROFILES: Adobe.Indesign.PlacedVectorProfilePolicy;
			/**
			 * Alias for HONOR_ALL_PROFILES. Honors all profiles and output 
			 * intent.
			 */
			public static readonly honorAllProfiles: Adobe.Indesign.PlacedVectorProfilePolicy;
			/** Ignores all profiles and output intent. */
			public static readonly IGNORE_ALL: Adobe.Indesign.PlacedVectorProfilePolicy;
			/** Ignores output intent; honors calibrated spaces. */
			public static readonly IGNORE_OUTPUT_INTENT: Adobe.Indesign.PlacedVectorProfilePolicy;
			/**
			 * Alias for IGNORE_ALL. Ignores all profiles and output 
			 * intent.
			 */
			public static readonly ignoreAll: Adobe.Indesign.PlacedVectorProfilePolicy;
			/**
			 * Alias for IGNORE_OUTPUT_INTENT. Ignores output intent; 
			 * honors calibrated spaces.
			 */
			public static readonly ignoreOutputIntent: Adobe.Indesign.PlacedVectorProfilePolicy;
			/** Constructor */
			public constructor();
		}
	}
}