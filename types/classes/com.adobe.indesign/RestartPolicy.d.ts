/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RestartPolicy extends Adobe.Csawlib.CSEnumBase {
			/** Restart numbering after a specific numbering level. */
			public static readonly AFTER_SPECIFIC_LEVEL: Adobe.Indesign.RestartPolicy;
			/**
			 * Alias for AFTER_SPECIFIC_LEVEL. Restart numbering after a 
			 * specific numbering level.
			 */
			public static readonly afterSpecificLevel: Adobe.Indesign.RestartPolicy;
			/**
			 * Restart numbering after any previous (higher) numbering 
			 * level.
			 */
			public static readonly ANY_PREVIOUS_LEVEL: Adobe.Indesign.RestartPolicy;
			/**
			 * Alias for ANY_PREVIOUS_LEVEL. Restart numbering after any 
			 * previous (higher) numbering level.
			 */
			public static readonly anyPreviousLevel: Adobe.Indesign.RestartPolicy;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Restart numbering after any of a range of numbering levels. */
			public static readonly RANGE_OF_LEVELS: Adobe.Indesign.RestartPolicy;
			/**
			 * Alias for RANGE_OF_LEVELS. Restart numbering after any of a 
			 * range of numbering levels.
			 */
			public static readonly rangeOfLevels: Adobe.Indesign.RestartPolicy;
			/** Constructor */
			public constructor();
		}
	}
}