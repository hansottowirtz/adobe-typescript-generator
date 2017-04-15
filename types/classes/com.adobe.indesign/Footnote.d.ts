/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Footnote extends Adobe.Csawlib.CSHostObject {
			/** Lists all graphics contained by the Footnote. */
			public readonly allGraphics: any;
			/** Lists all page items contained by the Footnote. */
			public readonly allPageItems: any;
			/** A collection of characters. */
			public readonly characters: Adobe.Indesign.Characters;
			/**
			 * The text contents of the footnote. Can return: String, 
			 * SpecialCharacters enumerator or Array of Strings or 
			 * SpecialCharacters enumerators. Can also accept: NothingEnum 
			 * enumerator or Array of Strings, SpecialCharacters 
			 * enumerators or NothingEnum enumerators.
			 */
			public contents: any;
			/** EPSTexts */
			public readonly epstexts: Adobe.Indesign.EPSTexts;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** A collection of graphic lines. */
			public readonly graphicLines: Adobe.Indesign.GraphicLines;
			/** A collection of groups. */
			public readonly groups: Adobe.Indesign.Groups;
			/** A collection of hidden text objects. */
			public readonly hiddenTexts: Adobe.Indesign.HiddenTexts;
			/** The unique ID of the Footnote. */
			public readonly id: number;
			/** The index of the Footnote within its containing object. */
			public readonly index: number;
			/** A collection of insertion points. */
			public readonly insertionPoints: Adobe.Indesign.InsertionPoints;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** A property that can be set to any string. */
			public label: string;
			/** A collection of lines. */
			public readonly lines: Adobe.Indesign.Lines;
			/**
			 * The name of the Footnote; this is an alias to the Footnote's 
			 * label property.
			 */
			public name: string;
			/** A collection of ellipses. */
			public readonly ovals: Adobe.Indesign.Ovals;
			/**
			 * The page items collection, which can be used to process all 
			 * page items in a container (such as a document, page, or 
			 * group), regardless of type.
			 */
			public readonly pageItems: Adobe.Indesign.PageItems;
			/** A collection of paragraphs. */
			public readonly paragraphs: Adobe.Indesign.Paragraphs;
			/**
			 * The parent of the Footnote (a XmlStory, Story, TextFrame or 
			 * InsertionPoint).
			 */
			public readonly parent: any;
			/** A collection of polygons. */
			public readonly polygons: Adobe.Indesign.Polygons;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** A collection of rectangles. */
			public readonly rectangles: Adobe.Indesign.Rectangles;
			/** The spline items collection. */
			public readonly splineItems: Adobe.Indesign.SplineItems;
			/** The location of the footnote marker in the parent story. */
			public readonly storyOffset: Adobe.Indesign.InsertionPoint;
			/** A collection of text columns. */
			public readonly textColumns: Adobe.Indesign.TextColumns;
			/** A collection of text frames. */
			public readonly textFrames: Adobe.Indesign.TextFrames;
			/** A collection of text objects. */
			public readonly texts: Adobe.Indesign.Texts;
			/** A collection of text style ranges. */
			public readonly textStyleRanges: Adobe.Indesign.TextStyleRanges;
			/** A collection of text variable instances. */
			public readonly textVariableInstances: Adobe.Indesign.TextVariableInstances;
			/** A collection of words. */
			public readonly words: Adobe.Indesign.Words;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerFootnote(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Converts the footnote to part of the story text and places 
			 * the converted text at the former location of the footnote 
			 * marker in the text.
			 */
			public convertToText(): Adobe.Indesign.Text;
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