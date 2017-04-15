/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Options which may be supplied when opening a PDF file. */
		class PDFFileOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * What page should be used when opening a multipage document 
			 * (default: 1)
			 */
			public pageToOpen: number;
			/**
			 * What box should be used when placing a multipage document 
			 * (default: PDF media box)
			 */
			public pDFCropToBox: Adobe.Illustrator.PDFBoxType;
		}
	}
}