/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ObjectStyle extends Adobe.Csawlib.CSHostObject {
			/**
			 * Anchored object settings.
			 * @type {Adobe.Indesign.AnchoredObjectSetting}
			 */
			public anchoredObjectSettings: Adobe.Indesign.AnchoredObjectSetting;
			/**
			 * The paragraph style applied to the text. Can also accept: 
			 * String.
			 * @type {Adobe.Indesign.ParagraphStyle}
			 */
			public appliedParagraphStyle: Adobe.Indesign.ParagraphStyle;
			/**
			 * If true, applies paragraph styles using Next Paragraph Style 
			 * settings, beginning with the Next Paragraph Style defined in 
			 * the paragraph style associated with the object style (if 
			 * any).
			 * @type {boolean}
			 */
			public applyNextParagraphStyle: boolean;
			/**
			 * The style that this style is based on. Can return: 
			 * ObjectStyle or String.
			 * @type {any}
			 */
			public basedOn: any;
			/**
			 * Baseline frame grid option settings.
			 * @type {Adobe.Indesign.BaselineFrameGridOption}
			 */
			public baselineFrameGridOptions: Adobe.Indesign.BaselineFrameGridOption;
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
			 * The content effects enabling settings.
			 * @type 
			 * {Adobe.Indesign.ObjectStyleContentEffectsCategorySettings}
			 * @readonly
			 */
			public readonly contentEffectsEnablingSettings: Adobe.Indesign.ObjectStyleContentEffectsCategorySettings;
			/**
			 * Transparency settings for the content of the ObjectStyle.
			 * @type {Adobe.Indesign.ContentTransparencySetting}
			 * @readonly
			 */
			public readonly contentTransparencySettings: Adobe.Indesign.ContentTransparencySetting;
			/**
			 * If true, the object style will apply an anchored object 
			 * setting.
			 * @type {boolean}
			 */
			public enableAnchoredObjectOptions: boolean;
			/**
			 * If true, the object style will apply a fill.
			 * @type {boolean}
			 */
			public enableFill: boolean;
			/**
			 * If true, the object style will apply frame fitting options.
			 * @type {boolean}
			 */
			public enableFrameFittingOptions: boolean;
			/**
			 * If true, the object style will apply a paragraph style.
			 * @type {boolean}
			 */
			public enableParagraphStyle: boolean;
			/**
			 * If true, the object style will apply story options.
			 * @type {boolean}
			 */
			public enableStoryOptions: boolean;
			/**
			 * If true, the object style will apply a stroke.
			 * @type {boolean}
			 */
			public enableStroke: boolean;
			/**
			 * If true, the object style will apply stroke options and 
			 * corner options.
			 * @type {boolean}
			 */
			public enableStrokeAndCornerOptions: boolean;
			/**
			 * If true, the object style will apply auto-sizing text frame 
			 * options.
			 * @type {boolean}
			 */
			public enableTextFrameAutoSizingOptions: boolean;
			/**
			 * If true, the object style will apply baseline text frame 
			 * options.
			 * @type {boolean}
			 */
			public enableTextFrameBaselineOptions: boolean;
			/**
			 * If true, the object style will apply general text frame 
			 * options.
			 * @type {boolean}
			 */
			public enableTextFrameGeneralOptions: boolean;
			/**
			 * If true, the object style will apply text wrap, contour, and 
			 * non-printing settings.
			 * @type {boolean}
			 */
			public enableTextWrapAndOthers: boolean;
			/**
			 * The end shape of an open path.
			 * @type {Adobe.Indesign.EndCap}
			 */
			public endCap: Adobe.Indesign.EndCap;
			/**
			 * The corner join applied to the ObjectStyle.
			 * @type {Adobe.Indesign.EndJoin}
			 */
			public endJoin: Adobe.Indesign.EndJoin;
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
			 * the fill of the ObjectStyle. . Can also accept: String.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public fillColor: Adobe.Indesign.Swatch;
			/**
			 * The fill effects enabling settings.
			 * @type 
			 * {Adobe.Indesign.ObjectStyleFillEffectsCategorySettings}
			 * @readonly
			 */
			public readonly fillEffectsEnablingSettings: Adobe.Indesign.ObjectStyleFillEffectsCategorySettings;
			/**
			 * The percent of tint to use in the ObjectStyle's fill color. 
			 * (To specify a tint percent, use a number in the range of 0 
			 * to 100; to use the inherited or overridden value, use -1.)
			 * @type {number}
			 */
			public fillTint: number;
			/**
			 * Transparency settings for the fill applied to the 
			 * ObjectStyle.
			 * @type {Adobe.Indesign.FillTransparencySetting}
			 * @readonly
			 */
			public readonly fillTransparencySettings: Adobe.Indesign.FillTransparencySetting;
			/**
			 * The frame fitting option to apply to placed or pasted 
			 * content. Can be applied to a frame, object style, or 
			 * document or to the application.
			 * @type {Adobe.Indesign.FrameFittingOption}
			 */
			public frameFittingOptions: Adobe.Indesign.FrameFittingOption;
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
			 * The angle of a linear gradient applied to the fill of the 
			 * ObjectStyle. (Range: -180 to 180)
			 * @type {number}
			 */
			public gradientFillAngle: number;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * ObjectStyle. (Range: -180 to 180)
			 * @type {number}
			 */
			public gradientStrokeAngle: number;
			/**
			 * The unique ID of the ObjectStyle.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the ObjectStyle within its containing object.
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
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join.
			 * @type {number}
			 */
			public miterLimit: number;
			/**
			 * The name of the ObjectStyle.
			 * @type {string}
			 */
			public name: string;
			/**
			 * If true, the ObjectStyle does not print.
			 * @type {boolean}
			 */
			public nonprinting: boolean;
			/**
			 * The object effects enabling settings.
			 * @type 
			 * {Adobe.Indesign.ObjectStyleObjectEffectsCategorySettings}
			 * @readonly
			 */
			public readonly objectEffectsEnablingSettings: Adobe.Indesign.ObjectStyleObjectEffectsCategorySettings;
			/**
			 * If true, the ObjectStyle's fill color overprints any 
			 * underlying objects. If false, the fill color knocks out the 
			 * underlying colors.
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
			 * If true, the ObjectStyle's stroke color overprints any 
			 * underlying objects. If false, the stroke color knocks out 
			 * the  underlying colors.
			 * @type {boolean}
			 */
			public overprintStroke: boolean;
			/**
			 * The parent of the ObjectStyle (a Document, Application or 
			 * ObjectStyleGroup).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A collection of preferences objects.
			 * @type {Adobe.Indesign.Preferences}
			 * @readonly
			 */
			public readonly preferences: Adobe.Indesign.Preferences;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The arrowhead applied to the end of the path.
			 * @type {Adobe.Indesign.ArrowHead}
			 */
			public rightLineEnd: Adobe.Indesign.ArrowHead;
			/**
			 * Story preference settings.
			 * @type {Adobe.Indesign.StoryPreference}
			 */
			public storyPreferences: Adobe.Indesign.StoryPreference;
			/**
			 * The stroke alignment applied to the ObjectStyle.
			 * @type {Adobe.Indesign.StrokeAlignment}
			 */
			public strokeAlignment: Adobe.Indesign.StrokeAlignment;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the ObjectStyle. Can also accept: String.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public strokeColor: Adobe.Indesign.Swatch;
			/**
			 * The stroke effects enabling settings.
			 * @type 
			 * {Adobe.Indesign.ObjectStyleStrokeEffectsCategorySettings}
			 * @readonly
			 */
			public readonly strokeEffectsEnablingSettings: Adobe.Indesign.ObjectStyleStrokeEffectsCategorySettings;
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
			 * The weight (in points) to apply to the ObjectStyle's stroke.
			 * @type {any}
			 */
			public strokeWeight: any;
			/**
			 * Text frame preference settings.
			 * @type {Adobe.Indesign.TextFramePreference}
			 */
			public textFramePreferences: Adobe.Indesign.TextFramePreference;
			/**
			 * The text wrap preference properties that define the default 
			 * formatting for wrapping text around objects.
			 * @type {Adobe.Indesign.TextWrapPreference}
			 */
			public textWrapPreferences: Adobe.Indesign.TextWrapPreference;
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerObjectStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the ObjectStyle.
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public duplicate(): Adobe.Indesign.ObjectStyle;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
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
			 * Moves the ObjectStyle to the specified location.
			 * @param {LocationOptions} toParam The new location relative 
			 * to the reference object or within the container object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter is before or after. Can 
			 * accept: ObjectStyle, ObjectStyleGroup, Document or 
			 * Application. (Optional)
			 * @returns {Adobe.Indesign.ObjectStyle}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.ObjectStyle;
			/**
			 * Deletes the style.
			 * @param {ObjectStyle} replacingWithParam The style to apply 
			 * in place of the deleted style. (Optional)
			 * @returns {void}
			 */
			public remove(replacingWithParam: ObjectStyle): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerObjectStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}