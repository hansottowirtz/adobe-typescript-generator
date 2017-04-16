/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** XMLItem */
		class XMLElement extends Adobe.Incopy.XMLItem {
			/**
			 * A collection of table cells.
			 * @type {Adobe.Incopy.Cells}
			 * @readonly
			 */
			public readonly cells: Adobe.Incopy.Cells;
			/**
			 * A collection of characters.
			 * @type {Adobe.Incopy.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Incopy.Characters;
			/**
			 * The contents of the text. Can return: String or 
			 * SpecialCharacters enumerator.
			 * @type {any}
			 */
			public contents: any;
			/**
			 * A collection of EPS files.
			 * @type {Adobe.Incopy.EPSs}
			 * @readonly
			 */
			public readonly epss: Adobe.Incopy.EPSs;
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
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 * @type {Adobe.Incopy.Graphics}
			 * @readonly
			 */
			public readonly graphics: Adobe.Incopy.Graphics;
			/**
			 * The unique ID of the XMLElement.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 * @type {Adobe.Incopy.Images}
			 * @readonly
			 */
			public readonly images: Adobe.Incopy.Images;
			/**
			 * The index of the XMLElement within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
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
			 * A collection of lines.
			 * @type {Adobe.Incopy.Lines}
			 * @readonly
			 */
			public readonly lines: Adobe.Incopy.Lines;
			/**
			 * The XML tag applied to the element. Can also accept: String.
			 * @type {Adobe.Incopy.XMLTag}
			 */
			public markupTag: Adobe.Incopy.XMLTag;
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
			 * The parent of the XMLElement (a Document or XMLElement).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The story that contains the text.
			 * @type {Adobe.Incopy.Story}
			 * @readonly
			 */
			public readonly parentStory: Adobe.Incopy.Story;
			/**
			 * A collection of PDF files.
			 * @type {Adobe.Incopy.PDFs}
			 * @readonly
			 */
			public readonly pdfs: Adobe.Incopy.PDFs;
			/**
			 * A collection of PICT graphics.
			 * @type {Adobe.Incopy.PICTs}
			 * @readonly
			 */
			public readonly picts: Adobe.Incopy.PICTs;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * A collection of stories.
			 * @type {Adobe.Incopy.Stories}
			 * @readonly
			 */
			public readonly stories: Adobe.Incopy.Stories;
			/**
			 * The insertion point before the table in the story containing 
			 * the table.
			 * @type {Adobe.Incopy.InsertionPoint}
			 * @readonly
			 */
			public readonly storyOffset: Adobe.Incopy.InsertionPoint;
			/**
			 * A collection of tables.
			 * @type {Adobe.Incopy.Tables}
			 * @readonly
			 */
			public readonly tables: Adobe.Incopy.Tables;
			/**
			 * A collection of text columns.
			 * @type {Adobe.Incopy.TextColumns}
			 * @readonly
			 */
			public readonly textColumns: Adobe.Incopy.TextColumns;
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
			 * A collection of WMF graphics.
			 * @type {Adobe.Incopy.WMFs}
			 * @readonly
			 */
			public readonly wmfs: Adobe.Incopy.WMFs;
			/**
			 * A collection of words.
			 * @type {Adobe.Incopy.Words}
			 * @readonly
			 */
			public readonly words: Adobe.Incopy.Words;
			/**
			 * A collection of XML attributes.
			 * @type {Adobe.Incopy.XMLAttributes}
			 * @readonly
			 */
			public readonly xmlAttributes: Adobe.Incopy.XMLAttributes;
			/**
			 * A collection of XML comments.
			 * @type {Adobe.Incopy.XMLComments}
			 * @readonly
			 */
			public readonly xmlComments: Adobe.Incopy.XMLComments;
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
			 * @type {Adobe.Incopy.XMLElements}
			 * @readonly
			 */
			public readonly xmlElements: Adobe.Incopy.XMLElements;
			/**
			 * A collection of XML instructions.
			 * @type {Adobe.Incopy.XMLInstructions}
			 * @readonly
			 */
			public readonly xmlInstructions: Adobe.Incopy.XMLInstructions;
			/**
			 * A collection of XML items.
			 * @type {Adobe.Incopy.XMLItems}
			 * @readonly
			 */
			public readonly xmlItems: Adobe.Incopy.XMLItems;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerXMLElement(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			 * @returns {Adobe.Incopy.Table}
			 */
			public convertElementToTable(rowTagParam: XMLTag, cellTagParam: XMLTag): Adobe.Incopy.Table;
			/**
			 * Converts the XMLElement to an attribute of its parent 
			 * element.
			 * @param {string} usingParam The name to give to the new 
			 * attribute. (Optional)
			 * @returns {Adobe.Incopy.XMLAttribute}
			 */
			public convertToAttribute(usingParam: string): Adobe.Incopy.XMLAttribute;
			/**
			 * Duplicates the XMLElement.
			 * @returns {Adobe.Incopy.XMLItem}
			 */
			public duplicate(): Adobe.Incopy.XMLItem;
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
			 * @returns {Adobe.Incopy.Text}
			 */
			public insertTextAsContent(usingParam: any, positionParam: XMLElementPosition): Adobe.Incopy.Text;
			/**
			 * Associates the specified text with an XML element while 
			 * preserving exisxting content.
			 * @param {Text} usingParam The text to mark up.
			 * @returns {void}
			 */
			public markup(usingParam: Text): void;
			/**
			 * Moves the element to the specified location.
			 * @param {LocationOptions} toParam The location in relation to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. . 
			 * Can accept: XMLItem or Text. (Optional)
			 * @returns {Adobe.Incopy.XMLElement}
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Incopy.XMLElement;
			/**
			 * Associates an existing page item with the XML element and 
			 * places it into an inline frame.
			 * @param {PageItem} copyItemParam The page item to copy.
			 * @param {boolean} retainExistingFrameParam If true, moves the 
			 * existing page item. If false, moves a copy of the page item. 
			 * (Optional)
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public placeIntoInlineCopy(copyItemParam: PageItem, retainExistingFrameParam: boolean): Adobe.Incopy.PageItem;
			/**
			 * Places an XML element into an inline frame.
			 * @param {any[]} dimensionsParam The dimensions of the inline 
			 * frame in the format [width, height].
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public placeIntoInlineFrame(dimensionsParam: any[]): Adobe.Incopy.PageItem;
			/**
			 * Places XML content into a story, replacing the existing 
			 * content.
			 * @param {Story} usingParam The story to associate with the 
			 * XML element.
			 * @returns {void}
			 */
			public placeXML(usingParam: Story): void;
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
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public setContent(usingParam: string, relativeBasePathParam: string): Adobe.Incopy.PageItem;
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