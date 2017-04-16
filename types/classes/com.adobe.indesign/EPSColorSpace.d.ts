/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EPSColorSpace extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CMYK. Creates a separable file by representing all 
			 * color values using the gamut of CYMK process color inks.
			 * @type {Adobe.Indesign.EPSColorSpace}
			 * @readonly
			 */
			public static readonly cmyk: Adobe.Indesign.EPSColorSpace;
			/**
			 * Creates a separable file by representing all color values 
			 * using the gamut of CYMK process color inks.
			 * @type {Adobe.Indesign.EPSColorSpace}
			 * @readonly
			 */
			public static readonly CMYK: Adobe.Indesign.EPSColorSpace;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for GRAY. Converts all color values to high-quality 
			 * black-and-white images. Gray levels of the converted objects 
			 * represent the luminosity of the original objects.
			 * @type {Adobe.Indesign.EPSColorSpace}
			 * @readonly
			 */
			public static readonly gray: Adobe.Indesign.EPSColorSpace;
			/**
			 * Converts all color values to high-quality black-and-white 
			 * images. Gray levels of the converted objects represent the 
			 * luminosity of the original objects.
			 * @type {Adobe.Indesign.EPSColorSpace}
			 * @readonly
			 */
			public static readonly GRAY: Adobe.Indesign.EPSColorSpace;
			/**
			 * Uses PostScript color management (includes profiles).
			 * @type {Adobe.Indesign.EPSColorSpace}
			 * @readonly
			 */
			public static readonly POSTSCRIPT_COLOR_MANAGEMENT: Adobe.Indesign.EPSColorSpace;
			/**
			 * Alias for POSTSCRIPT_COLOR_MANAGEMENT. Uses PostScript color 
			 * management (includes profiles).
			 * @type {Adobe.Indesign.EPSColorSpace}
			 * @readonly
			 */
			public static readonly postscriptColorManagement: Adobe.Indesign.EPSColorSpace;
			/**
			 * Alias for RGB. Represents all color values using the RGB 
			 * color space. Best suited for documents that will be viewed 
			 * on-screen.
			 * @type {Adobe.Indesign.EPSColorSpace}
			 * @readonly
			 */
			public static readonly rgb: Adobe.Indesign.EPSColorSpace;
			/**
			 * Represents all color values using the RGB color space. Best 
			 * suited for documents that will be viewed on-screen.
			 * @type {Adobe.Indesign.EPSColorSpace}
			 * @readonly
			 */
			public static readonly RGB: Adobe.Indesign.EPSColorSpace;
			/**
			 * Leaves each image in its original color space.
			 * @type {Adobe.Indesign.EPSColorSpace}
			 * @readonly
			 */
			public static readonly UNCHANGED_COLOR_SPACE: Adobe.Indesign.EPSColorSpace;
			/**
			 * Alias for UNCHANGED_COLOR_SPACE. Leaves each image in its 
			 * original color space.
			 * @type {Adobe.Indesign.EPSColorSpace}
			 * @readonly
			 */
			public static readonly unchangedColorSpace: Adobe.Indesign.EPSColorSpace;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}