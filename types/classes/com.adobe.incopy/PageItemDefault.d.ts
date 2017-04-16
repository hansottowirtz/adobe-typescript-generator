/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class PageItemDefault extends Adobe.Incopy.Preference {
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
			 * The end shape of an open path.
			 * @type {Adobe.Incopy.EndCap}
			 * @readonly
			 */
			public readonly endCap: Adobe.Incopy.EndCap;
			/**
			 * The corner join applied to the PageItemDefault.
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
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the PageItemDefault. . Can also accept: String.
			 * @type {Adobe.Incopy.Swatch}
			 * @readonly
			 */
			public readonly fillColor: Adobe.Incopy.Swatch;
			/**
			 * The percent of tint to use in the PageItemDefault's fill 
			 * color. (To specify a tint percent, use a number in the range 
			 * of 0 to 100; to use the inherited or overridden value, use 
			 * -1.)
			 * @type {number}
			 * @readonly
			 */
			public readonly fillTint: number;
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
			 * The angle of a linear gradient applied to the fill of the 
			 * PageItemDefault. (Range: -180 to 180)
			 * @type {number}
			 * @readonly
			 */
			public readonly gradientFillAngle: number;
			/**
			 * The angle of a linear gradient applied to the stroke of the 
			 * PageItemDefault. (Range: -180 to 180)
			 * @type {number}
			 * @readonly
			 */
			public readonly gradientStrokeAngle: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The arrowhead applied to the start of the path.
			 * @type {Adobe.Incopy.ArrowHead}
			 * @readonly
			 */
			public readonly leftLineEnd: Adobe.Incopy.ArrowHead;
			/**
			 * The limit of the ratio of stroke width to miter length 
			 * before a miter (pointed) join becomes a bevel (squared-off) 
			 * join.
			 * @type {number}
			 * @readonly
			 */
			public readonly miterLimit: number;
			/**
			 * If true, the PageItemDefault does not print.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly nonprinting: boolean;
			/**
			 * If true, the PageItemDefault's fill color overprints any 
			 * underlying objects. If false, the fill color knocks out the 
			 * underlying colors.
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
			 * If true, the PageItemDefault's stroke color overprints any 
			 * underlying objects. If false, the stroke color knocks out 
			 * the  underlying colors.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly overprintStroke: boolean;
			/**
			 * The parent of the PageItemDefault (a Application or 
			 * Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
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
			 * The stroke alignment applied to the PageItemDefault.
			 * @type {Adobe.Incopy.StrokeAlignment}
			 * @readonly
			 */
			public readonly strokeAlignment: Adobe.Incopy.StrokeAlignment;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the stroke of the PageItemDefault. Can also accept: String.
			 * @type {Adobe.Incopy.Swatch}
			 * @readonly
			 */
			public readonly strokeColor: Adobe.Incopy.Swatch;
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
			 * The weight (in points) to apply to the PageItemDefault's 
			 * stroke.
			 * @type {any}
			 * @readonly
			 */
			public readonly strokeWeight: any;
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
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerPageItemDefault(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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