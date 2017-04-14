/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PDFBoxType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/**
			 * Crop to ArtBox. The art box defines the extent of the page's 
			 * meaningful content (including potential white space) as 
			 * intended by the page's creator.
			 */
			public static readonly PDFARTBOX: PDFBoxType;
			/**
			 * Crop to BleedBox. The bleed box defines the region to which 
			 * the contents of the page should be clipped when output in a 
			 * production environment.
			 */
			public static readonly PDFBLEEDBOX: PDFBoxType;
			/**
			 * Crop to Bounding Box. The bounding box is the rectangle that 
			 * encloses all text, graphics, and images on the page.
			 */
			public static readonly PDFBOUNDINGBOX: PDFBoxType;
			/**
			 * Crop to CropBox. The crop box is the region of the page to 
			 * display and to print.
			 */
			public static readonly PDFCROPBOX: PDFBoxType;
			/**
			 * Crop to MediaBox. The media box is a natural size of the 
			 * page. For example, the dimensions of A4 sheet of paper.
			 */
			public static readonly PDFMEDIABOX: PDFBoxType;
			/**
			 * Crop to TrimBox. The trim box specifies the positioning of 
			 * the page's content within the imposition.
			 */
			public static readonly PDFTRIMBOX: PDFBoxType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}