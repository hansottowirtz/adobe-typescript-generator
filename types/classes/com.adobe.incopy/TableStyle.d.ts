/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TableStyle extends Adobe.Csawlib.CSHostObject {
			/**
			 * The style that this style is based on. Can return: 
			 * TableStyle or String.
			 * @type {any}
			 */
			public basedOn: any;
			/**
			 * The cell style of the body region. Can also accept: String.
			 * @type {Adobe.Incopy.CellStyle}
			 */
			public bodyRegionCellStyle: Adobe.Incopy.CellStyle;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the bottom border stroke.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public bottomBorderStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the bottom border stroke. Note: Valid only 
			 * when bottom border stroke type is not solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public bottomBorderStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap of the bottom border stroke will overprint. 
			 * Note: Valid only when bottom border stroke type is not 
			 * solid.
			 * @type {boolean}
			 */
			public bottomBorderStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the bottom 
			 * border stroke. (Range: 0 to 100) Note: Valid only when 
			 * bottom border stroke type is not solid.
			 * @type {number}
			 */
			public bottomBorderStrokeGapTint: number;
			/**
			 * If true, the bottom border stroke will overprint.
			 * @type {boolean}
			 */
			public bottomBorderStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the bottom border stroke. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public bottomBorderStrokeTint: number;
			/**
			 * The stroke type of the bottom border. Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public bottomBorderStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of the bottom border stroke.
			 * @type {any}
			 */
			public bottomBorderStrokeWeight: any;
			/**
			 * If true, hides alternating row fills. If false, hides 
			 * alternating column fills.
			 * @type {boolean}
			 */
			public columnFillsPriority: boolean;
			/**
			 * The fill color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of columns in the second alternating 
			 * fill group. Note: Valid when alternating fills are defined 
			 * for table columns.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public endColumnFillColor: Adobe.Incopy.Swatch;
			/**
			 * The number of columns in the second alternating fills group. 
			 * Note: Valid when alternating fills are defined for table 
			 * columns.
			 * @type {number}
			 */
			public endColumnFillCount: number;
			/**
			 * If true, the columns in the second alternating fills group 
			 * will overprint. Note: Valid when alternating fills are 
			 * defined for table columns.
			 * @type {boolean}
			 */
			public endColumnFillOverprint: boolean;
			/**
			 * The tint (as a percentage) of the columns in the second 
			 * alternating fills group. (Range: 0 to 100) Note: Valid when 
			 * alternating fills are defined for table columns.
			 * @type {number}
			 */
			public endColumnFillTint: number;
			/**
			 * The stroke type of columns in the second alternating strokes 
			 * group. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public endColumnLineStyle: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of column borders in the second 
			 * alternating column strokes group. Note: Valid when end 
			 * column stroke count is 1 or greater.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public endColumnStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The number of columns in the second alternating column 
			 * strokes group.
			 * @type {number}
			 */
			public endColumnStrokeCount: number;
			/**
			 * The stroke gap color, specified as a swatch (color, 
			 * gradient, tint, or mixed ink), of column borders in the 
			 * second alternating column strokes group. Note: Valid when 
			 * end column stroke count is 1 or greater.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public endColumnStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap of the column border stroke in the second 
			 * alternating column strokes group will overprint. Note: Valid 
			 * when end column stroke count is 1 or greater.
			 * @type {boolean}
			 */
			public endColumnStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of column 
			 * borders in the second alternating column strokes group. 
			 * (Range: 0 to 100) Note: Valid when end column stroke count 
			 * is 1 or greater.
			 * @type {number}
			 */
			public endColumnStrokeGapTint: number;
			/**
			 * If true, the column borders in the second alternating column 
			 * strokes group will overprint. Note: Valid when end column 
			 * stroke count is 1 or greater.
			 * @type {boolean}
			 */
			public endColumnStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of column borders in the second 
			 * alternating column strokes group. (Range: 0 to 100) Note: 
			 * Valid when end column stroke count is 1 or greater.
			 * @type {number}
			 */
			public endColumnStrokeTint: number;
			/**
			 * The stroke weight of column borders in the second 
			 * alternating column strokes group. Note: Valid when end 
			 * column stroke count is 1 or greater.
			 * @type {any}
			 */
			public endColumnStrokeWeight: any;
			/**
			 * The fill color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of rows in the second alternating fills 
			 * group. Note: Valid when alternating fills are defined for 
			 * table rows.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public endRowFillColor: Adobe.Incopy.Swatch;
			/**
			 * The number of rows in the second alternating fills group. 
			 * Note: Valid when alternating fills are defined for table 
			 * rows.
			 * @type {number}
			 */
			public endRowFillCount: number;
			/**
			 * If true, the rows in the second alternating fills group will 
			 * overprint. Note: Valid when alternating fills are defined 
			 * for table rows.
			 * @type {boolean}
			 */
			public endRowFillOverprint: boolean;
			/**
			 * The tint (as a percentage) of the rows in the second 
			 * alternating fills group. (Range: 0 to 100) Note: Valid when 
			 * alternating fills are defined for table rows.
			 * @type {number}
			 */
			public endRowFillTint: number;
			/**
			 * The stroke color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of row borders in the second 
			 * alternating row strokes group. Note: Valid when end row 
			 * stroke count is 1 or greater.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public endRowStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The number of rows in the second alternating row strokes 
			 * group.
			 * @type {number}
			 */
			public endRowStrokeCount: number;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of row borders in the second alternating rows 
			 * group. Note: Valid when end row stroke count is 1 or 
			 * greater.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public endRowStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap of the row borders in the second 
			 * alternating rows group will overprint. Note: Valid when end 
			 * row stroke count is 1 or greater.
			 * @type {boolean}
			 */
			public endRowStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of rows in the 
			 * second alternating strokes group. (Range: 0 to 100) Note: 
			 * Valid when end row stroke count is 1 or greater and end row 
			 * stroke type is not solid.
			 * @type {number}
			 */
			public endRowStrokeGapTint: number;
			/**
			 * If true, the rows in the second alternating rows group will 
			 * overprint. Note: Valid when end row stroke count is 1 or 
			 * greater.
			 * @type {boolean}
			 */
			public endRowStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the row borders in the second 
			 * alternating strokes group. (Range: 0 to 100) Note: Valid 
			 * when end row stroke count is 1 or greater.
			 * @type {number}
			 */
			public endRowStrokeTint: number;
			/**
			 * The stroke type of rows in the second alternating strokes 
			 * group. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public endRowStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of row borders in the second alternating 
			 * row strokes group. Note: Valid when end row stroke count is 
			 * 1 or greater.
			 * @type {any}
			 */
			public endRowStrokeWeight: any;
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
			 * The cell style of the footer region. Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.CellStyle}
			 */
			public footerRegionCellStyle: Adobe.Incopy.CellStyle;
			/**
			 * If true, uses the cell style of the body region for the 
			 * footer region.
			 * @type {boolean}
			 */
			public footerRegionSameAsBodyRegion: boolean;
			/**
			 * The cell style of the header region. Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.CellStyle}
			 */
			public headerRegionCellStyle: Adobe.Incopy.CellStyle;
			/**
			 * If true, use the cell style of the body region for the 
			 * header region.
			 * @type {boolean}
			 */
			public headerRegionSameAsBodyRegion: boolean;
			/**
			 * The unique ID of the TableStyle.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the TableStyle within its containing object.
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
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the left border stroke.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public leftBorderStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the left border stroke. Note: Valid only 
			 * when left border stroke type is not solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public leftBorderStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap of the left border stroke will overprint. 
			 * Note: Valid only when left border stroke type is not solid.
			 * @type {boolean}
			 */
			public leftBorderStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the left 
			 * border stroke. (Range: 0 to 100) Note: Valid only when left 
			 * border stroke type is not solid.
			 * @type {number}
			 */
			public leftBorderStrokeGapTint: number;
			/**
			 * If true, the left border stroke will overprint.
			 * @type {boolean}
			 */
			public leftBorderStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the left border stroke. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public leftBorderStrokeTint: number;
			/**
			 * The stroke type of the left border. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public leftBorderStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of the left border stroke.
			 * @type {any}
			 */
			public leftBorderStrokeWeight: any;
			/**
			 * The cell style of the left column region. Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.CellStyle}
			 */
			public leftColumnRegionCellStyle: Adobe.Incopy.CellStyle;
			/**
			 * If true, uses the cell style of the body region for the left 
			 * column region.
			 * @type {boolean}
			 */
			public leftColumnRegionSameAsBodyRegion: boolean;
			/**
			 * The name of the TableStyle.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the TableStyle (a Document, Application or 
			 * TableStyleGroup).
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
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the right border stroke.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public rightBorderStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the right border stroke. Note: Valid only 
			 * when right border stroke type is not solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public rightBorderStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap color of the right border stroke will 
			 * overprint. Note: Valid only when right border stroke type is 
			 * not solid.
			 * @type {boolean}
			 */
			public rightBorderStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the right 
			 * border stroke. (Range: 0 to 100) Note: Valid only when right 
			 * border stroke type is not solid.
			 * @type {number}
			 */
			public rightBorderStrokeGapTint: number;
			/**
			 * If true, the right border stroke will overprint.
			 * @type {boolean}
			 */
			public rightBorderStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the right border stroke. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public rightBorderStrokeTint: number;
			/**
			 * The stroke type of the right border. Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public rightBorderStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of the right border stroke.
			 * @type {any}
			 */
			public rightBorderStrokeWeight: any;
			/**
			 * The cell style of the right column region. Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.CellStyle}
			 */
			public rightColumnRegionCellStyle: Adobe.Incopy.CellStyle;
			/**
			 * If true, uses the cell style of the body region for the 
			 * right column region.
			 * @type {boolean}
			 */
			public rightColumnRegionSameAsBodyRegion: boolean;
			/**
			 * The number of columns on the left side of the table to skip 
			 * before applying the column fill color. Note: Valid when 
			 * alternating fills are defined for table columns.
			 * @type {number}
			 */
			public skipFirstAlternatingFillColumns: number;
			/**
			 * The number of body rows at the beginning of the table to 
			 * skip before applying the row fill color. Note: Valid when 
			 * alternating fills are defined for table rows.
			 * @type {number}
			 */
			public skipFirstAlternatingFillRows: number;
			/**
			 * The number of columns on the left of the table in which to 
			 * skip border stroke formatting. Note: Valid when start column 
			 * stroke count is 1 or greater and/or end column stroke count 
			 * is 1 or greater.
			 * @type {number}
			 */
			public skipFirstAlternatingStrokeColumns: number;
			/**
			 * The number of body rows at the beginning of the table in 
			 * which to skip border stroke formatting. Note: Valid when 
			 * start row stroke count is 1 or greater and/or end row stroke 
			 * count is 1 or greater.
			 * @type {number}
			 */
			public skipFirstAlternatingStrokeRows: number;
			/**
			 * The number columns on the right side of the table in which 
			 * to not apply the column fill color. Note: Valid when 
			 * alternating fills are defined for table columns.
			 * @type {number}
			 */
			public skipLastAlternatingFillColumns: number;
			/**
			 * The number of body rows at the end of the table in which to 
			 * not apply the row fill color. Note: Valid when alternating 
			 * fills are defined for table rows.
			 * @type {number}
			 */
			public skipLastAlternatingFillRows: number;
			/**
			 * The number of columns on the right side of the table in 
			 * which to skip border stroke formatting. Note: Valid when 
			 * start column stroke count is 1 or greater and/or end column 
			 * stroke count is 1 or greater.
			 * @type {number}
			 */
			public skipLastAlternatingStrokeColumns: number;
			/**
			 * The number of body rows at the end of the table in which to 
			 * skip border stroke formatting. Note: Valid when start row 
			 * stroke count is 1 or greater and/or end row stroke count is 
			 * 1 or greater.
			 * @type {number}
			 */
			public skipLastAlternatingStrokeRows: number;
			/**
			 * The space below the table.
			 * @type {any}
			 */
			public spaceAfter: any;
			/**
			 * The space above the table.
			 * @type {any}
			 */
			public spaceBefore: any;
			/**
			 * The fill color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of columns in the first alternating 
			 * fills group. Note: Valid when alternating fills are defined 
			 * for table columns.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public startColumnFillColor: Adobe.Incopy.Swatch;
			/**
			 * The number of columns in the first alternating fills group. 
			 * Note: Valid when alternating fills are defined for table 
			 * columns.
			 * @type {number}
			 */
			public startColumnFillCount: number;
			/**
			 * If true, the columns in the first alternating fills group 
			 * will overprint. Note: Valid when alternating fills are 
			 * defined for table columns.
			 * @type {boolean}
			 */
			public startColumnFillOverprint: boolean;
			/**
			 * The tint (as a percentage) of the columns in the first 
			 * alternating fills group. (Range: 0 to 100) Note: Valid when 
			 * alternating fills are defined for table columns.
			 * @type {number}
			 */
			public startColumnFillTint: number;
			/**
			 * The stroke color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of column borders in the first 
			 * alternating column strokes group.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public startColumnStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The number of columns in the first alternating column 
			 * strokes group.
			 * @type {number}
			 */
			public startColumnStrokeCount: number;
			/**
			 * The stroke gap color, specified as a swatch (color, 
			 * gradient, tint, or mixed ink), of column borders in the 
			 * first alternating column strokes group. Note: Valid when 
			 * start column stroke count is 1 or greater.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public startColumnStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap of the column borders in the first 
			 * alternating column strokes group will overprint. Note: Valid 
			 * when start column stroke count is 1 or greater.
			 * @type {boolean}
			 */
			public startColumnStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of column 
			 * borders in the first alternating column strokes group. 
			 * (Range: 0 to 100) Note: Valid when start column stroke count 
			 * is 1 or greater.
			 * @type {number}
			 */
			public startColumnStrokeGapTint: number;
			/**
			 * If true, the column borders in the first alternating column 
			 * strokes group will overprint. Note: Valid when start column 
			 * stroke count is 1 or greater.
			 * @type {boolean}
			 */
			public startColumnStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of column borders in the first 
			 * alternating column strokes group. (Range: 0 to 100) Note: 
			 * Valid when start column stroke count is 1 or greater.
			 * @type {number}
			 */
			public startColumnStrokeTint: number;
			/**
			 * The stroke type of columns in the first alternating strokes 
			 * group. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public startColumnStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of column borders in the first alternating 
			 * column strokes group. Note: Valid when start column stroke 
			 * count is 1 or greater.
			 * @type {any}
			 */
			public startColumnStrokeWeight: any;
			/**
			 * The fill color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of rows in the first alternating fills 
			 * group. Note: Valid when alternating fills are defined for 
			 * table rows.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public startRowFillColor: Adobe.Incopy.Swatch;
			/**
			 * The number of rows in the first alternating fills group. 
			 * Note: Valid when alternating fills are defined for table 
			 * rows.
			 * @type {number}
			 */
			public startRowFillCount: number;
			/**
			 * If true, the rows in the first alternating fills group will 
			 * overprint. Note: Valid when alternating fills are defined 
			 * for table rows.
			 * @type {boolean}
			 */
			public startRowFillOverprint: boolean;
			/**
			 * The tint (as a percentage) of the rows in the first 
			 * alternating fills group. (Range: 0 to 100) Note: Valid when 
			 * alternating fills are defined for table rows.
			 * @type {number}
			 */
			public startRowFillTint: number;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of row borders in the first alternating row 
			 * strokes group. Note: Valid when start row stroke count is 1 
			 * or greater.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public startRowStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The number of rows in the first alternating row strokes 
			 * group.
			 * @type {number}
			 */
			public startRowStrokeCount: number;
			/**
			 * The stroke gap color of row borders in the first alternating 
			 * row strokes group, specified as a swatch (color, gradient, 
			 * tint, or mixed ink). Note: Valid when start row stroke count 
			 * is 1 or greater.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public startRowStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap color of the row border stroke in the first 
			 * alternating row strokes group will overprint. Note: Valid 
			 * when start row stroke count is 1 or greater.
			 * @type {boolean}
			 */
			public startRowStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of row borders 
			 * in the first alternating rows group. (Range: 0 to 100) Note: 
			 * Valid when start row stroke count is 1 or greater.
			 * @type {number}
			 */
			public startRowStrokeGapTint: number;
			/**
			 * If true, the row borders in the first alternating row 
			 * strokes group will overprint. Note: Valid when start row 
			 * stroke count is 1 or greater.
			 * @type {boolean}
			 */
			public startRowStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the borders in the first 
			 * alternating row strokes group. (Range: 0 to 100) Note: Valid 
			 * when start row stroke count is 1 or greater.
			 * @type {number}
			 */
			public startRowStrokeTint: number;
			/**
			 * The stroke type of rows in the first alternating strokes 
			 * group. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public startRowStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of row borders in the first alternating 
			 * row strokes group. Note: Valid when start row stroke count 
			 * is 1 or greater.
			 * @type {any}
			 */
			public startRowStrokeWeight: any;
			/**
			 * The order in which to display row and column strokes at 
			 * corners.
			 * @type {Adobe.Incopy.StrokeOrderTypes}
			 */
			public strokeOrder: Adobe.Incopy.StrokeOrderTypes;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the table's top border stroke.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public topBorderStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the table's top border stroke. Note: Valid 
			 * only when top border stroke type is not solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public topBorderStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap of the top border stroke will overprint. 
			 * Note: Valid only when top border stroke type is not solid.
			 * @type {boolean}
			 */
			public topBorderStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the gap color of the table's 
			 * top border stroke. (Range: 0 to 100) Note: Valid only when 
			 * top border stroke type is not solid.
			 * @type {number}
			 */
			public topBorderStrokeGapTint: number;
			/**
			 * If true, the top border strokes will overprint.
			 * @type {boolean}
			 */
			public topBorderStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the table's top border stroke. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public topBorderStrokeTint: number;
			/**
			 * The stroke type of the top border. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public topBorderStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of the table's top border stroke.
			 * @type {any}
			 */
			public topBorderStrokeWeight: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerTableStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Duplicates the TableStyle.
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public duplicate(): Adobe.Incopy.TableStyle;
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
			 * @returns {Adobe.Incopy.TableStyle}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Incopy.TableStyle;
			/**
			 * Deletes the style.
			 * @param {TableStyle} replacingWithParam The style to apply in 
			 * place of the deleted style. (Optional)
			 * @returns {void}
			 */
			public remove(replacingWithParam: TableStyle): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerTableStyle(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}