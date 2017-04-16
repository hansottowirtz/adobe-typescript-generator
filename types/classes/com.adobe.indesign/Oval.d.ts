/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** SplineItem */
		class Oval extends Adobe.Indesign.SplineItem {
			/**
			 * Indicates whether the Oval has been flipped independently of 
			 * its parent object and, if yes, the direction in which the 
			 * Oval was flipped.
			 */
			public absoluteFlip: Adobe.Indesign.Flip;
			/**
			 * The horizontal scale of the Oval relative to its containing 
			 * object.
			 */
			public absoluteHorizontalScale: number;
			/**
			 * The rotation angle of the Oval relative to its containing 
			 * object. (Range: -360 to 360)
			 */
			public absoluteRotationAngle: number;
			/**
			 * The skewing angle of the Oval relative to its containing 
			 * object. (Range: -360 to 360)
			 */
			public absoluteShearAngle: number;
			/**
			 * The vertical scale of the Oval relative to its containing 
			 * object.
			 */
			public absoluteVerticalScale: number;
			/**
			 * Dispatched after a Oval is placed. This event bubbles. This 
			 * event is not cancelable.
			 */
			public static readonly AFTER_PLACE: string;
			/** The list of all articles this page item is part of */
			public readonly allArticles: any;
			/** Lists all graphics contained by the Oval. */
			public readonly allGraphics: any;
			/** If true, the master page item can be overridden. */
			public allowOverrides: boolean;
			/** Lists all page items contained by the Oval. */
			public readonly allPageItems: any;
			/** Anchored object settings. */
			public readonly anchoredObjectSettings: Adobe.Indesign.AnchoredObjectSetting;
			/** The page item animation settings. */
			public readonly animationSettings: Adobe.Indesign.AnimationSetting;
			/** The object style applied to the Oval. */
			public appliedObjectStyle: Adobe.Indesign.ObjectStyle;
			/** The XML element associated with the Oval. */
			public readonly associatedXMLElement: Adobe.Indesign.XMLItem;
			/**
			 * Dispatched before a Oval is placed. This event bubbles. This 
			 * event is cancelable.
			 */
			public static readonly BEFORE_PLACE: string;
			/**
			 * The shape to apply to the bottom left corner of rectangular 
			 * shapes.
			 */
			public bottomLeftCornerOption: Adobe.Indesign.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the bottom left corner of rectangular shapes
			 */
			public bottomLeftCornerRadius: any;
			/**
			 * The shape to apply to the bottom right corner of rectangular 
			 * shapes.
			 */
			public bottomRightCornerOption: Adobe.Indesign.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the bottom right corner of rectangular shapes
			 */
			public bottomRightCornerRadius: any;
			/** A collection of buttons. */
			public readonly buttons: Adobe.Indesign.Buttons;
			/** A collection of checkboxes. */
			public readonly checkBoxes: Adobe.Indesign.CheckBoxes;
			/** A collection of comboboxes. */
			public readonly comboBoxes: Adobe.Indesign.ComboBoxes;
			/** Transparency settings for the content of the Oval. */
			public readonly contentTransparencySettings: Adobe.Indesign.ContentTransparencySetting;
			/** The type of content that a frame can contain. */
			public contentType: Adobe.Indesign.ContentType;
			/** The end shape of an open path. */
			public endCap: Adobe.Indesign.EndCap;
			/** The corner join applied to the Oval. */
			public endJoin: Adobe.Indesign.EndJoin;
			/** A collection of EPS files. */
			public readonly epss: Adobe.Indesign.EPSs;
			/** EPSTexts */
			public readonly epstexts: Adobe.Indesign.EPSTexts;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the Oval. . Can also accept: String.
			 */
			public fillColor: Adobe.Indesign.Swatch;
			/**
			 * The percent of tint to use in the Oval's fill color. (To 
			 * specify a tint percent, use a number in the range of 0 to 
			 * 100; to use the inherited or overridden value, use -1.)
			 */
			public fillTint: number;
			/** Transparency settings for the fill applied to the Oval. */
			public readonly fillTransparencySettings: Adobe.Indesign.FillTransparencySetting;
			/** The direction in which to flip the printed image. */
			public flip: Adobe.Indesign.Flip;
			/** A collection of form fields. */
			public readonly formFields: Adobe.Indesign.FormFields;
			/**
			 * The frame fitting option to apply to placed or pasted 
			 * content. Can be applied to a frame, object style, or 
			 * document or to the application.
			 */
			public readonly frameFittingOptions: Adobe.Indesign.FrameFittingOption;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of a dashed, dotted, or striped stroke. For 
			 * information, see stroke type.
			 */
			public gapColor: Adobe.Indesign.Swatch;
			/**
			 * The tint as a percentage of the gap color. (To specify a 
			 * tint percent, use a number in the range of 0 to 100; to use 
			 * the inherited or overridden value, use -1.)
			 */
			public gapTint: number;
			/**
			 * The bounds of the Oval excluding the stroke width, in the 
			 * format [y1, x1, y2, x2], which give the coordinates of the 
			 * top-left and bottom-right corners of the bounding box.
			 */
			public geometricBounds: any;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * Oval. (Range: -180 to 180)
			 */
			public gradientFillAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the fill of the Oval.
			 */
			public gradientFillLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the Oval, in the format [x, y].
			 */
			public gradientFillStart: any;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * Oval. (Range: -180 to 180)
			 */
			public gradientStrokeAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the stroke of the Oval.
			 */
			public gradientStrokeLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the stroke of the Oval, in the format [x, y].
			 */
			public gradientStrokeStart: any;
			/** A collection of graphic lines. */
			public readonly graphicLines: Adobe.Indesign.GraphicLines;
			/**
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 */
			public readonly graphics: Adobe.Indesign.Graphics;
			/** A collection of groups. */
			public readonly groups: Adobe.Indesign.Groups;
			/**
			 * The left margin, width, and right margin constraints this 
			 * item is subject to when using the object-based layout rule.
			 */
			public horizontalLayoutConstraints: any;
			/** The horizontal scaling applied to the Oval. */
			public horizontalScale: number;
			/** A collection of embedded HTML page items. */
			public readonly htmlItems: Adobe.Indesign.HtmlItems;
			/** The unique ID of the Oval. */
			public readonly id: number;
			/**
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 */
			public readonly images: Adobe.Indesign.Images;
			/** Imported InDesign pages. */
			public readonly importedPages: Adobe.Indesign.ImportedPages;
			/** Export options for InCopy INCX document format. */
			public readonly incopyExportOptions: Adobe.Indesign.InCopyExportOption;
			/** The index of the Oval within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The layer that the Oval is on. */
			public itemLayer: Adobe.Indesign.Layer;
			/** A property that can be set to any string. */
			public label: string;
			/** The arrowhead applied to the start of the path. */
			public leftLineEnd: Adobe.Indesign.ArrowHead;
			/** Linked Page Item options */
			public readonly linkedPageItemOptions: Adobe.Indesign.LinkedPageItemOption;
			/** A collection of listboxes. */
			public readonly listBoxes: Adobe.Indesign.ListBoxes;
			/** Display performance options for the Oval. */
			public localDisplaySetting: Adobe.Indesign.DisplaySettingOptions;
			/** If true, the Oval is locked. */
			public locked: boolean;
			/** The lock state. */
			public readonly lockState: Adobe.Indesign.LockStateValues;
			/** The media items collection. */
			public readonly mediaItems: Adobe.Indesign.MediaItems;
			/**
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join.
			 */
			public miterLimit: number;
			/** A collection of movies. */
			public readonly movies: Adobe.Indesign.Movies;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Indesign.MultiStateObjects;
			/** The name of the Oval. */
			public name: string;
			/** If true, the Oval does not print. */
			public nonprinting: boolean;
			/** Export options for the object */
			public readonly objectExportOptions: Adobe.Indesign.ObjectExportOption;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * If true, the Oval's fill color overprints any underlying 
			 * objects. If false, the fill color knocks out the underlying 
			 * colors.
			 */
			public overprintFill: boolean;
			/**
			 * If true, the gap color overprints any underlying colors. If 
			 * false, the gap color knocks out the underlying colors.
			 */
			public overprintGap: boolean;
			/**
			 * If true, the Oval's stroke color overprints any underlying 
			 * objects. If false, the stroke color knocks out the  
			 * underlying colors.
			 */
			public overprintStroke: boolean;
			/**
			 * If true, the object originated on a master spread and was 
			 * overridden. If false, the object either originated on a 
			 * master spread and was not overridden, or the object did not 
			 * originate on a master page.
			 */
			public readonly overridden: boolean;
			/**
			 * An object that originated on a master page and has been 
			 * overridden. Can return: PageItem, Guide, Graphic, Movie or 
			 * Sound.
			 */
			public readonly overriddenMasterPageItem: any;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/**
			 * The parent of the Oval (a Snippet, ComboBox, ListBox, 
			 * TextBox, SignatureField, Spread, MasterSpread, SplineItem, 
			 * Polygon, GraphicLine, Rectangle, Oval, Group, State, 
			 * Character or PlaceGun).
			 */
			public readonly parent: any;
			/** The page on which this page item appears. */
			public readonly parentPage: Adobe.Indesign.Page;
			/** A collection of paths. */
			public readonly paths: Adobe.Indesign.Paths;
			/** A collection of PDF files. */
			public readonly pdfs: Adobe.Indesign.PDFs;
			/** A collection of PICT graphics. */
			public readonly picts: Adobe.Indesign.PICTs;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Indesign.Polygons;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of radio buttons. */
			public readonly radioButtons: Adobe.Indesign.RadioButtons;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/** The arrowhead applied to the end of the path. */
			public rightLineEnd: Adobe.Indesign.ArrowHead;
			/** The rotatation angle of the Oval. (Range: -360 to 360) */
			public rotationAngle: number;
			/** The skewing angle applied to the Oval. (Range: -360 to 360) */
			public shearAngle: number;
			/** A collection of signature fields. */
			public readonly signatureFields: Adobe.Indesign.SignatureFields;
			/** A collection of sound clips. */
			public readonly sounds: Adobe.Indesign.Sounds;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/** Title for this InCopy story. */
			public storyTitle: string;
			/** The stroke alignment applied to the Oval. */
			public strokeAlignment: Adobe.Indesign.StrokeAlignment;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the Oval. Can also accept: String.
			 */
			public strokeColor: Adobe.Indesign.Swatch;
			/** The corner adjustment applied to the Oval. */
			public strokeCornerAdjustment: Adobe.Indesign.StrokeCornerAdjustment;
			/**
			 * The dash and gap measurements that define the pattern of a 
			 * custom dashed line. Define up to six values (in points) in 
			 * the format [dash1, gap1, dash2, gap2, dash3, gap3].
			 */
			public strokeDashAndGap: any;
			/**
			 * The percent of tint to use in object's stroke color. (To 
			 * specify a tint percent, use a number in the range of 0 to 
			 * 100; to use the inherited or overridden value, use -1.)
			 */
			public strokeTint: number;
			/** Transparency settings for the stroke. */
			public readonly strokeTransparencySettings: Adobe.Indesign.StrokeTransparencySetting;
			/**
			 * The name of the stroke style to apply. Can also accept: 
			 * String.
			 */
			public strokeType: Adobe.Indesign.StrokeStyle;
			/** The weight (in points) to apply to the Oval's stroke. */
			public strokeWeight: any;
			/** A collection of text boxes. */
			public readonly textBoxes: Adobe.Indesign.TextBoxes;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Indesign.TextFrames;
			/** A collection of text paths. */
			public readonly textPaths: Adobe.Indesign.TextPaths;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 */
			public readonly textWrapPreferences: Adobe.Indesign.TextWrapPreference;
			/** The object timing settings. */
			public readonly timingSettings: Adobe.Indesign.TimingSetting;
			/**
			 * The shape to be applied to the top left corner of 
			 * rectangular shapes and all corners of non-rectangular 
			 * shapes.Note: corner option differs from end join in which 
			 * you can set a radius for a corner option, whereas the 
			 * rounded or beveled effect of an end join depends on the 
			 * stroke weight.
			 */
			public topLeftCornerOption: Adobe.Indesign.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the top left corner of rectangular shapes and all corners 
			 * of non-rectangular shapes
			 */
			public topLeftCornerRadius: any;
			/**
			 * The shape to apply to the top right corner of rectangular 
			 * shapes
			 */
			public topRightCornerOption: Adobe.Indesign.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the top right corner of rectangular shapes
			 */
			public topRightCornerRadius: any;
			/** Transparency settings. */
			public readonly transparencySettings: Adobe.Indesign.TransparencySetting;
			/**
			 * The top margin, height, and bottom margin constraints this 
			 * item is subject to when using the object-based layout rule.
			 */
			public verticalLayoutConstraints: any;
			/** The vertical scaling applied to the Oval. */
			public verticalScale: number;
			/** If true, the Oval is visible. */
			public visible: boolean;
			/**
			 * The bounds of the Oval including the stroke width, in the 
			 * format [y1, x1, y2, x2], which give the coordinates of the 
			 * top-left and bottom-right corners of the bounding box.
			 */
			public visibleBounds: any;
			/** A collection of WMF graphics. */
			public readonly wmfs: Adobe.Indesign.WMFs;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerOval(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Creates a new page item by combining the Oval with other 
			 * objects. Deletes the objects if they do not intersect.
			 * @param {any[]} withParam The object(s) to add.
			 */
			public addPath(withParam: any[]): Adobe.Indesign.PageItem;
			/**
			 * Applies the specified object style.
			 * @param {ObjectStyle} usingParam The object style to apply.
			 * @param {boolean} clearingOverridesParam If true, clears the 
			 * Oval's existing attributes before applying the style. 
			 * (Optional)
			 * @param {boolean} 
			 * clearingOverridesThroughRootObjectStyleParam If true, clears 
			 * attributes and formatting applied to the Oval that are not 
			 * defined in the object style. (Optional)
			 */
			public applyObjectStyle(usingParam: ObjectStyle, clearingOverridesParam: boolean, clearingOverridesThroughRootObjectStyleParam: boolean): void;
			/**
			 * asynchronously exports the object(s) to a file.
			 * @param {any} formatParam The export format, specified as an 
			 * enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam The path to the export file.
			 * @param {boolean} showingOptionsParam If true, displays the 
			 * export options dialog. (Optional)
			 * @param {PDFExportPreset} usingParam The export style. 
			 * (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 */
			public asynchronousExportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, versionCommentsParam: string, forceSaveParam: boolean): Adobe.Indesign.BackgroundTask;
			/**
			 * Tag the object or the parent story using default tags 
			 * defined in XML preference.
			 */
			public autoTag(): void;
			/** Brings the Oval forward one level in its layer. */
			public bringForward(): void;
			/**
			 * Brings the Oval to the front of its layer or in front of a 
			 * particular item.
			 * @param {PageItem} referenceParam The reference object to 
			 * bring the object in front of (must have same parent) 
			 * (Optional)
			 */
			public bringToFront(referenceParam: PageItem): void;
			/**
			 * Finds objects that match the find what value and replace the 
			 * objects with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeObject(reverseOrderParam: boolean): any;
			/**
			 * Checks in the story or stories.
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 */
			public checkIn(versionCommentsParam: string, forceSaveParam: boolean): boolean;
			/** Checks out the story. */
			public checkOut(): boolean;
			/**
			 * Removes the frame fittings options and resets it to the 
			 * initial state.
			 */
			public clearFrameFittingOptions(): void;
			/** Clear overrides for object style */
			public clearObjectStyleOverrides(): void;
			/**
			 * Clears transformations from the Oval. Transformations 
			 * include rotation, scaling, flipping, fitting, and shearing.
			 */
			public clearTransformations(): void;
			/**
			 * Duplicate an object and place it into the target page item.
			 * @param {any[]} pageItemsParam One or more page items to 
			 * place or load
			 * @param {boolean} linkPageItemsParam Whether to link 
			 * pageItems in content placer (if true it will override link 
			 * stories value) (Optional)
			 * @param {boolean} linkStoriesParam Whether to link stories in 
			 * content placer (only applicable for single story, pageItem 
			 * links will also be created in case of more than one item) 
			 * (Optional)
			 * @param {boolean} mapStylesParam Whether to map styles in 
			 * content placer (Optional)
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * link options dialog (Optional)
			 */
			public contentPlace(pageItemsParam: any[], linkPageItemsParam: boolean, linkStoriesParam: boolean, mapStylesParam: boolean, showingOptionsParam: boolean): any;
			/**
			 * Converts the Oval to a different shape.
			 * @param {ConvertShapeOptions} givenParam The Oval's new 
			 * shape.
			 * @param {number} numberOfSidesParam The number of sides for 
			 * the resulting polygon. (Range: 3 to 100) (Optional)
			 * @param {number} insetPercentageParam The star inset 
			 * percentage for the resulting polygon. (Range: 0.0 to 100.0)  
			 * (Optional)
			 * @param {any} cornerRadiusParam The corner radius of the 
			 * resulting rectangle. (Optional)
			 */
			public convertShape(givenParam: ConvertShapeOptions, numberOfSidesParam: number, insetPercentageParam: number, cornerRadiusParam: any): void;
			/**
			 * Detaches an overridden master page item from the master 
			 * page.
			 */
			public detach(): void;
			/**
			 * Duplicates the Oval at the specified location or offset.
			 * @param {any} toParam The location of the new Oval, specified 
			 * in coordinates in the format [x, y]. Can accept: Array of 2 
			 * Units, Spread, Page or Layer. (Optional)
			 * @param {any[]} byParam Amount by which to offset the new 
			 * Oval from the original Oval's position. (Optional)
			 */
			public duplicate(toParam: any, byParam: any[]): Adobe.Indesign.PageItem;
			/**
			 * Creates a new page item by excluding the overlapping areas 
			 * of the Oval and other objects.
			 * @param {any[]} withParam The object(s) to exclude.
			 */
			public excludeOverlapPath(withParam: any[]): Adobe.Indesign.PageItem;
			/**
			 * Exports the object(s) to a file.
			 * @param {any} formatParam The export format, specified as an 
			 * enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam The path to the export file.
			 * @param {boolean} showingOptionsParam If true, displays the 
			 * export options dialog. (Optional)
			 * @param {PDFExportPreset} usingParam The export style. 
			 * (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 */
			public exportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, versionCommentsParam: string, forceSaveParam: boolean): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Finds objects that match the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findObject(reverseOrderParam: boolean): any;
			/**
			 * Applies the specified fit option to content in a frame.
			 * @param {FitOptions} givenParam The fit option to use.
			 */
			public fit(givenParam: FitOptions): void;
			/**
			 * Flips the Oval.
			 * @param {Flip} givenParam The axis around which to flip the 
			 * Oval.
			 * @param {any} aroundParam The point around which to flip the 
			 * Oval. Can accept: Array of 2 Units or AnchorPoint 
			 * enumerator. (Optional)
			 */
			public flipItem(givenParam: Flip, aroundParam: any): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Creates a new page item by intersecting the Oval with other 
			 * objects. Returns an error if the objects do not intersect.
			 * @param {any[]} withParam The object(s) with which to 
			 * intersect. 
			 */
			public intersectPath(withParam: any[]): Adobe.Indesign.PageItem;
			/**
			 * Creates a compound path by combining the path(s) of the Oval 
			 * with the paths of other objects.
			 * @param {any[]} withParam The other objects whose paths to 
			 * include in the new compound path.
			 */
			public makeCompoundPath(withParam: any[]): Adobe.Indesign.PageItem;
			/**
			 * Associates the page item with the specified XML element 
			 * while preserving existing content.
			 * @param {XMLElement} usingParam The XML element.
			 */
			public markup(usingParam: XMLElement): void;
			/**
			 * Creates a new page item by reverse subtracting the 
			 * overlapping areas of the Oval and other objects.
			 * @param {any[]} withParam The object(s) to reverse subtract.
			 */
			public minusBack(withParam: any[]): Adobe.Indesign.PageItem;
			/**
			 * Moves the Oval to a new location. Note: Either the 'to' or 
			 * 'by' parameter is required; if both parameters are defined, 
			 * only the to value is used.
			 * @param {any} toParam The new location of the Oval,in the 
			 * format (x, y). Can accept: Array of 2 Units, Spread, Page or 
			 * Layer. (Optional)
			 * @param {any[]} byParam The amount (in measurement units) to 
			 * move the Oval relative to its current position, in the 
			 * format (x, y). (Optional)
			 */
			public move(toParam: any, byParam: any[]): void;
			/**
			 * Overrides a master page item and places the item on the 
			 * document page as a new object.
			 * @param {Page} destinationPageParam The document page that 
			 * contains the master page item to override.
			 */
			public override(destinationPageParam: Page): any;
			/**
			 * Places the file.
			 * @param {File} fileNameParam The file to place
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * import options dialog (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the placed object(s) (Optional)
			 */
			public place(fileNameParam: File, showingOptionsParam: boolean, withPropertiesParam: any): any;
			/**
			 * Places XML content into the specified object. Note: Replaces 
			 * any existing content.
			 * @param {XMLElement} usingParam The XML element whose content 
			 * you want to place.
			 */
			public placeXML(usingParam: XMLElement): void;
			/**
			 * Apply an item's scaling to its content if possible.
			 * @param {any[]} toParam The scale factors to be left on the 
			 * item.  The default is {1.0, 1.0}. (Optional)
			 */
			public redefineScaling(toParam: any[]): void;
			/**
			 * Move the bounding box of the page item
			 * @param {any} inParam The bounding box to resize. Can accept: 
			 * CoordinateSpaces enumerator or Ordered array containing 
			 * coordinateSpace:CoordinateSpaces enumerator, 
			 * boundsKind:BoundingBoxLimits enumerator.
			 * @param {any[]} opposingCornersParam Opposing corners of new 
			 * bounding box in the given coordinate space
			 */
			public reframe(inParam: any, opposingCornersParam: any[]): void;
			/** Releases a compound path. */
			public releaseCompoundPath(): any;
			/** Deletes the Oval. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerOval(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes the override from a previously overridden master 
			 * page item.
			 */
			public removeOverride(): void;
			/**
			 * Resize the page item.
			 * @param {any} inParam The bounding box to resize. Can accept: 
			 * CoordinateSpaces enumerator, BoundingBoxLimits enumerator or 
			 * Ordered array containing coordinateSpace:CoordinateSpaces 
			 * enumerator, boundsKind:BoundingBoxLimits enumerator.
			 * @param {any} fromParam The transform origin. Legal 
			 * specifications: relative to bounding box: anchor | {anchor | 
			 * {x,y}, bounds kind [, coordinate space]}; relative to 
			 * coordinate space: {x,y} | {{x,y}[, coordinate space]}; 
			 * relative to layout window ruler: {{x,y}, page index | bounds 
			 * kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator 
			 * or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, 
			 * AnchorPoint enumerators, BoundingBoxLimits enumerators or 
			 * Long Integers.
			 * @param {ResizeMethods} byParam How the current dimensions 
			 * are affected by the given values
			 * @param {any[]} valuesParam The width and height values. 
			 * Legal dimensions specifications: {x, y [, coordinate 
			 * space]}, {x, resize constraint [, coordinate space]}, or 
			 * {resize constraint, y [, coordinate space]}; where x and y 
			 * are real numbers and coordinate space is used to determine 
			 * _only_ the unit of length for x and y; coordinate space is 
			 * ignored for the 'current dimensions times' resize method). 
			 * Can accept: Array of Reals, ResizeConstraints enumerators or 
			 * CoordinateSpaces enumerators.
			 * @param {boolean} resizeIndividuallyParam If false and 
			 * multiple page items are targeted, the new dimensions are 
			 * attained only by moving the individual items rather than 
			 * resizing them. (Optional)
			 * @param {boolean} consideringRulerUnitsParam If true then a 
			 * ruler location is interpreted using ruler units rather than 
			 * points. The default value is false. This parameter has no 
			 * effect unless the reference point is specified relative to a 
			 * page. (Optional)
			 */
			public resize(inParam: any, fromParam: any, byParam: ResizeMethods, valuesParam: any[], resizeIndividuallyParam: boolean, consideringRulerUnitsParam: boolean): void;
			/**
			 * Get the coordinates of the given location in the specified 
			 * coordinate system.
			 * @param {any} locationParam The location requested. Can 
			 * accept: Array of 2 Reals, AnchorPoint enumerator or Array of 
			 * Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint 
			 * enumerators, BoundingBoxLimits enumerators or Long Integers.
			 * @param {CoordinateSpaces} inParam The coordinate space to 
			 * use.
			 * @param {boolean} consideringRulerUnitsParam If true then a 
			 * ruler location is interpreted using ruler units rather than 
			 * points. The default value is false. This parameter has no 
			 * effect unless the reference point is specified relative to a 
			 * page. (Optional)
			 */
			public resolve(locationParam: any, inParam: CoordinateSpaces, consideringRulerUnitsParam: boolean): any;
			/**
			 * Reverts the document to its state at the last save 
			 * operation.
			 */
			public revert(): boolean;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the Oval in relation to previously 
			 * selected objects. (Optional)
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/** Sends the Oval back one level in its layer. */
			public sendBackward(): void;
			/**
			 * Sends the Oval to the back of its layer or behind a 
			 * particular item (must have same parent).
			 * @param {PageItem} referenceParam The reference object to 
			 * send the object behind (Optional)
			 */
			public sendToBack(referenceParam: PageItem): void;
			/**
			 * Stores the object in the specified library.
			 * @param {Library} usingParam The library in which to store 
			 * the object.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Oval (Optional)
			 */
			public store(usingParam: Library, withPropertiesParam: any): Adobe.Indesign.Asset;
			/**
			 * Creates a new page item by subtracting the overlapping areas 
			 * of the Oval and other objects.
			 * @param {any[]} withParam The object(s) to subtract.
			 */
			public subtractPath(withParam: any[]): Adobe.Indesign.PageItem;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Transform the page item.
			 * @param {CoordinateSpaces} inParam The coordinate space to 
			 * use
			 * @param {any} fromParam The temporary origin during the 
			 * transformation. Can accept: Array of 2 Reals, AnchorPoint 
			 * enumerator or Array of Arrays of 2 Reals, CoordinateSpaces 
			 * enumerators, AnchorPoint enumerators, BoundingBoxLimits 
			 * enumerators or Long Integers.
			 * @param {any} withMatrixParam Transform matrix. Can accept: 
			 * Array of 6 Reals or TransformationMatrix.
			 * @param {any} replacingCurrentParam Transform components to 
			 * consider; providing this optional parameter causes the 
			 * target's existing transform components to be replaced with 
			 * new values.  Without this parameter, the given matrix is 
			 * concatenated onto the target's existing transform combining 
			 * the effect of the two. Can accept: MatrixContent enumerator, 
			 * Array of MatrixContent enumerators or Long Integer. 
			 * (Optional)
			 * @param {boolean} consideringRulerUnitsParam If true then a 
			 * ruler based origin is interpreted using ruler units rather 
			 * than points. The default value is false. This parameter has 
			 * no effect unless the reference point is specified relative 
			 * to a page. (Optional)
			 */
			public transform(inParam: CoordinateSpaces, fromParam: any, withMatrixParam: any, replacingCurrentParam: any, consideringRulerUnitsParam: boolean): void;
			/**
			 * Transforms the Oval using the last transformation performed 
			 * on any object. Transformations include moving, rotating, 
			 * shearing, scaling, and flipping.
			 */
			public transformAgain(): any;
			/**
			 * Transforms the Oval using the last transformation performed 
			 * on any Oval. Transformations include moving, rotating, 
			 * shearing, scaling, and flipping.
			 */
			public transformAgainIndividually(): any;
			/**
			 * Transforms the Oval using the last sequence of transform 
			 * operations performed on any single object or performed at 
			 * the same time on any group of objects. Transformations 
			 * include moving, rotating, shearing, scaling, and flipping.
			 */
			public transformSequenceAgain(): any;
			/**
			 * Transforms the Oval using the last sequence of 
			 * transformations performed on any single object or performed 
			 * at the same time on any group of objects. Transformations 
			 * include moving, rotating, shearing, scaling, and flipping.
			 */
			public transformSequenceAgainIndividually(): any;
			/**
			 * Get the transformation values of the page item.
			 * @param {CoordinateSpaces} inParam The coordinate space to 
			 * use
			 */
			public transformValuesOf(inParam: CoordinateSpaces): any;
		}
	}
}