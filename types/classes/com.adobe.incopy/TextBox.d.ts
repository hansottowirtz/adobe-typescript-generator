/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** FormField */
		class TextBox extends Adobe.Incopy.FormField {
			/**
			 * Indicates whether the TextBox has been flipped independently 
			 * of its parent object and, if yes, the direction in which the 
			 * TextBox was flipped.
			 * @type {Adobe.Incopy.Flip}
			 */
			public absoluteFlip: Adobe.Incopy.Flip;
			/**
			 * The horizontal scale of the TextBox relative to its 
			 * containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly absoluteHorizontalScale: number;
			/**
			 * The rotation angle of the TextBox relative to its containing 
			 * object. (Range: -360 to 360)
			 * @type {number}
			 * @readonly
			 */
			public readonly absoluteRotationAngle: number;
			/**
			 * The skewing angle of the TextBox relative to its containing 
			 * object. (Range: -360 to 360)
			 * @type {number}
			 * @readonly
			 */
			public readonly absoluteShearAngle: number;
			/**
			 * The vertical scale of the TextBox relative to its containing 
			 * object.
			 * @type {number}
			 * @readonly
			 */
			public readonly absoluteVerticalScale: number;
			/**
			 * The index of the active state in the object's states 
			 * collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly activeStateIndex: number;
			/**
			 * Dispatched after a TextBox is placed. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_PLACE: string;
			/**
			 * Lists all graphics contained by the TextBox.
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
			 * Lists all page items contained by the TextBox.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPageItems: any;
			/**
			 * Anchored object settings.
			 * @type {Adobe.Incopy.AnchoredObjectSetting}
			 * @readonly
			 */
			public readonly anchoredObjectSettings: Adobe.Incopy.AnchoredObjectSetting;
			/**
			 * The XML element associated with the TextBox.
			 * @type {Adobe.Incopy.XMLItem}
			 * @readonly
			 */
			public readonly associatedXMLElement: Adobe.Incopy.XMLItem;
			/**
			 * Dispatched before a TextBox is placed. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_PLACE: string;
			/**
			 * A collection of behavior objects.
			 * @type {Adobe.Incopy.Behaviors}
			 * @readonly
			 */
			public readonly behaviors: Adobe.Incopy.Behaviors;
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
			 * A collection of clear form behavior objects.
			 * @type {Adobe.Incopy.ClearFormBehaviors}
			 * @readonly
			 */
			public readonly clearFormBehaviors: Adobe.Incopy.ClearFormBehaviors;
			/**
			 * The description of the TextBox.
			 * @type {string}
			 * @readonly
			 */
			public readonly description: string;
			/**
			 * The end shape of an open path.
			 * @type {Adobe.Incopy.EndCap}
			 * @readonly
			 */
			public readonly endCap: Adobe.Incopy.EndCap;
			/**
			 * The corner join applied to the TextBox.
			 * @type {Adobe.Incopy.EndJoin}
			 * @readonly
			 */
			public readonly endJoin: Adobe.Incopy.EndJoin;
			/**
			 * A collection of EPS files.
			 * @type {Adobe.Incopy.EPSs}
			 * @readonly
			 */
			public readonly epss: Adobe.Incopy.EPSs;
			/**
			 * EPSTexts
			 * @type {Adobe.Incopy.EPSTexts}
			 * @readonly
			 */
			public readonly epstexts: Adobe.Incopy.EPSTexts;
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
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the TextBox. . Can also accept: String.
			 * @type {Adobe.Incopy.Swatch}
			 * @readonly
			 */
			public readonly fillColor: Adobe.Incopy.Swatch;
			/**
			 * The percent of tint to use in the TextBox's fill color. (To 
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
			 * The font size for the form field in the exported PDF.
			 * @type {number}
			 * @readonly
			 */
			public readonly fontSize: number;
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
			 * The bounds of the TextBox excluding the stroke width, in the 
			 * format [y1, x1, y2, x2], which give the coordinates of the 
			 * top-left and bottom-right corners of the bounding box.
			 * @type {any}
			 * @readonly
			 */
			public readonly geometricBounds: any;
			/**
			 * A collection of goto anchor behavior objects.
			 * @type {Adobe.Incopy.GotoAnchorBehaviors}
			 * @readonly
			 */
			public readonly gotoAnchorBehaviors: Adobe.Incopy.GotoAnchorBehaviors;
			/**
			 * A collection of goto first page behavior objects.
			 * @type {Adobe.Incopy.GotoFirstPageBehaviors}
			 * @readonly
			 */
			public readonly gotoFirstPageBehaviors: Adobe.Incopy.GotoFirstPageBehaviors;
			/**
			 * A collection of goto last page behavior objects.
			 * @type {Adobe.Incopy.GotoLastPageBehaviors}
			 * @readonly
			 */
			public readonly gotoLastPageBehaviors: Adobe.Incopy.GotoLastPageBehaviors;
			/**
			 * A collection of goto next page behavior objects.
			 * @type {Adobe.Incopy.GotoNextPageBehaviors}
			 * @readonly
			 */
			public readonly gotoNextPageBehaviors: Adobe.Incopy.GotoNextPageBehaviors;
			/**
			 * A collection of goto next view behavior objects.
			 * @type {Adobe.Incopy.GotoNextViewBehaviors}
			 * @readonly
			 */
			public readonly gotoNextViewBehaviors: Adobe.Incopy.GotoNextViewBehaviors;
			/**
			 * A collection of goto previous page behavior objects.
			 * @type {Adobe.Incopy.GotoPreviousPageBehaviors}
			 * @readonly
			 */
			public readonly gotoPreviousPageBehaviors: Adobe.Incopy.GotoPreviousPageBehaviors;
			/**
			 * A collection of goto previous view behavior objects.
			 * @type {Adobe.Incopy.GotoPreviousViewBehaviors}
			 * @readonly
			 */
			public readonly gotoPreviousViewBehaviors: Adobe.Incopy.GotoPreviousViewBehaviors;
			/**
			 * A collection of goto URL behavior objects.
			 * @type {Adobe.Incopy.GotoURLBehaviors}
			 * @readonly
			 */
			public readonly gotoURLBehaviors: Adobe.Incopy.GotoURLBehaviors;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * TextBox. (Range: -180 to 180)
			 * @type {number}
			 * @readonly
			 */
			public readonly gradientFillAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the fill of the TextBox.
			 * @type {any}
			 * @readonly
			 */
			public readonly gradientFillLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the TextBox, in the format [x, y].
			 * @type {any}
			 * @readonly
			 */
			public readonly gradientFillStart: any;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * TextBox. (Range: -180 to 180)
			 * @type {number}
			 * @readonly
			 */
			public readonly gradientStrokeAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the stroke of the TextBox.
			 * @type {any}
			 * @readonly
			 */
			public readonly gradientStrokeLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the stroke of the TextBox, in the format [x, y].
			 * @type {any}
			 * @readonly
			 */
			public readonly gradientStrokeStart: any;
			/**
			 * A collection of graphic lines.
			 * @type {Adobe.Incopy.GraphicLines}
			 * @readonly
			 */
			public readonly graphicLines: Adobe.Incopy.GraphicLines;
			/**
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 * @type {Adobe.Incopy.Graphics}
			 * @readonly
			 */
			public readonly graphics: Adobe.Incopy.Graphics;
			/**
			 * A collection of groups.
			 * @type {Adobe.Incopy.Groups}
			 * @readonly
			 */
			public readonly groups: Adobe.Incopy.Groups;
			/**
			 * If true, the form field/push button is hidden until 
			 * triggered in the exported PDF.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly hiddenUntilTriggered: boolean;
			/**
			 * The left margin, width, and right margin constraints this 
			 * item is subject to when using the object-based layout rule.
			 * @type {any}
			 * @readonly
			 */
			public readonly horizontalLayoutConstraints: any;
			/**
			 * The horizontal scaling applied to the TextBox.
			 * @type {number}
			 * @readonly
			 */
			public readonly horizontalScale: number;
			/**
			 * The unique ID of the TextBox.
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
			 * The index of the TextBox within its containing object.
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
			 * The layer that the TextBox is on.
			 * @type {Adobe.Incopy.Layer}
			 * @readonly
			 */
			public readonly itemLayer: Adobe.Incopy.Layer;
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
			 * Display performance options for the TextBox.
			 * @type {Adobe.Incopy.DisplaySettingOptions}
			 * @readonly
			 */
			public readonly localDisplaySetting: Adobe.Incopy.DisplaySettingOptions;
			/**
			 * If true, the TextBox is locked.
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
			 * A collection of movie behavior objects.
			 * @type {Adobe.Incopy.MovieBehaviors}
			 * @readonly
			 */
			public readonly movieBehaviors: Adobe.Incopy.MovieBehaviors;
			/**
			 * If true, the text field is multiline in the exported PDF.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly multiline: boolean;
			/**
			 * The name of the TextBox.
			 * @type {string}
			 */
			public name: string;
			/**
			 * If true, the TextBox does not print.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly nonprinting: boolean;
			/**
			 * A collection of open file behavior objects.
			 * @type {Adobe.Incopy.OpenFileBehaviors}
			 * @readonly
			 */
			public readonly openFileBehaviors: Adobe.Incopy.OpenFileBehaviors;
			/**
			 * A collection of ellipses.
			 * @type {Adobe.Incopy.Ovals}
			 * @readonly
			 */
			public readonly ovals: Adobe.Incopy.Ovals;
			/**
			 * If true, the TextBox's fill color overprints any underlying 
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
			 * If true, the TextBox's stroke color overprints any 
			 * underlying objects. If false, the stroke color knocks out 
			 * the  underlying colors.
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
			 * The parent of the TextBox (a PlaceGun, Character, Spread, 
			 * MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, 
			 * Oval or Group).
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
			 * If true, the text field is a password field in the exported 
			 * PDF.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly password: boolean;
			/**
			 * A collection of PDF files.
			 * @type {Adobe.Incopy.PDFs}
			 * @readonly
			 */
			public readonly pdfs: Adobe.Incopy.PDFs;
			/**
			 * A collection of PICT graphics.
			 * @type {Adobe.Incopy.PICTs}
			 * @readonly
			 */
			public readonly picts: Adobe.Incopy.PICTs;
			/**
			 * A collection of polygons.
			 * @type {Adobe.Incopy.Polygons}
			 * @readonly
			 */
			public readonly polygons: Adobe.Incopy.Polygons;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Incopy.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Incopy.Preferences;
			/**
			 * If true, the form field/push button is printable in the 
			 * exported PDF.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly printableInPdf: boolean;
			/**
			 * A collection of print form behavior objects.
			 * @type {Adobe.Incopy.PrintFormBehaviors}
			 * @readonly
			 */
			public readonly printFormBehaviors: Adobe.Incopy.PrintFormBehaviors;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, the form field is read only in the exported PDF.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly readOnly: boolean;
			/**
			 * A collection of rectangles.
			 * @type {Adobe.Incopy.Rectangles}
			 * @readonly
			 */
			public readonly rectangles: Adobe.Incopy.Rectangles;
			/**
			 * If true, the form field is required in the exported PDF.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly required: boolean;
			/**
			 * The arrowhead applied to the end of the path.
			 * @type {Adobe.Incopy.ArrowHead}
			 * @readonly
			 */
			public readonly rightLineEnd: Adobe.Incopy.ArrowHead;
			/**
			 * If true, the form field has right to left text enabled in 
			 * the exported PDF.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly rightToLeftField: boolean;
			/**
			 * The rotatation angle of the TextBox. (Range: -360 to 360)
			 * @type {number}
			 * @readonly
			 */
			public readonly rotationAngle: number;
			/**
			 * If true, the text field is scrollable in the exported PDF.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly scrollable: boolean;
			/**
			 * The skewing angle applied to the TextBox. (Range: -360 to 
			 * 360)
			 * @type {number}
			 * @readonly
			 */
			public readonly shearAngle: number;
			/**
			 * A collection of show/hide fields behavior objects.
			 * @type {Adobe.Incopy.ShowHideFieldsBehaviors}
			 * @readonly
			 */
			public readonly showHideFieldsBehaviors: Adobe.Incopy.ShowHideFieldsBehaviors;
			/**
			 * A collection of sound behavior objects.
			 * @type {Adobe.Incopy.SoundBehaviors}
			 * @readonly
			 */
			public readonly soundBehaviors: Adobe.Incopy.SoundBehaviors;
			/**
			 * The spline items collection.
			 * @type {Adobe.Incopy.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/**
			 * The stroke alignment applied to the TextBox.
			 * @type {Adobe.Incopy.StrokeAlignment}
			 * @readonly
			 */
			public readonly strokeAlignment: Adobe.Incopy.StrokeAlignment;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the TextBox. Can also accept: String.
			 * @type {Adobe.Incopy.Swatch}
			 * @readonly
			 */
			public readonly strokeColor: Adobe.Incopy.Swatch;
			/**
			 * The corner adjustment applied to the TextBox.
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
			 * The weight (in points) to apply to the TextBox's stroke.
			 * @type {any}
			 * @readonly
			 */
			public readonly strokeWeight: any;
			/**
			 * A collection of submit form behavior objects.
			 * @type {Adobe.Incopy.SubmitFormBehaviors}
			 * @readonly
			 */
			public readonly submitFormBehaviors: Adobe.Incopy.SubmitFormBehaviors;
			/**
			 * A collection of text frames.
			 * @type {Adobe.Incopy.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Incopy.TextFrames;
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
			 * The top margin, height, and bottom margin constraints this 
			 * item is subject to when using the object-based layout rule.
			 * @type {any}
			 * @readonly
			 */
			public readonly verticalLayoutConstraints: any;
			/**
			 * The vertical scaling applied to the TextBox.
			 * @type {number}
			 * @readonly
			 */
			public readonly verticalScale: number;
			/**
			 * A collection of view zoom behavior objects.
			 * @type {Adobe.Incopy.ViewZoomBehaviors}
			 * @readonly
			 */
			public readonly viewZoomBehaviors: Adobe.Incopy.ViewZoomBehaviors;
			/**
			 * If true, the TextBox is visible.
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * The bounds of the TextBox including the stroke width, in the 
			 * format [y1, x1, y2, x2], which give the coordinates of the 
			 * top-left and bottom-right corners of the bounding box.
			 * @type {any}
			 * @readonly
			 */
			public readonly visibleBounds: any;
			/**
			 * A collection of WMF graphics.
			 * @type {Adobe.Incopy.WMFs}
			 * @readonly
			 */
			public readonly wmfs: Adobe.Incopy.WMFs;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerTextBox(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			 * Clears transformations from the TextBox. Transformations 
			 * include rotation, scaling, flipping, fitting, and shearing.
			 * @returns {void}
			 */
			public clearTransformations(): void;
			/**
			 * Converts the TextBox to a different shape.
			 * @param {ConvertShapeOptions} givenParam The TextBox's new 
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
			public removeEventListenerTextBox(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
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
		}
	}
}