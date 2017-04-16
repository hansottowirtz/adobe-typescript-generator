/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DisplaySettingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the container object's default display performance 
			 * preferences setting. For information, see default display 
			 * settings.
			 * @type {Adobe.Indesign.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Alias for DEFAULT_VALUE. Uses the container object's default 
			 * display performance preferences setting. For information, 
			 * see default display settings.
			 * @type {Adobe.Indesign.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Slower performance; displays high-resolution graphics and 
			 * high-quality transparencies and turns on anti-aliasing.
			 * @type {Adobe.Indesign.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly HIGH_QUALITY: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Alias for HIGH_QUALITY. Slower performance; displays 
			 * high-resolution graphics and high-quality transparencies and 
			 * turns on anti-aliasing.
			 * @type {Adobe.Indesign.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly highQuality: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Alias for OPTIMIZED. Best performance; grays out graphics 
			 * and turns off transparency and anti-aliasing.
			 * @type {Adobe.Indesign.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly optimized: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Best performance; grays out graphics and turns off 
			 * transparency and anti-aliasing.
			 * @type {Adobe.Indesign.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly OPTIMIZED: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Alias for TYPICAL. Moderate performance speed; displays 
			 * proxy graphics and low-quality transparencies and turns on 
			 * anti-aliasing.
			 * @type {Adobe.Indesign.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly typical: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Moderate performance speed; displays proxy graphics and 
			 * low-quality transparencies and turns on anti-aliasing.
			 * @type {Adobe.Indesign.DisplaySettingOptions}
			 * @readonly
			 */
			public static readonly TYPICAL: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}