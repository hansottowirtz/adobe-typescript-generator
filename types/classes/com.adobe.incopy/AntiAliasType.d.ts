/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AntiAliasType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Color anti-aliasing.
			 * @type {Adobe.Incopy.AntiAliasType}
			 * @readonly
			 */
			public static readonly COLOR_ANTIALIASING: Adobe.Incopy.AntiAliasType;
			/**
			 * Alias for COLOR_ANTIALIASING. Color anti-aliasing.
			 * @type {Adobe.Incopy.AntiAliasType}
			 * @readonly
			 */
			public static readonly colorAntialiasing: Adobe.Incopy.AntiAliasType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Gray anti-aliasing.
			 * @type {Adobe.Incopy.AntiAliasType}
			 * @readonly
			 */
			public static readonly GRAY_ANTIALIASING: Adobe.Incopy.AntiAliasType;
			/**
			 * Alias for GRAY_ANTIALIASING. Gray anti-aliasing.
			 * @type {Adobe.Incopy.AntiAliasType}
			 * @readonly
			 */
			public static readonly grayAntialiasing: Adobe.Incopy.AntiAliasType;
			/**
			 * Thicker anti-aliasing.
			 * @type {Adobe.Incopy.AntiAliasType}
			 * @readonly
			 */
			public static readonly THICKER_ANTIALIASING: Adobe.Incopy.AntiAliasType;
			/**
			 * Alias for THICKER_ANTIALIASING. Thicker anti-aliasing.
			 * @type {Adobe.Incopy.AntiAliasType}
			 * @readonly
			 */
			public static readonly thickerAntialiasing: Adobe.Incopy.AntiAliasType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}