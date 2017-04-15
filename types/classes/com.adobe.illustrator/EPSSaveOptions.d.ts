/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class EPSSaveOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * If SaveMultipleArtboards is true,this will be considered for 
			 * multi-asset extraction which specifies artboard range.Empty 
			 * string will extracts all the artboards.Default is empty 
			 * string ( default:  )
			 */
			public artboardRange: string;
			/** use CMYK PostScript ( default: true ) */
			public cmykPostScript: boolean;
			/**
			 * what Illustrator file format version to create ( default: 
			 * Compatibility.ILLUSTRATOR15 )
			 */
			public compatibility: Adobe.Illustrator.Compatibility;
			/**
			 * create a raster item of the gradient or gradient mesh so 
			 * that PostScript Level 2 printers can print the object ( 
			 * default: false )
			 */
			public compatibleGradientPrinting: boolean;
			/**
			 * embed all fonts used by the document in the saved file 
			 * (version 7 or later) ( default: false )
			 */
			public embedAllFonts: boolean;
			/**
			 * are linked image files to be included in the saved document 
			 * ( default: false )
			 */
			public embedLinkedFiles: boolean;
			/**
			 * how should transparency be flattened for older file format 
			 * versions (pre-version 9) ( default: 
			 * OutputFlattening.PRESERVEAPPEARANCE )
			 */
			public flattenOutput: Adobe.Illustrator.OutputFlattening;
			/**
			 * include thumbnail image of the EPS artwork ( default: true )
			 */
			public includeDocumentThumbnails: boolean;
			/** ( default: PDFOverprint.PRESERVEPDFOVERPRINT ) */
			public overprint: Adobe.Illustrator.PDFOverprint;
			/**
			 * PostScript level to use (level 1 valid for file format 
			 * version 8 or older) ( default: EPSPostScriptLevelEnum.LEVEL2 
			 * )
			 */
			public postScript: Adobe.Illustrator.EPSPostScriptLevelEnum;
			/** EPS preview format */
			public preview: Adobe.Illustrator.EPSPreview;
			/**
			 * All the artboards or range of the artboards will be saved ( 
			 * default: false )
			 */
			public saveMultipleArtboards: boolean;
		}
	}
}