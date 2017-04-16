/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** XMLItem */
		class XMLElement extends Adobe.Indesign.XMLItem {
			/**
			 * A collection of table cells.
			 * @type {Adobe.Indesign.Cells}
			 * @readonly
			 */
			public readonly cells: Adobe.Indesign.Cells;
			/**
			 * A collection of characters.
			 * @type {Adobe.Indesign.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Indesign.Characters;
			/**
			 * The contents of the text. Can return: String or 
			 * SpecialCharacters enumerator.
			 * @type {any}
			 */
			public contents: any;
			/**
			 * A collection of EPS files.
			 * @type {Adobe.Indesign.EPSs}
			 * @readonly
			 */
			public readonly epss: Adobe.Indesign.EPSs;
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
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 * @type {Adobe.Indesign.Graphics}
			 * @readonly
			 */
			public readonly graphics: Adobe.Indesign.Graphics;
			/**
			 * The unique ID of the XMLElement.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 * @type {Adobe.Indesign.Images}
			 * @readonly
			 */
			public readonly images: Adobe.Indesign.Images;
			/**
			 * The index of the XMLElement within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * A collection of insertion points.
			 * @type {Adobe.Indesign.InsertionPoints}
			 * @readonly
			 */
			public readonly insertionPoints: Adobe.Indesign.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A collection of lines.
			 * @type {Adobe.Indesign.Lines}
			 * @readonly
			 */
			public readonly lines: Adobe.Indesign.Lines;
			/**
			 * The XML tag applied to the element. Can also accept: String.
			 * @type {Adobe.Indesign.XMLTag}
			 */
			public markupTag: Adobe.Indesign.XMLTag;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 * @type {Adobe.Indesign.PageItems}
			 * @readonly
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/**
			 * A collection of paragraphs.
			 * @type {Adobe.Indesign.Paragraphs}
			 * @readonly
			 */
			public readonly paragraphs: Adobe.Indesign.Paragraphs;
			/**
			 * The parent of the XMLElement (a Document or XMLElement).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The story that contains the text.
			 * @type {Adobe.Indesign.Story}
			 * @readonly
			 */
			public readonly parentStory: Adobe.Indesign.Story;
			/**
			 * A collection of PDF files.
			 * @type {Adobe.Indesign.PDFs}
			 * @readonly
			 */
			public readonly pdfs: Adobe.Indesign.PDFs;
			/**
			 * A collection of PICT graphics.
			 * @type {Adobe.Indesign.PICTs}
			 * @readonly
			 */
			public readonly picts: Adobe.Indesign.PICTs;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of stories.
			 * @type {Adobe.Indesign.Stories}
			 * @readonly
			 */
			public readonly stories: Adobe.Indesign.Stories;
			/**
			 * The insertion point before the table in the story containing 
			 * the table.
			 * @type {Adobe.Indesign.InsertionPoint}
			 * @readonly
			 */
			public readonly storyOffset: Adobe.Indesign.InsertionPoint;
			/**
			 * A collection of tables.
			 * @type {Adobe.Indesign.Tables}
			 * @readonly
			 */
			public readonly tables: Adobe.Indesign.Tables;
			/**
			 * A collection of text columns.
			 * @type {Adobe.Indesign.TextColumns}
			 * @readonly
			 */
			public readonly textColumns: Adobe.Indesign.TextColumns;
			/**
			 * A collection of text objects.
			 * @type {Adobe.Indesign.Texts}
			 * @readonly
			 */
			public readonly texts: Adobe.Indesign.Texts;
			/**
			 * A collection of text style ranges.
			 * @type {Adobe.Indesign.TextStyleRanges}
			 * @readonly
			 */
			public readonly textStyleRanges: Adobe.Indesign.TextStyleRanges;
			/**
			 * A collection of WMF graphics.
			 * @type {Adobe.Indesign.WMFs}
			 * @readonly
			 */
			public readonly wmfs: Adobe.Indesign.WMFs;
			/**
			 * A collection of words.
			 * @type {Adobe.Indesign.Words}
			 * @readonly
			 */
			public readonly words: Adobe.Indesign.Words;
			/**
			 * A collection of XML attributes.
			 * @type {Adobe.Indesign.XMLAttributes}
			 * @readonly
			 */
			public readonly xmlAttributes: Adobe.Indesign.XMLAttributes;
			/**
			 * A collection of XML comments.
			 * @type {Adobe.Indesign.XMLComments}
			 * @readonly
			 */
			public readonly xmlComments: Adobe.Indesign.XMLComments;
			/**
			 * The text content or page item referred to by the element. 
			 * Can return: Text, Story, PageItem, Movie, Sound, Graphic, 
			 * Table or Cell.
			 * @type {any}
			 * @readonly
			 */
			public readonly xmlContent: any;
			/**
			 * A collection of XML elements.
			 * @type {Adobe.Indesign.XMLElements}
			 * @readonly
			 */
			public readonly xmlElements: Adobe.Indesign.XMLElements;
			/**
			 * A collection of XML instructions.
			 * @type {Adobe.Indesign.XMLInstructions}
			 * @readonly
			 */
			public readonly xmlInstructions: Adobe.Indesign.XMLInstructions;
			/**
			 * A collection of XML items.
			 * @type {Adobe.Indesign.XMLItems}
			 * @readonly
			 */
			public readonly xmlItems: Adobe.Indesign.XMLItems;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerXMLElement(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Applies a cell style to the table cells associated with the 
			 * XMLElement.
			 * @param {any} usingParam The cell style to apply. Can accept: 
			 * String or CellStyle.
			 * @param {boolean} clearingOverridesParam If true, removes 
			 * local formatting before applying the cell style. (Optional)
			 * @returns {void}
			 */
			public applyCellStyle(usingParam: any, clearingOverridesParam: boolean): void;
			/**
			 * Applies the specified character style to the text content of 
			 * the XMLElement.
			 * @param {any} usingParam The character style to apply. Can 
			 * accept: String or CharacterStyle.
			 * @returns {void}
			 */
			public applyCharacterStyle(usingParam: any): void;
			/**
			 * Applies an object style to the frame associated with the 
			 * XMLElement.
			 * @param {any} usingParam The object style to apply. Can 
			 * accept: String or ObjectStyle.
			 * @param {boolean} clearingOverridesParam If true, removes 
			 * local formatting before applying the object style. 
			 * (Optional)
			 * @param {boolean} 
			 * clearingOverridesThroughRootObjectStyleParam If true, clears 
			 * unchecked category attributes through the root style. 
			 * (Optional)
			 * @returns {void}
			 */
			public applyObjectStyle(usingParam: any, clearingOverridesParam: boolean, clearingOverridesThroughRootObjectStyleParam: boolean): void;
			/**
			 * Applies the specified paragraph style to the text content of 
			 * the XMLElement.
			 * @param {any} usingParam The paragraph style to apply. Can 
			 * accept: String or ParagraphStyle.
			 * @param {boolean} clearingOverridesParam If true, clears any 
			 * attributes before applying the style. (Optional)
			 * @returns {void}
			 */
			public applyParagraphStyle(usingParam: any, clearingOverridesParam: boolean): void;
			/**
			 * Applies a table style to the table associated with the 
			 * XMLElement.
			 * @param {any} usingParam The table style to apply. Can 
			 * accept: String or TableStyle.
			 * @param {boolean} clearingOverridesParam If true, removes 
			 * local formatting before applying the table style. (Optional)
			 * @returns {void}
			 */
			public applyTableStyle(usingParam: any, clearingOverridesParam: boolean): void;
			/**
			 * asynchronously exports the object(s) to a file.
			 * @param {any} formatParam The export format, specified as an 
			 * enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam The path to the export file.
			 * @param {boolean} showingOptionsParam If true, displays the 
			 * export options dialog. (Optional)
			 * @param {PDFExportPreset} usingParam The export style. 
			 * (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {Adobe.Indesign.BackgroundTask}
			 */
			public asynchronousExportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, versionCommentsParam: string, forceSaveParam: boolean): Adobe.Indesign.BackgroundTask;
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
			 * Converts the content of the XML element to a table.
			 * @param {XMLTag} rowTagParam The XML tag that indicates a 
			 * table row.
			 * @param {XMLTag} cellTagParam The XML tag that indicates a 
			 * table cell.
			 * @returns {Adobe.Indesign.Table}
			 */
			public convertElementToTable(rowTagParam: XMLTag, cellTagParam: XMLTag): Adobe.Indesign.Table;
			/**
			 * Converts the XMLElement to an attribute of its parent 
			 * element.
			 * @param {string} usingParam The name to give to the new 
			 * attribute. (Optional)
			 * @returns {Adobe.Indesign.XMLAttribute}
			 */
			public convertToAttribute(usingParam: string): Adobe.Indesign.XMLAttribute;
			/**
			 * Duplicates the XMLElement.
			 * @returns {Adobe.Indesign.XMLItem}
			 */
			public duplicate(): Adobe.Indesign.XMLItem;
			/**
			 * Evaluates an XPath expression starting at this XML element 
			 * in the structure.
			 * @param {string} usingParam The XPath expression.
			 * @param {any[]} prefixMappingTableParam The namespace mapping 
			 * table. Can accept: Array of Arrays of 2 Strings. (Optional)
			 * @returns {any}
			 */
			public evaluateXPathExpression(usingParam: string, prefixMappingTableParam: any[]): any;
			/**
			 * Exports the object(s) to a file.
			 * @param {any} formatParam The export format, specified as an 
			 * enumeration value or as an extension that appears in the 
			 * Save as type or Format menu in the Export dialog. Can 
			 * accept: ExportFormat enumerator or String.
			 * @param {File} toParam The path to the export file.
			 * @param {boolean} showingOptionsParam If true, displays the 
			 * export options dialog. (Optional)
			 * @param {PDFExportPreset} usingParam The export style. 
			 * (Optional)
			 * @param {string} versionCommentsParam The comment for this 
			 * version. (Optional)
			 * @param {boolean} forceSaveParam If true, forcibly saves a 
			 * version. (Optional)
			 * @returns {void}
			 */
			public exportFile(formatParam: any, toParam: File, showingOptionsParam: boolean, usingParam: PDFExportPreset, versionCommentsParam: string, forceSaveParam: boolean): void;
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
			 * Imports the specified XML file into an InDesign document.
			 * @param {File} fromParam The XML file.
			 * @returns {void}
			 */
			public importXML(fromParam: File): void;
			/**
			 * Inserts the specified text as content before, in, or after 
			 * the XML element.
			 * @param {any} usingParam The text to be inserted. Can accept: 
			 * String or SpecialCharacters enumerator.
			 * @param {XMLElementPosition} positionParam The position at 
			 * which to insert the text. Note that text inserted before or 
			 * after the element does not become part of the content of the 
			 * element. Instead, it becomes content of the parent of the 
			 * element.
			 * @returns {Adobe.Indesign.Text}
			 */
			public insertTextAsContent(usingParam: any, positionParam: XMLElementPosition): Adobe.Indesign.Text;
			/**
			 * Associates the object with the specified XML element while 
			 * preserving existing content.
			 * @param {any} usingParam The object to mark up. Can accept: 
			 * PageItem, Movie, Sound, Graphic, Story, Text or Table.
			 * @returns {void}
			 */
			public markup(usingParam: any): void;
			/**
			 * Moves the element to the specified location.
			 * @param {LocationOptions} toParam The location in relation to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. . 
			 * Can accept: XMLItem or Text. (Optional)
			 * @returns {Adobe.Indesign.XMLElement}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Indesign.XMLElement;
			/**
			 * Associates the XML element with a copy of a page item.
			 * @param {any} onParam The page or spread on which to create 
			 * the new page item. Can accept: Spread, Page or MasterSpread.
			 * @param {any[]} placePointParam The page coordinates of the 
			 * top left corner of the page item, in the format [y1, x1]
			 * @param {PageItem} copyItemParam The page item to copy.
			 * @param {boolean} retainExistingFrameParam If true, 
			 * associates the XML element with the existing page item and 
			 * moves the page item (rather than a copy of the page item). 
			 * (Optional)
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public placeIntoCopy(onParam: any, placePointParam: any[], copyItemParam: PageItem, retainExistingFrameParam: boolean): Adobe.Indesign.PageItem;
			/**
			 * Places the XML element into a new rectangular page item. If 
			 * the XML element was already associated with a page item, 
			 * that page item is deleted.
			 * @param {any} onParam The page or spread on which to create 
			 * the new page item. Can accept: Spread, Page or MasterSpread.
			 * @param {any[]} geometricBoundsParam The bounds of the page 
			 * item excluding the stroke width, in the format [y1, x1, y2, 
			 * x2].
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public placeIntoFrame(onParam: any, geometricBoundsParam: any[]): Adobe.Indesign.PageItem;
			/**
			 * Associates an existing page item with the XML element and 
			 * places it into an inline frame.
			 * @param {PageItem} copyItemParam The page item to copy.
			 * @param {boolean} retainExistingFrameParam If true, moves the 
			 * existing page item. If false, moves a copy of the page item. 
			 * (Optional)
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public placeIntoInlineCopy(copyItemParam: PageItem, retainExistingFrameParam: boolean): Adobe.Indesign.PageItem;
			/**
			 * Places an XML element into an inline frame.
			 * @param {any[]} dimensionsParam The dimensions of the inline 
			 * frame in the format [width, height].
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public placeIntoInlineFrame(dimensionsParam: any[]): Adobe.Indesign.PageItem;
			/**
			 * Places XML content into the story, replacing the existing 
			 * content.
			 * @param {any} usingParam The object to place into. Can 
			 * accept: Story, PageItem, Graphic, Movie or Sound.
			 * @returns {void}
			 */
			public placeXML(usingParam: any): void;
			/**
			 * Deletes the XMLElement.
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
			public removeEventListenerXMLElement(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the XMLElement in relation to previously 
			 * selected objects. (Optional)
			 * @returns {void}
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/**
			 * Replaces the content of XML element with content imported 
			 * from a file.
			 * @param {string} usingParam The file path to the import file.
			 * @param {string} relativeBasePathParam Base path used to 
			 * resolve relative paths. (Optional)
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public setContent(usingParam: string, relativeBasePathParam: string): Adobe.Indesign.PageItem;
			/**
			 * Stores the object in the specified library.
			 * @param {Library} usingParam The library in which to store 
			 * the object.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new XMLElement (Optional)
			 * @returns {Adobe.Indesign.Asset}
			 */
			public store(usingParam: Library, withPropertiesParam: any): Adobe.Indesign.Asset;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
			/**
			 * Untags an element.
			 * @returns {void}
			 */
			public untag(): void;
			/**
			 * Validates the element against a DTD.
			 * @param {number} maximumErrorsParam The maximum number of 
			 * validation errors to generate. (Optional)
			 * @returns {any}
			 */
			public validate(maximumErrorsParam: number): any;
		}
	}
}