/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ViewDisplaySettings extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Slower performance; displays high-resolution graphics and 
			 * high-quality transparencies and turns on anti-aliasing.
			 * @type {Adobe.Indesign.ViewDisplaySettings}
			 * @readonly
			 */
			public static readonly HIGH_QUALITY: Adobe.Indesign.ViewDisplaySettings;
			/**
			 * Alias for HIGH_QUALITY. Slower performance; displays 
			 * high-resolution graphics and high-quality transparencies and 
			 * turns on anti-aliasing.
			 * @type {Adobe.Indesign.ViewDisplaySettings}
			 * @readonly
			 */
			public static readonly highQuality: Adobe.Indesign.ViewDisplaySettings;
			/**
			 * Alias for OPTIMIZED. Best performance; grays out graphics 
			 * and turns off transparency and anti-aliasing.
			 * @type {Adobe.Indesign.ViewDisplaySettings}
			 * @readonly
			 */
			public static readonly optimized: Adobe.Indesign.ViewDisplaySettings;
			/**
			 * Best performance; grays out graphics and turns off 
			 * transparency and anti-aliasing.
			 * @type {Adobe.Indesign.ViewDisplaySettings}
			 * @readonly
			 */
			public static readonly OPTIMIZED: Adobe.Indesign.ViewDisplaySettings;
			/**
			 * Alias for TYPICAL. Moderate performance speed; displays 
			 * proxy graphics and low-quality transparencies and turns on 
			 * anti-aliasing.
			 * @type {Adobe.Indesign.ViewDisplaySettings}
			 * @readonly
			 */
			public static readonly typical: Adobe.Indesign.ViewDisplaySettings;
			/**
			 * Moderate performance speed; displays proxy graphics and 
			 * low-quality transparencies and turns on anti-aliasing.
			 * @type {Adobe.Indesign.ViewDisplaySettings}
			 * @readonly
			 */
			public static readonly TYPICAL: Adobe.Indesign.ViewDisplaySettings;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}