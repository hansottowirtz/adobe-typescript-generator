/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DisplaySettingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the container object's default display performance 
			 * preferences setting. For information, see default display 
			 * settings.
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Alias for DEFAULT_VALUE. Uses the container object's default 
			 * display performance preferences setting. For information, 
			 * see default display settings.
			 */
			public static readonly defaultValue: Adobe.Indesign.DisplaySettingOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Slower performance; displays high-resolution graphics and 
			 * high-quality transparencies and turns on anti-aliasing.
			 */
			public static readonly HIGH_QUALITY: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Alias for HIGH_QUALITY. Slower performance; displays 
			 * high-resolution graphics and high-quality transparencies and 
			 * turns on anti-aliasing.
			 */
			public static readonly highQuality: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Alias for OPTIMIZED. Best performance; grays out graphics 
			 * and turns off transparency and anti-aliasing.
			 */
			public static readonly optimized: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Best performance; grays out graphics and turns off 
			 * transparency and anti-aliasing.
			 */
			public static readonly OPTIMIZED: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Alias for TYPICAL. Moderate performance speed; displays 
			 * proxy graphics and low-quality transparencies and turns on 
			 * anti-aliasing.
			 */
			public static readonly typical: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * Moderate performance speed; displays proxy graphics and 
			 * low-quality transparencies and turns on anti-aliasing.
			 */
			public static readonly TYPICAL: Adobe.Indesign.DisplaySettingOptions;
			/** Constructor */
			public constructor();
		}
	}
}