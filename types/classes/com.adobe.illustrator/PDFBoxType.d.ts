/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Crop box. */
		class PDFBoxType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Crop to ArtBox. The art box defines the extent of the page's 
			 * meaningful content (including potential white space) as 
			 * intended by the page's creator.
			 */
			public static readonly PDFARTBOX: Adobe.Illustrator.PDFBoxType;
			/**
			 * Crop to BleedBox. The bleed box defines the region to which 
			 * the contents of the page should be clipped when output in a 
			 * production environment.
			 */
			public static readonly PDFBLEEDBOX: Adobe.Illustrator.PDFBoxType;
			/**
			 * Crop to Bounding Box. The bounding box is the rectangle that 
			 * encloses all text, graphics, and images on the page.
			 */
			public static readonly PDFBOUNDINGBOX: Adobe.Illustrator.PDFBoxType;
			/**
			 * Crop to CropBox. The crop box is the region of the page to 
			 * display and to print.
			 */
			public static readonly PDFCROPBOX: Adobe.Illustrator.PDFBoxType;
			/**
			 * Crop to MediaBox. The media box is a natural size of the 
			 * page. For example, the dimensions of A4 sheet of paper.
			 */
			public static readonly PDFMEDIABOX: Adobe.Illustrator.PDFBoxType;
			/**
			 * Crop to TrimBox. The trim box specifies the positioning of 
			 * the page's content within the imposition.
			 */
			public static readonly PDFTRIMBOX: Adobe.Illustrator.PDFBoxType;
			/** Constructor */
			public constructor();
		}
	}
}