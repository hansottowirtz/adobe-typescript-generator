/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Table extends Adobe.Csawlib.CSHostObject {
			/** Lists all graphics contained by the Table. */
			public readonly allGraphics: any;
			/** Lists all page items contained by the Table. */
			public readonly allPageItems: any;
			/** The pattern for alternating fills. */
			public alternatingFills: Adobe.Incopy.AlternatingFillsTypes;
			/**
			 * The table style applied to the table. Can also accept: 
			 * String.
			 */
			public appliedTableStyle: Adobe.Incopy.TableStyle;
			/** The XML element associated with the Table. */
			public readonly associatedXMLElement: Adobe.Incopy.XMLItem;
			/** The number of body rows. */
			public bodyRowCount: number;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the bottom border stroke.
			 */
			public bottomBorderStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the bottom border stroke. Note: Valid only 
			 * when bottom border stroke type is not solid.
			 */
			public bottomBorderStrokeGapColor: Adobe.Incopy.Swatch;
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
			public bottomBorderStrokeType: Adobe.Incopy.StrokeStyle;
			/** The stroke weight of the bottom border stroke. */
			public bottomBorderStrokeWeight: any;
			/** The footer placement. */
			public breakFooters: Adobe.Incopy.HeaderFooterBreakTypes;
			/** The header placement. */
			public breakHeaders: Adobe.Incopy.HeaderFooterBreakTypes;
			/** A collection of buttons. */
			public readonly buttons: Adobe.Incopy.Buttons;
			/** A collection of table cells. */
			public readonly cells: Adobe.Incopy.Cells;
			/** A collection of changes. */
			public readonly changes: Adobe.Incopy.Changes;
			/** The number of columns. */
			public columnCount: number;
			/**
			 * If true, hides alternating row fills. If false, hides 
			 * alternating column fills.
			 */
			public columnFillsPriority: boolean;
			/** A collection of table columns. */
			public readonly columns: Adobe.Incopy.Columns;
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
			 */
			public contents: any;
			/**
			 * If true, then the table will show collapsed in story and 
			 * galley views.
			 */
			public displayCollapsed: boolean;
			/**
			 * Specifies the order the table cells will display in when 
			 * viewing in story and galley views.
			 */
			public displayOrder: Adobe.Incopy.DisplayOrderOptions;
			/**
			 * The fill color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of columns in the second alternating 
			 * fill group. Note: Valid when alternating fills are defined 
			 * for table columns.
			 */
			public endColumnFillColor: Adobe.Incopy.Swatch;
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
			public endColumnLineStyle: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of column borders in the second 
			 * alternating column strokes group. Note: Valid when end 
			 * column stroke count is 1 or greater.
			 */
			public endColumnStrokeColor: Adobe.Incopy.Swatch;
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
			public endColumnStrokeGapColor: Adobe.Incopy.Swatch;
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
			public endRowFillColor: Adobe.Incopy.Swatch;
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
			public endRowStrokeColor: Adobe.Incopy.Swatch;
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
			public endRowStrokeGapColor: Adobe.Incopy.Swatch;
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
			public endRowStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of row borders in the second alternating 
			 * row strokes group. Note: Valid when end row stroke count is 
			 * 1 or greater.
			 */
			public endRowStrokeWeight: any;
			/** EPSTexts */
			public readonly epstexts: Adobe.Incopy.EPSTexts;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The number of footer rows. */
			public footerRowCount: number;
			/** A collection of form fields. */
			public readonly formFields: Adobe.Incopy.FormFields;
			/** A collection of graphic lines. */
			public readonly graphicLines: Adobe.Incopy.GraphicLines;
			/** A collection of groups. */
			public readonly groups: Adobe.Incopy.Groups;
			/** The number of header rows. */
			public headerRowCount: number;
			/**
			 * The height of the Table. For a table or column, specifies 
			 * the sum of the row heights.
			 */
			public height: any;
			/** A collection of hidden text objects. */
			public readonly hiddenTexts: Adobe.Incopy.HiddenTexts;
			/** The unique ID of the Table. */
			public readonly id: number;
			/** The index of the Table within its containing object. */
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
			public leftBorderStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the left border stroke. Note: Valid only 
			 * when left border stroke type is not solid.
			 */
			public leftBorderStrokeGapColor: Adobe.Incopy.Swatch;
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
			public leftBorderStrokeType: Adobe.Incopy.StrokeStyle;
			/** The stroke weight of the left border stroke. */
			public leftBorderStrokeWeight: any;
			/** A collection of multi-state objects. */
			public readonly multiStateObjects: Adobe.Incopy.MultiStateObjects;
			/**
			 * The name of the Table; this is an alias to the Table's label 
			 * property.
			 */
			public name: string;
			/** A collection of notes. */
			public readonly notes: Adobe.Incopy.Notes;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Incopy.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/**
			 * The parent of the Table (a XMLElement, XmlStory, TextFrame, 
			 * Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, 
			 * Line, Word, Character, Story or Cell).
			 */
			public readonly parent: any;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Incopy.Polygons;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Incopy.Rectangles;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the right border stroke.
			 */
			public rightBorderStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the right border stroke. Note: Valid only 
			 * when right border stroke type is not solid.
			 */
			public rightBorderStrokeGapColor: Adobe.Incopy.Swatch;
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
			public rightBorderStrokeType: Adobe.Incopy.StrokeStyle;
			/** The stroke weight of the right border stroke. */
			public rightBorderStrokeWeight: any;
			/** A collection of table rows. */
			public readonly rows: Adobe.Incopy.Rows;
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
			/** If true, skips the first occurrence of header rows. */
			public skipFirstHeader: boolean;
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
			/** If true, skips the last occurrence of footer rows. */
			public skipLastFooter: boolean;
			/** The space below the table. */
			public spaceAfter: any;
			/** The space above the table. */
			public spaceBefore: any;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/**
			 * The fill color, specified as a swatch (color, gradient, 
			 * tint, or mixed ink), of columns in the first alternating 
			 * fills group. Note: Valid when alternating fills are defined 
			 * for table columns.
			 */
			public startColumnFillColor: Adobe.Incopy.Swatch;
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
			public startColumnStrokeColor: Adobe.Incopy.Swatch;
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
			public startColumnStrokeGapColor: Adobe.Incopy.Swatch;
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
			public startColumnStrokeType: Adobe.Incopy.StrokeStyle;
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
			public startRowFillColor: Adobe.Incopy.Swatch;
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
			public startRowStrokeColor: Adobe.Incopy.Swatch;
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
			public startRowStrokeGapColor: Adobe.Incopy.Swatch;
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
			public startRowStrokeType: Adobe.Incopy.StrokeStyle;
			/**
			 * The stroke weight of row borders in the first alternating 
			 * row strokes group. Note: Valid when start row stroke count 
			 * is 1 or greater.
			 */
			public startRowStrokeWeight: any;
			/**
			 * The insertion point before the table in the story containing 
			 * the table.
			 */
			public readonly storyOffset: Adobe.Incopy.InsertionPoint;
			/**
			 * The order in which to display row and column strokes at 
			 * corners.
			 */
			public strokeOrder: Adobe.Incopy.StrokeOrderTypes;
			/** The direction of the the table */
			public tableDirection: Adobe.Incopy.TableDirectionOptions;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/** A collection of text variable instances. */
			public readonly textVariableInstances: Adobe.Incopy.TextVariableInstances;
			/**
			 * The color, specified as a swatch (color, gradient, tint, or 
			 * mixed ink), of the table's top border stroke.
			 */
			public topBorderStrokeColor: Adobe.Incopy.Swatch;
			/**
			 * The gap color, specified as a swatch (color, gradient, tint, 
			 * or mixed ink), of the table's top border stroke. Note: Valid 
			 * only when top border stroke type is not solid.
			 */
			public topBorderStrokeGapColor: Adobe.Incopy.Swatch;
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
			public topBorderStrokeType: Adobe.Incopy.StrokeStyle;
			/** The stroke weight of the table's top border stroke. */
			public topBorderStrokeWeight: any;
			/**
			 * The width of the Table. For a table or row, specifies the 
			 * sum of the column widths.
			 */
			public width: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTable(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Tag the object or the parent story using default tags 
			 * defined in XML preference.
			 */
			public autoTag(): void;
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
			/** Clear Table Style Overrides */
			public clearTableStyleOverrides(): void;
			/** Convert bullets and numbering to text. */
			public convertBulletsAndNumberingToText(): void;
			/**
			 * Converts the table to text.
			 * @param {string} columnSeparatorParam - The character to 
			 * insert between the each column's content in the converted 
			 * text. Note: Can be defined as any single character, such as 
			 * a letter, number, or punctuation mark, or by typing a space 
			 * or tab. Use the actual character rather than its name, such 
			 * as ',' rather than 'Comma'. Precede double or single quotes 
			 * or a backslash with an extra backslash as an escape 
			 * character. For paragraphs, use ^p. (Optional)
			 * @param {string} rowSeparatorParam - The character to use to 
			 * separate each row's content in the converted text. Note: Can 
			 * be defined as any single character, such as a letter, 
			 * number, or punctuation mark, or by typing a space or tab. 
			 * Use the actual character rather than its name, such as , 
			 * rather than Comma. Precede double or single quotes or a 
			 * backslash with an extra backslash as an escape character. 
			 * For paragraphs, use ^p. (Optional)
			 */
			public convertToText(columnSeparatorParam: string, rowSeparatorParam: string): Adobe.Incopy.Text;
			/**
			 * Converts text to outlines. Each line of text becomes a 
			 * polygon object.
			 */
			public createOutlines(): any;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam - The key.
			 */
			public extractLabel(keyParam: string): string;
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
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam - The key.
			 * @param {string} valueParam - The value.
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/** Recomposes the text in the Table. */
			public recompose(): void;
			/** Deletes the Table. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTable(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/** Unmerges all merged cells in the Table. */
			public unmerge(): any;
		}
	}
}