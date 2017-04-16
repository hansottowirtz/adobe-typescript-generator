/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Options which may be supplied when opening a file */
		class OpenOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * Convert crop area to Artboard when opening legacy document 
			 * (pre-Illustrator CS4) in CS4 or later. If false then crop 
			 * areas are discarded. ( default: true )
			 */
			public convertCropAreaToArtboard: boolean;
			/**
			 * Convert print tiles to Artboard when opening legacy document 
			 * (pre-Illustrator CS4) in CS4 or later. ( default: false )
			 */
			public convertTilesToArtboard: boolean;
			/**
			 * Create Artboard with dimentions of artwork bounding box when 
			 * opening legacy document (pre-Illustrator CS4) in CS4 or 
			 * later. ( default: false )
			 */
			public createArtboardWithArtworkBoundingBox: boolean;
			/**
			 * open the file as library ( default: 
			 * LibraryType.ILLUSTRATORARTWORK )
			 */
			public openAs: Adobe.Illustrator.LibraryType;
			/**
			 * Preserve Legacy Artboard (pre-Illustrator CS4) when opening 
			 * in CS4 or later. ( default: true )
			 */
			public preserveLegacyArtboard: boolean;
			/**
			 * choose to preserve the spot colors in the gradient mesh 
			 * objects for legacy documents (pre-Illustrator CS3) ( 
			 * default: true )
			 */
			public updateLegacyGradientMesh: boolean;
			/**
			 * choose to update all text objects for documents saved with 
			 * legacy texts (pre-Illustrator 11) ( default: false )
			 */
			public updateLegacyText: boolean;
		}
	}
}