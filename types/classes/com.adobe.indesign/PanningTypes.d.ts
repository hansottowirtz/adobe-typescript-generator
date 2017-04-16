/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PanningTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * While scrolling, greeks newly revealed images until the 
			 * mouse is released; medium quality display with medium 
			 * performance speed.
			 * @type {Adobe.Indesign.PanningTypes}
			 * @readonly
			 */
			public static readonly GREEK_IMAGES: Adobe.Indesign.PanningTypes;
			/**
			 * While scrolling, greeks newly revealed images and text until 
			 * the mouse is released; highest quality display with the 
			 * slowest performance.
			 * @type {Adobe.Indesign.PanningTypes}
			 * @readonly
			 */
			public static readonly GREEK_IMAGES_AND_TEXT: Adobe.Indesign.PanningTypes;
			/**
			 * Alias for GREEK_IMAGES. While scrolling, greeks newly 
			 * revealed images until the mouse is released; medium quality 
			 * display with medium performance speed.
			 * @type {Adobe.Indesign.PanningTypes}
			 * @readonly
			 */
			public static readonly greekImages: Adobe.Indesign.PanningTypes;
			/**
			 * Alias for GREEK_IMAGES_AND_TEXT. While scrolling, greeks 
			 * newly revealed images and text until the mouse is released; 
			 * highest quality display with the slowest performance.
			 * @type {Adobe.Indesign.PanningTypes}
			 * @readonly
			 */
			public static readonly greekImagesAndText: Adobe.Indesign.PanningTypes;
			/**
			 * While scrolling, does not greek images or text; lowest 
			 * quality display with the fastest performance.
			 * @type {Adobe.Indesign.PanningTypes}
			 * @readonly
			 */
			public static readonly NO_GREEKING: Adobe.Indesign.PanningTypes;
			/**
			 * Alias for NO_GREEKING. While scrolling, does not greek 
			 * images or text; lowest quality display with the fastest 
			 * performance.
			 * @type {Adobe.Indesign.PanningTypes}
			 * @readonly
			 */
			public static readonly noGreeking: Adobe.Indesign.PanningTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}