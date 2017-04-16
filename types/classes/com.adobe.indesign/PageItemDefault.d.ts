/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class PageItemDefault extends Adobe.Indesign.Preference {
			/**
			 * The default graphic object style applied to the 
			 * PageItemDefault. Can also accept: String.
			 * @type {Adobe.Indesign.ObjectStyle}
			 */
			public appliedGraphicObjectStyle: Adobe.Indesign.ObjectStyle;
			/**
			 * The default frame grid object style applied to the 
			 * PageItemDefault. Can also accept: String.
			 * @type {Adobe.Indesign.ObjectStyle}
			 */
			public appliedGridObjectStyle: Adobe.Indesign.ObjectStyle;
			/**
			 * The default text object style applied to the 
			 * PageItemDefault. Can also accept: String.
			 * @type {Adobe.Indesign.ObjectStyle}
			 */
			public appliedTextObjectStyle: Adobe.Indesign.ObjectStyle;
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
			 * Transparency settings for the content of the 
			 * PageItemDefault.
			 * @type {Adobe.Indesign.ContentTransparencySetting}
			 * @readonly
			 */
			public readonly contentTransparencySettings: Adobe.Indesign.ContentTransparencySetting;
			/**
			 * The end shape of an open path.
			 * @type {Adobe.Indesign.EndCap}
			 */
			public endCap: Adobe.Indesign.EndCap;
			/**
			 * The corner join applied to the PageItemDefault.
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
			 * the fill of the PageItemDefault. . Can also accept: String.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public fillColor: Adobe.Indesign.Swatch;
			/**
			 * The percent of tint to use in the PageItemDefault's fill 
			 * color. (To specify a tint percent, use a number in the range 
			 * of 0 to 100; to use the inherited or overridden value, use 
			 * -1.)
			 * @type {number}
			 */
			public fillTint: number;
			/**
			 * Transparency settings for the fill applied to the 
			 * PageItemDefault.
			 * @type {Adobe.Indesign.FillTransparencySetting}
			 * @readonly
			 */
			public readonly fillTransparencySettings: Adobe.Indesign.FillTransparencySetting;
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
			 * PageItemDefault. (Range: -180 to 180)
			 * @type {number}
			 */
			public gradientFillAngle: number;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * PageItemDefault. (Range: -180 to 180)
			 * @type {number}
			 */
			public gradientStrokeAngle: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
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
			 * If true, the PageItemDefault does not print.
			 * @type {boolean}
			 */
			public nonprinting: boolean;
			/**
			 * If true, the PageItemDefault's fill color overprints any 
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
			 * If true, the PageItemDefault's stroke color overprints any 
			 * underlying objects. If false, the stroke color knocks out 
			 * the  underlying colors.
			 * @type {boolean}
			 */
			public overprintStroke: boolean;
			/**
			 * The parent of the PageItemDefault (a Application or 
			 * Document).
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
			 * The stroke alignment applied to the PageItemDefault.
			 * @type {Adobe.Indesign.StrokeAlignment}
			 */
			public strokeAlignment: Adobe.Indesign.StrokeAlignment;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the PageItemDefault. Can also accept: String.
			 * @type {Adobe.Indesign.Swatch}
			 */
			public strokeColor: Adobe.Indesign.Swatch;
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
			 * The weight (in points) to apply to the PageItemDefault's 
			 * stroke.
			 * @type {any}
			 */
			public strokeWeight: any;
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
			public addEventListenerPageItemDefault(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Applies the specified object style.
			 * @param {ObjectStyle} usingParam The object style to apply.
			 * @param {boolean} clearingOverridesParam If true, clears the 
			 * PageItemDefault's existing attributes before applying the 
			 * style. (Optional)
			 * @param {boolean} 
			 * clearingOverridesThroughRootObjectStyleParam If true, clears 
			 * attributes and formatting applied to the PageItemDefault 
			 * that are not defined in the object style. (Optional)
			 * @returns {void}
			 */
			public applyObjectStyle(usingParam: ObjectStyle, clearingOverridesParam: boolean, clearingOverridesThroughRootObjectStyleParam: boolean): void;
			/**
			 * Clear overrides for object style
			 * @returns {void}
			 */
			public clearObjectStyleOverrides(): void;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerPageItemDefault(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}