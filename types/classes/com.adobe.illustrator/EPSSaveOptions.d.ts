/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when saving a document as an 
		 * Illustrator EPS file
		 */
		class EPSSaveOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * If SaveMultipleArtboards is true,this will be considered for 
			 * multi-asset extraction which specifies artboard range.Empty 
			 * string will extracts all the artboards.Default is empty 
			 * string ( default:  )
			 * @type {string}
			 */
			public artboardRange: string;
			/**
			 * use CMYK PostScript ( default: true )
			 * @type {boolean}
			 */
			public cmykPostScript: boolean;
			/**
			 * what Illustrator file format version to create ( default: 
			 * Compatibility.ILLUSTRATOR16 )
			 * @type {Adobe.Illustrator.Compatibility}
			 */
			public compatibility: Adobe.Illustrator.Compatibility;
			/**
			 * create a raster item of the gradient or gradient mesh so 
			 * that PostScript Level 2 printers can print the object ( 
			 * default: false )
			 * @type {boolean}
			 */
			public compatibleGradientPrinting: boolean;
			/**
			 * embed all fonts used by the document in the saved file 
			 * (version 7 or later) ( default: false )
			 * @type {boolean}
			 */
			public embedAllFonts: boolean;
			/**
			 * are linked image files to be included in the saved document 
			 * ( default: false )
			 * @type {boolean}
			 */
			public embedLinkedFiles: boolean;
			/**
			 * how should transparency be flattened for older file format 
			 * versions (pre-version 9) ( default: 
			 * OutputFlattening.PRESERVEAPPEARANCE )
			 * @type {Adobe.Illustrator.OutputFlattening}
			 */
			public flattenOutput: Adobe.Illustrator.OutputFlattening;
			/**
			 * include thumbnail image of the EPS artwork ( default: true )
			 * @type {boolean}
			 */
			public includeDocumentThumbnails: boolean;
			/**
			 * ( default: PDFOverprint.PRESERVEPDFOVERPRINT )
			 * @type {Adobe.Illustrator.PDFOverprint}
			 */
			public overprint: Adobe.Illustrator.PDFOverprint;
			/**
			 * PostScript level to use (level 1 valid for file format 
			 * version 8 or older) ( default: EPSPostScriptLevelEnum.LEVEL2 
			 * )
			 * @type {Adobe.Illustrator.EPSPostScriptLevelEnum}
			 */
			public postScript: Adobe.Illustrator.EPSPostScriptLevelEnum;
			/**
			 * EPS preview format
			 * @type {Adobe.Illustrator.EPSPreview}
			 */
			public preview: Adobe.Illustrator.EPSPreview;
			/**
			 * All the artboards or range of the artboards will be saved ( 
			 * default: false )
			 * @type {boolean}
			 */
			public saveMultipleArtboards: boolean;
		}
	}
}