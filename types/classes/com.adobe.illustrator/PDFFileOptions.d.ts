/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Options which may be supplied when opening a PDF file */
		class PDFFileOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * what page should be used when opening a multipage document 
			 * (default: 1)
			 * @type {number}
			 */
			public pageToOpen: number;
			/**
			 * what box should be used when placing a multipage document 
			 * (default: PDF media box)
			 * @type {Adobe.Illustrator.PDFBoxType}
			 */
			public pDFCropToBox: Adobe.Illustrator.PDFBoxType;
		}
	}
}