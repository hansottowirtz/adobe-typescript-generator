/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CellStyle extends Adobe.Csawlib.CSHostObject {
			/**
			 * The paragraph style applied to the text. Can return: 
			 * ParagraphStyle or NothingEnum enumerator. Can also accept: 
			 * String.
			 * @type {any}
			 */
			public appliedParagraphStyle: any;
			/**
			 * The style that this style is based on. Can return: CellStyle 
			 * or String.
			 * @type {any}
			 */
			public basedOn: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the bottom edge border stroke. Can return: Swatch or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public bottomEdgeStrokeColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the bottom edge border stroke. Note: Not valid 
			 * when bottom edge stroke type is solid. Can return: Swatch or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public bottomEdgeStrokeGapColor: any;
			/**
			 * If true, the gap color of the bottom edge border stroke will 
			 * overprint. Note: Not valid when bottom edge stroke type is 
			 * solid. Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public bottomEdgeStrokeGapOverprint: any;
			/**
			 * The tint (as a percentage) of the bottom edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when bottom 
			 * edge stroke type is solid. Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public bottomEdgeStrokeGapTint: any;
			/**
			 * If true, the bottom edge border stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public bottomEdgeStrokeOverprint: any;
			/**
			 * The tint (as a percentage) of the bottom edge border stroke. 
			 * Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public bottomEdgeStrokeTint: any;
			/**
			 * The stroke type of the bottom edge. Can return: StrokeStyle 
			 * or NothingEnum enumerator. Can also accept: String.
			 * @type {any}
			 */
			public bottomEdgeStrokeType: any;
			/**
			 * The stroke weight of the bottom edge border stroke. Can 
			 * return: Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public bottomEdgeStrokeWeight: any;
			/**
			 * The bottom inset of the cell. Can return: Unit or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public bottomInset: any;
			/**
			 * If true, clips the cell's content to width and height of the 
			 * cell. Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public clipContentToCell: any;
			/**
			 * If true, draws the diagonal line in front of cell contents. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public diagonalLineInFront: any;
			/**
			 * The diagonal line color, specified as a swatch. Can return: 
			 * Swatch or NothingEnum enumerator.
			 * @type {any}
			 */
			public diagonalLineStrokeColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the diagonal line stroke. Note: Not valid when 
			 * diagonal line stroke type is solid. Can return: Swatch or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public diagonalLineStrokeGapColor: any;
			/**
			 * If true, the stroke gap of the diagonal line will overprint. 
			 * Note: Not valid when diagonal line stroke type is solid. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public diagonalLineStrokeGapOverprint: any;
			/**
			 * The tint (as a percentage) of the diagonal line stroke gap 
			 * color. Note: Not valid when diagonal line stroke type is 
			 * solid. Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public diagonalLineStrokeGapTint: any;
			/**
			 * If true, the diagonal line stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public diagonalLineStrokeOverprint: any;
			/**
			 * The diagonal line tint (as a percentage). (Range: 0 to 100). 
			 * Can return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public diagonalLineStrokeTint: any;
			/**
			 * The stroke type of the diagonal line(s). Can return: 
			 * StrokeStyle or NothingEnum enumerator. Can also accept: 
			 * String.
			 * @type {any}
			 */
			public diagonalLineStrokeType: any;
			/**
			 * The diagonal line stroke weight. Can return: Unit or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public diagonalLineStrokeWeight: any;
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
			 * the fill of the object. Can return: Swatch or NothingEnum 
			 * enumerator. Can also accept: String.
			 * @type {any}
			 */
			public fillColor: any;
			/**
			 * The tint (as a percentage) of the fill of the object. Can 
			 * return: Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public fillTint: any;
			/**
			 * The distance between the baseline of the text and the top 
			 * inset of the cell. Can return: FirstBaseline enumerator or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public firstBaselineOffset: any;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * object. (Range: -180 to 180). Can return: Real or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public gradientFillAngle: any;
			/**
			 * The length (of a linear gradient) or radius (of a radial 
			 * gradient) applied to the fill of the object. Can return: 
			 * Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public gradientFillLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the CellStyle, in the format [x, y]. 
			 * Can return: Array of 2 Units or NothingEnum enumerator.
			 * @type {any}
			 */
			public gradientFillStart: any;
			/**
			 * The unique ID of the CellStyle.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the CellStyle within its containing object.
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
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the left edge border stroke. Can return: Swatch or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public leftEdgeStrokeColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the left edge border stroke. Note: Not valid when 
			 * left edge stroke type is solid. Can return: Swatch or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public leftEdgeStrokeGapColor: any;
			/**
			 * If true, the gap color of the left edge border stroke will 
			 * overprint. Note: Not valid when left edge stroke type is 
			 * solid. Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public leftEdgeStrokeGapOverprint: any;
			/**
			 * The tint (as a percentage) of the left edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when left edge 
			 * stroke type is solid. Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public leftEdgeStrokeGapTint: any;
			/**
			 * If true, the left edge border stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public leftEdgeStrokeOverprint: any;
			/**
			 * The tint (as a percentage) of the left edge border stroke. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public leftEdgeStrokeTint: any;
			/**
			 * The stroke type of the left edge. Can return: StrokeStyle or 
			 * NothingEnum enumerator. Can also accept: String.
			 * @type {any}
			 */
			public leftEdgeStrokeType: any;
			/**
			 * The stroke weight of the left edge border stroke. Can 
			 * return: Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public leftEdgeStrokeWeight: any;
			/**
			 * The left inset of the cell. Can return: Unit or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public leftInset: any;
			/**
			 * The space between the baseline of the text and the top inset 
			 * of the frame or cell. Can return: Unit (0 - 8640 points) or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public minimumFirstBaselineOffset: any;
			/**
			 * The name of the style.
			 * @type {string}
			 */
			public name: string;
			/**
			 * If true, the fill of the object will overprint. Can return: 
			 * Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public overprintFill: any;
			/**
			 * The maximum space that can be added between paragraphs in a 
			 * cell. Note: Valid only when vertical justification is 
			 * justified. Can return: Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public paragraphSpacingLimit: any;
			/**
			 * The parent of the CellStyle (a Document, Application or 
			 * CellStyleGroup).
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
			 * The color, specified as a swatch, of the right edge border 
			 * stroke. Can return: Swatch or NothingEnum enumerator.
			 * @type {any}
			 */
			public rightEdgeStrokeColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the right edge border stroke. Note: Not valid 
			 * when right edge stroke type is solid. Can return: Swatch or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public rightEdgeStrokeGapColor: any;
			/**
			 * If true, the gap color of the right edge border stroke will 
			 * overprint. Note: Not valid when right edge stroke type is 
			 * solid. Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public rightEdgeStrokeGapOverprint: any;
			/**
			 * The tint (as a percentage) of the right edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when right edge 
			 * stroke type is solid. Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public rightEdgeStrokeGapTint: any;
			/**
			 * If true, the right edge border stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public rightEdgeStrokeOverprint: any;
			/**
			 * The tint (as a percentage) of the right edge border stroke. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public rightEdgeStrokeTint: any;
			/**
			 * The stroke type of the right edge. Can return: StrokeStyle 
			 * or NothingEnum enumerator. Can also accept: String.
			 * @type {any}
			 */
			public rightEdgeStrokeType: any;
			/**
			 * The stroke weight of the right edge border stroke. Can 
			 * return: Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public rightEdgeStrokeWeight: any;
			/**
			 * The right inset of the cell. Can return: Unit or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public rightInset: any;
			/**
			 * The rotation angle (in degrees) of the cell, specified as 
			 * one of the following values: 0, 90, 180, or 270. Can return: 
			 * Real or NothingEnum enumerator.
			 * @type {any}
			 */
			public rotationAngle: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the top edge border stroke. Can return: Swatch or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public topEdgeStrokeColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the top edge border stroke. Note: Not valid when 
			 * top edge stroke type is solid. Can return: Swatch or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public topEdgeStrokeGapColor: any;
			/**
			 * If true, the gap color of the top edge border stroke will 
			 * overprint. Note: Not valid when top edge stroke type is 
			 * solid. . Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public topEdgeStrokeGapOverprint: any;
			/**
			 * The tint (as a percentage) of the top edge border stroke gap 
			 * color. (Range: 0 to 100) Note: Not valid when top edge 
			 * stroke type is solid. Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public topEdgeStrokeGapTint: any;
			/**
			 * If true, the top edge border stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public topEdgeStrokeOverprint: any;
			/**
			 * The tint (as a percentage) of the top edge border stroke. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public topEdgeStrokeTint: any;
			/**
			 * The stroke type of the top edge. Can return: StrokeStyle or 
			 * NothingEnum enumerator. Can also accept: String.
			 * @type {any}
			 */
			public topEdgeStrokeType: any;
			/**
			 * The stroke weight of the top edge border stroke. Can return: 
			 * Unit or NothingEnum enumerator.
			 * @type {any}
			 */
			public topEdgeStrokeWeight: any;
			/**
			 * The top inset of the cell. Can return: Unit or NothingEnum 
			 * enumerator.
			 * @type {any}
			 */
			public topInset: any;
			/**
			 * If true, draws a diagonal line starting from the top left. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public topLeftDiagonalLine: any;
			/**
			 * If true, draws a diagonal line starting from the top right. 
			 * Can return: Boolean or NothingEnum enumerator.
			 * @type {any}
			 */
			public topRightDiagonalLine: any;
			/**
			 * The vertical alignment of cell. Can return: 
			 * VerticalJustification enumerator or NothingEnum enumerator.
			 * @type {any}
			 */
			public verticalJustification: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerCellStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Duplicates the CellStyle.
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public duplicate(): Adobe.Incopy.CellStyle;
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
			 * Moves the style to the specified location.
			 * @param {LocationOptions} toParam The location relative to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. 
			 * Can accept: ParagraphStyle, ParagraphStyleGroup, 
			 * CharacterStyle, CharacterStyleGroup, CellStyle, 
			 * CellStyleGroup, TableStyle, TableStyleGroup, Document or 
			 * Application. (Optional)
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Incopy.CellStyle;
			/**
			 * Deletes the style.
			 * @param {CellStyle} replacingWithParam The style to apply in 
			 * place of the deleted style. (Optional)
			 * @returns {void}
			 */
			public remove(replacingWithParam: CellStyle): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerCellStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}