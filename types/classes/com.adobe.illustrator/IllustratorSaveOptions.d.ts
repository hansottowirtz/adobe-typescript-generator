/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when saving a document as an 
		 * Illustrator file
		 */
		class IllustratorSaveOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * If SaveMultipleArtboards is true ,this will be considered 
			 * for multi-asset extraction which specifies artboard 
			 * range.Empty string will extracts all the artboards.Default 
			 * is empty string ( default:  )
			 * @type {string}
			 */
			public artboardRange: string;
			/**
			 * what Illustrator file format version to create ( default: 
			 * Compatibility.ILLUSTRATOR16 )
			 * @type {Adobe.Illustrator.Compatibility}
			 */
			public compatibility: Adobe.Illustrator.Compatibility;
			/**
			 * should the saved file be compressed (version 10 or later) ( 
			 * default: true )
			 * @type {boolean}
			 */
			public compressed: boolean;
			/**
			 * embed the document's ICC profile in the saved file (version 
			 * 9 or later) ( default: false )
			 * @type {boolean}
			 */
			public embedICCProfile: boolean;
			/**
			 * are linked image files to be included in the saved document 
			 * (versions 7 or later) ( default: false )
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
			 * include a subset of fonts when less than this percentage of 
			 * characters are used (version 9 or later) ( 0.0 - 100.0; 
			 * default: 100.0 )
			 * @type {number}
			 */
			public fontSubsetThreshold: number;
			/**
			 * save as a PDF compatible file (version 10 or later) ( 
			 * default: true )
			 * @type {boolean}
			 */
			public pdfCompatible: boolean;
			/**
			 * All the artboards or range of the artboards will be saved ( 
			 * default: false )
			 * @type {boolean}
			 */
			public saveMultipleArtboards: boolean;
		}
	}
}