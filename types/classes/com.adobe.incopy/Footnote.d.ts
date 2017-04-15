/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Footnote extends Adobe.Csawlib.CSHostObject {
			/** Lists all graphics contained by the Footnote. */
			public readonly allGraphics: any;
			/** Lists all page items contained by the Footnote. */
			public readonly allPageItems: any;
			/** A collection of characters. */
			public readonly characters: Adobe.Incopy.Characters;
			/**
			 * The text contents of the footnote. Can return: String, 
			 * SpecialCharacters enumerator or Array of Strings or 
			 * SpecialCharacters enumerators. Can also accept: NothingEnum 
			 * enumerator or Array of Strings, SpecialCharacters 
			 * enumerators or NothingEnum enumerators.
			 */
			public contents: any;
			/** EPSTexts */
			public readonly epstexts: Adobe.Incopy.EPSTexts;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** A collection of graphic lines. */
			public readonly graphicLines: Adobe.Incopy.GraphicLines;
			/** A collection of groups. */
			public readonly groups: Adobe.Incopy.Groups;
			/** A collection of hidden text objects. */
			public readonly hiddenTexts: Adobe.Incopy.HiddenTexts;
			/** The unique ID of the Footnote. */
			public readonly id: number;
			/** The index of the Footnote within its containing object. */
			public readonly index: number;
			/** A collection of insertion points. */
			public readonly insertionPoints: Adobe.Incopy.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** A collection of lines. */
			public readonly lines: Adobe.Incopy.Lines;
			/**
			 * The name of the Footnote; this is an alias to the Footnote's 
			 * label property.
			 */
			public name: string;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Incopy.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Incopy.PageItems;
			/** A collection of paragraphs. */
			public readonly paragraphs: Adobe.Incopy.Paragraphs;
			/**
			 * The parent of the Footnote (a XmlStory, Story, TextFrame or 
			 * InsertionPoint).
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
			/** The spline items collection. */
			public readonly splineItems: Adobe.Incopy.SplineItems;
			/** The location of the footnote marker in the parent story. */
			public readonly storyOffset: Adobe.Incopy.InsertionPoint;
			/** A collection of text columns. */
			public readonly textColumns: Adobe.Incopy.TextColumns;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Incopy.TextFrames;
			/** A collection of text objects. */
			public readonly texts: Adobe.Incopy.Texts;
			/** A collection of text style ranges. */
			public readonly textStyleRanges: Adobe.Incopy.TextStyleRanges;
			/** A collection of text variable instances. */
			public readonly textVariableInstances: Adobe.Incopy.TextVariableInstances;
			/** A collection of words. */
			public readonly words: Adobe.Incopy.Words;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFootnote(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Converts the footnote to part of the story text and places 
			 * the converted text at the former location of the footnote 
			 * marker in the text.
			 */
			public convertToText(): Adobe.Incopy.Text;
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
			/** Deletes the Footnote. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerFootnote(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}