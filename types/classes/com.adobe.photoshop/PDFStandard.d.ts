/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The PDF/X standard with which the document complies. PDF/X 
		 * compliant files must contain information describing the 
		 * printing condition for which they are prepared.
		 */
		class PDFStandard extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The document does not use the PDF/X standard. */
			public static readonly NONE: Adobe.Photoshop.PDFStandard;
			/**
			 * PDF/X-1a standard, which requires all fonts to be embedded, 
			 * the appropriate PDF bounding boxes to be specified, and 
			 * color to appear as CMYK, spot colors, or both; can be opened 
			 * in Acrobat 4.0 and Acrobat Reader 4.0 and later.
			 */
			public static readonly PDFX1A2001: Adobe.Photoshop.PDFStandard;
			/**
			 * PDF/X-1a standard, which requires all fonts to be embedded, 
			 * the appropriate PDF bounding boxes to be specified, and 
			 * color to appear as CMYK, spot colors, or both; can be opened 
			 * in Acrobat 4.0 and Acrobat Reader 4.0 and later.
			 */
			public static readonly PDFX1A2003: Adobe.Photoshop.PDFStandard;
			/**
			 * PDF/X-3 standard, which requires all fonts to be embedded 
			 * and the appropriate PDF bounding boxes to be specified, and 
			 * for color allows either the use of color management and 
			 * device-independent color (CIE L, ICC-based color spaces, 
			 * CalRGB, and CalGray) or CMYK, spot colors, or both; can be 
			 * opened in Acrobat 4.0 and Acrobat Reader 4.0 and later.
			 */
			public static readonly PDFX32002: Adobe.Photoshop.PDFStandard;
			/**
			 * PDF/X-3 standard, which requires all fonts to be embedded 
			 * and the appropriate PDF bounding boxes to be specified, and 
			 * for color allows either the use of color management and 
			 * device-independent color (CIE L, ICC-based color spaces, 
			 * CalRGB, and CalGray) or CMYK, spot colors, or both; can be 
			 * opened in Acrobat 4.0 and Acrobat Reader 4.0 and later.
			 */
			public static readonly PDFX32003: Adobe.Photoshop.PDFStandard;
			/**
			 * PDF/X-4 standard, which requires all fonts to be embedded 
			 * and the appropriate PDF bounding boxes to be specified, and 
			 * for color allows either the use of color management and 
			 * device-independent color (CIE L, ICC-based color spaces, 
			 * CalRGB, and CalGray) or CMYK, spot colors, or both; can be 
			 * opened in Acrobat 4.0 and Acrobat Reader 4.0 and later.
			 */
			public static readonly PDFX42008: Adobe.Photoshop.PDFStandard;
			/** Constructor */
			public constructor();
		}
	}
}