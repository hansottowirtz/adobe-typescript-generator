/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** PageItem */
		class TextFrame extends Adobe.Incopy.PageItem {
			/**
			 * Indicates whether the TextFrame has been flipped 
			 * independently of its parent object and, if yes, the 
			 * direction in which the TextFrame was flipped.
			 */
			public absoluteFlip: Adobe.Incopy.Flip;
			/**
			 * The horizontal scale of the TextFrame relative to its 
			 * containing object.
			 */
			public readonly absoluteHorizontalScale: number;
			/**
			 * The rotation angle of the TextFrame relative to its 
			 * containing object. (Range: -360 to 360)
			 */
			public readonly absoluteRotationAngle: number;
			/**
			 * The skewing angle of the TextFrame relative to its 
			 * containing object. (Range: -360 to 360)
			 */
			public readonly absoluteShearAngle: number;
			/**
			 * The vertical scale of the TextFrame relative to its 
			 * containing object.
			 */
			public readonly absoluteVerticalScale: number;
			/**
			 * Dispatched after a TextFrame is placed. This event bubbles. 
			 * This event is not cancelable.
			 */
			public static readonly AFTER_PLACE: string;
			/** Lists all graphics contained by the TextFrame. */
			public readonly allGraphics: any;
			/** If true, the master page item can be overridden. */
			public allowOverrides: boolean;
			/** Lists all page items contained by the TextFrame. */
			public readonly allPageItems: any;
			/** Anchored object settings. */
			public readonly anchoredObjectSettings: Adobe.Incopy.AnchoredObjectSetting;
			/** The XML element associated with the TextFrame. */
			public readonly associatedXMLElement: Adobe.Incopy.XMLItem;
			/** Baseline frame grid option settings. */
			public readonly baselineFrameGridOptions: Adobe.Incopy.BaselineFrameGridOption;
			/**
			 * Dispatched before a TextFrame is placed. This event bubbles. 
			 * This event is cancelable.
			 */
			public static readonly BEFORE_PLACE: string;
			/**
			 * The shape to apply to the bottom left corner of rectangular 
			 * shapes.
			 */
			public readonly bottomLeftCornerOption: Adobe.Incopy.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the bottom left corner of rectangular shapes
			 */
			public readonly bottomLeftCornerRadius: any;
			/**
			 * The shape to apply to the bottom right corner of rectangular 
			 * shapes.
			 */
			public readonly bottomRightCornerOption: Adobe.Incopy.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the bottom right corner of rectangular shapes
			 */
			public readonly bottomRightCornerRadius: any;
			/** A collection of buttons. */
			public readonly buttons: Adobe.Incopy.Buttons;
			/** A collection of characters. */
			public readonly characters: Adobe.Incopy.Characters;
			/** A collection of checkboxes. */
			public readonly checkBoxes: Adobe.Incopy.CheckBoxes;
			/** A collection of comboboxes. */
			public readonly comboBoxes: Adobe.Incopy.ComboBoxes;
			/**
			 * The contents of the text frame. Can return: String, 
			 * TextFrameContents enumerator or SpecialCharacters 
			 * enumerator.
			 */
			public contents: any;
			/** The type of content that a frame can contain. */
			public readonly contentType: Adobe.Incopy.ContentType;
			/** The end shape of an open path. */
			public readonly endCap: Adobe.Incopy.EndCap;
			/** The corner join applied to the TextFrame. */
			public readonly endJoin: Adobe.Incopy.EndJoin;
			/**
			 * The last text frame in the thread. Can return: TextFrame or 
			 * TextPath.
			 */
			public readonly endTextFrame: any;
			/** EPSTexts */
			public readonly epstexts: Adobe.Incopy.EPSTexts;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the TextFrame. . Can also accept: String.
			 */
			public readonly fillColor: Adobe.Incopy.Swatch;
			/**
			 * The percent of tint to use in the TextFrame's fill color. 
			 * (To specify a tint percent, use a number in the range of 0 
			 * to 100; to use the inherited or overridden value, use -1.)
			 */
			public readonly fillTint: number;
			/** The direction in which to flip the printed image. */
			public flip: Adobe.Incopy.Flip;
			/** A collection of footnotes. */
			public readonly footnotes: Adobe.Incopy.Footnotes;
			/** A collection of form fields. */
			public readonly formFields: Adobe.Incopy.FormFields;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of a dashed, dotted, or striped stroke. For 
			 * information, see stroke type.
			 */
			public readonly gapColor: Adobe.Incopy.Swatch;
			/**
			 * The tint as a percentage of the gap color. (To specify a 
			 * tint percent, use a number in the range of 0 to 100; to use 
			 * the inherited or overridden value, use -1.)
			 */
			public readonly gapTint: number;
			/**
			 * The bounds of the TextFrame excluding the stroke width, in 
			 * the format [y1, x1, y2, x2], which give the coordinates of 
			 * the top-left and bottom-right corners of the bounding box.
			 */
			public readonly geometricBounds: any;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * TextFrame. (Range: -180 to 180)
			 */
			public readonly gradientFillAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the fill of the TextFrame.
			 */
			public readonly gradientFillLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the TextFrame, in the format [x, y].
			 */
			public readonly gradientFillStart: any;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * TextFrame. (Range: -180 to 180)
			 */
			public readonly gradientStrokeAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the stroke of the TextFrame.
			 */
			public readonly gradientStrokeLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the stroke of the TextFrame, in the format [x, 
			 * y].
			 */
			public readonly gradientStrokeStart: any;
			/** A collection of graphic lines. */
			public readonly graphicLines: Adobe.Incopy.GraphicLines;
			/** A collection of groups. */
			public readonly groups: Adobe.Incopy.Groups;
			/** A collection of hidden text objects. */
			public readonly hiddenTexts: Adobe.Incopy.HiddenTexts;
			/**
			 * The left margin, width, and right margin constraints this 
			 * item is subject to when using the object-based layout rule.
			 */
			public readonly horizontalLayoutConstraints: any;
			/** The horizontal scaling applied to the TextFrame. */
			public readonly horizontalScale: number;
			/** The unique ID of the TextFrame. */
			public readonly id: number;
			/** The index of the TextFrame within its containing object. */
			public readonly index: number;
			/** A collection of insertion points. */
			public readonly insertionPoints: Adobe.Incopy.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The layer that the TextFrame is on. */
			public readonly itemLayer: Adobe.Incopy.Layer;
			/** A property that can be set to any string. */
			public label: string;
			/** The arrowhead applied to the start of the path. */
			public readonly leftLineEnd: Adobe.Incopy.ArrowHead;
			/** A collection of lines. */
			public readonly lines: Adobe.Incopy.Lines;
			/** A collection of listboxes. */
			public readonly listBoxes: Adobe.Incopy.ListBoxes;
			/** Display performance options for the TextFrame. */
			public readonly localDisplaySetting: Adobe.Incopy.DisplaySettingOptions;
			/** If true, the TextFrame is locked. */
			public readonly locked: boolean;
			/**
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join.
			 */
			public readonly miterLimit: number;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Incopy.MultiStateObjects;
			/** The name of the TextFrame. */
			public name: string;
			/**
			 * The next text frame in the thread. Can return: TextFrame or 
			 * TextPath. Can also accept: NothingEnum enumerator.
			 */
			public nextTextFrame: any;
			/** If true, the TextFrame does not print. */
			public readonly nonprinting: boolean;
			/** A collection of notes. */
			public readonly notes: Adobe.Incopy.Notes;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Incopy.Ovals;
			/** If true, the story has overset text. */
			public readonly overflows: boolean;
			/**
			 * If true, the TextFrame's fill color overprints any 
			 * underlying objects. If false, the fill color knocks out the 
			 * underlying colors.
			 */
			public readonly overprintFill: boolean;
			/**
			 * If true, the gap color overprints any underlying colors. If 
			 * false, the gap color knocks out the underlying colors.
			 */
			public readonly overprintGap: boolean;
			/**
			 * If true, the TextFrame's stroke color overprints any 
			 * underlying objects. If false, the stroke color knocks out 
			 * the  underlying colors.
			 */
			public readonly overprintStroke: boolean;
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
			public readonly pageItems: Adobe.Incopy.PageItems;
			/** A collection of paragraphs. */
			public readonly paragraphs: Adobe.Incopy.Paragraphs;
			/**
			 * The parent of the TextFrame (a ComboBox, ListBox, TextBox, 
			 * SignatureField, Spread, MasterSpread, SplineItem, Polygon, 
			 * GraphicLine, Rectangle, Oval, Group, State, Character or 
			 * PlaceGun).
			 */
			public readonly parent: any;
			/** The page on which this page item appears. */
			public readonly parentPage: Adobe.Incopy.Page;
			/** The story that contains the text. */
			public readonly parentStory: Adobe.Incopy.Story;
			/** A collection of paths. */
			public readonly paths: Adobe.Incopy.Paths;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Incopy.Polygons;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Incopy.Preferences;
			/**
			 * The previous text frame in the thread. Can return: TextFrame 
			 * or TextPath. Can also accept: NothingEnum enumerator.
			 */
			public previousTextFrame: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of radio buttons. */
			public readonly radioButtons: Adobe.Incopy.RadioButtons;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Incopy.Rectangles;
			/** The arrowhead applied to the end of the path. */
			public readonly rightLineEnd: Adobe.Incopy.ArrowHead;
			/** The rotatation angle of the TextFrame. (Range: -360 to 360) */
			public readonly rotationAngle: number;
			/**
			 * The skewing angle applied to the TextFrame. (Range: -360 to 
			 * 360)
			 */
			public readonly shearAngle: number;
			/** A collection of signature fields. */
			public readonly signatureFields: Adobe.Incopy.SignatureFields;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/**
			 * The first text frame in the thread. Can return: TextFrame or 
			 * TextPath.
			 */
			public readonly startTextFrame: any;
			/** The stroke alignment applied to the TextFrame. */
			public readonly strokeAlignment: Adobe.Incopy.StrokeAlignment;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the TextFrame. Can also accept: String.
			 */
			public readonly strokeColor: Adobe.Incopy.Swatch;
			/** The corner adjustment applied to the TextFrame. */
			public readonly strokeCornerAdjustment: Adobe.Incopy.StrokeCornerAdjustment;
			/**
			 * The dash and gap measurements that define the pattern of a 
			 * custom dashed line. Define up to six values (in points) in 
			 * the format [dash1, gap1, dash2, gap2, dash3, gap3].
			 */
			public readonly strokeDashAndGap: any;
			/**
			 * The percent of tint to use in object's stroke color. (To 
			 * specify a tint percent, use a number in the range of 0 to 
			 * 100; to use the inherited or overridden value, use -1.)
			 */
			public readonly strokeTint: number;
			/**
			 * The name of the stroke style to apply. Can also accept: 
			 * String.
			 */
			public readonly strokeType: Adobe.Incopy.StrokeStyle;
			/** The weight (in points) to apply to the TextFrame's stroke. */
			public readonly strokeWeight: any;
			/** A collection of tables. */
			public readonly tables: Adobe.Incopy.Tables;
			/** A collection of text boxes. */
			public readonly textBoxes: Adobe.Incopy.TextBoxes;
			/** A collection of text columns. */
			public readonly textColumns: Adobe.Incopy.TextColumns;
			/** The index of the text frame within the story. */
			public readonly textFrameIndex: number;
			/** Text frame preference settings. */
			public readonly textFramePreferences: Adobe.Incopy.TextFramePreference;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/** A collection of text paths. */
			public readonly textPaths: Adobe.Incopy.TextPaths;
			/** A collection of text objects. */
			public readonly texts: Adobe.Incopy.Texts;
			/** A collection of text style ranges. */
			public readonly textStyleRanges: Adobe.Incopy.TextStyleRanges;
			/** A collection of text variable instances. */
			public readonly textVariableInstances: Adobe.Incopy.TextVariableInstances;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 */
			public readonly textWrapPreferences: Adobe.Incopy.TextWrapPreference;
			/**
			 * The shape to be applied to the top left corner of 
			 * rectangular shapes and all corners of non-rectangular 
			 * shapes.Note: corner option differs from end join in which 
			 * you can set a radius for a corner option, whereas the 
			 * rounded or beveled effect of an end join depends on the 
			 * stroke weight.
			 */
			public readonly topLeftCornerOption: Adobe.Incopy.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the top left corner of rectangular shapes and all corners 
			 * of non-rectangular shapes
			 */
			public readonly topLeftCornerRadius: any;
			/**
			 * The shape to apply to the top right corner of rectangular 
			 * shapes
			 */
			public readonly topRightCornerOption: Adobe.Incopy.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the top right corner of rectangular shapes
			 */
			public readonly topRightCornerRadius: any;
			/**
			 * The top margin, height, and bottom margin constraints this 
			 * item is subject to when using the object-based layout rule.
			 */
			public readonly verticalLayoutConstraints: any;
			/** The vertical scaling applied to the TextFrame. */
			public readonly verticalScale: number;
			/** If true, the TextFrame is visible. */
			public visible: boolean;
			/**
			 * The bounds of the TextFrame including the stroke width, in 
			 * the format [y1, x1, y2, x2], which give the coordinates of 
			 * the top-left and bottom-right corners of the bounding box.
			 */
			public readonly visibleBounds: any;
			/** A collection of words. */
			public readonly words: Adobe.Incopy.Words;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTextFrame(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Tag the object or the parent story using default tags 
			 * defined in XML preference.
			 */
			public autoTag(): void;
			/**
			 * Finds glyphs that match the find what value and replaces the 
			 * glyphs with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds objects that match the find what value and replace the 
			 * objects with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeObject(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value and 
			 * replaces the text with the change character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Clears transformations from the TextFrame. Transformations 
			 * include rotation, scaling, flipping, fitting, and shearing.
			 */
			public clearTransformations(): void;
			/**
			 * Converts the TextFrame to a different shape.
			 * @param {ConvertShapeOptions} givenParam The TextFrame's new 
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
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Finds glyphs that match the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds objects that match the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findObject(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Applies the specified fit option to content in a frame.
			 * @param {FitOptions} givenParam The fit option to use.
			 */
			public fit(givenParam: FitOptions): void;
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
			/** Recomposes the text in the TextFrame. */
			public recompose(): void;
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
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTextFrame(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
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
			 * Get the transformation values of the page item.
			 * @param {CoordinateSpaces} inParam The coordinate space to 
			 * use
			 */
			public transformValuesOf(inParam: CoordinateSpaces): any;
		}
	}
}