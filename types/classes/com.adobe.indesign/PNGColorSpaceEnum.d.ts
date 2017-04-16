/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PNGColorSpaceEnum extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for GRAY. Converts all color values to high-quality 
			 * black-and-white images. Gray levels of the converted objects 
			 * represent the luminosity of the original objects.
			 * @type {Adobe.Indesign.PNGColorSpaceEnum}
			 * @readonly
			 */
			public static readonly gray: Adobe.Indesign.PNGColorSpaceEnum;
			/**
			 * Converts all color values to high-quality black-and-white 
			 * images. Gray levels of the converted objects represent the 
			 * luminosity of the original objects.
			 * @type {Adobe.Indesign.PNGColorSpaceEnum}
			 * @readonly
			 */
			public static readonly GRAY: Adobe.Indesign.PNGColorSpaceEnum;
			/**
			 * Alias for RGB. Represents all color values using the RGB 
			 * color space. Best suited for documents that will be viewed 
			 * on-screen.
			 * @type {Adobe.Indesign.PNGColorSpaceEnum}
			 * @readonly
			 */
			public static readonly rgb: Adobe.Indesign.PNGColorSpaceEnum;
			/**
			 * Represents all color values using the RGB color space. Best 
			 * suited for documents that will be viewed on-screen.
			 * @type {Adobe.Indesign.PNGColorSpaceEnum}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Indesign.PNGColorSpaceEnum;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}