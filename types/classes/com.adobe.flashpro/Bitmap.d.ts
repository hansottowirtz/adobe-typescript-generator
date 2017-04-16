/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * Bitmap Instance is a sub class of Instance representing 
		 * bitmap in the frame. In addition to all the Instance object 
		 * properties, the following properties are available:
		 */
		class Bitmap extends Adobe.Flashpro.Instance {
			/** The width of the bitmap in pixels. */
			public readonly hPixels: number;
			/** the height of the bitmap in pixels. */
			public readonly vPixels: number;
			/**
			 * This allows the user to do bitmap effects by getting the 
			 * bits out of the bitmap, manipulating them, and then 
			 * returning them to Flash (see setBits).
			 * br />
			 * Note: The byte array is meaningful only when referenced by 
			 * an External Library. Typically only used when creating n 
			 * extensible tool or effect.
			 */
			public getBits(): any;
			/**
			 * This allows the user to do bitmap effects by getting the 
			 * bits out of the bitmap, manipulating them, and then 
			 * returning them to Flash. Sets the bits of an existing bitmap 
			 * element.
			 * 
			 * Note: The byte array is meaningful only when referenced by 
			 * an External Library. Typically only used when creating n 
			 * extensible tool or effect.
			 * @param {Bitmap} bitmap the bitmap object contains height, 
			 * width, depth, bits, and cTab properties.  Height, width and 
			 * depth are integers, bits is a byte array.  cTab is required 
			 * only for bitmaps with bit depth 8 or less and is an array of 
			 * string values of the form "#rrggbb"
			 */
			public setBits(bitmap: Bitmap): void;
		}
	}
}