/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TableStyle extends Adobe.Csawlib.CSHostObject {
			/**
			 * The style that this style is based on. Can return: 
			 * TableStyle or String.
			 */
			public basedOn: any;
			/** The cell style of the body region. Can also accept: String. */
			public bodyRegionCellStyle: Adobe.Indesign.CellStyle;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the bottom border stroke.
			 */
			public bottomBorderStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the bottom border stroke. Note: Valid only 
			 * when bottom border stroke type is not solid.
			 */
			public bottomBorderStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap of the bottom border stroke will overprint. 
			 * Note: Valid only when bottom border stroke type is not 
			 * solid.
			 */
			public bottomBorderStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the bottom 
			 * border stroke. (Range: 0 to 100) Note: Valid only when 
			 * bottom border stroke type is not solid.
			 */
			public bottomBorderStrokeGapTint: number;
			/** If true, the bottom border stroke will overprint. */
			public bottomBorderStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the bottom border stroke. 
			 * (Range: 0 to 100)
			 */
			public bottomBorderStrokeTint: number;
			/**
			 * The stroke type of the bottom border. Can also accept: 
			 * String.
			 */
			public bottomBorderStrokeType: Adobe.Indesign.StrokeStyle;
			/** The stroke weight of the bottom border stroke. */
			public bottomBorderStrokeWeight: any;
			/**
			 * If true, hides alternating row fills. If false, hides 
			 * alternating column fills.
			 */
			public columnFillsPriority: boolean;
			/**
			 * The fill color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of columns in the second alternating 
			 * fill group. Note: Valid when alternating fills are defined 
			 * for table columns.
			 */
			public endColumnFillColor: Adobe.Indesign.Swatch;
			/**
			 * The number of columns in the second alternating fills group. 
			 * Note: Valid when alternating fills are defined for table 
			 * columns.
			 */
			public endColumnFillCount: number;
			/**
			 * If true, the columns in the second alternating fills group 
			 * will overprint. Note: Valid when alternating fills are 
			 * defined for table columns.
			 */
			public endColumnFillOverprint: boolean;
			/**
			 * The tint (as a percentage) of the columns in the second 
			 * alternating fills group. (Range: 0 to 100) Note: Valid when 
			 * alternating fills are defined for table columns.
			 */
			public endColumnFillTint: number;
			/**
			 * The stroke type of columns in the second alternating strokes 
			 * group. Can also accept: String.
			 */
			public endColumnLineStyle: Adobe.Indesign.StrokeStyle;
			/**
			 * The stroke color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of column borders in the second 
			 * alternating column strokes group. Note: Valid when end 
			 * column stroke count is 1 or greater.
			 */
			public endColumnStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The number of columns in the second alternating column 
			 * strokes group.
			 */
			public endColumnStrokeCount: number;
			/**
			 * The stroke gap color, specified as a swatch (color, 
			 * gradient, tint, or mixed ink), of column borders in the 
			 * second alternating column strokes group. Note: Valid when 
			 * end column stroke count is 1 or greater.
			 */
			public endColumnStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap of the column border stroke in the second 
			 * alternating column strokes group will overprint. Note: Valid 
			 * when end column stroke count is 1 or greater.
			 */
			public endColumnStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of column 
			 * borders in the second alternating column strokes group. 
			 * (Range: 0 to 100) Note: Valid when end column stroke count 
			 * is 1 or greater.
			 */
			public endColumnStrokeGapTint: number;
			/**
			 * If true, the column borders in the second alternating column 
			 * strokes group will overprint. Note: Valid when end column 
			 * stroke count is 1 or greater.
			 */
			public endColumnStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of column borders in the second 
			 * alternating column strokes group. (Range: 0 to 100) Note: 
			 * Valid when end column stroke count is 1 or greater.
			 */
			public endColumnStrokeTint: number;
			/**
			 * The stroke weight of column borders in the second 
			 * alternating column strokes group. Note: Valid when end 
			 * column stroke count is 1 or greater.
			 */
			public endColumnStrokeWeight: any;
			/**
			 * The fill color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of rows in the second alternating fills 
			 * group. Note: Valid when alternating fills are defined for 
			 * table rows.
			 */
			public endRowFillColor: Adobe.Indesign.Swatch;
			/**
			 * The number of rows in the second alternating fills group. 
			 * Note: Valid when alternating fills are defined for table 
			 * rows.
			 */
			public endRowFillCount: number;
			/**
			 * If true, the rows in the second alternating fills group will 
			 * overprint. Note: Valid when alternating fills are defined 
			 * for table rows.
			 */
			public endRowFillOverprint: boolean;
			/**
			 * The tint (as a percentage) of the rows in the second 
			 * alternating fills group. (Range: 0 to 100) Note: Valid when 
			 * alternating fills are defined for table rows.
			 */
			public endRowFillTint: number;
			/**
			 * The stroke color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of row borders in the second 
			 * alternating row strokes group. Note: Valid when end row 
			 * stroke count is 1 or greater.
			 */
			public endRowStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The number of rows in the second alternating row strokes 
			 * group.
			 */
			public endRowStrokeCount: number;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of row borders in the second alternating rows 
			 * group. Note: Valid when end row stroke count is 1 or 
			 * greater.
			 */
			public endRowStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap of the row borders in the second 
			 * alternating rows group will overprint. Note: Valid when end 
			 * row stroke count is 1 or greater.
			 */
			public endRowStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of rows in the 
			 * second alternating strokes group. (Range: 0 to 100) Note: 
			 * Valid when end row stroke count is 1 or greater and end row 
			 * stroke type is not solid.
			 */
			public endRowStrokeGapTint: number;
			/**
			 * If true, the rows in the second alternating rows group will 
			 * overprint. Note: Valid when end row stroke count is 1 or 
			 * greater.
			 */
			public endRowStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the row borders in the second 
			 * alternating strokes group. (Range: 0 to 100) Note: Valid 
			 * when end row stroke count is 1 or greater.
			 */
			public endRowStrokeTint: number;
			/**
			 * The stroke type of rows in the second alternating strokes 
			 * group. Can also accept: String.
			 */
			public endRowStrokeType: Adobe.Indesign.StrokeStyle;
			/**
			 * The stroke weight of row borders in the second alternating 
			 * row strokes group. Note: Valid when end row stroke count is 
			 * 1 or greater.
			 */
			public endRowStrokeWeight: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The cell style of the footer region. Can also accept: 
			 * String.
			 */
			public footerRegionCellStyle: Adobe.Indesign.CellStyle;
			/**
			 * If true, uses the cell style of the body region for the 
			 * footer region.
			 */
			public footerRegionSameAsBodyRegion: boolean;
			/**
			 * The cell style of the header region. Can also accept: 
			 * String.
			 */
			public headerRegionCellStyle: Adobe.Indesign.CellStyle;
			/**
			 * If true, use the cell style of the body region for the 
			 * header region.
			 */
			public headerRegionSameAsBodyRegion: boolean;
			/** The unique ID of the TableStyle. */
			public readonly id: number;
			/** The index of the TableStyle within its containing object. */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the left border stroke.
			 */
			public leftBorderStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the left border stroke. Note: Valid only 
			 * when left border stroke type is not solid.
			 */
			public leftBorderStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap of the left border stroke will overprint. 
			 * Note: Valid only when left border stroke type is not solid.
			 */
			public leftBorderStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the left 
			 * border stroke. (Range: 0 to 100) Note: Valid only when left 
			 * border stroke type is not solid.
			 */
			public leftBorderStrokeGapTint: number;
			/** If true, the left border stroke will overprint. */
			public leftBorderStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the left border stroke. 
			 * (Range: 0 to 100)
			 */
			public leftBorderStrokeTint: number;
			/**
			 * The stroke type of the left border. Can also accept: String.
			 */
			public leftBorderStrokeType: Adobe.Indesign.StrokeStyle;
			/** The stroke weight of the left border stroke. */
			public leftBorderStrokeWeight: any;
			/**
			 * The cell style of the left column region. Can also accept: 
			 * String.
			 */
			public leftColumnRegionCellStyle: Adobe.Indesign.CellStyle;
			/**
			 * If true, uses the cell style of the body region for the left 
			 * column region.
			 */
			public leftColumnRegionSameAsBodyRegion: boolean;
			/** The name of the TableStyle. */
			public name: string;
			/**
			 * The parent of the TableStyle (a Document, Application or 
			 * TableStyleGroup).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the right border stroke.
			 */
			public rightBorderStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the right border stroke. Note: Valid only 
			 * when right border stroke type is not solid.
			 */
			public rightBorderStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap color of the right border stroke will 
			 * overprint. Note: Valid only when right border stroke type is 
			 * not solid.
			 */
			public rightBorderStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the right 
			 * border stroke. (Range: 0 to 100) Note: Valid only when right 
			 * border stroke type is not solid.
			 */
			public rightBorderStrokeGapTint: number;
			/** If true, the right border stroke will overprint. */
			public rightBorderStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the right border stroke. 
			 * (Range: 0 to 100)
			 */
			public rightBorderStrokeTint: number;
			/**
			 * The stroke type of the right border. Can also accept: 
			 * String.
			 */
			public rightBorderStrokeType: Adobe.Indesign.StrokeStyle;
			/** The stroke weight of the right border stroke. */
			public rightBorderStrokeWeight: any;
			/**
			 * The cell style of the right column region. Can also accept: 
			 * String.
			 */
			public rightColumnRegionCellStyle: Adobe.Indesign.CellStyle;
			/**
			 * If true, uses the cell style of the body region for the 
			 * right column region.
			 */
			public rightColumnRegionSameAsBodyRegion: boolean;
			/**
			 * The number of columns on the left side of the table to skip 
			 * before applying the column fill color. Note: Valid when 
			 * alternating fills are defined for table columns.
			 */
			public skipFirstAlternatingFillColumns: number;
			/**
			 * The number of body rows at the beginning of the table to 
			 * skip before applying the row fill color. Note: Valid when 
			 * alternating fills are defined for table rows.
			 */
			public skipFirstAlternatingFillRows: number;
			/**
			 * The number of columns on the left of the table in which to 
			 * skip border stroke formatting. Note: Valid when start column 
			 * stroke count is 1 or greater and/or end column stroke count 
			 * is 1 or greater.
			 */
			public skipFirstAlternatingStrokeColumns: number;
			/**
			 * The number of body rows at the beginning of the table in 
			 * which to skip border stroke formatting. Note: Valid when 
			 * start row stroke count is 1 or greater and/or end row stroke 
			 * count is 1 or greater.
			 */
			public skipFirstAlternatingStrokeRows: number;
			/**
			 * The number columns on the right side of the table in which 
			 * to not apply the column fill color. Note: Valid when 
			 * alternating fills are defined for table columns.
			 */
			public skipLastAlternatingFillColumns: number;
			/**
			 * The number of body rows at the end of the table in which to 
			 * not apply the row fill color. Note: Valid when alternating 
			 * fills are defined for table rows.
			 */
			public skipLastAlternatingFillRows: number;
			/**
			 * The number of columns on the right side of the table in 
			 * which to skip border stroke formatting. Note: Valid when 
			 * start column stroke count is 1 or greater and/or end column 
			 * stroke count is 1 or greater.
			 */
			public skipLastAlternatingStrokeColumns: number;
			/**
			 * The number of body rows at the end of the table in which to 
			 * skip border stroke formatting. Note: Valid when start row 
			 * stroke count is 1 or greater and/or end row stroke count is 
			 * 1 or greater.
			 */
			public skipLastAlternatingStrokeRows: number;
			/** The space below the table. */
			public spaceAfter: any;
			/** The space above the table. */
			public spaceBefore: any;
			/**
			 * The fill color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of columns in the first alternating 
			 * fills group. Note: Valid when alternating fills are defined 
			 * for table columns.
			 */
			public startColumnFillColor: Adobe.Indesign.Swatch;
			/**
			 * The number of columns in the first alternating fills group. 
			 * Note: Valid when alternating fills are defined for table 
			 * columns.
			 */
			public startColumnFillCount: number;
			/**
			 * If true, the columns in the first alternating fills group 
			 * will overprint. Note: Valid when alternating fills are 
			 * defined for table columns.
			 */
			public startColumnFillOverprint: boolean;
			/**
			 * The tint (as a percentage) of the columns in the first 
			 * alternating fills group. (Range: 0 to 100) Note: Valid when 
			 * alternating fills are defined for table columns.
			 */
			public startColumnFillTint: number;
			/**
			 * The stroke color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of column borders in the first 
			 * alternating column strokes group.
			 */
			public startColumnStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The number of columns in the first alternating column 
			 * strokes group.
			 */
			public startColumnStrokeCount: number;
			/**
			 * The stroke gap color, specified as a swatch (color, 
			 * gradient, tint, or mixed ink), of column borders in the 
			 * first alternating column strokes group. Note: Valid when 
			 * start column stroke count is 1 or greater.
			 */
			public startColumnStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap of the column borders in the first 
			 * alternating column strokes group will overprint. Note: Valid 
			 * when start column stroke count is 1 or greater.
			 */
			public startColumnStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of column 
			 * borders in the first alternating column strokes group. 
			 * (Range: 0 to 100) Note: Valid when start column stroke count 
			 * is 1 or greater.
			 */
			public startColumnStrokeGapTint: number;
			/**
			 * If true, the column borders in the first alternating column 
			 * strokes group will overprint. Note: Valid when start column 
			 * stroke count is 1 or greater.
			 */
			public startColumnStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of column borders in the first 
			 * alternating column strokes group. (Range: 0 to 100) Note: 
			 * Valid when start column stroke count is 1 or greater.
			 */
			public startColumnStrokeTint: number;
			/**
			 * The stroke type of columns in the first alternating strokes 
			 * group. Can also accept: String.
			 */
			public startColumnStrokeType: Adobe.Indesign.StrokeStyle;
			/**
			 * The stroke weight of column borders in the first alternating 
			 * column strokes group. Note: Valid when start column stroke 
			 * count is 1 or greater.
			 */
			public startColumnStrokeWeight: any;
			/**
			 * The fill color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of rows in the first alternating fills 
			 * group. Note: Valid when alternating fills are defined for 
			 * table rows.
			 */
			public startRowFillColor: Adobe.Indesign.Swatch;
			/**
			 * The number of rows in the first alternating fills group. 
			 * Note: Valid when alternating fills are defined for table 
			 * rows.
			 */
			public startRowFillCount: number;
			/**
			 * If true, the rows in the first alternating fills group will 
			 * overprint. Note: Valid when alternating fills are defined 
			 * for table rows.
			 */
			public startRowFillOverprint: boolean;
			/**
			 * The tint (as a percentage) of the rows in the first 
			 * alternating fills group. (Range: 0 to 100) Note: Valid when 
			 * alternating fills are defined for table rows.
			 */
			public startRowFillTint: number;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of row borders in the first alternating row 
			 * strokes group. Note: Valid when start row stroke count is 1 
			 * or greater.
			 */
			public startRowStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The number of rows in the first alternating row strokes 
			 * group.
			 */
			public startRowStrokeCount: number;
			/**
			 * The stroke gap color of row borders in the first alternating 
			 * row strokes group, specified as a swatch (color, gradient, 
			 * tint, or mixed ink). Note: Valid when start row stroke count 
			 * is 1 or greater.
			 */
			public startRowStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap color of the row border stroke in the first 
			 * alternating row strokes group will overprint. Note: Valid 
			 * when start row stroke count is 1 or greater.
			 */
			public startRowStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of row borders 
			 * in the first alternating rows group. (Range: 0 to 100) Note: 
			 * Valid when start row stroke count is 1 or greater.
			 */
			public startRowStrokeGapTint: number;
			/**
			 * If true, the row borders in the first alternating row 
			 * strokes group will overprint. Note: Valid when start row 
			 * stroke count is 1 or greater.
			 */
			public startRowStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the borders in the first 
			 * alternating row strokes group. (Range: 0 to 100) Note: Valid 
			 * when start row stroke count is 1 or greater.
			 */
			public startRowStrokeTint: number;
			/**
			 * The stroke type of rows in the first alternating strokes 
			 * group. Can also accept: String.
			 */
			public startRowStrokeType: Adobe.Indesign.StrokeStyle;
			/**
			 * The stroke weight of row borders in the first alternating 
			 * row strokes group. Note: Valid when start row stroke count 
			 * is 1 or greater.
			 */
			public startRowStrokeWeight: any;
			/**
			 * The order in which to display row and column strokes at 
			 * corners.
			 */
			public strokeOrder: Adobe.Indesign.StrokeOrderTypes;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the table's top border stroke.
			 */
			public topBorderStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the table's top border stroke. Note: Valid 
			 * only when top border stroke type is not solid.
			 */
			public topBorderStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap of the top border stroke will overprint. 
			 * Note: Valid only when top border stroke type is not solid.
			 */
			public topBorderStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the table's 
			 * top border stroke. (Range: 0 to 100) Note: Valid only when 
			 * top border stroke type is not solid.
			 */
			public topBorderStrokeGapTint: number;
			/** If true, the top border strokes will overprint. */
			public topBorderStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the table's top border stroke. 
			 * (Range: 0 to 100)
			 */
			public topBorderStrokeTint: number;
			/** The stroke type of the top border. Can also accept: String. */
			public topBorderStrokeType: Adobe.Indesign.StrokeStyle;
			/** The stroke weight of the table's top border stroke. */
			public topBorderStrokeWeight: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTableStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the TableStyle. */
			public duplicate(): Adobe.Indesign.TableStyle;
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
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.TableStyle;
			/**
			 * Deletes the style.
			 * @param {TableStyle} replacingWithParam - The style to apply 
			 * in place of the deleted style. (Optional)
			 */
			public remove(replacingWithParam: TableStyle): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTableStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}