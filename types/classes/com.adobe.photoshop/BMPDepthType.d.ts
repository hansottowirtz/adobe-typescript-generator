/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The number of bits per channel (also called pixel depth or 
		 * color depth). The number selected indicates the exponent of 
		 * 2. For example, a pixel with a bit-depth of EIGHT has 
		 * 2-to-the-8th, or 256, possible color values.
		 */
		class BMPDepthType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** A1 R5 G5 B5 advanced bit depth specification. */
			public static readonly BMP_A1R5G5B5: Adobe.Photoshop.BMPDepthType;
			/** A4 R4 G4 B4 advanced bit depth specification. */
			public static readonly BMP_A4R4G4B4: Adobe.Photoshop.BMPDepthType;
			/**
			 * A8 R8 G8 B8 advanced bit depth specification (same as normal 
			 * 32 bit mode)
			 */
			public static readonly BMP_A8R8G8B8: Adobe.Photoshop.BMPDepthType;
			/** R5 G6 B5 advanced bit depth specification. */
			public static readonly BMP_R5G6B5: Adobe.Photoshop.BMPDepthType;
			/**
			 * R8 G8 B8 advanced bit depth specification (same as normal 24 
			 * bit mode)
			 */
			public static readonly BMP_R8G8B8: Adobe.Photoshop.BMPDepthType;
			/**
			 * X1 R5 G5 B5 advanced bit depth specification (same as normal 
			 * 16 bit mode)
			 */
			public static readonly BMP_X1R5G5B5: Adobe.Photoshop.BMPDepthType;
			/** X4 R4 G4 B4 advanced bit depth specification. */
			public static readonly BMP_X4R4G4B4: Adobe.Photoshop.BMPDepthType;
			/** X8 R8 G8 B8 advanced bit depth specification. */
			public static readonly BMP_X8R8G8B8: Adobe.Photoshop.BMPDepthType;
			/** 8 bits depth. */
			public static readonly EIGHT: Adobe.Photoshop.BMPDepthType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** 4 bits depth. */
			public static readonly FOUR: Adobe.Photoshop.BMPDepthType;
			/** 1 bit depth. */
			public static readonly ONE: Adobe.Photoshop.BMPDepthType;
			/** 16 bits depth. */
			public static readonly SIXTEEN: Adobe.Photoshop.BMPDepthType;
			/** 32 bits depth. */
			public static readonly THIRTYTWO: Adobe.Photoshop.BMPDepthType;
			/** 24 bits depth. */
			public static readonly TWENTYFOUR: Adobe.Photoshop.BMPDepthType;
			/** Constructor */
			public constructor();
		}
	}
}