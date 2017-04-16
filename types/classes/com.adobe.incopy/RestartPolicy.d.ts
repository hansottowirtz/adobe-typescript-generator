/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RestartPolicy extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Restart numbering after a specific numbering level.
			 * @type {Adobe.Incopy.RestartPolicy}
			 * @readonly
			 */
			public static readonly AFTER_SPECIFIC_LEVEL: Adobe.Incopy.RestartPolicy;
			/**
			 * Alias for AFTER_SPECIFIC_LEVEL. Restart numbering after a 
			 * specific numbering level.
			 * @type {Adobe.Incopy.RestartPolicy}
			 * @readonly
			 */
			public static readonly afterSpecificLevel: Adobe.Incopy.RestartPolicy;
			/**
			 * Restart numbering after any previous (higher) numbering 
			 * level.
			 * @type {Adobe.Incopy.RestartPolicy}
			 * @readonly
			 */
			public static readonly ANY_PREVIOUS_LEVEL: Adobe.Incopy.RestartPolicy;
			/**
			 * Alias for ANY_PREVIOUS_LEVEL. Restart numbering after any 
			 * previous (higher) numbering level.
			 * @type {Adobe.Incopy.RestartPolicy}
			 * @readonly
			 */
			public static readonly anyPreviousLevel: Adobe.Incopy.RestartPolicy;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Restart numbering after any of a range of numbering levels.
			 * @type {Adobe.Incopy.RestartPolicy}
			 * @readonly
			 */
			public static readonly RANGE_OF_LEVELS: Adobe.Incopy.RestartPolicy;
			/**
			 * Alias for RANGE_OF_LEVELS. Restart numbering after any of a 
			 * range of numbering levels.
			 * @type {Adobe.Incopy.RestartPolicy}
			 * @readonly
			 */
			public static readonly rangeOfLevels: Adobe.Incopy.RestartPolicy;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}