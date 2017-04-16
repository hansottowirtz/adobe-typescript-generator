/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the new document preset to use for creating a new document */
		class DocumentPreset extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * layout for artboards ( default: 
			 * DocumentArtboardLayout.GridByRow )
			 * @type {Adobe.Illustrator.DocumentArtboardLayout}
			 */
			public artboardLayout: Adobe.Illustrator.DocumentArtboardLayout;
			/**
			 * Number of rows (for rows layout) OR column(for column 
			 * layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 
			 * 1 for single row or column layouts ( default: 1 )
			 * @type {number}
			 */
			public artboardRowsOrCols: number;
			/**
			 * spacing between artboards ( default: 20.0 )
			 * @type {number}
			 */
			public artboardSpacing: number;
			/**
			 * the color mode for the new document ( default: 
			 * DocumentColorSpace.CMYK )
			 * @type {Adobe.Illustrator.DocumentColorSpace}
			 */
			public colorMode: Adobe.Illustrator.DocumentColorSpace;
			/**
			 * the height for the new document ( default: 792.0 )
			 * @type {number}
			 */
			public height: number;
			/**
			 * number of artboards for new document.Range (1:100). ( 
			 * default: 1 )
			 * @type {number}
			 */
			public numArtboards: number;
			/**
			 * the preview mode for the new document ( default: 
			 * DocumentPreviewMode.DefaultPreview )
			 * @type {Adobe.Illustrator.DocumentPreviewMode}
			 */
			public previewMode: Adobe.Illustrator.DocumentPreviewMode;
			/**
			 * the raster resolution for the new document ( default: 
			 * DocumentRasterResolution.ScreenResolution )
			 * @type {Adobe.Illustrator.DocumentRasterResolution}
			 */
			public rasterResolution: Adobe.Illustrator.DocumentRasterResolution;
			/**
			 * the title for the new document ( default: Untitled )
			 * @type {string}
			 */
			public title: string;
			/**
			 * the transparency grid for the new document ( default: 
			 * DocumentTransparencyGrid.TransparencyGridNone )
			 * @type {Adobe.Illustrator.DocumentTransparencyGrid}
			 */
			public transparencyGrid: Adobe.Illustrator.DocumentTransparencyGrid;
			/**
			 * the units for the new document ( default: RulerUnits.Points 
			 * )
			 * @type {Adobe.Illustrator.RulerUnits}
			 */
			public units: Adobe.Illustrator.RulerUnits;
			/**
			 * the width for the new document ( default: 612.0 )
			 * @type {number}
			 */
			public width: number;
		}
	}
}