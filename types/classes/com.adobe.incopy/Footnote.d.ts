/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Footnote extends Adobe.Csawlib.CSHostObject {
			/**
			 * Lists all graphics contained by the Footnote.
			 * @type {any}
			 * @readonly
			 */
			public readonly allGraphics: any;
			/**
			 * Lists all page items contained by the Footnote.
			 * @type {any}
			 * @readonly
			 */
			public readonly allPageItems: any;
			/**
			 * A collection of characters.
			 * @type {Adobe.Incopy.Characters}
			 * @readonly
			 */
			public readonly characters: Adobe.Incopy.Characters;
			/**
			 * The text contents of the footnote. Can return: String, 
			 * SpecialCharacters enumerator or Array of Strings or 
			 * SpecialCharacters enumerators. Can also accept: NothingEnum 
			 * enumerator or Array of Strings, SpecialCharacters 
			 * enumerators or NothingEnum enumerators.
			 * @type {any}
			 */
			public contents: any;
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
			 * A collection of hidden text objects.
			 * @type {Adobe.Incopy.HiddenTexts}
			 * @readonly
			 */
			public readonly hiddenTexts: Adobe.Incopy.HiddenTexts;
			/**
			 * The unique ID of the Footnote.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Footnote within its containing object.
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
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * A collection of lines.
			 * @type {Adobe.Incopy.Lines}
			 * @readonly
			 */
			public readonly lines: Adobe.Incopy.Lines;
			/**
			 * The name of the Footnote; this is an alias to the Footnote's 
			 * label property.
			 * @type {string}
			 */
			public name: string;
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
			 * A collection of paragraphs.
			 * @type {Adobe.Incopy.Paragraphs}
			 * @readonly
			 */
			public readonly paragraphs: Adobe.Incopy.Paragraphs;
			/**
			 * The parent of the Footnote (a XmlStory, Story, TextFrame or 
			 * InsertionPoint).
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
			 * A collection of rectangles.
			 * @type {Adobe.Incopy.Rectangles}
			 * @readonly
			 */
			public readonly rectangles: Adobe.Incopy.Rectangles;
			/**
			 * The spline items collection.
			 * @type {Adobe.Incopy.SplineItems}
			 * @readonly
			 */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/**
			 * The location of the footnote marker in the parent story.
			 * @type {Adobe.Incopy.InsertionPoint}
			 * @readonly
			 */
			public readonly storyOffset: Adobe.Incopy.InsertionPoint;
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
			 * A collection of words.
			 * @type {Adobe.Incopy.Words}
			 * @readonly
			 */
			public readonly words: Adobe.Incopy.Words;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerFootnote(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Converts the footnote to part of the story text and places 
			 * the converted text at the former location of the footnote 
			 * marker in the text.
			 * @returns {Adobe.Incopy.Text}
			 */
			public convertToText(): Adobe.Incopy.Text;
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
			 * Deletes the Footnote.
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
			public removeEventListenerFootnote(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}