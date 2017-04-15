/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PDFResample extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Does not downsample. */
			public static readonly NONE: Adobe.Photoshop.PDFResample;
			/**
			 * Averages the pixels in a sample area and replaces the entire 
			 * area with the average pixel color at the specified 
			 * resolution.
			 */
			public static readonly PDFAVERAGE: Adobe.Photoshop.PDFResample;
			/**
			 * Uses a weighted average to determine pixel color, which 
			 * usually yields better results than the simple averaging 
			 * method of downsampling. The slowest but most precise method, 
			 * resulting in the smoothest gradations.
			 */
			public static readonly PDFBICUBIC: Adobe.Photoshop.PDFResample;
			/**
			 * Chooses a pixel in the center of the sample area and 
			 * replaces the entire area with that pixel color; 
			 * significantly reduces conversion time but results in images 
			 * that are less smooth and continuous.
			 */
			public static readonly PDFSUBSAMPLE: Adobe.Photoshop.PDFResample;
			/** Constructor */
			public constructor();
		}
	}
}