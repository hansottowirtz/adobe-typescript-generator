/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CellStyle extends Adobe.Csawlib.CSHostObject {
			/**
			 * The paragraph style applied to the text. Can return: 
			 * ParagraphStyle or NothingEnum enumerator. Can also accept: 
			 * String.
			 */
			public appliedParagraphStyle: any;
			/**
			 * The style that this style is based on. Can return: CellStyle 
			 * or String.
			 */
			public basedOn: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the bottom edge border stroke. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public bottomEdgeStrokeColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the bottom edge border stroke. Note: Not valid 
			 * when bottom edge stroke type is solid. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public bottomEdgeStrokeGapColor: any;
			/**
			 * If true, the gap color of the bottom edge border stroke will 
			 * overprint. Note: Not valid when bottom edge stroke type is 
			 * solid. Can return: Boolean or NothingEnum enumerator.
			 */
			public bottomEdgeStrokeGapOverprint: any;
			/**
			 * The tint (as a percentage) of the bottom edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when bottom 
			 * edge stroke type is solid. Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public bottomEdgeStrokeGapTint: any;
			/**
			 * If true, the bottom edge border stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public bottomEdgeStrokeOverprint: any;
			/**
			 * The tint (as a percentage) of the bottom edge border stroke. 
			 * Can return: Real or NothingEnum enumerator.
			 */
			public bottomEdgeStrokeTint: any;
			/**
			 * The stroke type of the bottom edge. Can return: StrokeStyle 
			 * or NothingEnum enumerator. Can also accept: String.
			 */
			public bottomEdgeStrokeType: any;
			/**
			 * The stroke weight of the bottom edge border stroke. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public bottomEdgeStrokeWeight: any;
			/**
			 * The bottom inset of the cell. Can return: Unit or 
			 * NothingEnum enumerator.
			 */
			public bottomInset: any;
			/**
			 * If true, clips the cell's content to width and height of the 
			 * cell. Can return: Boolean or NothingEnum enumerator.
			 */
			public clipContentToCell: any;
			/**
			 * If true, draws the diagonal line in front of cell contents. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public diagonalLineInFront: any;
			/**
			 * The diagonal line color, specified as a swatch. Can return: 
			 * Swatch or NothingEnum enumerator.
			 */
			public diagonalLineStrokeColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the diagonal line stroke. Note: Not valid when 
			 * diagonal line stroke type is solid. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public diagonalLineStrokeGapColor: any;
			/**
			 * If true, the stroke gap of the diagonal line will overprint. 
			 * Note: Not valid when diagonal line stroke type is solid. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public diagonalLineStrokeGapOverprint: any;
			/**
			 * The tint (as a percentage) of the diagonal line stroke gap 
			 * color. Note: Not valid when diagonal line stroke type is 
			 * solid. Can return: Real or NothingEnum enumerator.
			 */
			public diagonalLineStrokeGapTint: any;
			/**
			 * If true, the diagonal line stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public diagonalLineStrokeOverprint: any;
			/**
			 * The diagonal line tint (as a percentage). (Range: 0 to 100). 
			 * Can return: Real or NothingEnum enumerator.
			 */
			public diagonalLineStrokeTint: any;
			/**
			 * The stroke type of the diagonal line(s). Can return: 
			 * StrokeStyle or NothingEnum enumerator. Can also accept: 
			 * String.
			 */
			public diagonalLineStrokeType: any;
			/**
			 * The diagonal line stroke weight. Can return: Unit or 
			 * NothingEnum enumerator.
			 */
			public diagonalLineStrokeWeight: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the object. Can return: Swatch or NothingEnum 
			 * enumerator. Can also accept: String.
			 */
			public fillColor: any;
			/**
			 * The tint (as a percentage) of the fill of the object. Can 
			 * return: Real or NothingEnum enumerator.
			 */
			public fillTint: any;
			/**
			 * The distance between the baseline of the text and the top 
			 * inset of the cell. Can return: FirstBaseline enumerator or 
			 * NothingEnum enumerator.
			 */
			public firstBaselineOffset: any;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * object. (Range: -180 to 180). Can return: Real or 
			 * NothingEnum enumerator.
			 */
			public gradientFillAngle: any;
			/**
			 * The length (of a linear gradient) or radius (of a radial 
			 * gradient) applied to the fill of the object. Can return: 
			 * Real or NothingEnum enumerator.
			 */
			public gradientFillLength: any;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the CellStyle, in the format [x, y]. 
			 * Can return: Array of 2 Units or NothingEnum enumerator.
			 */
			public gradientFillStart: any;
			/** The unique ID of the CellStyle. */
			public readonly id: number;
			/** The index of the CellStyle within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the left edge border stroke. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public leftEdgeStrokeColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the left edge border stroke. Note: Not valid when 
			 * left edge stroke type is solid. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public leftEdgeStrokeGapColor: any;
			/**
			 * If true, the gap color of the left edge border stroke will 
			 * overprint. Note: Not valid when left edge stroke type is 
			 * solid. Can return: Boolean or NothingEnum enumerator.
			 */
			public leftEdgeStrokeGapOverprint: any;
			/**
			 * The tint (as a percentage) of the left edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when left edge 
			 * stroke type is solid. Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public leftEdgeStrokeGapTint: any;
			/**
			 * If true, the left edge border stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public leftEdgeStrokeOverprint: any;
			/**
			 * The tint (as a percentage) of the left edge border stroke. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public leftEdgeStrokeTint: any;
			/**
			 * The stroke type of the left edge. Can return: StrokeStyle or 
			 * NothingEnum enumerator. Can also accept: String.
			 */
			public leftEdgeStrokeType: any;
			/**
			 * The stroke weight of the left edge border stroke. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public leftEdgeStrokeWeight: any;
			/**
			 * The left inset of the cell. Can return: Unit or NothingEnum 
			 * enumerator.
			 */
			public leftInset: any;
			/**
			 * The space between the baseline of the text and the top inset 
			 * of the frame or cell. Can return: Unit (0 - 8640 points) or 
			 * NothingEnum enumerator.
			 */
			public minimumFirstBaselineOffset: any;
			/** The name of the style. */
			public name: string;
			/**
			 * If true, the fill of the object will overprint. Can return: 
			 * Boolean or NothingEnum enumerator.
			 */
			public overprintFill: any;
			/**
			 * The maximum space that can be added between paragraphs in a 
			 * cell. Note: Valid only when vertical justification is 
			 * justified. Can return: Unit or NothingEnum enumerator.
			 */
			public paragraphSpacingLimit: any;
			/**
			 * The parent of the CellStyle (a Document, Application or 
			 * CellStyleGroup).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The color, specified as a swatch, of the right edge border 
			 * stroke. Can return: Swatch or NothingEnum enumerator.
			 */
			public rightEdgeStrokeColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the right edge border stroke. Note: Not valid 
			 * when right edge stroke type is solid. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public rightEdgeStrokeGapColor: any;
			/**
			 * If true, the gap color of the right edge border stroke will 
			 * overprint. Note: Not valid when right edge stroke type is 
			 * solid. Can return: Boolean or NothingEnum enumerator.
			 */
			public rightEdgeStrokeGapOverprint: any;
			/**
			 * The tint (as a percentage) of the right edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when right edge 
			 * stroke type is solid. Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public rightEdgeStrokeGapTint: any;
			/**
			 * If true, the right edge border stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public rightEdgeStrokeOverprint: any;
			/**
			 * The tint (as a percentage) of the right edge border stroke. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public rightEdgeStrokeTint: any;
			/**
			 * The stroke type of the right edge. Can return: StrokeStyle 
			 * or NothingEnum enumerator. Can also accept: String.
			 */
			public rightEdgeStrokeType: any;
			/**
			 * The stroke weight of the right edge border stroke. Can 
			 * return: Unit or NothingEnum enumerator.
			 */
			public rightEdgeStrokeWeight: any;
			/**
			 * The right inset of the cell. Can return: Unit or NothingEnum 
			 * enumerator.
			 */
			public rightInset: any;
			/**
			 * The rotation angle (in degrees) of the cell, specified as 
			 * one of the following values: 0, 90, 180, or 270. Can return: 
			 * Real or NothingEnum enumerator.
			 */
			public rotationAngle: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the top edge border stroke. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public topEdgeStrokeColor: any;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the top edge border stroke. Note: Not valid when 
			 * top edge stroke type is solid. Can return: Swatch or 
			 * NothingEnum enumerator.
			 */
			public topEdgeStrokeGapColor: any;
			/**
			 * If true, the gap color of the top edge border stroke will 
			 * overprint. Note: Not valid when top edge stroke type is 
			 * solid. . Can return: Boolean or NothingEnum enumerator.
			 */
			public topEdgeStrokeGapOverprint: any;
			/**
			 * The tint (as a percentage) of the top edge border stroke gap 
			 * color. (Range: 0 to 100) Note: Not valid when top edge 
			 * stroke type is solid. Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public topEdgeStrokeGapTint: any;
			/**
			 * If true, the top edge border stroke will overprint. Can 
			 * return: Boolean or NothingEnum enumerator.
			 */
			public topEdgeStrokeOverprint: any;
			/**
			 * The tint (as a percentage) of the top edge border stroke. 
			 * (Range: 0 to 100). Can return: Real or NothingEnum 
			 * enumerator.
			 */
			public topEdgeStrokeTint: any;
			/**
			 * The stroke type of the top edge. Can return: StrokeStyle or 
			 * NothingEnum enumerator. Can also accept: String.
			 */
			public topEdgeStrokeType: any;
			/**
			 * The stroke weight of the top edge border stroke. Can return: 
			 * Unit or NothingEnum enumerator.
			 */
			public topEdgeStrokeWeight: any;
			/**
			 * The top inset of the cell. Can return: Unit or NothingEnum 
			 * enumerator.
			 */
			public topInset: any;
			/**
			 * If true, draws a diagonal line starting from the top left. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public topLeftDiagonalLine: any;
			/**
			 * If true, draws a diagonal line starting from the top right. 
			 * Can return: Boolean or NothingEnum enumerator.
			 */
			public topRightDiagonalLine: any;
			/**
			 * The vertical alignment of cell. Can return: 
			 * VerticalJustification enumerator or NothingEnum enumerator.
			 */
			public verticalJustification: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerCellStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the CellStyle. */
			public duplicate(): Adobe.Indesign.CellStyle;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Moves the style to the specified location.
			 * @param {LocationOptions} toParam - The location relative to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required when the to parameter specifies before or after. 
			 * Can accept: ParagraphStyle, ParagraphStyleGroup, 
			 * CharacterStyle, CharacterStyleGroup, CellStyle, 
			 * CellStyleGroup, TableStyle, TableStyleGroup, Document or 
			 * Application. (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.CellStyle;
			/**
			 * Deletes the style.
			 * @param {CellStyle} replacingWithParam - The style to apply 
			 * in place of the deleted style. (Optional)
			 */
			public remove(replacingWithParam: CellStyle): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerCellStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}