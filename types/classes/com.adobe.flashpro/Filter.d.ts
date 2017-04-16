/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * This object contains all the properties for all filters.  
		 * The .name property determines which other properties are 
		 * applicable to each filter.
		 */
		class Filter extends Adobe.Csawlib.CSHostObject {
			/**
			 * Angle. 0 to 360. Applicable to filters with .name as 
			 * 'bevelFilter', 'dropShadowFilter', 'gradientGlowFilter', and 
			 * 'gradientBevelFilter'.
			 */
			public angle: number;
			/**
			 * Amount to blur in x direction. 0 to 255. Applicable to 
			 * filters with .name as 'blurFilter', 'dropShadowFilter', 
			 * 'glowFilter', 'bevelFilter', 'gradientGlowFilter', 
			 * 'gradientBevelFilter'.
			 */
			public blurX: number;
			/**
			 * Amount to blur in y direction. 0 to 255. Applicable to 
			 * filters with .name as 'blurFilter', 'dropShadowFilter', 
			 * 'glowFilter', 'bevelFilter', 'gradientGlowFilter', 
			 * 'gradientBevelFilter'.
			 */
			public blurY: number;
			/**
			 * Brightness of adjust color filter. -100 to 100.
			 * Applicable to filters with .name as 'adjustColorFilter'
			 */
			public brightness: number;
			/**
			 * Filter color, 'RRGGBBAA'. Applicable to filters with .name 
			 * as 'glowFilter' and 'dropShadowFilter'.
			 */
			public color: string;
			/**
			 * Contrast of adjust color filter. -100 to 100.
			 * Applicable to filters with .name as 'adjustColorFilter'
			 */
			public contrast: number;
			/**
			 * Filter distance. -255 to 255. Applicable to filters with 
			 * .name as 'dropShadowFilter', 'bevelFilter', 
			 * 'gradientGlowFilter', 'gradientBevelFilter'.
			 */
			public distance: number;
			/**
			 * When true, the source image is not drawn.
			 * Applicable to filters with .name as "dropShadowFilter".
			 */
			public hideObject: boolean;
			/**
			 * Bevel highlight color.  'RRGGBBAA'.
			 * Applicable to filters with .name as 'bevelFilter'.
			 */
			public highlightColor: string;
			/**
			 * Hue of adjust color filter.  -180 to 180.
			 * Applicable to filters with .name as 'adjustColorFilter'
			 */
			public hue: number;
			/**
			 * To determine whether the filter is inner (true) or outer 
			 * (false).
			 * Applicable to filters with .name as 'dropShadowFilter', 
			 * 'glowFilter'.
			 */
			public inner: boolean;
			/**
			 * Knockout source image.
			 * Applicable to filters with .name as 'dropShadowFilter', 
			 * 'glowFilter', 'bevelFilter', 'gradientGlowFilter', 
			 * 'gradientBevelFilter'.
			 */
			public knockout: boolean;
			/**
			 * Read-only property.
			 * Other properties depends on this property.
			 * 'dropShadowFilter', 'glowFilter', 'bevelFilter', 
			 * 'blurFilter', 'gradientGlowFilter', 'gradientBevelFilter', 
			 * 'adjustColorFilter', 'embossFilter', 'findEdgesFilter', 
			 * 'invertFilter', 'sharpenFilter'
			 */
			public readonly name: string;
			/**
			 * Blur quality, 'low', 'medium', and high ('high' is 
			 * approximate to Gaussian blur). Applicable to filters with 
			 * .name as 'blurFilter', 'dropShadowFilter', 'glowFilter', 
			 * 'bevelFilter', 'gradientGlowFilter', 'gradientBevelFilter'.
			 */
			public quality: string;
			/**
			 * Saturation of adjust color filter. -100 to 100.
			 * Applicable to filters with .name as 'adjustColorFilter'
			 */
			public saturation: number;
			/**
			 * Bevel shadow color.  'RRGGBBAA'.
			 * Applicable to filters with .name as 'bevelFilter'.
			 */
			public shadowColor: string;
			/**
			 * Filter strength. 0 to 25500(%). Applicable to filters with 
			 * .name as 'dropShadowFilter', 'glowFilter', 'bevelFilter', 
			 * 'gradientGlowFilter', 'gradientBevelFilter'.
			 */
			public strength: number;
			/**
			 * 'inner', 'outer', or 'full'.
			 * Applicable to filters with .name as 'bevelFilter', 
			 * 'gradientGlowFilter', and 'gradientBevelFilter'.
			 */
			public type: string;
		}
	}
}