/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PhotoshopFileOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Should use the specified LayerComp. */
			public layerComp: string;
			/**
			 * Should hidden layers be preserved when the document is 
			 * converted (default: false)
			 */
			public preserveHiddenLayers: boolean;
			/**
			 * Should image maps be preserved when the document is 
			 * converted (default: true)
			 */
			public preserveImageMaps: boolean;
			/**
			 * Should layers be Preserve when the document is converted 
			 * (default: true)
			 */
			public preserveLayers: boolean;
			/**
			 * Should slices be preserved when the document is converted 
			 * (default: true)
			 */
			public preserveSlices: boolean;
		}
	}
}