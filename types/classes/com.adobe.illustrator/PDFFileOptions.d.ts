/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
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