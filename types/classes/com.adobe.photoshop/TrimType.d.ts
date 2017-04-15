/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TrimType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Removes from the image an area the color of the lower right 
			 * pixel.
			 */
			public static readonly BOTTOMRIGHT: Adobe.Photoshop.TrimType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Removes from the image an area the color of the upper left 
			 * pixel.
			 */
			public static readonly TOPLEFT: Adobe.Photoshop.TrimType;
			/**
			 * Trims away transparency at the edges of the image, leaving 
			 * the smallest image containing nontransparent pixels.
			 */
			public static readonly TRANSPARENT: Adobe.Photoshop.TrimType;
			/** Constructor */
			public constructor();
		}
	}
}