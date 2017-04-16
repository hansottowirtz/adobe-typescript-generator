/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class JpegColorSpaceEnum extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CMYK. Represents all color values using the CMYK 
			 * color space.
			 * @type {Adobe.Indesign.JpegColorSpaceEnum}
			 * @readonly
			 */
			public static readonly cmyk: Adobe.Indesign.JpegColorSpaceEnum;
			/**
			 * Represents all color values using the CMYK color space.
			 * @type {Adobe.Indesign.JpegColorSpaceEnum}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Indesign.JpegColorSpaceEnum;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for GRAY. Converts all color values to high-quality 
			 * black-and-white images. Gray levels of the converted objects 
			 * represent the luminosity of the original objects.
			 * @type {Adobe.Indesign.JpegColorSpaceEnum}
			 * @readonly
			 */
			public static readonly gray: Adobe.Indesign.JpegColorSpaceEnum;
			/**
			 * Converts all color values to high-quality black-and-white 
			 * images. Gray levels of the converted objects represent the 
			 * luminosity of the original objects.
			 * @type {Adobe.Indesign.JpegColorSpaceEnum}
			 * @readonly
			 */
			public static readonly GRAY: Adobe.Indesign.JpegColorSpaceEnum;
			/**
			 * Alias for RGB. Represents all color values using the RGB 
			 * color space. Best suited for documents that will be viewed 
			 * on-screen.
			 * @type {Adobe.Indesign.JpegColorSpaceEnum}
			 * @readonly
			 */
			public static readonly rgb: Adobe.Indesign.JpegColorSpaceEnum;
			/**
			 * Represents all color values using the RGB color space. Best 
			 * suited for documents that will be viewed on-screen.
			 * @type {Adobe.Indesign.JpegColorSpaceEnum}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Indesign.JpegColorSpaceEnum;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}