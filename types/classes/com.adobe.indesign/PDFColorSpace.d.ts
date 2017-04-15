/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFColorSpace extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CMYK. Represents all color values using CYMK color 
			 * space.
			 */
			public static readonly cmyk: Adobe.Indesign.PDFColorSpace;
			/** Represents all color values using CYMK color space. */
			public static readonly CMYK: Adobe.Indesign.PDFColorSpace;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Repurposes CMYK colors. */
			public static readonly REPURPOSE_CMYK: Adobe.Indesign.PDFColorSpace;
			/** Repurposes RGB colors. */
			public static readonly REPURPOSE_RGB: Adobe.Indesign.PDFColorSpace;
			/** Alias for REPURPOSE_CMYK. Repurposes CMYK colors. */
			public static readonly repurposeCmyk: Adobe.Indesign.PDFColorSpace;
			/** Alias for REPURPOSE_RGB. Repurposes RGB colors. */
			public static readonly repurposeRgb: Adobe.Indesign.PDFColorSpace;
			/**
			 * Alias for RGB. Represents all color values using the RGB 
			 * color space. Best suited for documents that will be viewed 
			 * onscreen.
			 */
			public static readonly rgb: Adobe.Indesign.PDFColorSpace;
			/**
			 * Represents all color values using the RGB color space. Best 
			 * suited for documents that will be viewed onscreen.
			 */
			public static readonly RGB: Adobe.Indesign.PDFColorSpace;
			/** Leaves each image in its original color space. */
			public static readonly UNCHANGED_COLOR_SPACE: Adobe.Indesign.PDFColorSpace;
			/**
			 * Alias for UNCHANGED_COLOR_SPACE. Leaves each image in its 
			 * original color space.
			 */
			public static readonly unchangedColorSpace: Adobe.Indesign.PDFColorSpace;
			/** Constructor */
			public constructor();
		}
	}
}