/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when saving a document as an 
		 * FXG file
		 */
		class FXGSaveOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * If SaveMultipleArtboards is true,this will be considered for 
			 * multi-asset extraction which specifies artboard range.Empty 
			 * string will extracts all the artboards.Default is empty 
			 * string ( default:  )
			 * @type {string}
			 */
			public artboardRange: string;
			/**
			 * the policy used by FXG to expand blends ( default: 
			 * BlendsExpandPolicy.AUTOMATICALLYCONVERTBLENDS )
			 * @type {Adobe.Illustrator.BlendsExpandPolicy}
			 */
			public blendsPolicy: Adobe.Illustrator.BlendsExpandPolicy;
			/**
			 * choose to downsample the linked images(72ppi) ( default: 
			 * false )
			 * @type {boolean}
			 */
			public downsampleLinkedImages: boolean;
			/**
			 * the policy used by FXG to preserve filters ( default: 
			 * FiltersPreservePolicy.KEEPFILTERSEDITABLE )
			 * @type {Adobe.Illustrator.FiltersPreservePolicy}
			 */
			public filtersPolicy: Adobe.Illustrator.FiltersPreservePolicy;
			/**
			 * the policy used by FXG to preserve gradients ( default: 
			 * GradientsPreservePolicy.AUTOMATICALLYCONVERTGRADIENTS )
			 * @type {Adobe.Illustrator.GradientsPreservePolicy}
			 */
			public gradientsPolicy: Adobe.Illustrator.GradientsPreservePolicy;
			/**
			 * choose to include metadata (XMP) ( default: false )
			 * @type {boolean}
			 */
			public includeMetadata: boolean;
			/**
			 * choose to include unused symbols ( default: false )
			 * @type {boolean}
			 */
			public includeUnusedSymbols: boolean;
			/**
			 * choose to preserve the editing capabilities of FXG ( 
			 * default: true )
			 * @type {boolean}
			 */
			public preserveEditingCapabilities: boolean;
			/**
			 * All the artboards or range of the artboards will be saved ( 
			 * default: false )
			 * @type {boolean}
			 */
			public saveMultipleArtboards: boolean;
			/**
			 * the policy used by FXG to preserve text ( default: 
			 * TextPreservePolicy.AUTOMATICALLYCONVERTTEXT )
			 * @type {Adobe.Illustrator.TextPreservePolicy}
			 */
			public textPolicy: Adobe.Illustrator.TextPreservePolicy;
			/**
			 * the version of the FXG file format to create ( default: 
			 * FXGVersion.VERSION2PT0 )
			 * @type {Adobe.Illustrator.FXGVersion}
			 */
			public version: Adobe.Illustrator.FXGVersion;
		}
	}
}