/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FlattenerLevel extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for HIGH. Keeps as much artwork as possible vector 
			 * data.
			 * @type {Adobe.Indesign.FlattenerLevel}
			 * @readonly
			 */
			public static readonly high: Adobe.Indesign.FlattenerLevel;
			/**
			 * Keeps as much artwork as possible vector data.
			 * @type {Adobe.Indesign.FlattenerLevel}
			 * @readonly
			 */
			public static readonly HIGH: Adobe.Indesign.FlattenerLevel;
			/**
			 * Alias for LOW. Rasterizes all artwork.
			 * @type {Adobe.Indesign.FlattenerLevel}
			 * @readonly
			 */
			public static readonly low: Adobe.Indesign.FlattenerLevel;
			/**
			 * Rasterizes all artwork.
			 * @type {Adobe.Indesign.FlattenerLevel}
			 * @readonly
			 */
			public static readonly LOW: Adobe.Indesign.FlattenerLevel;
			/**
			 * Alias for MEDIUM. Rasterizes a medium amount of artwork.
			 * @type {Adobe.Indesign.FlattenerLevel}
			 * @readonly
			 */
			public static readonly medium: Adobe.Indesign.FlattenerLevel;
			/**
			 * Rasterizes a medium amount of artwork.
			 * @type {Adobe.Indesign.FlattenerLevel}
			 * @readonly
			 */
			public static readonly MEDIUM: Adobe.Indesign.FlattenerLevel;
			/**
			 * Rasterizes more than a medium amount of artwork.
			 * @type {Adobe.Indesign.FlattenerLevel}
			 * @readonly
			 */
			public static readonly MEDIUM_HIGH: Adobe.Indesign.FlattenerLevel;
			/**
			 * Rasterizes almost all artwork.
			 * @type {Adobe.Indesign.FlattenerLevel}
			 * @readonly
			 */
			public static readonly MEDIUM_LOW: Adobe.Indesign.FlattenerLevel;
			/**
			 * Alias for MEDIUM_HIGH. Rasterizes more than a medium amount 
			 * of artwork.
			 * @type {Adobe.Indesign.FlattenerLevel}
			 * @readonly
			 */
			public static readonly mediumHigh: Adobe.Indesign.FlattenerLevel;
			/**
			 * Alias for MEDIUM_LOW. Rasterizes almost all artwork.
			 * @type {Adobe.Indesign.FlattenerLevel}
			 * @readonly
			 */
			public static readonly mediumLow: Adobe.Indesign.FlattenerLevel;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}