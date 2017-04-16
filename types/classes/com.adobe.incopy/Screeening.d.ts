/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Screeening extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. Uses custom screening settings for ink 
			 * angle and frequency. For information, see composite angle 
			 * and composite frequency.
			 * @type {Adobe.Incopy.Screeening}
			 * @readonly
			 */
			public static readonly custom: Adobe.Incopy.Screeening;
			/**
			 * Uses custom screening settings for ink angle and frequency. 
			 * For information, see composite angle and composite 
			 * frequency.
			 * @type {Adobe.Incopy.Screeening}
			 * @readonly
			 */
			public static readonly CUSTOM: Adobe.Incopy.Screeening;
			/**
			 * Uses the default screening settings.
			 * @type {Adobe.Incopy.Screeening}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.Screeening;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default screening 
			 * settings.
			 * @type {Adobe.Incopy.Screeening}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Incopy.Screeening;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}