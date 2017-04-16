/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DisplaySettingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the container object's default display performance 
			 * preferences setting. For information, see default display 
			 * settings.
			 * @type {Adobe.Incopy.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.DisplaySettingOptions;
			/**
			 * Alias for DEFAULT_VALUE. Uses the container object's default 
			 * display performance preferences setting. For information, 
			 * see default display settings.
			 * @type {Adobe.Incopy.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Incopy.DisplaySettingOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Slower performance; displays high-resolution graphics and 
			 * high-quality transparencies and turns on anti-aliasing.
			 * @type {Adobe.Incopy.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly HIGH_QUALITY: Adobe.Incopy.DisplaySettingOptions;
			/**
			 * Alias for HIGH_QUALITY. Slower performance; displays 
			 * high-resolution graphics and high-quality transparencies and 
			 * turns on anti-aliasing.
			 * @type {Adobe.Incopy.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly highQuality: Adobe.Incopy.DisplaySettingOptions;
			/**
			 * Alias for OPTIMIZED. Best performance; grays out graphics 
			 * and turns off transparency and anti-aliasing.
			 * @type {Adobe.Incopy.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly optimized: Adobe.Incopy.DisplaySettingOptions;
			/**
			 * Best performance; grays out graphics and turns off 
			 * transparency and anti-aliasing.
			 * @type {Adobe.Incopy.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly OPTIMIZED: Adobe.Incopy.DisplaySettingOptions;
			/**
			 * Alias for TYPICAL. Moderate performance speed; displays 
			 * proxy graphics and low-quality transparencies and turns on 
			 * anti-aliasing.
			 * @type {Adobe.Incopy.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly typical: Adobe.Incopy.DisplaySettingOptions;
			/**
			 * Moderate performance speed; displays proxy graphics and 
			 * low-quality transparencies and turns on anti-aliasing.
			 * @type {Adobe.Incopy.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly TYPICAL: Adobe.Incopy.DisplaySettingOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}