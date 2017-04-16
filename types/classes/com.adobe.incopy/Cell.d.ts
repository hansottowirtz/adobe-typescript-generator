/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Cell extends Adobe.Csawlib.CSHostObject {
			/**
			 * Lists all graphics contained by the Cell.
			 * @type {any}
			 * @readonly
			 */
			public readonly allGraphics: any;
			/**
			 * Lists all page items contained by the Cell.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPageItems: any;
			/**
			 * The cell style applied to the cell. Can also accept: String.
			 * @type {Adobe.Incopy.CellStyle}
			 */
			public appliedCellStyle: Adobe.Incopy.CellStyle;
			/**
			 * The XML element associated with the Cell.
			 * @type {Adobe.Incopy.XMLItem}
			 * @readonly
			 */
			public readonly associatedXMLElement: Adobe.Incopy.XMLItem;
			/**
			 * If true, the height of the cell or the cells in the Cell can 
			 * increase or decrease automatically to fit cell content. 
			 * Note: Allows cells to grow or shrink to the maximum or 
			 * minimum height, if specified.
			 * @type {boolean}
			 */
			public autoGrow: boolean;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the bottom edge border stroke.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public bottomEdgeStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the bottom edge border stroke. Note: Not valid 
			 * when bottom edge stroke type is solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public bottomEdgeStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap color of the bottom edge border stroke will 
			 * overprint. Note: Not valid when bottom edge stroke type is 
			 * solid.
			 * @type {boolean}
			 */
			public bottomEdgeStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the bottom edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when bottom 
			 * edge stroke type is solid.
			 * @type {number}
			 */
			public bottomEdgeStrokeGapTint: number;
			/**
			 * If true, the bottom edge border stroke will overprint.
			 * @type {boolean}
			 */
			public bottomEdgeStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the bottom edge border stroke.
			 * @type {number}
			 */
			public bottomEdgeStrokeTint: number;
			/**
			 * The stroke type of the bottom edge. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public bottomEdgeStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of the bottom edge border stroke.
			 * @type {any}
			 */
			public bottomEdgeStrokeWeight: any;
			/**
			 * The bottom inset of the cell.
			 * @type {any}
			 */
			public bottomInset: any;
			/**
			 * A collection of buttons.
			 * @type {Adobe.Incopy.Buttons}
			 * @readonly
			 */
			public readonly buttons: Adobe.Incopy.Buttons;
			/**
			 * A collection of table cells.
			 * @type {Adobe.Incopy.Cells}
			 * @readonly
			 */
			public readonly cells: Adobe.Incopy.Cells;
			/**
			 * A collection of changes.
			 * @type {Adobe.Incopy.Changes}
			 * @readonly
			 */
			public readonly changes: Adobe.Incopy.Changes;
			/**
			 * A collection of characters.
			 * @type {Adobe.Incopy.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Incopy.Characters;
			/**
			 * A collection of checkboxes.
			 * @type {Adobe.Incopy.CheckBoxes}
			 * @readonly
			 */
			public readonly checkBoxes: Adobe.Incopy.CheckBoxes;
			/**
			 * If true, clips the cell's content to width and height of the 
			 * cell.
			 * @type {boolean}
			 */
			public clipContentToCell: boolean;
			/**
			 * A collection of table columns.
			 * @type {Adobe.Incopy.Columns}
			 * @readonly
			 */
			public readonly columns: Adobe.Incopy.Columns;
			/**
			 * The number of columns that the object spans.
			 * @type {number}
			 * @readonly
			 */
			public readonly columnSpan: number;
			/**
			 * A collection of comboboxes.
			 * @type {Adobe.Incopy.ComboBoxes}
			 * @readonly
			 */
			public readonly comboBoxes: Adobe.Incopy.ComboBoxes;
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
			 * @type {any}
			 */
			public contents: any;
			/**
			 * If true, draws the diagonal line in front of cell contents.
			 * @type {boolean}
			 */
			public diagonalLineInFront: boolean;
			/**
			 * The diagonal line color, specified as a swatch.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public diagonalLineStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the diagonal line stroke. Note: Not valid when 
			 * diagonal line stroke type is solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public diagonalLineStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the stroke gap of the diagonal line will overprint. 
			 * Note: Not valid when diagonal line stroke type is solid.
			 * @type {boolean}
			 */
			public diagonalLineStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the diagonal line stroke gap 
			 * color. Note: Not valid when diagonal line stroke type is 
			 * solid.
			 * @type {number}
			 */
			public diagonalLineStrokeGapTint: number;
			/**
			 * If true, the diagonal line stroke will overprint.
			 * @type {boolean}
			 */
			public diagonalLineStrokeOverprint: boolean;
			/**
			 * The diagonal line tint (as a percentage). (Range: 0 to 100)
			 * @type {number}
			 */
			public diagonalLineStrokeTint: number;
			/**
			 * The stroke type of the diagonal line(s). Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public diagonalLineStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The diagonal line stroke weight.
			 * @type {any}
			 */
			public diagonalLineStrokeWeight: any;
			/**
			 * EPSTexts
			 * @type {Adobe.Incopy.EPSTexts}
			 * @readonly
			 */
			public readonly epstexts: Adobe.Incopy.EPSTexts;
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
			 * the fill of the object. Can also accept: String.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public fillColor: Adobe.Incopy.Swatch;
			/**
			 * The tint (as a percentage) of the fill of the object.
			 * @type {number}
			 */
			public fillTint: number;
			/**
			 * The distance between the baseline of the text and the top 
			 * inset of the cell.
			 * @type {Adobe.Incopy.FirstBaseline}
			 */
			public firstBaselineOffset: Adobe.Incopy.FirstBaseline;
			/**
			 * A collection of form fields.
			 * @type {Adobe.Incopy.FormFields}
			 * @readonly
			 */
			public readonly formFields: Adobe.Incopy.FormFields;
			/**
			 * The angle of a linear gradient applied to the fill of the 
			 * object. (Range: -180 to 180)
			 * @type {number}
			 */
			public gradientFillAngle: number;
			/**
			 * The length (of a linear gradient) or radius (of a radial 
			 * gradient) applied to the fill of the object.
			 * @type {number}
			 */
			public gradientFillLength: number;
			/**
			 * The starting point (in page coordinates) of a gradient 
			 * applied to the fill of the Cell, in the format [x, y].
			 * @type {any}
			 */
			public gradientFillStart: any;
			/**
			 * A collection of graphic lines.
			 * @type {Adobe.Incopy.GraphicLines}
			 * @readonly
			 */
			public readonly graphicLines: Adobe.Incopy.GraphicLines;
			/**
			 * A collection of groups.
			 * @type {Adobe.Incopy.Groups}
			 * @readonly
			 */
			public readonly groups: Adobe.Incopy.Groups;
			/**
			 * The height of the Cell. For a table or column, specifies the 
			 * sum of the row heights.
			 * @type {any}
			 */
			public height: any;
			/**
			 * A collection of hidden text objects.
			 * @type {Adobe.Incopy.HiddenTexts}
			 * @readonly
			 */
			public readonly hiddenTexts: Adobe.Incopy.HiddenTexts;
			/**
			 * The unique ID of the Cell.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Cell within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * The color, specified as a swatch, of the inner column border 
			 * stroke.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public innerColumnStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the inner column border stroke. Note: Not valid 
			 * when inner column stroke type is solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public innerColumnStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap color of the inner column border stroke 
			 * will overprint. Note: Not valid when inner column stroke 
			 * type is solid.
			 * @type {boolean}
			 */
			public innerColumnStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the inner column border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when inner 
			 * column stroke type is solid.
			 * @type {number}
			 */
			public innerColumnStrokeGapTint: number;
			/**
			 * If true, the inner column border stroke will overprint.
			 * @type {boolean}
			 */
			public innerColumnStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the inner column border 
			 * stroke. (Range: 0 to 100)
			 * @type {number}
			 */
			public innerColumnStrokeTint: number;
			/**
			 * The stroke type of the inner column. Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public innerColumnStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of the inner column border stroke.
			 * @type {any}
			 */
			public innerColumnStrokeWeight: any;
			/**
			 * The color, specified as a swatch, of the inner row border 
			 * stroke.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public innerRowStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the inner row border stroke. Note: Not valid when 
			 * inner row stroke type is solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public innerRowStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap color of the inner row border stroke will 
			 * overprint. Note: Not valid when inner row stroke type is 
			 * solid.
			 * @type {boolean}
			 */
			public innerRowStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the inner row border stroke. 
			 * (Range: 0 to 100) Note: Not valid when inner row stroke type 
			 * is solid.
			 * @type {number}
			 */
			public innerRowStrokeGapTint: number;
			/**
			 * If true, the inner row border stroke will overprint.
			 * @type {boolean}
			 */
			public innerRowStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the inner row border stroke. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public innerRowStrokeTint: number;
			/**
			 * The stroke type of the inner row. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public innerRowStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of the inner row border strokes.
			 * @type {any}
			 */
			public innerRowStrokeWeight: any;
			/**
			 * A collection of insertion points.
			 * @type {Adobe.Incopy.InsertionPoints}
			 * @readonly
			 */
			public readonly insertionPoints: Adobe.Incopy.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * If true, keeps the row with the next row when the table is 
			 * split across text frames or pages.
			 * @type {boolean}
			 */
			public keepWithNextRow: boolean;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the left edge border stroke.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public leftEdgeStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the left edge border stroke. Note: Not valid when 
			 * left edge stroke type is solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public leftEdgeStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap color of the left edge border stroke will 
			 * overprint. Note: Not valid when left edge stroke type is 
			 * solid.
			 * @type {boolean}
			 */
			public leftEdgeStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the left edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when left edge 
			 * stroke type is solid.
			 * @type {number}
			 */
			public leftEdgeStrokeGapTint: number;
			/**
			 * If true, the left edge border stroke will overprint.
			 * @type {boolean}
			 */
			public leftEdgeStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the left edge border stroke. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public leftEdgeStrokeTint: number;
			/**
			 * The stroke type of the left edge. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public leftEdgeStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of the left edge border stroke.
			 * @type {any}
			 */
			public leftEdgeStrokeWeight: any;
			/**
			 * The left inset of the cell.
			 * @type {any}
			 */
			public leftInset: any;
			/**
			 * A collection of lines.
			 * @type {Adobe.Incopy.Lines}
			 * @readonly
			 */
			public readonly lines: Adobe.Incopy.Lines;
			/**
			 * A collection of listboxes.
			 * @type {Adobe.Incopy.ListBoxes}
			 * @readonly
			 */
			public readonly listBoxes: Adobe.Incopy.ListBoxes;
			/**
			 * The maximum height to which cells in the Cell may grow. 
			 * Note: The maximum height cannot be exceeded even when auto 
			 * grow is set to true. Also, the maximum height can affect 
			 * redistribution.
			 * @type {any}
			 */
			public maximumHeight: any;
			/**
			 * The space between the baseline of the text and the top inset 
			 * of the frame or cell.
			 * @type {any}
			 */
			public minimumFirstBaselineOffset: any;
			/**
			 * The minimum height of the cells in the Cell. Note: When auto 
			 * grow is true, cells can automatically grow larger than this 
			 * amount when content is added. Also, the minimum height can 
			 * affect redistribution.
			 * @type {any}
			 */
			public minimumHeight: any;
			/**
			 * A collection of multi-state objects.
			 * @type {Adobe.Incopy.MultiStateObjects}
			 * @readonly
			 */
			public readonly multiStateObjects: Adobe.Incopy.MultiStateObjects;
			/**
			 * The name of the Cell.
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * A collection of notes.
			 * @type {Adobe.Incopy.Notes}
			 * @readonly
			 */
			public readonly notes: Adobe.Incopy.Notes;
			/**
			 * A collection of ellipses.
			 * @type {Adobe.Incopy.Ovals}
			 * @readonly
			 */
			public readonly ovals: Adobe.Incopy.Ovals;
			/**
			 * If true, the story has overset text.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly overflows: boolean;
			/**
			 * If true, the fill of the object will overprint.
			 * @type {boolean}
			 */
			public overprintFill: boolean;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 * @type {Adobe.Incopy.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/**
			 * A collection of paragraphs.
			 * @type {Adobe.Incopy.Paragraphs}
			 * @readonly
			 */
			public readonly paragraphs: Adobe.Incopy.Paragraphs;
			/**
			 * The maximum space that can be added between paragraphs in a 
			 * cell. Note: Valid only when vertical justification is 
			 * justified.
			 * @type {any}
			 */
			public paragraphSpacingLimit: any;
			/**
			 * The parent of the Cell (a XMLElement, Cell, Table, Column or 
			 * Row).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The parent column of the cell.
			 * @type {Adobe.Incopy.Column}
			 * @readonly
			 */
			public readonly parentColumn: Adobe.Incopy.Column;
			/**
			 * The parent row of the cell.
			 * @type {Adobe.Incopy.Row}
			 * @readonly
			 */
			public readonly parentRow: Adobe.Incopy.Row;
			/**
			 * A collection of polygons.
			 * @type {Adobe.Incopy.Polygons}
			 * @readonly
			 */
			public readonly polygons: Adobe.Incopy.Polygons;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of radio buttons.
			 * @type {Adobe.Incopy.RadioButtons}
			 * @readonly
			 */
			public readonly radioButtons: Adobe.Incopy.RadioButtons;
			/**
			 * A collection of rectangles.
			 * @type {Adobe.Incopy.Rectangles}
			 * @readonly
			 */
			public readonly rectangles: Adobe.Incopy.Rectangles;
			/**
			 * The color, specified as a swatch, of the right edge border 
			 * stroke.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public rightEdgeStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the right edge border stroke. Note: Not valid 
			 * when right edge stroke type is solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public rightEdgeStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap color of the right edge border stroke will 
			 * overprint. Note: Not valid when right edge stroke type is 
			 * solid.
			 * @type {boolean}
			 */
			public rightEdgeStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the right edge border stroke 
			 * gap color. (Range: 0 to 100) Note: Not valid when right edge 
			 * stroke type is solid.
			 * @type {number}
			 */
			public rightEdgeStrokeGapTint: number;
			/**
			 * If true, the right edge border stroke will overprint.
			 * @type {boolean}
			 */
			public rightEdgeStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the right edge border stroke. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public rightEdgeStrokeTint: number;
			/**
			 * The stroke type of the right edge. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public rightEdgeStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of the right edge border stroke.
			 * @type {any}
			 */
			public rightEdgeStrokeWeight: any;
			/**
			 * The right inset of the cell.
			 * @type {any}
			 */
			public rightInset: any;
			/**
			 * The rotation angle (in degrees) of the cell, specified as 
			 * one of the following values: 0, 90, 180, or 270.
			 * @type {number}
			 */
			public rotationAngle: number;
			/**
			 * A collection of table rows.
			 * @type {Adobe.Incopy.Rows}
			 * @readonly
			 */
			public readonly rows: Adobe.Incopy.Rows;
			/**
			 * The number of rows that the object spans.
			 * @type {number}
			 * @readonly
			 */
			public readonly rowSpan: number;
			/**
			 * The row type.
			 * @type {Adobe.Incopy.RowTypes}
			 */
			public rowType: Adobe.Incopy.RowTypes;
			/**
			 * A collection of signature fields.
			 * @type {Adobe.Incopy.SignatureFields}
			 * @readonly
			 */
			public readonly signatureFields: Adobe.Incopy.SignatureFields;
			/**
			 * The spline items collection.
			 * @type {Adobe.Incopy.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/**
			 * Indicates where to start the row.
			 * @type {Adobe.Incopy.StartParagraph}
			 */
			public startRow: Adobe.Incopy.StartParagraph;
			/**
			 * A collection of tables.
			 * @type {Adobe.Incopy.Tables}
			 * @readonly
			 */
			public readonly tables: Adobe.Incopy.Tables;
			/**
			 * A collection of text boxes.
			 * @type {Adobe.Incopy.TextBoxes}
			 * @readonly
			 */
			public readonly textBoxes: Adobe.Incopy.TextBoxes;
			/**
			 * A collection of text columns.
			 * @type {Adobe.Incopy.TextColumns}
			 * @readonly
			 */
			public readonly textColumns: Adobe.Incopy.TextColumns;
			/**
			 * A collection of text frames.
			 * @type {Adobe.Incopy.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/**
			 * A collection of text objects.
			 * @type {Adobe.Incopy.Texts}
			 * @readonly
			 */
			public readonly texts: Adobe.Incopy.Texts;
			/**
			 * A collection of text style ranges.
			 * @type {Adobe.Incopy.TextStyleRanges}
			 * @readonly
			 */
			public readonly textStyleRanges: Adobe.Incopy.TextStyleRanges;
			/**
			 * A collection of text variable instances.
			 * @type {Adobe.Incopy.TextVariableInstances}
			 * @readonly
			 */
			public readonly textVariableInstances: Adobe.Incopy.TextVariableInstances;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the top edge border stroke.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public topEdgeStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The swatch (color, gradient, tint, or mixed ink) applied to 
			 * the gap of the top edge border stroke. Note: Not valid when 
			 * top edge stroke type is solid.
			 * @type {Adobe.Incopy.Swatch}
			 */
			public topEdgeStrokeGapColor: Adobe.Incopy.Swatch;
			/**
			 * If true, the gap color of the top edge border stroke will 
			 * overprint. Note: Not valid when top edge stroke type is 
			 * solid.
			 * @type {boolean}
			 */
			public topEdgeStrokeGapOverprint: boolean;
			/**
			 * The tint (as a percentage) of the top edge border stroke gap 
			 * color. (Range: 0 to 100) Note: Not valid when top edge 
			 * stroke type is solid.
			 * @type {number}
			 */
			public topEdgeStrokeGapTint: number;
			/**
			 * If true, the top edge border stroke will overprint.
			 * @type {boolean}
			 */
			public topEdgeStrokeOverprint: boolean;
			/**
			 * The tint (as a percentage) of the top edge border stroke. 
			 * (Range: 0 to 100)
			 * @type {number}
			 */
			public topEdgeStrokeTint: number;
			/**
			 * The stroke type of the top edge. Can also accept: String.
			 * @type {Adobe.Incopy.StrokeStyle}
			 */
			public topEdgeStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of the top edge border stroke.
			 * @type {any}
			 */
			public topEdgeStrokeWeight: any;
			/**
			 * The top inset of the cell.
			 * @type {any}
			 */
			public topInset: any;
			/**
			 * If true, draws a diagonal line starting from the top left.
			 * @type {boolean}
			 */
			public topLeftDiagonalLine: boolean;
			/**
			 * If true, draws a diagonal line starting from the top right.
			 * @type {boolean}
			 */
			public topRightDiagonalLine: boolean;
			/**
			 * The vertical alignment of cell.
			 * @type {Adobe.Incopy.VerticalJustification}
			 */
			public verticalJustification: Adobe.Incopy.VerticalJustification;
			/**
			 * The width of the Cell. For a table or row, specifies the sum 
			 * of the column widths.
			 * @type {any}
			 */
			public width: any;
			/**
			 * A collection of words.
			 * @type {Adobe.Incopy.Words}
			 * @readonly
			 */
			public readonly words: Adobe.Incopy.Words;
			/**
			 * The direction of the text in the cell.
			 * @type {Adobe.Incopy.HorizontalOrVertical}
			 */
			public writingDirection: Adobe.Incopy.HorizontalOrVertical;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerCell(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Tag the object or the parent story using default tags 
			 * defined in XML preference.
			 * @returns {void}
			 */
			public autoTag(): void;
			/**
			 * Finds glyphs that match the find what value and replaces the 
			 * glyphs with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value and 
			 * replaces the text with the change character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public changeTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Clear Cell Style Overrides
			 * @param {boolean} clearingOverridesThroughRootCellStyleParam 
			 * If true, clears all overrides, whether or not they are 
			 * defined in the underlying cell style (Optional)
			 * @returns {void}
			 */
			public clearCellStyleOverrides(clearingOverridesThroughRootCellStyleParam: boolean): void;
			/**
			 * Convert bullets and numbering to text.
			 * @returns {void}
			 */
			public convertBulletsAndNumberingToText(): void;
			/**
			 * Converts text to outlines. Each line of text becomes a 
			 * polygon object.
			 * @returns {any}
			 */
			public createOutlines(): any;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Finds glyphs that match the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findGlyph(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 * @returns {any}
			 */
			public findTransliterate(reverseOrderParam: boolean): any;
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
			 * Merges the cells.
			 * @param {any} withParam The cell(s) to merge with. Can 
			 * accept: Cell, Row or Column. (Optional)
			 * @returns {Adobe.Incopy.Cell}
			 */
			public merge(withParam: any): Adobe.Incopy.Cell;
			/**
			 * Recomposes the text in the Cell.
			 * @returns {void}
			 */
			public recompose(): void;
			/**
			 * Deletes the Cell.
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
			public removeEventListenerCell(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Splits the cell along the specified axis.
			 * @param {HorizontalOrVertical} usingParam The direction in 
			 * which to split the cell.
			 * @returns {void}
			 */
			public split(usingParam: HorizontalOrVertical): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Unmerges all merged cells in the Cell.
			 * @returns {any}
			 */
			public unmerge(): any;
		}
	}
}