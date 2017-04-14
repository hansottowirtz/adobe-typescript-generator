/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Document extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The active data set. */
			public activeDataSet: Adobe.Illustrator.DataSet;
			/** The active layer. */
			public activeLayer: Adobe.Illustrator.Layer;
			/** The document's current view. */
			public readonly activeView: Adobe.Illustrator.View;
			/** All artboards in the document. */
			public readonly artboards: Adobe.Illustrator.Artboards;
			/** The brushes defined in this document. */
			public readonly brushes: Adobe.Illustrator.Brushes;
			/** The list of character styles in this document. */
			public readonly characterStyles: Adobe.Illustrator.CharacterStyles;
			/** The compound path artwork in this collection. */
			public readonly compoundPathItems: Adobe.Illustrator.CompoundPathItems;
			public cropBox: any[];
			public cropStyle: Adobe.Illustrator.CropOptions;
			/** The data sets defined in this document. */
			public readonly dataSets: Adobe.Illustrator.DataSets;
			/** Default fill color. */
			public defaultFillColor: Adobe.Illustrator.Color;
			/** Should a new path be filled? */
			public defaultFilled: boolean;
			/** Will art beneath a filled object be overprinted by default? */
			public defaultFillOverprint: boolean;
			/** Default type of line capping. */
			public defaultStrokeCap: Adobe.Illustrator.StrokeCap;
			/** Default stroke color. */
			public defaultStrokeColor: Adobe.Illustrator.Color;
			/** Should a new path be stroked? */
			public defaultStroked: boolean;
			/** Default dash lengths (set to {} for a solid line) */
			public defaultStrokeDashes: any[];
			/**
			 * The default distance into the dash pattern at which the 
			 * pattern should be started.
			 */
			public defaultStrokeDashOffset: number;
			/** Default type of joints. */
			public defaultStrokeJoin: Adobe.Illustrator.StrokeJoin;
			/**
			 * Specifies whether a join is mitered (pointed) or beveled 
			 * (squared-off) by default.
			 */
			public defaultStrokeMiterLimit: number;
			/**
			 * Will art beneath a stroked object be overprinted by default?
			 */
			public defaultStrokeOverprint: boolean;
			/** Default width of stroke. */
			public defaultStrokeWidth: number;
			/** The color space used for the document. */
			public readonly documentColorSpace: Adobe.Illustrator.DocumentColorSpace;
			/** The file associated with the document. */
			public readonly fullName: File;
			/** The bounds of the illustration excluding stroke width. */
			public readonly geometricBounds: any[];
			/** The gradients available in this document. */
			public readonly gradients: Adobe.Illustrator.Gradients;
			/** The graphic styles defined in this document. */
			public readonly graphicStyles: Adobe.Illustrator.GraphicStyles;
			/** The graph art items in this document. */
			public readonly graphItems: Adobe.Illustrator.GraphItems;
			/** The group items in this document. */
			public readonly groupItems: Adobe.Illustrator.GroupItems;
			public readonly height: number;
			/** The list of inks in this document. */
			public readonly inkList: any;
			/** The Kinsoku set. */
			public readonly kinsokuSet: any;
			/** The layers in this document. */
			public readonly layers: Adobe.Illustrator.Layers;
			/** The text frame items in this story. */
			public readonly legacyTextItems: Adobe.Illustrator.LegacyTextItems;
			/** The mesh art items in this document. */
			public readonly meshItems: Adobe.Illustrator.MeshItems;
			/** The Mojikumi set. */
			public readonly mojikumiSet: any;
			/** The document's name. */
			public readonly name: string;
			/** The non-native art items in this document. */
			public readonly nonNativeItems: Adobe.Illustrator.NonNativeItems;
			public readonly outputResolution: number;
			/** All the artwork in this document. */
			public readonly pageItems: Adobe.Illustrator.PageItems;
			public pageOrigin: any[];
			/** The list of paragraph styles in this document. */
			public readonly paragraphStyles: Adobe.Illustrator.ParagraphStyles;
			/** Path specification for the document. */
			public readonly path: File;
			/** The path artwork in this document. */
			public readonly pathItems: Adobe.Illustrator.PathItems;
			/** The patterns available in this document. */
			public readonly patterns: Adobe.Illustrator.Patterns;
			/** The placed art items in this document. */
			public readonly placedItems: Adobe.Illustrator.PlacedItems;
			/** The plugin art items in this document. */
			public readonly pluginItems: Adobe.Illustrator.PluginItems;
			public readonly printTiles: boolean;
			/** The document raster effects settings. */
			public rasterEffectSettings: Adobe.Illustrator.RasterEffectOptions;
			/** The raster art items in this document. */
			public readonly rasterItems: Adobe.Illustrator.RasterItems;
			public rulerOrigin: any[];
			public readonly rulerUnits: Adobe.Illustrator.RulerUnits;
			/** Has the document been saved? */
			public saved: boolean;
			/** The selection within the document. */
			public selection: any;
			public readonly showPlacedImages: boolean;
			public readonly splitLongPaths: boolean;
			/** The custom spot colors available in this document. */
			public readonly spots: Adobe.Illustrator.Spots;
			/** Is the file a stationery file? */
			public readonly stationery: boolean;
			/** The story items in this document. */
			public readonly stories: Adobe.Illustrator.Stories;
			/** The swatches in this document. */
			public readonly swatches: Adobe.Illustrator.Swatches;
			/** The Swatch Groups in this document. */
			public readonly swatchGroups: Adobe.Illustrator.SwatchGroups;
			/** The symbol items in this document. */
			public readonly symbolItems: Adobe.Illustrator.SymbolItems;
			/** The symbols defined in this document. */
			public readonly symbols: Adobe.Illustrator.Symbols;
			/** The tags in this document. */
			public readonly tags: Adobe.Illustrator.Tags;
			/** The text frame items in this document. */
			public readonly textFrames: Adobe.Illustrator.TextFrames;
			public readonly tileFullPages: boolean;
			public readonly useDefaultScreen: boolean;
			/** The variables defined in this document. */
			public readonly variables: Adobe.Illustrator.Variables;
			/** The locked variables. */
			public variablesLocked: boolean;
			/** The views in this document. */
			public readonly views: Adobe.Illustrator.Views;
			/**
			 * The visible bounds of the illustration including stroke 
			 * width.
			 */
			public readonly visibleBounds: any[];
			public readonly width: number;
			/** The XMP packet string associated with the document. */
			public XMPString: string;
			/** Activate the first window associated with the document. */
			public activate(): void;
			/** Close the specified document(s) */
			public close(saving: SaveOptions): void;
			/**
			 * Converts the coordinate system of a single point from one 
			 * coordinate system to another.
			 */
			public convertCoordinate(coordinate: any[], source: CoordinateSystem, destination: CoordinateSystem): any[];
			/** Export the specified document(s) */
			public exportFile(exportFile: File, exportFormat: ExportType, options: any): void;
			/** Save all PDF presets to a file. */
			public exportPDFPreset(file: File): void;
			/** saves all perspective grid presets to a file */
			public exportPerspectiveGridPreset(file: File): void;
			/** Export the current print setting to the preset file. */
			public exportPrintPreset(file: File): void;
			/**
			 * Save datasets into an XML library. The datasets contain 
			 * variables and their associated dynamic data.
			 */
			public exportVariables(file: File): void;
			/** Change the artboard to selected art bounds. */
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
			 * Capture the artwork content inside the clip bound as raster 
			 * image, and write out the captured image data into the target 
			 * image file.
			 */
			public imageCapture(imageFile: File, clipBounds: any[], options: ImageCaptureOptions): void;
			/** Load the character styles from the Illustrator file. */
			public importCharacterStyles(fileSpec: File): void;
			/** Load the paragraph styles from the Illustrator file. */
			public importParagraphStyles(fileSpec: File): void;
			/** Load all PDF presets from a file. */
			public importPDFPreset(fileSpec: File, replacingPreset: boolean): void;
			/**
			 * loads mentioned perspective grid preset, if preset name is 
			 * specified, else loads all(if no preset name is specified) 
			 * presets, from the specified file
			 */
			public importPerspectiveGridPreset(fileSpec: File, perspectivePreset: string): void;
			/**
			 * Apply the named print preset from the file to the current 
			 * print setting.
			 */
			public importPrintPreset(printPreset: string, fileSpec: File): void;
			/**
			 * Import a library containing datasets, variables and their 
			 * associated dynamic data. Importing variables will overwrite 
			 * existing variables and datasets.
			 */
			public importVariables(fileSpec: File): void;
			/** Print the document. */
			public print(options: PrintOptions): void;
			/**
			 * Rasterize the source art(s) within the specified clip 
			 * bounds. The source art(s) are disposed as a result of the 
			 * rasterization.
			 */
			public rasterize(sourceArt: any, clipBounds: any[], options: RasterizeOptions): Adobe.Illustrator.PageItem;
			/** Save the document. */
			public save(): void;
			/** Save the document with specific save options. */
			public saveAs(saveIn: File, options: any): void;
			/** Select art objects in active artboard. */
			public selectObjectsOnActiveArtboard(): boolean;
			/**
			 * Selects a predefined preset to define grid for the current 
			 * document.
			 */
			public selectPerspectivePreset(perspectivePreset: string): boolean;
			/**
			 * Sets the active perspective plane for the active grid of the 
			 * document.
			 */
			public setPerspectiveActivePlane(perspectiveGridPlane: PerspectiveGridPlaneType): boolean;
			/**
			 * Shows the current active perspective grid for the document, 
			 * if no active perspective grid then shows the default 
			 * perspective grid for the document
			 */
			public showPerspectiveGrid(): boolean;
			/**
			 * Capture the current document window to the target TIFF image 
			 * file.
			 */
			public windowCapture(imageFile: File, windowSize: any[]): void;
		}
	}
}