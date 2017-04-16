/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Screeening extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. Uses custom screening settings for ink 
			 * angle and frequency. For information, see composite angle 
			 * and composite frequency.
			 * @type {Adobe.Indesign.Screeening}
			 * @readonly
			 */
			public static readonly custom: Adobe.Indesign.Screeening;
			/**
			 * Uses custom screening settings for ink angle and frequency. 
			 * For information, see composite angle and composite 
			 * frequency.
			 * @type {Adobe.Indesign.Screeening}
			 * @readonly
			 */
			public static readonly CUSTOM: Adobe.Indesign.Screeening;
			/**
			 * Uses the default screening settings.
			 * @type {Adobe.Indesign.Screeening}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.Screeening;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default screening 
			 * settings.
			 * @type {Adobe.Indesign.Screeening}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.Screeening;
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