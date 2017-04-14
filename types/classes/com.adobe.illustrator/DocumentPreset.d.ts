/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentPreset extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * layout for artboards ( default: 
			 * DocumentArtboardLayout.GridByRow )
			 */
			public artboardLayout: Adobe.Illustrator.DocumentArtboardLayout;
			/**
			 * Number of rows (for rows layout) OR column(for column 
			 * layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 
			 * 1 for single row or column layouts ( default: 1 )
			 */
			public artboardRowsOrCols: number;
			/** spacing between artboards ( default: 20.0 ) */
			public artboardSpacing: number;
			/**
			 * the color mode for the new document ( default: 
			 * DocumentColorSpace.CMYK )
			 */
			public colorMode: Adobe.Illustrator.DocumentColorSpace;
			/** the height for the new document ( default: 792.0 ) */
			public height: number;
			/**
			 * number of artboards for new document.Range (1:100). ( 
			 * default: 1 )
			 */
			public numArtboards: number;
			/**
			 * the preview mode for the new document ( default: 
			 * DocumentPreviewMode.DefaultPreview )
			 */
			public previewMode: Adobe.Illustrator.DocumentPreviewMode;
			/**
			 * the raster resolution for the new document ( default: 
			 * DocumentRasterResolution.ScreenResolution )
			 */
			public rasterResolution: Adobe.Illustrator.DocumentRasterResolution;
			/** the title for the new document ( default: Untitled ) */
			public title: string;
			/**
			 * the transparency grid for the new document ( default: 
			 * DocumentTransparencyGrid.TransparencyGridNone )
			 */
			public transparencyGrid: Adobe.Illustrator.DocumentTransparencyGrid;
			/**
			 * the units for the new document ( default: RulerUnits.Points 
			 * )
			 */
			public units: Adobe.Illustrator.RulerUnits;
			/** the width for the new document ( default: 612.0 ) */
			public width: number;
		}
	}
}