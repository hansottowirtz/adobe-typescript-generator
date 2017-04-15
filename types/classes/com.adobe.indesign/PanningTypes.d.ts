/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PanningTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * While scrolling, greeks newly revealed images until the 
			 * mouse is released; medium quality display with medium 
			 * performance speed.
			 */
			public static readonly GREEK_IMAGES: Adobe.Indesign.PanningTypes;
			/**
			 * While scrolling, greeks newly revealed images and text until 
			 * the mouse is released; highest quality display with the 
			 * slowest performance.
			 */
			public static readonly GREEK_IMAGES_AND_TEXT: Adobe.Indesign.PanningTypes;
			/**
			 * Alias for GREEK_IMAGES. While scrolling, greeks newly 
			 * revealed images until the mouse is released; medium quality 
			 * display with medium performance speed.
			 */
			public static readonly greekImages: Adobe.Indesign.PanningTypes;
			/**
			 * Alias for GREEK_IMAGES_AND_TEXT. While scrolling, greeks 
			 * newly revealed images and text until the mouse is released; 
			 * highest quality display with the slowest performance.
			 */
			public static readonly greekImagesAndText: Adobe.Indesign.PanningTypes;
			/**
			 * While scrolling, does not greek images or text; lowest 
			 * quality display with the fastest performance.
			 */
			public static readonly NO_GREEKING: Adobe.Indesign.PanningTypes;
			/**
			 * Alias for NO_GREEKING. While scrolling, does not greek 
			 * images or text; lowest quality display with the fastest 
			 * performance.
			 */
			public static readonly noGreeking: Adobe.Indesign.PanningTypes;
			/** Constructor */
			public constructor();
		}
	}
}