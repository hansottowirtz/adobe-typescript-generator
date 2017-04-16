/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A document */
		class Document extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * The active data set
			 * @type {Adobe.Illustrator.DataSet}
			 */
			public activeDataSet: Adobe.Illustrator.DataSet;
			/**
			 * The active layer
			 * @type {Adobe.Illustrator.Layer}
			 */
			public activeLayer: Adobe.Illustrator.Layer;
			/**
			 * the document's current view
			 * @type {Adobe.Illustrator.View}
			 * @readonly
			 */
			public readonly activeView: Adobe.Illustrator.View;
			/**
			 * all artboards in the document
			 * @type {Adobe.Illustrator.Artboards}
			 * @readonly
			 */
			public readonly artboards: Adobe.Illustrator.Artboards;
			/**
			 * the brushes defined in this document
			 * @type {Adobe.Illustrator.Brushes}
			 * @readonly
			 */
			public readonly brushes: Adobe.Illustrator.Brushes;
			/**
			 * the list of character styles in this document
			 * @type {Adobe.Illustrator.CharacterStyles}
			 * @readonly
			 */
			public readonly characterStyles: Adobe.Illustrator.CharacterStyles;
			/**
			 * The compound path artwork in this collection
			 * @type {Adobe.Illustrator.CompoundPathItems}
			 * @readonly
			 */
			public readonly compoundPathItems: Adobe.Illustrator.CompoundPathItems;
			/**
			 * @type {any[]}
			 */
			public cropBox: any[];
			/**
			 * @type {Adobe.Illustrator.CropOptions}
			 */
			public cropStyle: Adobe.Illustrator.CropOptions;
			/**
			 * the data sets defined in this document
			 * @type {Adobe.Illustrator.DataSets}
			 * @readonly
			 */
			public readonly dataSets: Adobe.Illustrator.DataSets;
			/**
			 * default fill color
			 * @type {Adobe.Illustrator.Color}
			 */
			public defaultFillColor: Adobe.Illustrator.Color;
			/**
			 * should a new path be filled?
			 * @type {boolean}
			 */
			public defaultFilled: boolean;
			/**
			 * will art beneath a filled object be overprinted by default?
			 * @type {boolean}
			 */
			public defaultFillOverprint: boolean;
			/**
			 * default type of line capping
			 * @type {Adobe.Illustrator.StrokeCap}
			 */
			public defaultStrokeCap: Adobe.Illustrator.StrokeCap;
			/**
			 * default stroke color
			 * @type {Adobe.Illustrator.Color}
			 */
			public defaultStrokeColor: Adobe.Illustrator.Color;
			/**
			 * should a new path be stroked?
			 * @type {boolean}
			 */
			public defaultStroked: boolean;
			/**
			 * default dash lengths (set to {} for a solid line)
			 * @type {any[]}
			 */
			public defaultStrokeDashes: any[];
			/**
			 * the default distance into the dash pattern at which the 
			 * pattern should be started
			 * @type {number}
			 */
			public defaultStrokeDashOffset: number;
			/**
			 * default type of joints
			 * @type {Adobe.Illustrator.StrokeJoin}
			 */
			public defaultStrokeJoin: Adobe.Illustrator.StrokeJoin;
			/**
			 * specifies whether a join is mitered (pointed) or beveled 
			 * (squared-off) by default
			 * @type {number}
			 */
			public defaultStrokeMiterLimit: number;
			/**
			 * will art beneath a stroked object be overprinted by default?
			 * @type {boolean}
			 */
			public defaultStrokeOverprint: boolean;
			/**
			 * default width of stroke
			 * @type {number}
			 */
			public defaultStrokeWidth: number;
			/**
			 * the color space used for the document
			 * @type {Adobe.Illustrator.DocumentColorSpace}
			 * @readonly
			 */
			public readonly documentColorSpace: Adobe.Illustrator.DocumentColorSpace;
			/**
			 * the file associated with the document
			 * @type {File}
			 * @readonly
			 */
			public readonly fullName: File;
			/**
			 * the bounds of the illustration excluding stroke width
			 * @type {any[]}
			 * @readonly
			 */
			public readonly geometricBounds: any[];
			/**
			 * the gradients available in this document
			 * @type {Adobe.Illustrator.Gradients}
			 * @readonly
			 */
			public readonly gradients: Adobe.Illustrator.Gradients;
			/**
			 * the graphic styles defined in this document
			 * @type {Adobe.Illustrator.GraphicStyles}
			 * @readonly
			 */
			public readonly graphicStyles: Adobe.Illustrator.GraphicStyles;
			/**
			 * The graph art items in this document
			 * @type {Adobe.Illustrator.GraphItems}
			 * @readonly
			 */
			public readonly graphItems: Adobe.Illustrator.GraphItems;
			/**
			 * The group items in this document
			 * @type {Adobe.Illustrator.GroupItems}
			 * @readonly
			 */
			public readonly groupItems: Adobe.Illustrator.GroupItems;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly height: number;
			/**
			 * the list of inks in this document
			 * @type {any[]}
			 * @readonly
			 */
			public readonly inkList: any[];
			/**
			 * the Kinsoku set
			 * @type {any[]}
			 * @readonly
			 */
			public readonly kinsokuSet: any[];
			/**
			 * The layers in this document
			 * @type {Adobe.Illustrator.Layers}
			 * @readonly
			 */
			public readonly layers: Adobe.Illustrator.Layers;
			/**
			 * The text frame items in this story
			 * @type {Adobe.Illustrator.LegacyTextItems}
			 * @readonly
			 */
			public readonly legacyTextItems: Adobe.Illustrator.LegacyTextItems;
			/**
			 * The mesh art items in this document
			 * @type {Adobe.Illustrator.MeshItems}
			 * @readonly
			 */
			public readonly meshItems: Adobe.Illustrator.MeshItems;
			/**
			 * the Mojikumi set
			 * @type {any[]}
			 * @readonly
			 */
			public readonly mojikumiSet: any[];
			/**
			 * The document's name
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * The non-native art items in this document
			 * @type {Adobe.Illustrator.NonNativeItems}
			 * @readonly
			 */
			public readonly nonNativeItems: Adobe.Illustrator.NonNativeItems;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly outputResolution: number;
			/**
			 * All the artwork in this document
			 * @type {Adobe.Illustrator.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Illustrator.PageItems;
			/**
			 * @type {any[]}
			 */
			public pageOrigin: any[];
			/**
			 * the list of paragraph styles in this document
			 * @type {Adobe.Illustrator.ParagraphStyles}
			 * @readonly
			 */
			public readonly paragraphStyles: Adobe.Illustrator.ParagraphStyles;
			/**
			 * Path specification for the document
			 * @type {File}
			 * @readonly
			 */
			public readonly path: File;
			/**
			 * The path artwork in this document
			 * @type {Adobe.Illustrator.PathItems}
			 * @readonly
			 */
			public readonly pathItems: Adobe.Illustrator.PathItems;
			/**
			 * the patterns available in this document
			 * @type {Adobe.Illustrator.Patterns}
			 * @readonly
			 */
			public readonly patterns: Adobe.Illustrator.Patterns;
			/**
			 * The placed art items in this document
			 * @type {Adobe.Illustrator.PlacedItems}
			 * @readonly
			 */
			public readonly placedItems: Adobe.Illustrator.PlacedItems;
			/**
			 * The plugin art items in this document
			 * @type {Adobe.Illustrator.PluginItems}
			 * @readonly
			 */
			public readonly pluginItems: Adobe.Illustrator.PluginItems;
			/**
			 * @type {boolean}
			 * @readonly
			 */
			public readonly printTiles: boolean;
			/**
			 * The document raster effects settings
			 * @type {Adobe.Illustrator.RasterEffectOptions}
			 */
			public rasterEffectSettings: Adobe.Illustrator.RasterEffectOptions;
			/**
			 * The raster art items in this document
			 * @type {Adobe.Illustrator.RasterItems}
			 * @readonly
			 */
			public readonly rasterItems: Adobe.Illustrator.RasterItems;
			/**
			 * @type {any[]}
			 */
			public rulerOrigin: any[];
			/**
			 * @type {Adobe.Illustrator.RulerUnits}
			 * @readonly
			 */
			public readonly rulerUnits: Adobe.Illustrator.RulerUnits;
			/**
			 * has the document been saved?
			 * @type {boolean}
			 */
			public saved: boolean;
			/**
			 * the selection within the document
			 * @type {any}
			 */
			public selection: any;
			/**
			 * @type {boolean}
			 * @readonly
			 */
			public readonly showPlacedImages: boolean;
			/**
			 * @type {boolean}
			 * @readonly
			 */
			public readonly splitLongPaths: boolean;
			/**
			 * the custom spot colors available in this document
			 * @type {Adobe.Illustrator.Spots}
			 * @readonly
			 */
			public readonly spots: Adobe.Illustrator.Spots;
			/**
			 * Is the file a stationery file?
			 * @type {boolean}
			 * @readonly
			 */
			public readonly stationery: boolean;
			/**
			 * The story items in this document
			 * @type {Adobe.Illustrator.Stories}
			 * @readonly
			 */
			public readonly stories: Adobe.Illustrator.Stories;
			/**
			 * The swatches in this document
			 * @type {Adobe.Illustrator.Swatches}
			 * @readonly
			 */
			public readonly swatches: Adobe.Illustrator.Swatches;
			/**
			 * The Swatch Groups in this document
			 * @type {Adobe.Illustrator.SwatchGroups}
			 * @readonly
			 */
			public readonly swatchGroups: Adobe.Illustrator.SwatchGroups;
			/**
			 * the symbol items in this document
			 * @type {Adobe.Illustrator.SymbolItems}
			 * @readonly
			 */
			public readonly symbolItems: Adobe.Illustrator.SymbolItems;
			/**
			 * the symbols defined in this document
			 * @type {Adobe.Illustrator.Symbols}
			 * @readonly
			 */
			public readonly symbols: Adobe.Illustrator.Symbols;
			/**
			 * The tags in this document
			 * @type {Adobe.Illustrator.Tags}
			 * @readonly
			 */
			public readonly tags: Adobe.Illustrator.Tags;
			/**
			 * The text frame items in this document
			 * @type {Adobe.Illustrator.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Illustrator.TextFrames;
			/**
			 * @type {boolean}
			 * @readonly
			 */
			public readonly tileFullPages: boolean;
			/**
			 * @type {boolean}
			 * @readonly
			 */
			public readonly useDefaultScreen: boolean;
			/**
			 * the variables defined in this document
			 * @type {Adobe.Illustrator.Variables}
			 * @readonly
			 */
			public readonly variables: Adobe.Illustrator.Variables;
			/**
			 * The locked variables
			 * @type {boolean}
			 */
			public variablesLocked: boolean;
			/**
			 * The views in this document
			 * @type {Adobe.Illustrator.Views}
			 * @readonly
			 */
			public readonly views: Adobe.Illustrator.Views;
			/**
			 * the visible bounds of the illustration including stroke 
			 * width
			 * @type {any[]}
			 * @readonly
			 */
			public readonly visibleBounds: any[];
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly width: number;
			/**
			 * The XMP packet string associated with the document
			 * @type {string}
			 */
			public XMPString: string;
			/**
			 * Activate the first window associated with the document
			 * @returns {void}
			 */
			public activate(): void;
			/**
			 * Close the specified document(s)
			 * @param {Adobe.Illustrator.SaveOptions} saving specifies 
			 * whether changes should be saved before closing
			 * @returns {void}
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
			 * @returns {any[]}
			 */
			public convertCoordinate(coordinate: any[], source: Adobe.Illustrator.CoordinateSystem, destination: Adobe.Illustrator.CoordinateSystem): any[];
			/**
			 * Export the specified document(s)
			 * @param {File} exportFile the file to export the document to
			 * @param {Adobe.Illustrator.ExportType} exportFormat the file 
			 * type to export the document as
			 * @param {any} options options for the file type specified
			 * @returns {void}
			 */
			public exportFile(exportFile: File, exportFormat: Adobe.Illustrator.ExportType, options: any): void;
			/**
			 * save all PDF presets to a file
			 * @param {File} file file to export to
			 * @returns {void}
			 */
			public exportPDFPreset(file: File): void;
			/**
			 * saves all perspective grid presets to a file
			 * @param {File} file file to export to
			 * @returns {void}
			 */
			public exportPerspectiveGridPreset(file: File): void;
			/**
			 * export the current print setting to the preset file
			 * @param {File} file file to export to
			 * @returns {void}
			 */
			public exportPrintPreset(file: File): void;
			/**
			 * Save datasets into an XML library. The datasets contain 
			 * variables and their associated dynamic data
			 * @param {File} file file spec to export to
			 * @returns {void}
			 */
			public exportVariables(file: File): void;
			/**
			 * Change the artboard to selected art bounds.
			 * @param {number} index The index of the artboard to update.
			 * @returns {boolean}
			 */
			public fitArtboardToSelectedArt(index: number): boolean;
			/**
			 * Gets the active plane of the active perspective grid of the 
			 * document
			 * @returns {Adobe.Illustrator.PerspectiveGridPlaneType}
			 */
			public getPerspectiveActivePlane(): Adobe.Illustrator.PerspectiveGridPlaneType;
			/**
			 * Hides the current active perspective grid for the document, 
			 * if there is visible perspective grid.
			 * @returns {boolean}
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
			 * @returns {void}
			 */
			public imageCapture(imageFile: File, clipBounds: any[], options: Adobe.Illustrator.ImageCaptureOptions): void;
			/**
			 * load the character styles from the Illustrator file
			 * @param {File} fileSpec file spec to import from
			 * @returns {void}
			 */
			public importCharacterStyles(fileSpec: File): void;
			/**
			 * load the paragraph styles from the Illustrator file
			 * @param {File} fileSpec file spec to import from
			 * @returns {void}
			 */
			public importParagraphStyles(fileSpec: File): void;
			/**
			 * load all PDF presets from a file
			 * @param {File} fileSpec file to import from
			 * @param {boolean} replacingPreset should existing editable 
			 * presets be replaced? ( default: false )
			 * @returns {void}
			 */
			public importPDFPreset(fileSpec: File, replacingPreset: boolean): void;
			/**
			 * loads mentioned perspective grid preset, if preset name is 
			 * specified, else loads all(if no preset name is specified) 
			 * presets, from the specified file
			 * @param {File} fileSpec file to import from
			 * @param {string} perspectivePreset name of perspective grid 
			 * preset. ( default:  )
			 * @returns {void}
			 */
			public importPerspectiveGridPreset(fileSpec: File, perspectivePreset: string): void;
			/**
			 * apply the named print preset from the file to the current 
			 * print setting
			 * @param {string} printPreset the name of a print preset to 
			 * import
			 * @param {File} fileSpec file to import from
			 * @returns {void}
			 */
			public importPrintPreset(printPreset: string, fileSpec: File): void;
			/**
			 * Import a library containing datasets, variables and their 
			 * associated dynamic data. Importing variables will overwrite 
			 * existing variables and datasets
			 * @param {File} fileSpec file spec to import from
			 * @returns {void}
			 */
			public importVariables(fileSpec: File): void;
			/**
			 * Print the document
			 * @param {Adobe.Illustrator.PrintOptions} options print 
			 * options
			 * @returns {void}
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
			 * @returns {Adobe.Illustrator.PageItem}
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
			 * @returns {boolean}
			 */
			public rearrangeArtboards(artboardLayout: Adobe.Illustrator.DocumentArtboardLayout, artboardRowsOrCols: number, artboardSpacing: number, artboardMoveArtwork: boolean): boolean;
			/**
			 * Save the document
			 * @returns {void}
			 */
			public save(): void;
			/**
			 * Save the document with specific save options
			 * @param {File} saveIn the file to save the document in
			 * @param {any} options options for the file type specified
			 * @returns {void}
			 */
			public saveAs(saveIn: File, options: any): void;
			/**
			 * Select art objects in active artboard.
			 * @returns {boolean}
			 */
			public selectObjectsOnActiveArtboard(): boolean;
			/**
			 * Selects a predefined preset to define grid for the current 
			 * document.
			 * @param {string} perspectivePreset name of perspective grid 
			 * preset.
			 * @returns {boolean}
			 */
			public selectPerspectivePreset(perspectivePreset: string): boolean;
			/**
			 * Sets the active perspective plane for the active grid of the 
			 * document.
			 * @param {Adobe.Illustrator.PerspectiveGridPlaneType} 
			 * perspectiveGridPlane Type of perspective grid plane.
			 * @returns {boolean}
			 */
			public setPerspectiveActivePlane(perspectiveGridPlane: Adobe.Illustrator.PerspectiveGridPlaneType): boolean;
			/**
			 * Shows the current active perspective grid for the document, 
			 * if no active perspective grid then shows the default 
			 * perspective grid for the document
			 * @returns {boolean}
			 */
			public showPerspectiveGrid(): boolean;
			/**
			 * capture the current document window to the target TIFF image 
			 * file.
			 * @param {File} imageFile the TIFF file to which the captured 
			 * image should be written
			 * @param {any[]} windowSize the size to make the window before 
			 * capture
			 * @returns {void}
			 */
			public windowCapture(imageFile: File, windowSize: any[]): void;
		}
	}
}