/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class OffsetUndefinedAreas extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Extends the colors of pixels along the edge of the image in 
			 * the direction specified. Banding may result if the edge 
			 * pixels are different colors.
			 */
			public static readonly REPEATEDGEPIXELS: Adobe.Photoshop.OffsetUndefinedAreas;
			/**
			 * For background layers, sets pixels to the background layer 
			 * color. For nonbackground layers, sets the pixels to 
			 * transparent.
			 */
			public static readonly SETTOBACKGROUND: Adobe.Photoshop.OffsetUndefinedAreas;
			/**
			 * Fills the undefined space with content from the opposite 
			 * edge of the image.
			 */
			public static readonly WRAPAROUND: Adobe.Photoshop.OffsetUndefinedAreas;
			/** Constructor */
			public constructor();
		}
	}
}