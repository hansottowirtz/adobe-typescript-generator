/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** FormField */
		class Button extends Adobe.Indesign.FormField {
			/**
			 * Indicates whether the Button has been flipped independently 
			 * of its parent object and, if yes, the direction in which the 
			 * Button was flipped.
			 * @type {Adobe.Indesign.Flip}
			 */
			public absoluteFlip: Adobe.Indesign.Flip;
			/**
			 * The horizontal scale of the Button relative to its 
			 * containing object.
			 * @type {number}
			 */
			public absoluteHorizontalScale: number;
			/**
			 * The rotation angle of the Button relative to its containing 
			 * object. (Range: -360 to 360)
			 * @type {number}
			 */
			public absoluteRotationAngle: number;
			/**
			 * The skewing angle of the Button relative to its containing 
			 * object. (Range: -360 to 360)
			 * @type {number}
			 */
			public absoluteShearAngle: number;
			/**
			 * The vertical scale of the Button relative to its containing 
			 * object.
			 * @type {number}
			 */
			public absoluteVerticalScale: number;
			/**
			 * The index of the active state in the object's states 
			 * collection.
			 * @type {number}
			 */
			public activeStateIndex: number;
			/**
			 * Dispatched after a Button is placed. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_PLACE: string;
			/**
			 * The list of all articles this page item is part of
			 * @type {any}
			 * @readonly
			 */
			public readonly allArticles: any;
			/**
			 * Lists all graphics contained by the Button.
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
			 * Lists all page items contained by the Button.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPageItems: any;
			/**
			 * Anchored object settings.
			 * @type {Adobe.Indesign.AnchoredObjectSetting}
			 * @readonly
			 */
			public readonly anchoredObjectSettings: Adobe.Indesign.AnchoredObjectSetting;
			/**
			 * A collection of animation behaviors.
			 * @type {Adobe.Indesign.AnimationBehaviors}
			 * @readonly
			 */
			public readonly animationBehaviors: Adobe.Indesign.AnimationBehaviors;
			/**
			 * The page item animation settings.
			 * @type {Adobe.Indesign.AnimationSetting}
			 * @readonly
			 */
			public readonly animationSettings: Adobe.Indesign.AnimationSetting;
			/**
			 * The object style applied to the Button.
			 * @type {Adobe.Indesign.ObjectStyle}
			 */
			public appliedObjectStyle: Adobe.Indesign.ObjectStyle;
			/**
			 * The XML element associated with the Button.
			 * @type {Adobe.Indesign.XMLItem}
			 * @readonly
			 */
			public readonly associatedXMLElement: Adobe.Indesign.XMLItem;
			/**
			 * Dispatched before a Button is placed. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_PLACE: string;
			/**
			 * A collection of behavior objects.
			 * @type {Adobe.Indesign.Behaviors}
			 * @readonly
			 */
			public readonly behaviors: Adobe.Indesign.Behaviors;
			/**
			 * The shape to apply to the bottom left corner of rectangular 
			 * shapes.
			 * @type {Adobe.Indesign.CornerOptions}
			 */
			public bottomLeftCornerOption: Adobe.Indesign.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the bottom left corner of rectangular shapes
			 * @type {any}
			 */
			public bottomLeftCornerRadius: any;
			/**
			 * The shape to apply to the bottom right corner of rectangular 
			 * shapes.
			 * @type {Adobe.Indesign.CornerOptions}
			 */
			public bottomRightCornerOption: Adobe.Indesign.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the bottom right corner of rectangular shapes
			 * @type {any}
			 */
			public bottomRightCornerRadius: any;
			/**
			 * A collection of clear form behavior objects.
			 * @type {Adobe.Indesign.ClearFormBehaviors}
			 * @readonly
			 */
			public readonly clearFormBehaviors: Adobe.Indesign.ClearFormBehaviors;
			/**
			 * Transparency settings for the content of the Button.
			 * @type {Adobe.Indesign.ContentTransparencySetting}
			 * @readonly
			 */
			public readonly contentTransparencySettings: Adobe.Indesign.ContentTransparencySetting;
			/**
			 * The description of the Button.
			 * @type {string}
			 */
			public description: string;
			/**
			 * The end shape of an open path.
			 * @type {Adobe.Indesign.EndCap}
			 */
			public endCap: Adobe.Indesign.EndCap;
			/**
			 * The corner join applied to the Button.
			 * @type {Adobe.Indesign.EndJoin}
			 */
			public endJoin: Adobe.Indesign.EndJoin;
			/**
			 * A collection of EPS files.
			 * @type {Adobe.Indesign.EPSs}
			 * @readonly
			 */
			public readonly epss: Adobe.Indesign.EPSs;
			/**
			 * EPSTexts
			 * @type {Adobe.Indesign.EPSTexts}
			 * @readonly
			 */
			public readonly epstexts: Adobe.Indesign.EPSTexts;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the Button. . Can also accept: String.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public fillColor: Adobe.Indesign.Swatch;
			/**
			 * The percent of tint to use in the Button's fill color. (To 
			 * specify a tint percent, use a number in the range of 0 to 
			 * 100; to use the inherited or overridden value, use -1.)
			 * @type {number}
			 */
			public fillTint: number;
			/**
			 * Transparency settings for the fill applied to the Button.
			 * @type {Adobe.Indesign.FillTransparencySetting}
			 * @readonly
			 */
			public readonly fillTransparencySettings: Adobe.Indesign.FillTransparencySetting;
			/**
			 * The direction in which to flip the printed image.
			 * @type {Adobe.Indesign.Flip}
			 */
			public flip: Adobe.Indesign.Flip;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of a dashed, dotted, or striped stroke. For 
			 * information, see stroke type.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public gapColor: Adobe.Indesign.Swatch;
			/**
			 * The tint as a percentage of the gap color. (To specify a 
			 * tint percent, use a number in the range of 0 to 100; to use 
			 * the inherited or overridden value, use -1.)
			 * @type {number}
			 */
			public gapTint: number;
			/**
			 * The bounds of the Button excluding the stroke width, in the 
			 * format [y1, x1, y2, x2], which give the coordinates of the 
			 * top-left and bottom-right corners of the bounding box.
			 * @type {any}
			 */
			public geometricBounds: any;
			/**
			 * A collection of goto anchor behavior objects.
			 * @type {Adobe.Indesign.GotoAnchorBehaviors}
			 * @readonly
			 */
			public readonly gotoAnchorBehaviors: Adobe.Indesign.GotoAnchorBehaviors;
			/**
			 * A collection of goto first page behavior objects.
			 * @type {Adobe.Indesign.GotoFirstPageBehaviors}
			 * @readonly
			 */
			public readonly gotoFirstPageBehaviors: Adobe.Indesign.GotoFirstPageBehaviors;
			/**
			 * A collection of goto last page behavior objects.
			 * @type {Adobe.Indesign.GotoLastPageBehaviors}
			 * @readonly
			 */
			public readonly gotoLastPageBehaviors: Adobe.Indesign.GotoLastPageBehaviors;
			/**
			 * A collection of goto next page behavior objects.
			 * @type {Adobe.Indesign.GotoNextPageBehaviors}
			 * @readonly
			 */
			public readonly gotoNextPageBehaviors: Adobe.Indesign.GotoNextPageBehaviors;
			/**
			 * A collection of goto next state behaviors.
			 * @type {Adobe.Indesign.GotoNextStateBehaviors}
			 * @readonly
			 */
			public readonly gotoNextStateBehaviors: Adobe.Indesign.GotoNextStateBehaviors;
			/**
			 * A collection of goto next view behavior objects.
			 * @type {Adobe.Indesign.GotoNextViewBehaviors}
			 * @readonly
			 */
			public readonly gotoNextViewBehaviors: Adobe.Indesign.GotoNextViewBehaviors;
			/**
			 * A collection of go to page behavior objects.
			 * @type {Adobe.Indesign.GotoPageBehaviors}
			 * @readonly
			 */
			public readonly gotoPageBehaviors: Adobe.Indesign.GotoPageBehaviors;
			/**
			 * A collection of goto previous page behavior objects.
			 * @type {Adobe.Indesign.GotoPreviousPageBehaviors}
			 * @readonly
			 */
			public readonly gotoPreviousPageBehaviors: Adobe.Indesign.GotoPreviousPageBehaviors;
			/**
			 * A collection of goto previous state behaviors.
			 * @type {Adobe.Indesign.GotoPreviousStateBehaviors}
			 * @readonly
			 */
			public readonly gotoPreviousStateBehaviors: Adobe.Indesign.GotoPreviousStateBehaviors;
			/**
			 * A collection of goto previous view behavior objects.
			 * @type {Adobe.Indesign.GotoPreviousViewBehaviors}
			 * @readonly
			 */
			public readonly gotoPreviousViewBehaviors: Adobe.Indesign.GotoPreviousViewBehaviors;
			/**
			 * A collection of goto state behaviors.
			 * @type {Adobe.Indesign.GotoStateBehaviors}
			 * @readonly
			 */
			public readonly gotoStateBehaviors: Adobe.Indesign.GotoStateBehaviors;
			/**
			 * A collection of goto URL behavior objects.
			 * @type {Adobe.Indesign.GotoURLBehaviors}
			 * @readonly
			 */
			public readonly gotoURLBehaviors: Adobe.Indesign.GotoURLBehaviors;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * Button. (Range: -180 to 180)
			 * @type {number}
			 */
			public gradientFillAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the fill of the Button.
			 * @type {any}
			 */
			public gradientFillLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the Button, in the format [x, y].
			 * @type {any}
			 */
			public gradientFillStart: any;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * Button. (Range: -180 to 180)
			 * @type {number}
			 */
			public gradientStrokeAngle: number;
			/**
			 * The length (for a linear gradient) or radius (for a radial 
			 * gradient) applied to the stroke of the Button.
			 * @type {any}
			 */
			public gradientStrokeLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the stroke of the Button, in the format [x, y].
			 * @type {any}
			 */
			public gradientStrokeStart: any;
			/**
			 * A collection of graphic lines.
			 * @type {Adobe.Indesign.GraphicLines}
			 * @readonly
			 */
			public readonly graphicLines: Adobe.Indesign.GraphicLines;
			/**
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 * @type {Adobe.Indesign.Graphics}
			 * @readonly
			 */
			public readonly graphics: Adobe.Indesign.Graphics;
			/**
			 * A collection of groups.
			 * @type {Adobe.Indesign.Groups}
			 * @readonly
			 */
			public readonly groups: Adobe.Indesign.Groups;
			/**
			 * If true, the form field/push button is hidden until 
			 * triggered in the exported PDF.
			 * @type {boolean}
			 */
			public hiddenUntilTriggered: boolean;
			/**
			 * The left margin, width, and right margin constraints this 
			 * item is subject to when using the object-based layout rule.
			 * @type {any}
			 */
			public horizontalLayoutConstraints: any;
			/**
			 * The horizontal scaling applied to the Button.
			 * @type {number}
			 */
			public horizontalScale: number;
			/**
			 * The unique ID of the Button.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 * @type {Adobe.Indesign.Images}
			 * @readonly
			 */
			public readonly images: Adobe.Indesign.Images;
			/**
			 * The index of the Button within its containing object.
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
			 * The layer that the Button is on.
			 * @type {Adobe.Indesign.Layer}
			 */
			public itemLayer: Adobe.Indesign.Layer;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The arrowhead applied to the start of the path.
			 * @type {Adobe.Indesign.ArrowHead}
			 */
			public leftLineEnd: Adobe.Indesign.ArrowHead;
			/**
			 * Linked Page Item options
			 * @type {Adobe.Indesign.LinkedPageItemOption}
			 * @readonly
			 */
			public readonly linkedPageItemOptions: Adobe.Indesign.LinkedPageItemOption;
			/**
			 * Display performance options for the Button.
			 * @type {Adobe.Indesign.DisplaySettingOptions}
			 */
			public localDisplaySetting: Adobe.Indesign.DisplaySettingOptions;
			/**
			 * If true, the Button is locked.
			 * @type {boolean}
			 */
			public locked: boolean;
			/**
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join.
			 * @type {number}
			 */
			public miterLimit: number;
			/**
			 * A collection of movie behavior objects.
			 * @type {Adobe.Indesign.MovieBehaviors}
			 * @readonly
			 */
			public readonly movieBehaviors: Adobe.Indesign.MovieBehaviors;
			/**
			 * The name of the Button.
			 * @type {string}
			 */
			public name: string;
			/**
			 * If true, the Button does not print.
			 * @type {boolean}
			 */
			public nonprinting: boolean;
			/**
			 * A collection of open file behavior objects.
			 * @type {Adobe.Indesign.OpenFileBehaviors}
			 * @readonly
			 */
			public readonly openFileBehaviors: Adobe.Indesign.OpenFileBehaviors;
			/**
			 * A collection of ellipses.
			 * @type {Adobe.Indesign.Ovals}
			 * @readonly
			 */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * If true, the Button's fill color overprints any underlying 
			 * objects. If false, the fill color knocks out the underlying 
			 * colors.
			 * @type {boolean}
			 */
			public overprintFill: boolean;
			/**
			 * If true, the gap color overprints any underlying colors. If 
			 * false, the gap color knocks out the underlying colors.
			 * @type {boolean}
			 */
			public overprintGap: boolean;
			/**
			 * If true, the Button's stroke color overprints any underlying 
			 * objects. If false, the stroke color knocks out the  
			 * underlying colors.
			 * @type {boolean}
			 */
			public overprintStroke: boolean;
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
			 * @type {Adobe.Indesign.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/**
			 * The parent of the Button (a Snippet, PlaceGun, Spread, 
			 * MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, 
			 * Oval, Group or Character).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The page on which this page item appears.
			 * @type {Adobe.Indesign.Page}
			 * @readonly
			 */
			public readonly parentPage: Adobe.Indesign.Page;
			/**
			 * A collection of paths.
			 * @type {Adobe.Indesign.Paths}
			 * @readonly
			 */
			public readonly paths: Adobe.Indesign.Paths;
			/**
			 * A collection of PDF files.
			 * @type {Adobe.Indesign.PDFs}
			 * @readonly
			 */
			public readonly pdfs: Adobe.Indesign.PDFs;
			/**
			 * A collection of PICT graphics.
			 * @type {Adobe.Indesign.PICTs}
			 * @readonly
			 */
			public readonly picts: Adobe.Indesign.PICTs;
			/**
			 * A collection of polygons.
			 * @type {Adobe.Indesign.Polygons}
			 * @readonly
			 */
			public readonly polygons: Adobe.Indesign.Polygons;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Indesign.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * If true, the form field/push button is printable in the 
			 * exported PDF.
			 * @type {boolean}
			 */
			public printableInPdf: boolean;
			/**
			 * A collection of print form behavior objects.
			 * @type {Adobe.Indesign.PrintFormBehaviors}
			 * @readonly
			 */
			public readonly printFormBehaviors: Adobe.Indesign.PrintFormBehaviors;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of rectangles.
			 * @type {Adobe.Indesign.Rectangles}
			 * @readonly
			 */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/**
			 * The arrowhead applied to the end of the path.
			 * @type {Adobe.Indesign.ArrowHead}
			 */
			public rightLineEnd: Adobe.Indesign.ArrowHead;
			/**
			 * The rotatation angle of the Button. (Range: -360 to 360)
			 * @type {number}
			 */
			public rotationAngle: number;
			/**
			 * The skewing angle applied to the Button. (Range: -360 to 
			 * 360)
			 * @type {number}
			 */
			public shearAngle: number;
			/**
			 * A collection of show/hide fields behavior objects.
			 * @type {Adobe.Indesign.ShowHideFieldsBehaviors}
			 * @readonly
			 */
			public readonly showHideFieldsBehaviors: Adobe.Indesign.ShowHideFieldsBehaviors;
			/**
			 * A collection of sound behavior objects.
			 * @type {Adobe.Indesign.SoundBehaviors}
			 * @readonly
			 */
			public readonly soundBehaviors: Adobe.Indesign.SoundBehaviors;
			/**
			 * The spline items collection.
			 * @type {Adobe.Indesign.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/**
			 * A collection of states.
			 * @type {Adobe.Indesign.States}
			 * @readonly
			 */
			public readonly states: Adobe.Indesign.States;
			/**
			 * The stroke alignment applied to the Button.
			 * @type {Adobe.Indesign.StrokeAlignment}
			 */
			public strokeAlignment: Adobe.Indesign.StrokeAlignment;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the Button. Can also accept: String.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public strokeColor: Adobe.Indesign.Swatch;
			/**
			 * The corner adjustment applied to the Button.
			 * @type {Adobe.Indesign.StrokeCornerAdjustment}
			 */
			public strokeCornerAdjustment: Adobe.Indesign.StrokeCornerAdjustment;
			/**
			 * The dash and gap measurements that define the pattern of a 
			 * custom dashed line. Define up to six values (in points) in 
			 * the format [dash1, gap1, dash2, gap2, dash3, gap3].
			 * @type {any}
			 */
			public strokeDashAndGap: any;
			/**
			 * The percent of tint to use in object's stroke color. (To 
			 * specify a tint percent, use a number in the range of 0 to 
			 * 100; to use the inherited or overridden value, use -1.)
			 * @type {number}
			 */
			public strokeTint: number;
			/**
			 * Transparency settings for the stroke.
			 * @type {Adobe.Indesign.StrokeTransparencySetting}
			 * @readonly
			 */
			public readonly strokeTransparencySettings: Adobe.Indesign.StrokeTransparencySetting;
			/**
			 * The name of the stroke style to apply. Can also accept: 
			 * String.
			 * @type {Adobe.Indesign.StrokeStyle}
			 */
			public strokeType: Adobe.Indesign.StrokeStyle;
			/**
			 * The weight (in points) to apply to the Button's stroke.
			 * @type {any}
			 */
			public strokeWeight: any;
			/**
			 * A collection of submit form behavior objects.
			 * @type {Adobe.Indesign.SubmitFormBehaviors}
			 * @readonly
			 */
			public readonly submitFormBehaviors: Adobe.Indesign.SubmitFormBehaviors;
			/**
			 * A collection of text frames.
			 * @type {Adobe.Indesign.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Indesign.TextFrames;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 * @type {Adobe.Indesign.TextWrapPreference}
			 * @readonly
			 */
			public readonly textWrapPreferences: Adobe.Indesign.TextWrapPreference;
			/**
			 * The object timing settings.
			 * @type {Adobe.Indesign.TimingSetting}
			 * @readonly
			 */
			public readonly timingSettings: Adobe.Indesign.TimingSetting;
			/**
			 * The shape to be applied to the top left corner of 
			 * rectangular shapes and all corners of non-rectangular 
			 * shapes.Note: corner option differs from end join in which 
			 * you can set a radius for a corner option, whereas the 
			 * rounded or beveled effect of an end join depends on the 
			 * stroke weight.
			 * @type {Adobe.Indesign.CornerOptions}
			 */
			public topLeftCornerOption: Adobe.Indesign.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the top left corner of rectangular shapes and all corners 
			 * of non-rectangular shapes
			 * @type {any}
			 */
			public topLeftCornerRadius: any;
			/**
			 * The shape to apply to the top right corner of rectangular 
			 * shapes
			 * @type {Adobe.Indesign.CornerOptions}
			 */
			public topRightCornerOption: Adobe.Indesign.CornerOptions;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the top right corner of rectangular shapes
			 * @type {any}
			 */
			public topRightCornerRadius: any;
			/**
			 * Transparency settings.
			 * @type {Adobe.Indesign.TransparencySetting}
			 * @readonly
			 */
			public readonly transparencySettings: Adobe.Indesign.TransparencySetting;
			/**
			 * The top margin, height, and bottom margin constraints this 
			 * item is subject to when using the object-based layout rule.
			 * @type {any}
			 */
			public verticalLayoutConstraints: any;
			/**
			 * The vertical scaling applied to the Button.
			 * @type {number}
			 */
			public verticalScale: number;
			/**
			 * A collection of view zoom behavior objects.
			 * @type {Adobe.Indesign.ViewZoomBehaviors}
			 * @readonly
			 */
			public readonly viewZoomBehaviors: Adobe.Indesign.ViewZoomBehaviors;
			/**
			 * If true, the Button is visible.
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * The bounds of the Button including the stroke width, in the 
			 * format [y1, x1, y2, x2], which give the coordinates of the 
			 * top-left and bottom-right corners of the bounding box.
			 * @type {any}
			 */
			public visibleBounds: any;
			/**
			 * A collection of WMF graphics.
			 * @type {Adobe.Indesign.WMFs}
			 * @readonly
			 */
			public readonly wmfs: Adobe.Indesign.WMFs;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerButton(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Applies the specified object style.
			 * @param {ObjectStyle} usingParam The object style to apply.
			 * @param {boolean} clearingOverridesParam If true, clears the 
			 * Button's existing attributes before applying the style. 
			 * (Optional)
			 * @param {boolean} 
			 * clearingOverridesThroughRootObjectStyleParam If true, clears 
			 * attributes and formatting applied to the Button that are not 
			 * defined in the object style. (Optional)
			 * @returns {void}
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
			 * @returns {Adobe.Indesign.BackgroundTask}
			 */
			public asynchronousExportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, versionCommentsParam: string, forceSaveParam: boolean): Adobe.Indesign.BackgroundTask;
			/**
			 * Tag the object or the parent story using default tags 
			 * defined in XML preference.
			 * @returns {void}
			 */
			public autoTag(): void;
			/**
			 * Brings the Button forward one level in its layer.
			 * @returns {void}
			 */
			public bringForward(): void;
			/**
			 * Brings the Button to the front of its layer or in front of a 
			 * particular item.
			 * @param {PageItem} referenceParam The reference object to 
			 * bring the object in front of (must have same parent) 
			 * (Optional)
			 * @returns {void}
			 */
			public bringToFront(referenceParam: PageItem): void;
			/**
			 * Finds objects that match the find what value and replace the 
			 * objects with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeObject(reverseOrderParam: boolean): any;
			/**
			 * Clear overrides for object style
			 * @returns {void}
			 */
			public clearObjectStyleOverrides(): void;
			/**
			 * Clears transformations from the Button. Transformations 
			 * include rotation, scaling, flipping, fitting, and shearing.
			 * @returns {void}
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
			 * @returns {any}
			 */
			public contentPlace(pageItemsParam: any[], linkPageItemsParam: boolean, linkStoriesParam: boolean, mapStylesParam: boolean, showingOptionsParam: boolean): any;
			/**
			 * Converts the Button to a different shape.
			 * @param {ConvertShapeOptions} givenParam The Button's new 
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
			 * Converts the button object to the page item currently in the 
			 * active state. Page items from other states will be lost.
			 * @returns {void}
			 */
			public convertToObject(): void;
			/**
			 * Detaches an overridden master page item from the master 
			 * page.
			 * @returns {void}
			 */
			public detach(): void;
			/**
			 * Duplicates the Button at the specified location or offset.
			 * @param {any} toParam The location of the new Button, 
			 * specified in coordinates in the format [x, y]. Can accept: 
			 * Array of 2 Units, Spread, Page or Layer. (Optional)
			 * @param {any[]} byParam Amount by which to offset the new 
			 * Button from the original Button's position. (Optional)
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public duplicate(toParam: any, byParam: any[]): Adobe.Indesign.PageItem;
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
			 * @returns {void}
			 */
			public exportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, versionCommentsParam: string, forceSaveParam: boolean): void;
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
			 * Flips the Button.
			 * @param {Flip} givenParam The axis around which to flip the 
			 * Button.
			 * @param {any} aroundParam The point around which to flip the 
			 * Button. Can accept: Array of 2 Units or AnchorPoint 
			 * enumerator. (Optional)
			 * @returns {void}
			 */
			public flipItem(givenParam: Flip, aroundParam: any): void;
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
			 * Associates the page item with the specified XML element 
			 * while preserving existing content.
			 * @param {XMLElement} usingParam The XML element.
			 * @returns {void}
			 */
			public markup(usingParam: XMLElement): void;
			/**
			 * Moves the Button to a new location. Note: Either the 'to' or 
			 * 'by' parameter is required; if both parameters are defined, 
			 * only the to value is used.
			 * @param {any} toParam The new location of the Button,in the 
			 * format (x, y). Can accept: Array of 2 Units, Spread, Page or 
			 * Layer. (Optional)
			 * @param {any[]} byParam The amount (in measurement units) to 
			 * move the Button relative to its current position, in the 
			 * format (x, y). (Optional)
			 * @returns {void}
			 */
			public move(toParam: any, byParam: any[]): void;
			/**
			 * Overrides a master page item and places the item on the 
			 * document page as a new object.
			 * @param {Page} destinationPageParam The document page that 
			 * contains the master page item to override.
			 * @returns {any}
			 */
			public override(destinationPageParam: Page): any;
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
			 * Deletes the Button.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerButton(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Removes the override from a previously overridden master 
			 * page item.
			 * @returns {void}
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
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the Button in relation to previously 
			 * selected objects. (Optional)
			 * @returns {void}
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/**
			 * Sends the Button back one level in its layer.
			 * @returns {void}
			 */
			public sendBackward(): void;
			/**
			 * Sends the Button to the back of its layer or behind a 
			 * particular item (must have same parent).
			 * @param {PageItem} referenceParam The reference object to 
			 * send the object behind (Optional)
			 * @returns {void}
			 */
			public sendToBack(referenceParam: PageItem): void;
			/**
			 * Stores the object in the specified library.
			 * @param {Library} usingParam The library in which to store 
			 * the object.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Button (Optional)
			 * @returns {Adobe.Indesign.Asset}
			 */
			public store(usingParam: Library, withPropertiesParam: any): Adobe.Indesign.Asset;
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
			 * Transforms the Button using the last transformation 
			 * performed on any object. Transformations include moving, 
			 * rotating, shearing, scaling, and flipping.
			 * @returns {any}
			 */
			public transformAgain(): any;
			/**
			 * Transforms the Button using the last transformation 
			 * performed on any Button. Transformations include moving, 
			 * rotating, shearing, scaling, and flipping.
			 * @returns {any}
			 */
			public transformAgainIndividually(): any;
			/**
			 * Transforms the Button using the last sequence of transform 
			 * operations performed on any single object or performed at 
			 * the same time on any group of objects. Transformations 
			 * include moving, rotating, shearing, scaling, and flipping.
			 * @returns {any}
			 */
			public transformSequenceAgain(): any;
			/**
			 * Transforms the Button using the last sequence of 
			 * transformations performed on any single object or performed 
			 * at the same time on any group of objects. Transformations 
			 * include moving, rotating, shearing, scaling, and flipping.
			 * @returns {any}
			 */
			public transformSequenceAgainIndividually(): any;
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