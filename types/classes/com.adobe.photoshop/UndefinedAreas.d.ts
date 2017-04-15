/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The method to use to treat undistorted areas or areas left 
		 * blank in an image to which a filter in the Distort category 
		 * has been applied.
		 */
		class UndefinedAreas extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Extends the colors of pixels along the edge of the image in 
			 * the direction specified. Banding may result if the edge 
			 * pixels are different colors.
			 */
			public static readonly REPEATEDGEPIXELS: Adobe.Photoshop.UndefinedAreas;
			/**
			 * Fills the undefined space with content from the opposite 
			 * edge of the image.
			 */
			public static readonly WRAPAROUND: Adobe.Photoshop.UndefinedAreas;
			/** Constructor */
			public constructor();
		}
	}
}