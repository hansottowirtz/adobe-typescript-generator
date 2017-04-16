/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SpreadFlattenerLevel extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CUSTOM. Uses the specified custom flattening 
			 * level.
			 * @type {Adobe.Indesign.SpreadFlattenerLevel}
			 * @readonly
			 */
			public static readonly custom: Adobe.Indesign.SpreadFlattenerLevel;
			/**
			 * Uses the specified custom flattening level.
			 * @type {Adobe.Indesign.SpreadFlattenerLevel}
			 * @readonly
			 */
			public static readonly CUSTOM: Adobe.Indesign.SpreadFlattenerLevel;
			/**
			 * Uses the default level.
			 * @type {Adobe.Indesign.SpreadFlattenerLevel}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.SpreadFlattenerLevel;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default level.
			 * @type {Adobe.Indesign.SpreadFlattenerLevel}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.SpreadFlattenerLevel;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Turns off flattening.
			 * @type {Adobe.Indesign.SpreadFlattenerLevel}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.SpreadFlattenerLevel;
			/**
			 * Turns off flattening.
			 * @type {Adobe.Indesign.SpreadFlattenerLevel}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.SpreadFlattenerLevel;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}