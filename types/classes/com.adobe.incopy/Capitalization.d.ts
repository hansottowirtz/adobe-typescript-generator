/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Capitalization extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Use all uppercase letters.
			 * @type {Adobe.Incopy.Capitalization}
			 * @readonly
			 */
			public static readonly ALL_CAPS: Adobe.Incopy.Capitalization;
			/**
			 * Alias for ALL_CAPS. Use all uppercase letters.
			 * @type {Adobe.Incopy.Capitalization}
			 * @readonly
			 */
			public static readonly allCaps: Adobe.Incopy.Capitalization;
			/**
			 * Use OpenType small caps.
			 * @type {Adobe.Incopy.Capitalization}
			 * @readonly
			 */
			public static readonly CAP_TO_SMALL_CAP: Adobe.Incopy.Capitalization;
			/**
			 * Alias for CAP_TO_SMALL_CAP. Use OpenType small caps.
			 * @type {Adobe.Incopy.Capitalization}
			 * @readonly
			 */
			public static readonly capToSmallCap: Adobe.Incopy.Capitalization;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NORMAL. Do not change the capitalization of the 
			 * text.
			 * @type {Adobe.Incopy.Capitalization}
			 * @readonly
			 */
			public static readonly normal: Adobe.Incopy.Capitalization;
			/**
			 * Do not change the capitalization of the text.
			 * @type {Adobe.Incopy.Capitalization}
			 * @readonly
			 */
			public static readonly NORMAL: Adobe.Incopy.Capitalization;
			/**
			 * Use small caps for lowercase letters.
			 * @type {Adobe.Incopy.Capitalization}
			 * @readonly
			 */
			public static readonly SMALL_CAPS: Adobe.Incopy.Capitalization;
			/**
			 * Alias for SMALL_CAPS. Use small caps for lowercase letters.
			 * @type {Adobe.Incopy.Capitalization}
			 * @readonly
			 */
			public static readonly smallCaps: Adobe.Incopy.Capitalization;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}