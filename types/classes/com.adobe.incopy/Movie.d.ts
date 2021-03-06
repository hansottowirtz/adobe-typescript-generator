/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** MediaItem */
		class Movie extends Adobe.Incopy.MediaItem {
			/**
			 * Indicates whether the Movie has been flipped independently 
			 * of its parent object and, if yes, the direction in which the 
			 * Movie was flipped.
			 * @type {Adobe.Incopy.Flip}
			 */
			public absoluteFlip: Adobe.Incopy.Flip;
			/**
			 * The horizontal scale of the Movie relative to its containing 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly absoluteHorizontalScale: number;
			/**
			 * The rotation angle of the Movie relative to its containing 
			 * object. (Range: -360 to 360)
			 * @type {number}
			 * @readonly
			 */
			public readonly absoluteRotationAngle: number;
			/**
			 * The skewing angle of the Movie relative to its containing 
			 * object. (Range: -360 to 360)
			 * @type {number}
			 * @readonly
			 */
			public readonly absoluteShearAngle: number;
			/**
			 * The vertical scale of the Movie relative to its containing 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly absoluteVerticalScale: number;
			/**
			 * Dispatched when the value of a property changes on this 
			 * Movie. This event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched after a Movie is placed. This event bubbles. This 
			 * event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_PLACE: string;
			/**
			 * Lists all graphics contained by the Movie.
			 * @type {any}
			 * @readonly
			 */
			public readonly allGraphics: any;
			/**
			 * If true, the master page item can be overridden.
			 * @type {boolean}
			 */
			public allowOverrides: boolean;
			/**
			 * Lists all page items contained by the Movie.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPageItems: any;
			/**
			 * The XML element associated with the Movie.
			 * @type {Adobe.Incopy.XMLItem}
			 * @readonly
			 */
			public readonly associatedXMLElement: Adobe.Incopy.XMLItem;
			/**
			 * Dispatched before a Movie is placed. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_PLACE: string;
			/**
			 * The shape to apply to the bottom left corner of rectangular 
			 * shapes.
			 * @type {Adobe.Incopy.CornerOptions}
			 * @readonly
			 */
			public readonly bottomLeftCornerOption: Adobe.Incopy.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the bottom left corner of rectangular shapes
			 * @type {any}
			 * @readonly
			 */
			public readonly bottomLeftCornerRadius: any;
			/**
			 * The shape to apply to the bottom right corner of rectangular 
			 * shapes.
			 * @type {Adobe.Incopy.CornerOptions}
			 * @readonly
			 */
			public readonly bottomRightCornerOption: Adobe.Incopy.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the bottom right corner of rectangular shapes
			 * @type {any}
			 * @readonly
			 */
			public readonly bottomRightCornerRadius: any;
			/**
			 * The video controller skin name.
			 * @type {string}
			 */
			public controllerSkin: string;
			/**
			 * The description of the Movie.
			 * @type {string}
			 */
			public description: string;
			/**
			 * If true, the file is embedded in the PDF. If false, the file 
			 * is linked to the PDF. Note: To embed movie files, acrobat 
			 * compatibility must be acrobat 6 or higher.
			 * @type {boolean}
			 */
			public embedInPDF: boolean;
			/**
			 * The end shape of an open path.
			 * @type {Adobe.Incopy.EndCap}
			 * @readonly
			 */
			public readonly endCap: Adobe.Incopy.EndCap;
			/**
			 * The corner join applied to the Movie.
			 * @type {Adobe.Incopy.EndJoin}
			 * @readonly
			 */
			public readonly endJoin: Adobe.Incopy.EndJoin;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The file path (colon delimited on the Mac OS). Can also 
			 * accept: File.
			 * @type {string}
			 */
			public filePath: string;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the Movie. . Can also accept: String.
			 * @type {Adobe.Incopy.Swatch}
			 * @readonly
			 */
			public readonly fillColor: Adobe.Incopy.Swatch;
			/**
			 * The percent of tint to use in the Movie's fill color. (To 
			 * specify a tint percent, use a number in the range of 0 to 
			 * 100; to use the inherited or overridden value, use -1.)
			 * @type {number}
			 * @readonly
			 */
			public readonly fillTint: number;
			/**
			 * The direction in which to flip the printed image.
			 * @type {Adobe.Incopy.Flip}
			 */
			public flip: Adobe.Incopy.Flip;
			/**
			 * If true, opens a new window to play the movie. If false, 
			 * plays the movie in the poster frame on the PDF document 
			 * page.
			 * @type {boolean}
			 */
			public floatingWindow: boolean;
			/**
			 * The position of the floating window that displays the movie.
			 * @type {Adobe.Incopy.FloatingWindowPosition}
			 */
			public floatingWindowPosition: Adobe.Incopy.FloatingWindowPosition;
			/**
			 * The size of the floating window that displays the movie.
			 * @type {Adobe.Incopy.FloatingWindowSize}
			 */
			public floatingWindowSize: Adobe.Incopy.FloatingWindowSize;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of a dashed, dotted, or striped stroke. For 
			 * information, see stroke type.
			 * @type {Adobe.Incopy.Swatch}
			 * @readonly
			 */
			public readonly gapColor: Adobe.Incopy.Swatch;
			/**
			 * The tint as a percentage of the gap color. (To specify a 
			 * tint percent, use a number in the range of 0 to 100; to use 
			 * the inherited or overridden value, use -1.)
			 * @type {number}
			 * @readonly
			 */
			public readonly gapTint: number;
			/**
			 * The bounds of the Movie excluding the stroke width, in the 
			 * format [y1, x1, y2, x2], which give the coordinates of the 
			 * top-left and bottom-right corners of the bounding box.
			 * @type {any}
			 * @readonly
			 */
			public readonly geometricBounds: any;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * Movie. (Range: -180 to 180)
			 * @type {number}
			 * @readonly
			 */
			public readonly gradientFillAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the fill of the Movie.
			 * @type {any}
			 * @readonly
			 */
			public readonly gradientFillLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the Movie, in the format [x, y].
			 * @type {any}
			 * @readonly
			 */
			public readonly gradientFillStart: any;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * Movie. (Range: -180 to 180)
			 * @type {number}
			 * @readonly
			 */
			public readonly gradientStrokeAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the stroke of the Movie.
			 * @type {any}
			 * @readonly
			 */
			public readonly gradientStrokeLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the stroke of the Movie, in the format [x, y].
			 * @type {any}
			 * @readonly
			 */
			public readonly gradientStrokeStart: any;
			/**
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 * @type {Adobe.Incopy.Graphics}
			 * @readonly
			 */
			public readonly graphics: Adobe.Incopy.Graphics;
			/**
			 * The left margin, width, and right margin constraints this 
			 * item is subject to when using the object-based layout rule.
			 * @type {any}
			 * @readonly
			 */
			public readonly horizontalLayoutConstraints: any;
			/**
			 * The horizontal scaling applied to the Movie.
			 * @type {number}
			 * @readonly
			 */
			public readonly horizontalScale: number;
			/**
			 * The unique ID of the Movie.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 * @type {Adobe.Incopy.Images}
			 * @readonly
			 */
			public readonly images: Adobe.Incopy.Images;
			/**
			 * The index of the Movie within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The layer that the Movie is on.
			 * @type {Adobe.Incopy.Layer}
			 * @readonly
			 */
			public readonly itemLayer: Adobe.Incopy.Layer;
			/**
			 * The source file of the link.
			 * @type {Adobe.Incopy.Link}
			 * @readonly
			 */
			public readonly itemLink: Adobe.Incopy.Link;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The arrowhead applied to the start of the path.
			 * @type {Adobe.Incopy.ArrowHead}
			 * @readonly
			 */
			public readonly leftLineEnd: Adobe.Incopy.ArrowHead;
			/**
			 * Display performance options for the Movie.
			 * @type {Adobe.Incopy.DisplaySettingOptions}
			 * @readonly
			 */
			public readonly localDisplaySetting: Adobe.Incopy.DisplaySettingOptions;
			/**
			 * If true, the Movie is locked.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly locked: boolean;
			/**
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join.
			 * @type {number}
			 * @readonly
			 */
			public readonly miterLimit: number;
			/**
			 * If true, movie loops forever.
			 * @type {boolean}
			 */
			public movieLoop: boolean;
			/**
			 * The type of poster for the movie.
			 * @type {Adobe.Incopy.MoviePosterTypes}
			 */
			public moviePosterType: Adobe.Incopy.MoviePosterTypes;
			/**
			 * The name of the Movie.
			 * @type {string}
			 */
			public name: string;
			/**
			 * A collection of navigation points.
			 * @type {Adobe.Incopy.NavigationPoints}
			 * @readonly
			 */
			public readonly navigationPoints: Adobe.Incopy.NavigationPoints;
			/**
			 * If true, the Movie does not print.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly nonprinting: boolean;
			/**
			 * If true, the Movie's fill color overprints any underlying 
			 * objects. If false, the fill color knocks out the underlying 
			 * colors.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly overprintFill: boolean;
			/**
			 * If true, the gap color overprints any underlying colors. If 
			 * false, the gap color knocks out the underlying colors.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly overprintGap: boolean;
			/**
			 * If true, the Movie's stroke color overprints any underlying 
			 * objects. If false, the stroke color knocks out the  
			 * underlying colors.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly overprintStroke: boolean;
			/**
			 * If true, the object originated on a master spread and was 
			 * overridden. If false, the object either originated on a 
			 * master spread and was not overridden, or the object did not 
			 * originate on a master page.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly overridden: boolean;
			/**
			 * An object that originated on a master page and has been 
			 * overridden. Can return: PageItem, Guide, Graphic, Movie or 
			 * Sound.
			 * @type {any}
			 * @readonly
			 */
			public readonly overriddenMasterPageItem: any;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 * @type {Adobe.Incopy.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/**
			 * The parent of the Movie (a SplineItem, Polygon, GraphicLine, 
			 * Rectangle or Oval).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The page on which this page item appears.
			 * @type {Adobe.Incopy.Page}
			 * @readonly
			 */
			public readonly parentPage: Adobe.Incopy.Page;
			/**
			 * A collection of paths.
			 * @type {Adobe.Incopy.Paths}
			 * @readonly
			 */
			public readonly paths: Adobe.Incopy.Paths;
			/**
			 * If true, the movie plays automatically when a user views the 
			 * page that contains the movie poster in the PDF document.
			 * @type {boolean}
			 */
			public playOnPageTurn: boolean;
			/**
			 * The poster file.
			 * @type {string}
			 */
			public posterFile: string;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Incopy.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Incopy.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The arrowhead applied to the end of the path.
			 * @type {Adobe.Incopy.ArrowHead}
			 * @readonly
			 */
			public readonly rightLineEnd: Adobe.Incopy.ArrowHead;
			/**
			 * The rotatation angle of the Movie. (Range: -360 to 360)
			 * @type {number}
			 * @readonly
			 */
			public readonly rotationAngle: number;
			/**
			 * The skewing angle applied to the Movie. (Range: -360 to 360)
			 * @type {number}
			 * @readonly
			 */
			public readonly shearAngle: number;
			/**
			 * If true, displays controller skin with mouse rollover.
			 * @type {boolean}
			 */
			public showController: boolean;
			/**
			 * If true, displays playback controls at the bottom of the 
			 * movie display window.
			 * @type {boolean}
			 */
			public showControls: boolean;
			/**
			 * The stroke alignment applied to the Movie.
			 * @type {Adobe.Incopy.StrokeAlignment}
			 * @readonly
			 */
			public readonly strokeAlignment: Adobe.Incopy.StrokeAlignment;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the Movie. Can also accept: String.
			 * @type {Adobe.Incopy.Swatch}
			 * @readonly
			 */
			public readonly strokeColor: Adobe.Incopy.Swatch;
			/**
			 * The corner adjustment applied to the Movie.
			 * @type {Adobe.Incopy.StrokeCornerAdjustment}
			 * @readonly
			 */
			public readonly strokeCornerAdjustment: Adobe.Incopy.StrokeCornerAdjustment;
			/**
			 * The dash and gap measurements that define the pattern of a 
			 * custom dashed line. Define up to six values (in points) in 
			 * the format [dash1, gap1, dash2, gap2, dash3, gap3].
			 * @type {any}
			 * @readonly
			 */
			public readonly strokeDashAndGap: any;
			/**
			 * The percent of tint to use in object's stroke color. (To 
			 * specify a tint percent, use a number in the range of 0 to 
			 * 100; to use the inherited or overridden value, use -1.)
			 * @type {number}
			 * @readonly
			 */
			public readonly strokeTint: number;
			/**
			 * The name of the stroke style to apply. Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 * @readonly
			 */
			public readonly strokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The weight (in points) to apply to the Movie's stroke.
			 * @type {any}
			 * @readonly
			 */
			public readonly strokeWeight: any;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 * @type {Adobe.Incopy.TextWrapPreference}
			 * @readonly
			 */
			public readonly textWrapPreferences: Adobe.Incopy.TextWrapPreference;
			/**
			 * The shape to be applied to the top left corner of 
			 * rectangular shapes and all corners of non-rectangular 
			 * shapes.Note: corner option differs from end join in which 
			 * you can set a radius for a corner option, whereas the 
			 * rounded or beveled effect of an end join depends on the 
			 * stroke weight.
			 * @type {Adobe.Incopy.CornerOptions}
			 * @readonly
			 */
			public readonly topLeftCornerOption: Adobe.Incopy.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the top left corner of rectangular shapes and all corners 
			 * of non-rectangular shapes
			 * @type {any}
			 * @readonly
			 */
			public readonly topLeftCornerRadius: any;
			/**
			 * The shape to apply to the top right corner of rectangular 
			 * shapes
			 * @type {Adobe.Incopy.CornerOptions}
			 * @readonly
			 */
			public readonly topRightCornerOption: Adobe.Incopy.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the top right corner of rectangular shapes
			 * @type {any}
			 * @readonly
			 */
			public readonly topRightCornerRadius: any;
			/**
			 * The URL.
			 * @type {string}
			 */
			public url: string;
			/**
			 * The top margin, height, and bottom margin constraints this 
			 * item is subject to when using the object-based layout rule.
			 * @type {any}
			 * @readonly
			 */
			public readonly verticalLayoutConstraints: any;
			/**
			 * The vertical scaling applied to the Movie.
			 * @type {number}
			 * @readonly
			 */
			public readonly verticalScale: number;
			/**
			 * If true, the Movie is visible.
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * The bounds of the Movie including the stroke width, in the 
			 * format [y1, x1, y2, x2], which give the coordinates of the 
			 * top-left and bottom-right corners of the bounding box.
			 * @type {any}
			 * @readonly
			 */
			public readonly visibleBounds: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerMovie(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Tag the object or the parent story using default tags 
			 * defined in XML preference.
			 * @returns {void}
			 */
			public autoTag(): void;
			/**
			 * Finds objects that match the find what value and replace the 
			 * objects with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeObject(reverseOrderParam: boolean): any;
			/**
			 * Clears transformations from the Movie. Transformations 
			 * include rotation, scaling, flipping, fitting, and shearing.
			 * @returns {void}
			 */
			public clearTransformations(): void;
			/**
			 * Converts the Movie to a different shape.
			 * @param {ConvertShapeOptions} givenParam The Movie's new 
			 * shape.
			 * @param {number} numberOfSidesParam The number of sides for 
			 * the resulting polygon. (Range: 3 to 100) (Optional)
			 * @param {number} insetPercentageParam The star inset 
			 * percentage for the resulting polygon. (Range: 0.0 to 100.0)  
			 * (Optional)
			 * @param {any} cornerRadiusParam The corner radius of the 
			 * resulting rectangle. (Optional)
			 * @returns {void}
			 */
			public convertShape(givenParam: ConvertShapeOptions, numberOfSidesParam: number, insetPercentageParam: number, cornerRadiusParam: any): void;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Finds objects that match the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findObject(reverseOrderParam: boolean): any;
			/**
			 * Applies the specified fit option to content in a frame.
			 * @param {FitOptions} givenParam The fit option to use.
			 * @returns {void}
			 */
			public fit(givenParam: FitOptions): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Places the file.
			 * @param {File} fileNameParam The file to place
			 * @param {boolean} showingOptionsParam Whether to display the 
			 * import options dialog (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the placed object(s) (Optional)
			 * @returns {any}
			 */
			public place(fileNameParam: File, showingOptionsParam: boolean, withPropertiesParam: any): any;
			/**
			 * Places XML content into the specified object. Note: Replaces 
			 * any existing content.
			 * @param {XMLElement} usingParam The XML element whose content 
			 * you want to place.
			 * @returns {void}
			 */
			public placeXML(usingParam: XMLElement): void;
			/**
			 * Apply an item's scaling to its content if possible.
			 * @param {any[]} toParam The scale factors to be left on the 
			 * item.  The default is {1.0, 1.0}. (Optional)
			 * @returns {void}
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
			 * @returns {void}
			 */
			public reframe(inParam: any, opposingCornersParam: any[]): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerMovie(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
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
			 * @returns {void}
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
			 * @returns {any}
			 */
			public resolve(locationParam: any, inParam: CoordinateSpaces, consideringRulerUnitsParam: boolean): any;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
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
			 * @returns {void}
			 */
			public transform(inParam: CoordinateSpaces, fromParam: any, withMatrixParam: any, replacingCurrentParam: any, consideringRulerUnitsParam: boolean): void;
			/**
			 * Get the transformation values of the page item.
			 * @param {CoordinateSpaces} inParam The coordinate space to 
			 * use
			 * @returns {any}
			 */
			public transformValuesOf(inParam: CoordinateSpaces): any;
			/**
			 * Verifies that the specified URL is valid and contains the 
			 * specified movie file. Valid only when the movie file is 
			 * specified by a URL rather than a file path.
			 * @returns {boolean}
			 */
			public verifyURL(): boolean;
		}
	}
}