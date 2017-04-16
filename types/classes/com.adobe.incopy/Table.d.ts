/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Table extends Adobe.Csawlib.CSHostObject {
			/**
			 * Lists all graphics contained by the Table.
			 * @type {any}
			 * @readonly
			 */
			public readonly allGraphics: any;
			/**
			 * Lists all page items contained by the Table.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPageItems: any;
			/**
			 * The pattern for alternating fills.
			 * @type {Adobe.Incopy.AlternatingFillsTypes}
			 */
			public alternatingFills: Adobe.Incopy.AlternatingFillsTypes;
			/**
			 * The table style applied to the table. Can also accept: 
			 * String.
			 * @type {Adobe.Incopy.TableStyle}
			 */
			public appliedTableStyle: Adobe.Incopy.TableStyle;
			/**
			 * The XML element associated with the Table.
			 * @type {Adobe.Incopy.XMLItem}
			 * @readonly
			 */
			public readonly associatedXMLElement: Adobe.Incopy.XMLItem;
			/**
			 * The number of body rows.
			 * @type {number}
			 */
			public bodyRowCount: number;
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
			 * The footer placement.
			 * @type {Adobe.Incopy.HeaderFooterBreakTypes}
			 */
			public breakFooters: Adobe.Incopy.HeaderFooterBreakTypes;
			/**
			 * The header placement.
			 * @type {Adobe.Incopy.HeaderFooterBreakTypes}
			 */
			public breakHeaders: Adobe.Incopy.HeaderFooterBreakTypes;
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
			 * A collection of checkboxes.
			 * @type {Adobe.Incopy.CheckBoxes}
			 * @readonly
			 */
			public readonly checkBoxes: Adobe.Incopy.CheckBoxes;
			/**
			 * The number of columns.
			 * @type {number}
			 */
			public columnCount: number;
			/**
			 * If true, hides alternating row fills. If false, hides 
			 * alternating column fills.
			 * @type {boolean}
			 */
			public columnFillsPriority: boolean;
			/**
			 * A collection of table columns.
			 * @type {Adobe.Incopy.Columns}
			 * @readonly
			 */
			public readonly columns: Adobe.Incopy.Columns;
			/**
			 * A collection of comboboxes.
			 * @type {Adobe.Incopy.ComboBoxes}
			 * @readonly
			 */
			public readonly comboBoxes: Adobe.Incopy.ComboBoxes;
			/**
			 * The contents to place in cells, specified as an array whose 
			 * first item populates the top left cell and whose second item 
			 * populates the next cell to the right, and so on until each 
			 * cell in the top row is populated, at which point the next 
			 * item populates the left-most cell in the second row, and so 
			 * on. Note: If the array contains fewer strings than the table 
			 * contains cells, the remaining cells are left blank. Can 
			 * return: Array of Strings or SpecialCharacters enumerators. 
			 * Can also accept: Array of Strings, SpecialCharacters 
			 * enumerators or NothingEnum enumerators.
			 * @type {any}
			 */
			public contents: any;
			/**
			 * If true, then the table will show collapsed in story and 
			 * galley views.
			 * @type {boolean}
			 */
			public displayCollapsed: boolean;
			/**
			 * Specifies the order the table cells will display in when 
			 * viewing in story and galley views.
			 * @type {Adobe.Incopy.DisplayOrderOptions}
			 */
			public displayOrder: Adobe.Incopy.DisplayOrderOptions;
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
			 * The number of footer rows.
			 * @type {number}
			 */
			public footerRowCount: number;
			/**
			 * A collection of form fields.
			 * @type {Adobe.Incopy.FormFields}
			 * @readonly
			 */
			public readonly formFields: Adobe.Incopy.FormFields;
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
			 * The number of header rows.
			 * @type {number}
			 */
			public headerRowCount: number;
			/**
			 * The height of the Table. For a table or column, specifies 
			 * the sum of the row heights.
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
			 * The unique ID of the Table.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Table within its containing object.
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
			 * A collection of listboxes.
			 * @type {Adobe.Incopy.ListBoxes}
			 * @readonly
			 */
			public readonly listBoxes: Adobe.Incopy.ListBoxes;
			/**
			 * A collection of multi-state objects.
			 * @type {Adobe.Incopy.MultiStateObjects}
			 * @readonly
			 */
			public readonly multiStateObjects: Adobe.Incopy.MultiStateObjects;
			/**
			 * The name of the Table; this is an alias to the Table's label 
			 * property.
			 * @type {string}
			 */
			public name: string;
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
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 * @type {Adobe.Incopy.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/**
			 * The parent of the Table (a XMLElement, XmlStory, TextFrame, 
			 * Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, 
			 * Line, Word, Character, Story or Cell).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
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
			 * A collection of table rows.
			 * @type {Adobe.Incopy.Rows}
			 * @readonly
			 */
			public readonly rows: Adobe.Incopy.Rows;
			/**
			 * A collection of signature fields.
			 * @type {Adobe.Incopy.SignatureFields}
			 * @readonly
			 */
			public readonly signatureFields: Adobe.Incopy.SignatureFields;
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
			 * If true, skips the first occurrence of header rows.
			 * @type {boolean}
			 */
			public skipFirstHeader: boolean;
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
			 * If true, skips the last occurrence of footer rows.
			 * @type {boolean}
			 */
			public skipLastFooter: boolean;
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
			 * The spline items collection.
			 * @type {Adobe.Incopy.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Incopy.SplineItems;
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
			 * The insertion point before the table in the story containing 
			 * the table.
			 * @type {Adobe.Incopy.InsertionPoint}
			 * @readonly
			 */
			public readonly storyOffset: Adobe.Incopy.InsertionPoint;
			/**
			 * The order in which to display row and column strokes at 
			 * corners.
			 * @type {Adobe.Incopy.StrokeOrderTypes}
			 */
			public strokeOrder: Adobe.Incopy.StrokeOrderTypes;
			/**
			 * The direction of the the table
			 * @type {Adobe.Incopy.TableDirectionOptions}
			 */
			public tableDirection: Adobe.Incopy.TableDirectionOptions;
			/**
			 * A collection of text boxes.
			 * @type {Adobe.Incopy.TextBoxes}
			 * @readonly
			 */
			public readonly textBoxes: Adobe.Incopy.TextBoxes;
			/**
			 * A collection of text frames.
			 * @type {Adobe.Incopy.TextFrames}
			 * @readonly
			 */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/**
			 * A collection of text variable instances.
			 * @type {Adobe.Incopy.TextVariableInstances}
			 * @readonly
			 */
			public readonly textVariableInstances: Adobe.Incopy.TextVariableInstances;
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
			 * The width of the Table. For a table or row, specifies the 
			 * sum of the column widths.
			 * @type {any}
			 */
			public width: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerTable(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			 * Clear Table Style Overrides
			 * @returns {void}
			 */
			public clearTableStyleOverrides(): void;
			/**
			 * Convert bullets and numbering to text.
			 * @returns {void}
			 */
			public convertBulletsAndNumberingToText(): void;
			/**
			 * Converts the table to text.
			 * @param {string} columnSeparatorParam The character to insert 
			 * between the each column's content in the converted text. 
			 * Note: Can be defined as any single character, such as a 
			 * letter, number, or punctuation mark, or by typing a space or 
			 * tab. Use the actual character rather than its name, such as 
			 * ',' rather than 'Comma'. Precede double or single quotes or 
			 * a backslash with an extra backslash as an escape character. 
			 * For paragraphs, use ^p. (Optional)
			 * @param {string} rowSeparatorParam The character to use to 
			 * separate each row's content in the converted text. Note: Can 
			 * be defined as any single character, such as a letter, 
			 * number, or punctuation mark, or by typing a space or tab. 
			 * Use the actual character rather than its name, such as , 
			 * rather than Comma. Precede double or single quotes or a 
			 * backslash with an extra backslash as an escape character. 
			 * For paragraphs, use ^p. (Optional)
			 * @returns {Adobe.Incopy.Text}
			 */
			public convertToText(columnSeparatorParam: string, rowSeparatorParam: string): Adobe.Incopy.Text;
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
			 * Recomposes the text in the Table.
			 * @returns {void}
			 */
			public recompose(): void;
			/**
			 * Deletes the Table.
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
			public removeEventListenerTable(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Unmerges all merged cells in the Table.
			 * @returns {any}
			 */
			public unmerge(): any;
		}
	}
}