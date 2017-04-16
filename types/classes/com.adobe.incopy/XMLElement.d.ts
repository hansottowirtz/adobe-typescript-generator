/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** XMLItem */
		class XMLElement extends Adobe.Incopy.XMLItem {
			/** A collection of table cells. */
			public readonly cells: Adobe.Incopy.Cells;
			/** A collection of characters. */
			public readonly characters: Adobe.Incopy.Characters;
			/**
			 * The contents of the text. Can return: String or 
			 * SpecialCharacters enumerator.
			 */
			public contents: any;
			/** A collection of EPS files. */
			public readonly epss: Adobe.Incopy.EPSs;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * A collection of imported graphics in any graphic file format 
			 * (vector, metafile, or bitmap).
			 */
			public readonly graphics: Adobe.Incopy.Graphics;
			/** The unique ID of the XMLElement. */
			public readonly id: number;
			/**
			 * A collection of bitmap images in any bitmap file format 
			 * (including TIFF, JPEG, or GIF).
			 */
			public readonly images: Adobe.Incopy.Images;
			/** The index of the XMLElement within its containing object. */
			public readonly index: number;
			/** A collection of insertion points. */
			public readonly insertionPoints: Adobe.Incopy.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A collection of lines. */
			public readonly lines: Adobe.Incopy.Lines;
			/**
			 * The XML tag applied to the element. Can also accept: String.
			 */
			public markupTag: Adobe.Incopy.XMLTag;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/** A collection of paragraphs. */
			public readonly paragraphs: Adobe.Incopy.Paragraphs;
			/** The parent of the XMLElement (a Document or XMLElement). */
			public readonly parent: any;
			/** The story that contains the text. */
			public readonly parentStory: Adobe.Incopy.Story;
			/** A collection of PDF files. */
			public readonly pdfs: Adobe.Incopy.PDFs;
			/** A collection of PICT graphics. */
			public readonly picts: Adobe.Incopy.PICTs;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of stories. */
			public readonly stories: Adobe.Incopy.Stories;
			/**
			 * The insertion point before the table in the story containing 
			 * the table.
			 */
			public readonly storyOffset: Adobe.Incopy.InsertionPoint;
			/** A collection of tables. */
			public readonly tables: Adobe.Incopy.Tables;
			/** A collection of text columns. */
			public readonly textColumns: Adobe.Incopy.TextColumns;
			/** A collection of text objects. */
			public readonly texts: Adobe.Incopy.Texts;
			/** A collection of text style ranges. */
			public readonly textStyleRanges: Adobe.Incopy.TextStyleRanges;
			/** A collection of WMF graphics. */
			public readonly wmfs: Adobe.Incopy.WMFs;
			/** A collection of words. */
			public readonly words: Adobe.Incopy.Words;
			/** A collection of XML attributes. */
			public readonly xmlAttributes: Adobe.Incopy.XMLAttributes;
			/** A collection of XML comments. */
			public readonly xmlComments: Adobe.Incopy.XMLComments;
			/**
			 * The text content or page item referred to by the element. 
			 * Can return: Text, Story, PageItem, Movie, Sound, Graphic, 
			 * Table or Cell.
			 */
			public readonly xmlContent: any;
			/** A collection of XML elements. */
			public readonly xmlElements: Adobe.Incopy.XMLElements;
			/** A collection of XML instructions. */
			public readonly xmlInstructions: Adobe.Incopy.XMLInstructions;
			/** A collection of XML items. */
			public readonly xmlItems: Adobe.Incopy.XMLItems;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerXMLElement(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Applies a cell style to the table cells associated with the 
			 * XMLElement.
			 * @param {any} usingParam The cell style to apply. Can accept: 
			 * String or CellStyle.
			 * @param {boolean} clearingOverridesParam If true, removes 
			 * local formatting before applying the cell style. (Optional)
			 */
			public applyCellStyle(usingParam: any, clearingOverridesParam: boolean): void;
			/**
			 * Applies the specified character style to the text content of 
			 * the XMLElement.
			 * @param {any} usingParam The character style to apply. Can 
			 * accept: String or CharacterStyle.
			 */
			public applyCharacterStyle(usingParam: any): void;
			/**
			 * Applies the specified paragraph style to the text content of 
			 * the XMLElement.
			 * @param {any} usingParam The paragraph style to apply. Can 
			 * accept: String or ParagraphStyle.
			 * @param {boolean} clearingOverridesParam If true, clears any 
			 * attributes before applying the style. (Optional)
			 */
			public applyParagraphStyle(usingParam: any, clearingOverridesParam: boolean): void;
			/**
			 * Applies a table style to the table associated with the 
			 * XMLElement.
			 * @param {any} usingParam The table style to apply. Can 
			 * accept: String or TableStyle.
			 * @param {boolean} clearingOverridesParam If true, removes 
			 * local formatting before applying the table style. (Optional)
			 */
			public applyTableStyle(usingParam: any, clearingOverridesParam: boolean): void;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value and replaces the 
			 * text with the change to value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value and 
			 * replaces the text with the change character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public changeTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Converts the content of the XML element to a table.
			 * @param {XMLTag} rowTagParam The XML tag that indicates a 
			 * table row.
			 * @param {XMLTag} cellTagParam The XML tag that indicates a 
			 * table cell.
			 */
			public convertElementToTable(rowTagParam: XMLTag, cellTagParam: XMLTag): Adobe.Incopy.Table;
			/**
			 * Converts the XMLElement to an attribute of its parent 
			 * element.
			 * @param {string} usingParam The name to give to the new 
			 * attribute. (Optional)
			 */
			public convertToAttribute(usingParam: string): Adobe.Incopy.XMLAttribute;
			/** Duplicates the XMLElement. */
			public duplicate(): Adobe.Incopy.XMLItem;
			/**
			 * Evaluates an XPath expression starting at this XML element 
			 * in the structure.
			 * @param {string} usingParam The XPath expression.
			 * @param {any[]} prefixMappingTableParam The namespace mapping 
			 * table. Can accept: Array of Arrays of 2 Strings. (Optional)
			 */
			public evaluateXPathExpression(usingParam: string, prefixMappingTableParam: any[]): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findGrep(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find what value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findText(reverseOrderParam: boolean): any;
			/**
			 * Finds text that matches the find character type value.
			 * @param {boolean} reverseOrderParam If true, returns the 
			 * results in reverse order. (Optional)
			 */
			public findTransliterate(reverseOrderParam: boolean): any;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Imports the specified XML file into an InDesign document.
			 * @param {File} fromParam The XML file.
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
			 */
			public insertTextAsContent(usingParam: any, positionParam: XMLElementPosition): Adobe.Incopy.Text;
			/**
			 * Associates the specified text with an XML element while 
			 * preserving exisxting content.
			 * @param {Text} usingParam The text to mark up.
			 */
			public markup(usingParam: Text): void;
			/**
			 * Moves the element to the specified location.
			 * @param {LocationOptions} toParam The location in relation to 
			 * the reference object or within the containing object.
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the to parameter specifies before or after. . 
			 * Can accept: XMLItem or Text. (Optional)
			 */
			public move(toParam: LocationOptions, referenceParam: any): Adobe.Incopy.XMLElement;
			/**
			 * Associates an existing page item with the XML element and 
			 * places it into an inline frame.
			 * @param {PageItem} copyItemParam The page item to copy.
			 * @param {boolean} retainExistingFrameParam If true, moves the 
			 * existing page item. If false, moves a copy of the page item. 
			 * (Optional)
			 */
			public placeIntoInlineCopy(copyItemParam: PageItem, retainExistingFrameParam: boolean): Adobe.Incopy.PageItem;
			/**
			 * Places an XML element into an inline frame.
			 * @param {any[]} dimensionsParam The dimensions of the inline 
			 * frame in the format [width, height].
			 */
			public placeIntoInlineFrame(dimensionsParam: any[]): Adobe.Incopy.PageItem;
			/**
			 * Places XML content into a story, replacing the existing 
			 * content.
			 * @param {Story} usingParam The story to associate with the 
			 * XML element.
			 */
			public placeXML(usingParam: Story): void;
			/** Deletes the XMLElement. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerXMLElement(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Selects the object.
			 * @param {SelectionOptions} existingSelectionParam The 
			 * selection status of the XMLElement in relation to previously 
			 * selected objects. (Optional)
			 */
			public select(existingSelectionParam: SelectionOptions): void;
			/**
			 * Replaces the content of XML element with content imported 
			 * from a file.
			 * @param {string} usingParam The file path to the import file.
			 * @param {string} relativeBasePathParam Base path used to 
			 * resolve relative paths. (Optional)
			 */
			public setContent(usingParam: string, relativeBasePathParam: string): Adobe.Incopy.PageItem;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/** Untags an element. */
			public untag(): void;
			/**
			 * Validates the element against a DTD.
			 * @param {number} maximumErrorsParam The maximum number of 
			 * validation errors to generate. (Optional)
			 */
			public validate(maximumErrorsParam: number): any;
		}
	}
}