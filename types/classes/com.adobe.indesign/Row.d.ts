/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Row extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, the height of the cell or the cells in the Row can 
			 * increase or decrease automatically to fit cell content. 
			 * Note: Allows cells to grow or shrink to the maximum or 
			 * minimum height, if specified.
			 */
			public autoGrow: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the bottom edge border stroke.
			 */
			public bottomEdgeStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the bottom edge border stroke. Note: Not valid 
			 * when bottom edge stroke type is solid.
			 */
			public bottomEdgeStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap color of the bottom edge border stroke will 
			 * overprint. Note: Not valid when bottom edge stroke type is 
			 * solid.
			 */
			public bottomEdgeStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the bottom edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when bottom 
			 * edge stroke type is solid.
			 */
			public bottomEdgeStrokeGapTint: number;
			/** If true, the bottom edge border stroke will overprint. */
			public bottomEdgeStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the bottom edge border stroke.
			 */
			public bottomEdgeStrokeTint: number;
			/**
			 * The stroke type of the bottom edge. Can also accept: String.
			 */
			public bottomEdgeStrokeType: Adobe.Indesign.StrokeStyle;
			/** The stroke weight of the bottom edge border stroke. */
			public bottomEdgeStrokeWeight: any;
			/** The bottom inset of the cell. */
			public bottomInset: any;
			/** A collection of table cells. */
			public readonly cells: Adobe.Indesign.Cells;
			/**
			 * If true, clips the cell's content to width and height of the 
			 * cell.
			 */
			public clipContentToCell: boolean;
			/** A collection of table columns. */
			public readonly columns: Adobe.Indesign.Columns;
			/** The number of columns that the object spans. */
			public readonly columnSpan: number;
			/**
			 * The text contents. For rows or columns, when specified as a 
			 * string, the sting populates each cell in the row or column; 
			 * when specified as an array, the first value in the array 
			 * populates the left-most cell in the row or the top-most cell 
			 * in the column; the next value populates the next cell to the 
			 * right (for rows) or the next lowest cell (for columns), and 
			 * so on. Can return: String, SpecialCharacters enumerator or 
			 * Array of Strings or SpecialCharacters enumerators. Can also 
			 * accept: NothingEnum enumerator or Array of Strings, 
			 * SpecialCharacters enumerators or NothingEnum enumerators.
			 */
			public contents: any;
			/** If true, draws the diagonal line in front of cell contents. */
			public diagonalLineInFront: boolean;
			/** The diagonal line color, specified as a swatch. */
			public diagonalLineStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the diagonal line stroke. Note: Not valid when 
			 * diagonal line stroke type is solid.
			 */
			public diagonalLineStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the stroke gap of the diagonal line will overprint. 
			 * Note: Not valid when diagonal line stroke type is solid.
			 */
			public diagonalLineStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the diagonal line stroke gap 
			 * color. Note: Not valid when diagonal line stroke type is 
			 * solid.
			 */
			public diagonalLineStrokeGapTint: number;
			/** If true, the diagonal line stroke will overprint. */
			public diagonalLineStrokeOverprint: boolean;
			/** The diagonal line tint (as a percentage). (Range: 0 to 100) */
			public diagonalLineStrokeTint: number;
			/**
			 * The stroke type of the diagonal line(s). Can also accept: 
			 * String.
			 */
			public diagonalLineStrokeType: Adobe.Indesign.StrokeStyle;
			/** The diagonal line stroke weight. */
			public diagonalLineStrokeWeight: any;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the fill of the object. Can also accept: String.
			 */
			public fillColor: Adobe.Indesign.Swatch;
			/** The tint (as a percentage) of the fill of the object. */
			public fillTint: number;
			/**
			 * The distance between the baseline of the text and the top 
			 * inset of the cell.
			 */
			public firstBaselineOffset: Adobe.Indesign.FirstBaseline;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * object. (Range: -180 to 180)
			 */
			public gradientFillAngle: number;
			/**
			 * The length (of a linear gradient) or radius (of a radial 
			 * gradient) applied to the fill of the object.
			 */
			public gradientFillLength: number;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the Row, in the format [x, y].
			 */
			public gradientFillStart: any;
			/**
			 * The height of the Row. For a table or column, specifies the 
			 * sum of the row heights.
			 */
			public height: any;
			/** The index of the Row within its containing object. */
			public readonly index: number;
			/**
			 * The color, specified as a swatch, of the inner column border 
			 * stroke.
			 */
			public innerColumnStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the inner column border stroke. Note: Not valid 
			 * when inner column stroke type is solid.
			 */
			public innerColumnStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap color of the inner column border stroke 
			 * will overprint. Note: Not valid when inner column stroke 
			 * type is solid.
			 */
			public innerColumnStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the inner column border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when inner 
			 * column stroke type is solid.
			 */
			public innerColumnStrokeGapTint: number;
			/** If true, the inner column border stroke will overprint. */
			public innerColumnStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the inner column border 
			 * stroke. (Range: 0 to 100)
			 */
			public innerColumnStrokeTint: number;
			/**
			 * The stroke type of the inner column. Can also accept: 
			 * String.
			 */
			public innerColumnStrokeType: Adobe.Indesign.StrokeStyle;
			/** The stroke weight of the inner column border stroke. */
			public innerColumnStrokeWeight: any;
			/**
			 * The color, specified as a swatch, of the inner row border 
			 * stroke.
			 */
			public innerRowStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the inner row border stroke. Note: Not valid when 
			 * inner row stroke type is solid.
			 */
			public innerRowStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap color of the inner row border stroke will 
			 * overprint. Note: Not valid when inner row stroke type is 
			 * solid.
			 */
			public innerRowStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the inner row border stroke. 
			 * (Range: 0 to 100) Note: Not valid when inner row stroke type 
			 * is solid.
			 */
			public innerRowStrokeGapTint: number;
			/** If true, the inner row border stroke will overprint. */
			public innerRowStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the inner row border stroke. 
			 * (Range: 0 to 100)
			 */
			public innerRowStrokeTint: number;
			/** The stroke type of the inner row. Can also accept: String. */
			public innerRowStrokeType: Adobe.Indesign.StrokeStyle;
			/** The stroke weight of the inner row border strokes. */
			public innerRowStrokeWeight: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * If true, keeps the row with the next row when the table is 
			 * split across text frames or pages.
			 */
			public keepWithNextRow: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the left edge border stroke.
			 */
			public leftEdgeStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the left edge border stroke. Note: Not valid when 
			 * left edge stroke type is solid.
			 */
			public leftEdgeStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap color of the left edge border stroke will 
			 * overprint. Note: Not valid when left edge stroke type is 
			 * solid.
			 */
			public leftEdgeStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the left edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when left edge 
			 * stroke type is solid.
			 */
			public leftEdgeStrokeGapTint: number;
			/** If true, the left edge border stroke will overprint. */
			public leftEdgeStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the left edge border stroke. 
			 * (Range: 0 to 100)
			 */
			public leftEdgeStrokeTint: number;
			/** The stroke type of the left edge. Can also accept: String. */
			public leftEdgeStrokeType: Adobe.Indesign.StrokeStyle;
			/** The stroke weight of the left edge border stroke. */
			public leftEdgeStrokeWeight: any;
			/** The left inset of the cell. */
			public leftInset: any;
			/**
			 * The maximum height to which cells in the Row may grow. Note: 
			 * The maximum height cannot be exceeded even when auto grow is 
			 * set to true. Also, the maximum height can affect 
			 * redistribution.
			 */
			public maximumHeight: any;
			/**
			 * The space between the baseline of the text and the top inset 
			 * of the frame or cell.
			 */
			public minimumFirstBaselineOffset: any;
			/**
			 * The minimum height of the cells in the Row. Note: When auto 
			 * grow is true, cells can automatically grow larger than this 
			 * amount when content is added. Also, the minimum height can 
			 * affect redistribution.
			 */
			public minimumHeight: any;
			/** The name of the Row. */
			public readonly name: string;
			/** If true, the story has overset text. */
			public readonly overflows: boolean;
			/** If true, the fill of the object will overprint. */
			public overprintFill: boolean;
			/**
			 * The maximum space that can be added between paragraphs in a 
			 * cell. Note: Valid only when vertical justification is 
			 * justified.
			 */
			public paragraphSpacingLimit: any;
			/** The parent of the Row (a Table). */
			public readonly parent: Adobe.Indesign.Table;
			/** The parent column of the cell. */
			public readonly parentColumn: Adobe.Indesign.Column;
			/** The parent row of the cell. */
			public readonly parentRow: Adobe.Indesign.Row;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The color, specified as a swatch, of the right edge border 
			 * stroke.
			 */
			public rightEdgeStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the right edge border stroke. Note: Not valid 
			 * when right edge stroke type is solid.
			 */
			public rightEdgeStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap color of the right edge border stroke will 
			 * overprint. Note: Not valid when right edge stroke type is 
			 * solid.
			 */
			public rightEdgeStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the right edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when right edge 
			 * stroke type is solid.
			 */
			public rightEdgeStrokeGapTint: number;
			/** If true, the right edge border stroke will overprint. */
			public rightEdgeStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the right edge border stroke. 
			 * (Range: 0 to 100)
			 */
			public rightEdgeStrokeTint: number;
			/** The stroke type of the right edge. Can also accept: String. */
			public rightEdgeStrokeType: Adobe.Indesign.StrokeStyle;
			/** The stroke weight of the right edge border stroke. */
			public rightEdgeStrokeWeight: any;
			/** The right inset of the cell. */
			public rightInset: any;
			/**
			 * The rotation angle (in degrees) of the cell, specified as 
			 * one of the following values: 0, 90, 180, or 270.
			 */
			public rotationAngle: number;
			/** A collection of table rows. */
			public readonly rows: Adobe.Indesign.Rows;
			/** The number of rows that the object spans. */
			public readonly rowSpan: number;
			/** The row type. */
			public rowType: Adobe.Indesign.RowTypes;
			/** Indicates where to start the row. */
			public startRow: Adobe.Indesign.StartParagraph;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the top edge border stroke.
			 */
			public topEdgeStrokeColor: Adobe.Indesign.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the top edge border stroke. Note: Not valid when 
			 * top edge stroke type is solid.
			 */
			public topEdgeStrokeGapColor: Adobe.Indesign.Swatch;
			/**
			 * If true, the gap color of the top edge border stroke will 
			 * overprint. Note: Not valid when top edge stroke type is 
			 * solid.
			 */
			public topEdgeStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the top edge border stroke gap 
			 * color. (Range: 0 to 100) Note: Not valid when top edge 
			 * stroke type is solid.
			 */
			public topEdgeStrokeGapTint: number;
			/** If true, the top edge border stroke will overprint. */
			public topEdgeStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the top edge border stroke. 
			 * (Range: 0 to 100)
			 */
			public topEdgeStrokeTint: number;
			/** The stroke type of the top edge. Can also accept: String. */
			public topEdgeStrokeType: Adobe.Indesign.StrokeStyle;
			/** The stroke weight of the top edge border stroke. */
			public topEdgeStrokeWeight: any;
			/** The top inset of the cell. */
			public topInset: any;
			/** If true, draws a diagonal line starting from the top left. */
			public topLeftDiagonalLine: boolean;
			/** If true, draws a diagonal line starting from the top right. */
			public topRightDiagonalLine: boolean;
			/** The vertical alignment of cell. */
			public verticalJustification: Adobe.Indesign.VerticalJustification;
			/**
			 * The width of the Row. For a table or row, specifies the sum 
			 * of the column widths.
			 */
			public width: any;
			/** The direction of the text in the cell. */
			public writingDirection: Adobe.Indesign.HorizontalOrVertical;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerRow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Finds glyphs that match the find what value and replaces the 
			 * glyphs with the change to value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value and 
			 * replaces the text with the change character type value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Converts text to outlines. Each line of text becomes a 
			 * polygon object. When the converted text is a single letter 
			 * that has no internal spaces or detached parts, the polygon 
			 * contains only a single path. Note: To determine whether a 
			 * font allows the creation of outlines, see allow outlines.
			 * @param {boolean} deleteOriginalParam - If true, deletes the 
			 * original text. If false, creates the outlines as separate 
			 * object(s) on top of the text.  (Optional)
			 */
			public createOutlines(deleteOriginalParam: boolean): any;
			/**
			 * Finds glyphs that match the find what value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value.
			 * @param {boolean} reverseOrderParam - If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Merges the cells.
			 * @param {any} withParam - The cell(s) to merge with. Can 
			 * accept: Cell, Row or Column. (Optional)
			 */
			public merge(withParam: any): Adobe.Indesign.Cell;
			/** Recomposes the text in the Row. */
			public recompose(): void;
			/**
			 * Redistributes the specified range of Rows so that the Rows 
			 * have a uniform size. Note: The maximum or minimum height or 
			 * width specified for some of the cells in the range may 
			 * prevent them from being exactly even.
			 * @param {HorizontalOrVertical} usingParam - The direction in 
			 * which to redistribute.
			 * @param {any} thruParam - The last Row in the range. Can 
			 * accept: Cell, Column or Row. (Optional)
			 */
			public redistribute(usingParam: HorizontalOrVertical, thruParam: any): void;
			/** Deletes the Row. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerRow(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam - The 
			 * selection status of the Row in relation to previously 
			 * selected objects. (Optional)
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/**
			 * Splits the cell along the specified axis.
			 * @param {HorizontalOrVertical} usingParam - The direction in 
			 * which to split the cell.
			 */
			public split(usingParam: HorizontalOrVertical): void;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/** Unmerges all merged cells in the Row. */
			public unmerge(): any;
		}
	}
}