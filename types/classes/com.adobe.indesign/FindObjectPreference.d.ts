/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class FindObjectPreference extends Adobe.Indesign.Preference {
			/**
			 * The position of the anchored object relative to the anchor. 
			 * Can return: AnchorPosition enumerator or NothingEnum 
			 * enumerator.
			 */
			public anchoredPosition: any;
			/**
			 * The point in the anchored object to position. Can return: 
			 * AnchorPoint enumerator or NothingEnum enumerator.
			 */
			public anchorPoint: any;
			/**
			 * The space above an above-line anchored object. Can return: 
			 * Unit or NothingEnum enumerator.
			 */
			public anchorSpaceAbove: any;
			/**
			 * The horizontal (x) offset of the anchored object. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public anchorXoffset: any;
			/**
			 * The vertical (y) offset of the anchored object. Corresponds 
			 * to the space after property for above line positioning. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public anchorYoffset: any;
			/**
			 * The applied object style(s). Can return: String or 
			 * NothingEnum enumerator. Can also accept: ObjectStyle.
			 */
			public appliedObjectStyles: any;
			/**
			 * If true, text wraps on the master spread apply to that 
			 * spread only, and not to any pages the master spread has been 
			 * applied to. Can return: Boolean or NothingEnum enumerator.
			 */
			public applyToMasterPageOnly: any;
			/**
			 * The grid line color, specified either as an array of three 
			 * doubles, each in the range 0 to 255 and representing R, G, 
			 * and B values, or as a UI color. Can return: Array of 3 Reals 
			 * (0 - 255) or UIColors enumerator or NothingEnum enumerator.
			 */
			public baselineFrameGridColor: any;
			/**
			 * The distance between grid lines. Can return: Unit (1 - 8640 
			 * points) or NothingEnum enumerator.
			 */
			public baselineFrameGridIncrement: any;
			/**
			 * The location (top of page, top margin, top of frame, or 
			 * frame inset) on which to base the custom baseline grid. Can 
			 * return: BaselineFrameGridRelativeOption enumerator or 
			 * NothingEnum enumerator.
			 */
			public baselineFrameGridRelativeOption: any;
			/**
			 * The amount in measurement units to crop the bottom edge of a 
			 * graphic. Can return: Unit or NothingEnum enumerator.
			 */
			public bottomCrop: any;
			/**
			 * The shape to apply to the bottom left corner of rectangular 
			 * shapes. Can return: CornerOptions enumerator or NothingEnum 
			 * enumerator.
			 */
			public bottomLeftCornerOption: any;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the bottom left corner of rectangular shapes. Can return: 
			 * Unit or NothingEnum enumerator.
			 */
			public bottomLeftCornerRadius: any;
			/**
			 * The shape to apply to the bottom right corner of rectangular 
			 * shapes. Can return: CornerOptions enumerator or NothingEnum 
			 * enumerator.
			 */
			public bottomRightCornerOption: any;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the bottom right corner of rectangular shapes. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public bottomRightCornerRadius: any;
			/**
			 * Transparency settings for the content of the 
			 * FindObjectPreference. Can return: 
			 * FindChangeContentTransparencySetting or NothingEnum 
			 * enumerator.
			 */
			public readonly contentTransparencySettings: any;
			/**
			 * The contour type. Can return: ContourOptionsTypes enumerator 
			 * or NothingEnum enumerator.
			 */
			public contourType: any;
			/**
			 * The end shape of an open path. Can return: EndCap enumerator 
			 * or NothingEnum enumerator.
			 */
			public endCap: any;
			/**
			 * The corner join applied to the FindObjectPreference. Can 
			 * return: EndJoin enumerator or NothingEnum enumerator.
			 */
			public endJoin: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the FindObjectPreference. . Can return: Swatch 
			 * or NothingEnum enumerator. Can also accept: String.
			 */
			public fillColor: any;
			/**
			 * The percent of tint to use in the FindObjectPreference's 
			 * fill color. (To specify a tint percent, use a number in the 
			 * range of 0 to 100; to use the inherited or overridden value, 
			 * use -1.). Can return: Real or NothingEnum enumerator.
			 */
			public fillTint: any;
			/**
			 * Transparency settings for the fill applied to the 
			 * FindObjectPreference. Can return: 
			 * FindChangeFillTransparencySetting or NothingEnum enumerator.
			 */
			public readonly fillTransparencySettings: any;
			/**
			 * The distance between the baseline of the text and the top 
			 * inset of the text frame or cell. Can return: FirstBaseline 
			 * enumerator or NothingEnum enumerator.
			 */
			public firstBaselineOffset: any;
			/**
			 * The point with which to align the image empty when fitting 
			 * in a frame. For information, see frame fitting options. Can 
			 * return: AnchorPoint enumerator or NothingEnum enumerator.
			 */
			public fittingAlignment: any;
			/**
			 * The frame fitting option to apply to placed or pasted 
			 * content if the frame is empty. Can be applied to a frame, 
			 * object style, or document or to the application. Can return: 
			 * EmptyFrameFittingOptions enumerator or NothingEnum 
			 * enumerator.
			 */
			public fittingOnEmptyFrame: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of a dashed, dotted, or striped stroke. For 
			 * information, see stroke type. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public gapColor: any;
			/**
			 * The tint as a percentage of the gap color. (To specify a 
			 * tint percent, use a number in the range of 0 to 100; to use 
			 * the inherited or overridden value, use -1.). Can return: 
			 * Real or NothingEnum enumerator.
			 */
			public gapTint: any;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * FindObjectPreference. (Range: -180 to 180). Can return: Real 
			 * or NothingEnum enumerator.
			 */
			public gradientFillAngle: any;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * FindObjectPreference. (Range: -180 to 180). Can return: Real 
			 * or NothingEnum enumerator.
			 */
			public gradientStrokeAngle: any;
			/**
			 * The horizontal reference point on the page. Valid only when 
			 * anchored position is custom. Can return: AnchoredRelativeTo 
			 * enumerator or NothingEnum enumerator.
			 */
			public horizontalReferencePoint: any;
			/**
			 * If true, ignores text wrap settings for drawn or placed 
			 * objects in the text frame. . Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public ignoreWrap: any;
			/**
			 * If true, creates interior clipping paths within the 
			 * surrounding clipping path. Note: Valid only when clipping 
			 * type is alpha channel or detect edges. . Can return: Boolean 
			 * or NothingEnum enumerator.
			 */
			public includeInsideEdges: any;
			/**
			 * The amount to offset text from the edges of the text frame, 
			 * specified either as a single value applied uniformly to all 
			 * sides of the text frame or as an array of 4 values in the 
			 * format [top inset, left inset, bottom inset, right inset]. 
			 * Can return: Unit (0 - 8640 points), Array of 4 Units (0 - 
			 * 8640 points) or NothingEnum enumerator.
			 */
			public insetSpacing: any;
			/**
			 * If true, inverts the text wrap. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public inverse: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The amount in measurement units to crop the left edge of a 
			 * graphic. Can return: Unit or NothingEnum enumerator.
			 */
			public leftCrop: any;
			/**
			 * The arrowhead applied to the start of the path. . Can 
			 * return: ArrowHead enumerator or NothingEnum enumerator.
			 */
			public leftLineEnd: any;
			/**
			 * If true, prevents manual positioning of the anchored object. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public lockPosition: any;
			/**
			 * The minimum distance between the baseline of the text and 
			 * the top inset of the text frame or cell. Can return: Unit (0 
			 * - 8640 points) or NothingEnum enumerator.
			 */
			public minimumFirstBaselineOffset: any;
			/**
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join. Can return: Real (1 - 500) or NothingEnum enumerator.
			 */
			public miterLimit: any;
			/**
			 * If true, the FindObjectPreference does not print. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public nonprinting: any;
			/**
			 * If true, adjust the position of characters at the edges of 
			 * the frame to provide a better appearance. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public opticalMarginAlignment: any;
			/**
			 * The point size used as the basis for calculating optical 
			 * margin alignment. (Range: 0.1 to 1296). Can return: Unit 
			 * (0.1 - 1296 points) or NothingEnum enumerator.
			 */
			public opticalMarginSize: any;
			/**
			 * If true, the FindObjectPreference's fill color overprints 
			 * any underlying objects. If false, the fill color knocks out 
			 * the underlying colors. Can return: Boolean or NothingEnum 
			 * enumerator.
			 */
			public overprintFill: any;
			/**
			 * If true, the gap color overprints any underlying colors. If 
			 * false, the gap color knocks out the underlying colors. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public overprintGap: any;
			/**
			 * If true, the FindObjectPreference's stroke color overprints 
			 * any underlying objects. If false, the stroke color knocks 
			 * out the  underlying colors. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public overprintStroke: any;
			/** The parent of the FindObjectPreference (a Application). */
			public readonly parent: any;
			/**
			 * If true, pins the position of the anchored object within the 
			 * text frame top and bottom. Can return: Boolean or 
			 * NothingEnum enumerator.
			 */
			public pinPosition: any;
			/**
			 * The point in the referenced object relative to which to 
			 * position the anchored object. Notes: Valid only when 
			 * anchored position is custom. Can return: AnchorPoint 
			 * enumerator or NothingEnum enumerator.
			 */
			public positionReferencePoint: any;
			/** A collection of preferences objects. */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The amount in measurement units to crop the right edge of a 
			 * graphic. Can return: Unit or NothingEnum enumerator.
			 */
			public rightCrop: any;
			/**
			 * The arrowhead applied to the end of the path. Can return: 
			 * ArrowHead enumerator or NothingEnum enumerator.
			 */
			public rightLineEnd: any;
			/**
			 * If true, the position of the anchored object is relative to 
			 * the binding spine of the page or spread. Can return: Boolean 
			 * or NothingEnum enumerator.
			 */
			public spineRelative: any;
			/**
			 * The amount to offset the baseline grid. Can return: Unit (0 
			 * - 8640 points) or NothingEnum enumerator.
			 */
			public startingOffsetForBaselineFrameGrid: any;
			/**
			 * The direction of the story. Can return: 
			 * StoryDirectionOptions enumerator or NothingEnum enumerator.
			 */
			public storyDirection: any;
			/**
			 * The stroke alignment applied to the FindObjectPreference. 
			 * Can return: StrokeAlignment enumerator or NothingEnum 
			 * enumerator.
			 */
			public strokeAlignment: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the FindObjectPreference. Can return: Swatch 
			 * or NothingEnum enumerator. Can also accept: String.
			 */
			public strokeColor: any;
			/**
			 * The corner adjustment applied to the FindObjectPreference. 
			 * Can return: StrokeCornerAdjustment enumerator or NothingEnum 
			 * enumerator.
			 */
			public strokeCornerAdjustment: any;
			/**
			 * The dash and gap measurements that define the pattern of a 
			 * custom dashed line. Define up to six values (in points) in 
			 * the format [dash1, gap1, dash2, gap2, dash3, gap3]. Can 
			 * return: Array of Units or NothingEnum enumerator.
			 */
			public strokeDashAndGap: any;
			/**
			 * The percent of tint to use in object's stroke color. (To 
			 * specify a tint percent, use a number in the range of 0 to 
			 * 100; to use the inherited or overridden value, use -1.). Can 
			 * return: Real or NothingEnum enumerator.
			 */
			public strokeTint: any;
			/**
			 * Transparency settings for the stroke. Can return: 
			 * FindChangeStrokeTransparencySetting or NothingEnum 
			 * enumerator.
			 */
			public readonly strokeTransparencySettings: any;
			/**
			 * The name of the stroke style to apply. Can return: 
			 * StrokeStyle or NothingEnum enumerator. Can also accept: 
			 * String.
			 */
			public strokeType: any;
			/**
			 * The weight (in points) to apply to the 
			 * FindObjectPreference's stroke. Can return: Unit or 
			 * NothingEnum enumerator.
			 */
			public strokeWeight: any;
			/**
			 * The number of columns in the text frame. Note: Depending on 
			 * the value of use fixed column width, the number of columns 
			 * can change automatically when the text frame size changes. 
			 * Can return: Long Integer (1 - 40) or NothingEnum enumerator.
			 */
			public textColumnCount: any;
			/**
			 * The column width of the columns in the text frame. Can 
			 * return: Unit (0 - 8640 points) or NothingEnum enumerator.
			 */
			public textColumnFixedWidth: any;
			/**
			 * The space between columns in the text frame. Can return: 
			 * Unit (0 - 8640 points) or NothingEnum enumerator.
			 */
			public textColumnGutter: any;
			/**
			 * The text wrap mode. . Can return: TextWrapModes enumerator 
			 * or NothingEnum enumerator.
			 */
			public textWrapMode: any;
			/**
			 * The minimum space between text and the edges of the wrapped 
			 * object. Specify four values in the format [top, left, 
			 * bottom, right]. . Can return: Ordered array containing 
			 * top:Unit, left:Unit, bottom:Unit, right:Unit or NothingEnum 
			 * enumerator.
			 */
			public textWrapOffset: any;
			/**
			 * Text wrap side options. Can return: TextWrapSideOptions 
			 * enumerator or NothingEnum enumerator.
			 */
			public textWrapSide: any;
			/**
			 * The amount in measurement units to crop the top edge of a 
			 * graphic. Can return: Unit or NothingEnum enumerator.
			 */
			public topCrop: any;
			/**
			 * The shape to be applied to the top left corner of 
			 * rectangular shapes and all corners of non-rectangular 
			 * shapes.Note: corner option differs from end join in which 
			 * you can set a radius for a corner option, whereas the 
			 * rounded or beveled effect of an end join depends on the 
			 * stroke weight. Can return: CornerOptions enumerator or 
			 * NothingEnum enumerator.
			 */
			public topLeftCornerOption: any;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the top left corner of rectangular shapes and all corners 
			 * of non-rectangular shapes. Can return: Unit or NothingEnum 
			 * enumerator.
			 */
			public topLeftCornerRadius: any;
			/**
			 * The shape to apply to the top right corner of rectangular 
			 * shapes. Can return: CornerOptions enumerator or NothingEnum 
			 * enumerator.
			 */
			public topRightCornerOption: any;
			/**
			 * The radius in measurement units of the corner effect applied 
			 * to the top right corner of rectangular shapes. Can return: 
			 * Unit or NothingEnum enumerator.
			 */
			public topRightCornerRadius: any;
			/**
			 * Transparency settings. Can return: 
			 * FindChangeTransparencySetting or NothingEnum enumerator.
			 */
			public readonly transparencySettings: any;
			/**
			 * If true, uses a custom baseline frame grid. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public useCustomBaselineFrameGrid: any;
			/**
			 * If true, maintains column width when the text frame is 
			 * resized. If false, causes columns to resize when the text 
			 * frame is resized. Note: When true, resizing the frame can 
			 * change the number of columns in the frame. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public useFixedColumnWidth: any;
			/**
			 * If true, the text wrap path has been explicitly modified by 
			 * the user. Can return: Boolean or NothingEnum enumerator.
			 */
			public readonly userModifiedWrap: any;
			/**
			 * The vertical alignment of the text content. . Can return: 
			 * VerticalJustification enumerator or NothingEnum enumerator.
			 */
			public verticalJustification: any;
			/**
			 * The vertical reference point on the page. Valid when 
			 * anchored position is custom. Can return: 
			 * VerticallyRelativeTo enumerator or NothingEnum enumerator.
			 */
			public verticalReferencePoint: any;
			/**
			 * The maximum amount of vertical space between two paragraphs. 
			 * Note: Valid only when vertical justification is justified; 
			 * the specified amount is applied in addition to the space 
			 * before or space after values defined for the paragraph. Can 
			 * return: Unit (0 - 8640 points) or NothingEnum enumerator.
			 */
			public verticalThreshold: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFindObjectPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerFindObjectPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}