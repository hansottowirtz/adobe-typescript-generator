/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AntiAliasType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Color anti-aliasing.
			 * @type {Adobe.Indesign.AntiAliasType}
			 * @readonly
			 */
			public static readonly COLOR_ANTIALIASING: Adobe.Indesign.AntiAliasType;
			/**
			 * Alias for COLOR_ANTIALIASING. Color anti-aliasing.
			 * @type {Adobe.Indesign.AntiAliasType}
			 * @readonly
			 */
			public static readonly colorAntialiasing: Adobe.Indesign.AntiAliasType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Gray anti-aliasing.
			 * @type {Adobe.Indesign.AntiAliasType}
			 * @readonly
			 */
			public static readonly GRAY_ANTIALIASING: Adobe.Indesign.AntiAliasType;
			/**
			 * Alias for GRAY_ANTIALIASING. Gray anti-aliasing.
			 * @type {Adobe.Indesign.AntiAliasType}
			 * @readonly
			 */
			public static readonly grayAntialiasing: Adobe.Indesign.AntiAliasType;
			/**
			 * Thicker anti-aliasing.
			 * @type {Adobe.Indesign.AntiAliasType}
			 * @readonly
			 */
			public static readonly THICKER_ANTIALIASING: Adobe.Indesign.AntiAliasType;
			/**
			 * Alias for THICKER_ANTIALIASING. Thicker anti-aliasing.
			 * @type {Adobe.Indesign.AntiAliasType}
			 * @readonly
			 */
			public static readonly thickerAntialiasing: Adobe.Indesign.AntiAliasType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}