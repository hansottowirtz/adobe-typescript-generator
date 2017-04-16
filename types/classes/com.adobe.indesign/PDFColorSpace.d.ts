/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFColorSpace extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CMYK. Represents all color values using CYMK color 
			 * space.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly cmyk: Adobe.Indesign.PDFColorSpace;
			/**
			 * Represents all color values using CYMK color space.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Indesign.PDFColorSpace;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for GRAY. Converts all color values to high-quality 
			 * black-and-white images. Gray levels of the converted objects 
			 * represent the luminosity of the original objects.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly gray: Adobe.Indesign.PDFColorSpace;
			/**
			 * Converts all color values to high-quality black-and-white 
			 * images. Gray levels of the converted objects represent the 
			 * luminosity of the original objects.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly GRAY: Adobe.Indesign.PDFColorSpace;
			/**
			 * Repurposes CMYK colors.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly REPURPOSE_CMYK: Adobe.Indesign.PDFColorSpace;
			/**
			 * Repurposes RGB colors.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly REPURPOSE_RGB: Adobe.Indesign.PDFColorSpace;
			/**
			 * Alias for REPURPOSE_CMYK. Repurposes CMYK colors.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly repurposeCmyk: Adobe.Indesign.PDFColorSpace;
			/**
			 * Alias for REPURPOSE_RGB. Repurposes RGB colors.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly repurposeRgb: Adobe.Indesign.PDFColorSpace;
			/**
			 * Alias for RGB. Represents all color values using the RGB 
			 * color space. Best suited for documents that will be viewed 
			 * onscreen.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly rgb: Adobe.Indesign.PDFColorSpace;
			/**
			 * Represents all color values using the RGB color space. Best 
			 * suited for documents that will be viewed onscreen.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Indesign.PDFColorSpace;
			/**
			 * Leaves each image in its original color space.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly UNCHANGED_COLOR_SPACE: Adobe.Indesign.PDFColorSpace;
			/**
			 * Alias for UNCHANGED_COLOR_SPACE. Leaves each image in its 
			 * original color space.
			 * @type {Adobe.Indesign.PDFColorSpace}
			 * @readonly
			 */
			public static readonly unchangedColorSpace: Adobe.Indesign.PDFColorSpace;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}