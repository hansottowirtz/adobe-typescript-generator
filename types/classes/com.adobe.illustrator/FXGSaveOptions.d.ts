/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FXGSaveOptions extends IllustratorHostObject {
			/**
			 * If SaveMultipleArtboards is true,this will be considered for 
			 * multi-asset extraction which specifies artboard range.Empty 
			 * string will extracts all the artboards.Default is empty 
			 * string ( default:  )
			 */
			public artboardRange: string;
			/**
			 * choose to clip content to the active artboard ( default: 
			 * true )
			 */
			public clipContent: boolean;
			/**
			 * choose to downsample the linked images(72ppi) ( default: 
			 * false )
			 */
			public downsampleLinkedImages: boolean;
			/**
			 * the policy used by FXG to preserve filters ( default: 
			 * FiltersPreservePolicy.KEEPFILTERSEDITABLE )
			 */
			public filtersPolicy: FiltersPreservePolicy;
			/**
			 * the policy used by FXG to preserve gradients ( default: 
			 * GradientsPreservePolicy.KEEPGRADIENTSEDITABLE )
			 */
			public gradientsPolicy: GradientsPreservePolicy;
			/** choose to include metadata (XMP) ( default: false ) */
			public includeMetadata: boolean;
			/** choose to include unused symbols ( default: false ) */
			public includeUnusedSymbols: boolean;
			/**
			 * choose to preserve the editing capabilities of FXG ( 
			 * default: true )
			 */
			public preserveEditingCapabilities: boolean;
			/**
			 * All the artboards or range of the artboards will be saved ( 
			 * default: false )
			 */
			public saveMultipleArtboards: boolean;
			/**
			 * the policy used by FXG to preserve text ( default: 
			 * TextPreservePolicy.KEEPTEXTEDITABLE )
			 */
			public textPolicy: TextPreservePolicy;
			/**
			 * the version of the FXG file format to create ( default: 
			 * FXGVersion.VERSION1PT0 )
			 */
			public version: FXGVersion;
		}
	}
}