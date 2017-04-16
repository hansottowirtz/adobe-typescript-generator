/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A document */
		class Document extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The active data set */
			public activeDataSet: Adobe.Illustrator.DataSet;
			/** The active layer */
			public activeLayer: Adobe.Illustrator.Layer;
			/** the document's current view */
			public readonly activeView: Adobe.Illustrator.View;
			/** all artboards in the document */
			public readonly artboards: Adobe.Illustrator.Artboards;
			/** the brushes defined in this document */
			public readonly brushes: Adobe.Illustrator.Brushes;
			/** the list of character styles in this document */
			public readonly characterStyles: Adobe.Illustrator.CharacterStyles;
			/** The compound path artwork in this collection */
			public readonly compoundPathItems: Adobe.Illustrator.CompoundPathItems;
			public cropBox: any[];
			public cropStyle: Adobe.Illustrator.CropOptions;
			/** the data sets defined in this document */
			public readonly dataSets: Adobe.Illustrator.DataSets;
			/** default fill color */
			public defaultFillColor: Adobe.Illustrator.Color;
			/** should a new path be filled? */
			public defaultFilled: boolean;
			/** will art beneath a filled object be overprinted by default? */
			public defaultFillOverprint: boolean;
			/** default type of line capping */
			public defaultStrokeCap: Adobe.Illustrator.StrokeCap;
			/** default stroke color */
			public defaultStrokeColor: Adobe.Illustrator.Color;
			/** should a new path be stroked? */
			public defaultStroked: boolean;
			/** default dash lengths (set to {} for a solid line) */
			public defaultStrokeDashes: any[];
			/**
			 * the default distance into the dash pattern at which the 
			 * pattern should be started
			 */
			public defaultStrokeDashOffset: number;
			/** default type of joints */
			public defaultStrokeJoin: Adobe.Illustrator.StrokeJoin;
			/**
			 * specifies whether a join is mitered (pointed) or beveled 
			 * (squared-off) by default
			 */
			public defaultStrokeMiterLimit: number;
			/**
			 * will art beneath a stroked object be overprinted by default?
			 */
			public defaultStrokeOverprint: boolean;
			/** default width of stroke */
			public defaultStrokeWidth: number;
			/** the color space used for the document */
			public readonly documentColorSpace: Adobe.Illustrator.DocumentColorSpace;
			/** the file associated with the document */
			public readonly fullName: File;
			/** the bounds of the illustration excluding stroke width */
			public readonly geometricBounds: any[];
			/** the gradients available in this document */
			public readonly gradients: Adobe.Illustrator.Gradients;
			/** the graphic styles defined in this document */
			public readonly graphicStyles: Adobe.Illustrator.GraphicStyles;
			/** The graph art items in this document */
			public readonly graphItems: Adobe.Illustrator.GraphItems;
			/** The group items in this document */
			public readonly groupItems: Adobe.Illustrator.GroupItems;
			public readonly height: number;
			/** the list of inks in this document */
			public readonly inkList: any[];
			/** the Kinsoku set */
			public readonly kinsokuSet: any[];
			/** The layers in this document */
			public readonly layers: Adobe.Illustrator.Layers;
			/** The text frame items in this story */
			public readonly legacyTextItems: Adobe.Illustrator.LegacyTextItems;
			/** The mesh art items in this document */
			public readonly meshItems: Adobe.Illustrator.MeshItems;
			/** the Mojikumi set */
			public readonly mojikumiSet: any[];
			/** The document's name */
			public readonly name: string;
			/** The non-native art items in this document */
			public readonly nonNativeItems: Adobe.Illustrator.NonNativeItems;
			public readonly outputResolution: number;
			/** All the artwork in this document */
			public readonly pageItems: Adobe.Illustrator.PageItems;
			public pageOrigin: any[];
			/** the list of paragraph styles in this document */
			public readonly paragraphStyles: Adobe.Illustrator.ParagraphStyles;
			/** Path specification for the document */
			public readonly path: File;
			/** The path artwork in this document */
			public readonly pathItems: Adobe.Illustrator.PathItems;
			/** the patterns available in this document */
			public readonly patterns: Adobe.Illustrator.Patterns;
			/** The placed art items in this document */
			public readonly placedItems: Adobe.Illustrator.PlacedItems;
			/** The plugin art items in this document */
			public readonly pluginItems: Adobe.Illustrator.PluginItems;
			public readonly printTiles: boolean;
			/** The document raster effects settings */
			public rasterEffectSettings: Adobe.Illustrator.RasterEffectOptions;
			/** The raster art items in this document */
			public readonly rasterItems: Adobe.Illustrator.RasterItems;
			public rulerOrigin: any[];
			public readonly rulerUnits: Adobe.Illustrator.RulerUnits;
			/** has the document been saved? */
			public saved: boolean;
			/** the selection within the document */
			public selection: any;
			public readonly showPlacedImages: boolean;
			public readonly splitLongPaths: boolean;
			/** the custom spot colors available in this document */
			public readonly spots: Adobe.Illustrator.Spots;
			/** Is the file a stationery file? */
			public readonly stationery: boolean;
			/** The story items in this document */
			public readonly stories: Adobe.Illustrator.Stories;
			/** The swatches in this document */
			public readonly swatches: Adobe.Illustrator.Swatches;
			/** The Swatch Groups in this document */
			public readonly swatchGroups: Adobe.Illustrator.SwatchGroups;
			/** the symbol items in this document */
			public readonly symbolItems: Adobe.Illustrator.SymbolItems;
			/** the symbols defined in this document */
			public readonly symbols: Adobe.Illustrator.Symbols;
			/** The tags in this document */
			public readonly tags: Adobe.Illustrator.Tags;
			/** The text frame items in this document */
			public readonly textFrames: Adobe.Illustrator.TextFrames;
			public readonly tileFullPages: boolean;
			public readonly useDefaultScreen: boolean;
			/** the variables defined in this document */
			public readonly variables: Adobe.Illustrator.Variables;
			/** The locked variables */
			public variablesLocked: boolean;
			/** The views in this document */
			public readonly views: Adobe.Illustrator.Views;
			/**
			 * the visible bounds of the illustration including stroke 
			 * width
			 */
			public readonly visibleBounds: any[];
			public readonly width: number;
			/** The XMP packet string associated with the document */
			public XMPString: string;
			/** Activate the first window associated with the document */
			public activate(): void;
			/**
			 * Close the specified document(s)
			 * @param {Adobe.Illustrator.SaveOptions} saving specifies 
			 * whether changes should be saved before closing
			 */
			public close(saving: Adobe.Illustrator.SaveOptions): void;
			/**
			 * Converts the coordinate system of a single point from one 
			 * coordinate system to another.
			 * @param {any[]} coordinate The Coordinate to convert.
			 * @param {Adobe.Illustrator.CoordinateSystem} source The 
			 * source coordinate system.
			 * @param {Adobe.Illustrator.CoordinateSystem} destination The 
			 * destination coordinate system.
			 */
			public convertCoordinate(coordinate: any[], source: Adobe.Illustrator.CoordinateSystem, destination: Adobe.Illustrator.CoordinateSystem): any[];
			/**
			 * Export the specified document(s)
			 * @param {File} exportFile the file to export the document to
			 * @param {Adobe.Illustrator.ExportType} exportFormat the file 
			 * type to export the document as
			 * @param {any} options options for the file type specified
			 */
			public exportFile(exportFile: File, exportFormat: Adobe.Illustrator.ExportType, options: any): void;
			/**
			 * save all PDF presets to a file
			 * @param {File} file file to export to
			 */
			public exportPDFPreset(file: File): void;
			/**
			 * saves all perspective grid presets to a file
			 * @param {File} file file to export to
			 */
			public exportPerspectiveGridPreset(file: File): void;
			/**
			 * export the current print setting to the preset file
			 * @param {File} file file to export to
			 */
			public exportPrintPreset(file: File): void;
			/**
			 * Save datasets into an XML library. The datasets contain 
			 * variables and their associated dynamic data
			 * @param {File} file file spec to export to
			 */
			public exportVariables(file: File): void;
			/**
			 * Change the artboard to selected art bounds.
			 * @param {number} index The index of the artboard to update.
			 */
			public fitArtboardToSelectedArt(index: number): boolean;
			/**
			 * Gets the active plane of the active perspective grid of the 
			 * document
			 */
			public getPerspectiveActivePlane(): Adobe.Illustrator.PerspectiveGridPlaneType;
			/**
			 * Hides the current active perspective grid for the document, 
			 * if there is visible perspective grid.
			 */
			public hidePerspectiveGrid(): boolean;
			/**
			 * capture the artwork content inside the clip bound as raster 
			 * image, and write out the captured image data into the target 
			 * image file.
			 * @param {File} imageFile the file to which the captured image 
			 * should be written
			 * @param {any[]} clipBounds the rectangular region of the 
			 * artwork for image capture. If the parameter is omitted, the 
			 * entire artwork bound is captured.
			 * @param {Adobe.Illustrator.ImageCaptureOptions} options 
			 * describes the image capture options
			 */
			public imageCapture(imageFile: File, clipBounds: any[], options: Adobe.Illustrator.ImageCaptureOptions): void;
			/**
			 * load the character styles from the Illustrator file
			 * @param {File} fileSpec file spec to import from
			 */
			public importCharacterStyles(fileSpec: File): void;
			/**
			 * load the paragraph styles from the Illustrator file
			 * @param {File} fileSpec file spec to import from
			 */
			public importParagraphStyles(fileSpec: File): void;
			/**
			 * load all PDF presets from a file
			 * @param {File} fileSpec file to import from
			 * @param {boolean} replacingPreset should existing editable 
			 * presets be replaced? ( default: false )
			 */
			public importPDFPreset(fileSpec: File, replacingPreset: boolean): void;
			/**
			 * loads mentioned perspective grid preset, if preset name is 
			 * specified, else loads all(if no preset name is specified) 
			 * presets, from the specified file
			 * @param {File} fileSpec file to import from
			 * @param {string} perspectivePreset name of perspective grid 
			 * preset. ( default:  )
			 */
			public importPerspectiveGridPreset(fileSpec: File, perspectivePreset: string): void;
			/**
			 * apply the named print preset from the file to the current 
			 * print setting
			 * @param {string} printPreset the name of a print preset to 
			 * import
			 * @param {File} fileSpec file to import from
			 */
			public importPrintPreset(printPreset: string, fileSpec: File): void;
			/**
			 * Import a library containing datasets, variables and their 
			 * associated dynamic data. Importing variables will overwrite 
			 * existing variables and datasets
			 * @param {File} fileSpec file spec to import from
			 */
			public importVariables(fileSpec: File): void;
			/**
			 * Print the document
			 * @param {Adobe.Illustrator.PrintOptions} options print 
			 * options
			 */
			public print(options: Adobe.Illustrator.PrintOptions): void;
			/**
			 * rasterize the source art(s) within the specified clip 
			 * bounds. The source art(s) are disposed as a result of the 
			 * rasterization.
			 * @param {any} sourceArt the page item(s) to be rasterized
			 * @param {any[]} clipBounds the rectangular region of the 
			 * artwork for the rasterization. If the parameter is omitted, 
			 * the bounds of the source art(s) is used instead.
			 * @param {Adobe.Illustrator.RasterizeOptions} options 
			 * describes the rasterization options
			 */
			public rasterize(sourceArt: any, clipBounds: any[], options: Adobe.Illustrator.RasterizeOptions): Adobe.Illustrator.PageItem;
			/**
			 * Rearrange Artboards in the document
			 * @param {Adobe.Illustrator.DocumentArtboardLayout} 
			 * artboardLayout layout of artboards for rearrangement ( 
			 * default: DocumentArtboardLayout.GridByRow )
			 * @param {number} artboardRowsOrCols Number of rows (for rows 
			 * layout) OR column(for column layouts)of artboards.Range is 1 
			 * to (docNumArtboards - 1) or 1 for single row or column 
			 * layouts ( default: 1 )
			 * @param {number} artboardSpacing spacing between artboards ( 
			 * default: 20.0 )
			 * @param {boolean} artboardMoveArtwork Whether to move artwork 
			 * with artboards ( default: true )
			 */
			public rearrangeArtboards(artboardLayout: Adobe.Illustrator.DocumentArtboardLayout, artboardRowsOrCols: number, artboardSpacing: number, artboardMoveArtwork: boolean): boolean;
			/** Save the document */
			public save(): void;
			/**
			 * Save the document with specific save options
			 * @param {File} saveIn the file to save the document in
			 * @param {any} options options for the file type specified
			 */
			public saveAs(saveIn: File, options: any): void;
			/** Select art objects in active artboard. */
			public selectObjectsOnActiveArtboard(): boolean;
			/**
			 * Selects a predefined preset to define grid for the current 
			 * document.
			 * @param {string} perspectivePreset name of perspective grid 
			 * preset.
			 */
			public selectPerspectivePreset(perspectivePreset: string): boolean;
			/**
			 * Sets the active perspective plane for the active grid of the 
			 * document.
			 * @param {Adobe.Illustrator.PerspectiveGridPlaneType} 
			 * perspectiveGridPlane Type of perspective grid plane.
			 */
			public setPerspectiveActivePlane(perspectiveGridPlane: Adobe.Illustrator.PerspectiveGridPlaneType): boolean;
			/**
			 * Shows the current active perspective grid for the document, 
			 * if no active perspective grid then shows the default 
			 * perspective grid for the document
			 */
			public showPerspectiveGrid(): boolean;
			/**
			 * capture the current document window to the target TIFF image 
			 * file.
			 * @param {File} imageFile the TIFF file to which the captured 
			 * image should be written
			 * @param {any[]} windowSize the size to make the window before 
			 * capture
			 */
			public windowCapture(imageFile: File, windowSize: any[]): void;
		}
	}
}